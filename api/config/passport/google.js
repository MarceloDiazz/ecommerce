const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../models/Users");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID_GO,
            clientSecret: process.env.CLIENT_SECRET_GO,
            callbackURL: "http://localhost:3001/api/auth/google/secrets",
        },
        function (accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ googleId: profile.id, name: profile.displayName, email: profile.emails[0].value }, function (err, user) {
                return cb(err, user);
            });
        }
    )
);
