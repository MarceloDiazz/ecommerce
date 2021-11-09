const express = require("express");
const passport = require("passport");

const AuthController = require("../controller/auth")

const router = express.Router();

// GET
router.get("/me",  AuthController.findMyUser);
router.get("/logout",  AuthController.logoutUser);

// POST
router.post("/register", AuthController.createUser);
router.post("/login", passport.authenticate("local"), AuthController.loginUser);

// Register and login Facebook
router.get("/facebook", passport.authenticate("facebook"));
router.get("/facebook/secrets", passport.authenticate("facebook", { successRedirect: "/", failureRedirect: "/login" }));

module.exports = router;
