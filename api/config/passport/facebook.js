const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../../models/Users");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID_FB,
      clientSecret: process.env.CLIENT_SECRET_FB,
      callbackURL: "http://localhost:3001/api/auth/facebook/secrets",
      enableProof: true,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate(
        { facebookId: profile.id, name: profile.displayName },
        function (err, user) {
          if (err) {
            return cb(err);
          }
          cb(null, user);
        }
      );
    }
  )
);
