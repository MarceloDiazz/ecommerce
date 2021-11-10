const express = require("express");
const passport = require("passport");

const AuthController = require("../controller/auth");

const router = express.Router();

//rutas para ver si anda facebook y google
router.get("/failed", (req, res) => res.send("Failed"));
router.get("/good", (req, res) => res.send(`Welcome ${req.user}`));

// GET
router.get("/me", AuthController.findMyUser);
router.get("/logout", AuthController.logoutUser);

// POST
router.post("/register", AuthController.createUser);
router.post("/login", passport.authenticate("local"), AuthController.loginUser);

// Register and login Facebook
router.get("/facebook", passport.authenticate("facebook", { scope: ["email"] }));

router.get(
    "/facebook/secrets",
    passport.authenticate("facebook", { successRedirect: "/api/auth/good", failureRedirect: "/api/auth/failed" })
);

// Register and login Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
    "/google/secrets",
    passport.authenticate("google", { successRedirect: "/api/auth/good", failureRedirect: "/api/auth/failed" })
);

// Register and login Github
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
    "/github/secrets",
    passport.authenticate("github", { successRedirect: "/api/auth/good", failureRedirect: "/api/auth/failed" })
);

module.exports = router;
