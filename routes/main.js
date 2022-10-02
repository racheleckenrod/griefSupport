const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
<<<<<<< HEAD
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
=======
// const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest, ensureFeedback } = require("../middleware/auth");

//Main Routes - simplified for now
// router.get("/", homeController.getIndex);
// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
router.post("/", ensureFeedback, homeController.postFeedback);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);
// router.get("/welcome", ensureAuth, homeController.getWelcome);
>>>>>>> bd23b50f69a8b1b7c18913a88a8eb31e81dd5504

module.exports = router;
