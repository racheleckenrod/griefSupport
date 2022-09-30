const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
// const createAdapter = require("@socket.io/redis-adapter").createAdapter;
// const redis = require("redis");
// require("dotenv").config();
// const { createClient } = redis;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

// small change to server.js
// will this version push right to heroku?
// it did not push right to heroku, but is an attached repo, git hub
// even though this is named heroku it is in the github repo not herokus repo

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static("public"));

const botName = "Grief Support Bot";

// (async () => {
//   pubClient = createClient({ url: "redis://127.0.0.1:6379" });
//   await pubClient.connect();
//   subClient = pubClient.duplicate();
//   io.adapter(createAdapter(pubClient, subClient));
// })();

// // Run when client connects
io.on("connection", (socket) => {
  // console.log('New WS Connection');
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

//     // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to Live Grief Support!"));

//     // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",  formatMessage(botName,`${user.username} has joined the chat`)
//         formatMessage(botName, `${user.username} has joined the chat`)
      );

//     // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

//   // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
       
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

//   // Runs when client disconnects
  socket.on("disconnect", () => {
    // io.emit("message",  formatMessage(botName,'a user has left the chat'))
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

//       // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

// app.get("/", (req,res) => {
//   console.log("hope")
//   res.sendFile('index.html')
// })

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
