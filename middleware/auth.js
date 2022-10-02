module.exports = {
<<<<<<< HEAD
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
=======
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/signup");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    },
    ensureFeedback: function (req, res, next) {
      console.log("ensureFeedback")
      if (req.isAuthenticated()) {
        console.log("is authenticated")
        return next();
      } else if(!req.isAuthenticated()) {
        // create Guest, then 
        console.log("not authenticated")
        return next();
      } else {
        res.redirect("/signup");
      }
    },
  };
  
>>>>>>> bd23b50f69a8b1b7c18913a88a8eb31e81dd5504
