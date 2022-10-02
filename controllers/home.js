// const Post = require("../models/Post");
// const Comment = require("../models/Comment")
const Feedback = require("../models/Feedback");
const Guest = require("../models/Guest");
const User = require("../models/User")

module.exports = {
    getIndex: async (req, res) => {
      try {
        const posts = await Post.find().populate('user').sort({ likes: "desc" }).lean();
        const comments = await Comment.find().sort({ createdAt: "asc" }).lean()
        res.render("index.ejs", { posts: posts, comments: comments } );
      } catch (err) {
        console.log(err)
      }
    },
    getWelcome: async (req,res) => {
      try {
        const likedPosts = await Post.find({ user: req.user.id }).sort({likes: "desc"}).lean();
        const posts = await Post.find().populate('user').sort({ likes: "desc" }).lean();
        const comments = await Comment.find().sort({ createdAt: "asc" }).lean()
        res.render("welcome.ejs",{user: req.user, posts: posts, likedPosts: likedPosts, comments: comments})
      } catch (err){
        console.log(err)
      }
    },
    postFeedback: async (req,res) => {
      try {
         console.log("before create")
         console.log(req.user)
         const guest = await Guest.findOne({email: req.body.email})
         console.log(guest, "==guest", user.userName)
         let user = await User.findById(req.user.id)
         console.log(guest,user, "is guest user")
         if(!guest && !user){

         await Guest.create ({
          userName: req.body.userName,
          email: req.body.email,
         })}
         console.log("before feedback", req.body.message, guest, user)
       await Feedback.create({
          user: req.user.id,
          guest: req.user.id,
          email: req.body.email,
          message: req.body.message,
        });

        console.log("Feedback has been added!");
        res.redirect("https://live-grief-support.herokuapp.com/#footer")
      } catch (err) {
        console.log(err);
      } 
    }

}



  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().populate('user').sort({ createdAt: "desc" }).lean();
  //     const comments = await Comment.find().sort({ createdAt: "asc" }).lean()

  //     res.render("feed.ejs", { posts: posts, comments: comments });
  //     console.log(comments, posts)
  //   } catch (err) { 
  //     console.log(err);
  //   }
  // }:

