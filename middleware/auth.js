// if logged in, pass the userName into the chat, else ask for one. allow one chat room for guests, 

module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        this.ensureGuest()
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        // make a guest
        create 
      } else {
        res.redirect("https://live-grief-support.herokuapp.com/signup");
      }
    },
  };
  