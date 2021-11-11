const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/Users");

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.CLIENT_ID_GT,
            clientSecret: process.env.CLIENT_SECRET_GT,
            callbackURL: "http://localhost:3001/api/auth/github/secrets",
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate({ githubId: profile.id, name: profile.username }, function (err, user) {
                return done(err, user);
            });
        }
    )
);
