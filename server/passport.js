// auth.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: '356469704492-vjv9n13d9o3pdpc5tjqajicf5out5n93.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: "/auth/google/callback",
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      // You can customize the handling of user data here
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
