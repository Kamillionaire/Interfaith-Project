import * as passport from 'passport';
import * as mongoose from 'mongoose';
import Users, {IUser} from '../models/Users';
import * as jwt from 'jsonwebtoken';

let LocalStrategy = require('passport-local').Strategy;
let FacebookStrategy = require('passport-facebook').Strategy;
// let TwitterStrategy = require('passport-twitter').Strategy;
// let JwtStrategy = require('passport-jwt').Strategy;
// let ExtractJwt = require('passport-jwt').ExtractJwt;


passport.serializeUser(function(user, done) {
   console.log('serializeUser', user);
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  Users.findOne({username: obj['username']}, {passwordHash: 0, salt: 0, _id: 0}, (err, user) => {
    if (err) done(null, {});
    done(null, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.ROOT_URL + '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos'],
    // display: 'popup'
  },
  function(accessToken, refreshToken, profile, done) {
    Users.findOne({ facebookId: profile.id }, function (err, user) {
      if (user) {
        return done(err, user);
      } else {
        let u = new Users();
        u.username = profile.displayName;
        u.facebookId = profile.id;
        u.facebook.name = profile.displayName;
        u.facebook.token = accessToken;
        u.save((err) => {
          if (err) throw err;
          return done(null, u);
        });
      }
    });
  }
));
// passport.use(new TwitterStrategy({
//     consumerKey: process.env.TWITTER_KEY,
//     consumerSecret: process.env.TWITTER_SECRET,
//     callbackURL: process.env.ROOT_URL + '/auth/twitter/callback',
//     profileFields: ['id', 'displayName', 'photos'],
//     session: true
//   },
//   function(token, tokenSecret, profile, cb) {
//     Users.findOne({ twitterId: profile.id }, function (err, user) {
//       if (user) {
//         return cb(err, user);
//       } else {
//         let u = new Users();
//         u.username = profile.displayName;
//         u.twitterId = profile.id;
//         u.twitter.name = profile.displayName;
//         u.twitter.token = token;
//         u.save((err) => {
//           if (err) cb(err, null);
//           return cb(null, u);
//         });
//       }
//     });
//   }
// ));

passport.use(new LocalStrategy({session: true}, function(username: string, password: string, done) {
  let lc = username.toLowerCase();
  console.log(lc);
  Users.findOne({ username: lc }, { _id: 0, __v: 0}).select('+salt +passwordHash')
  .exec(function(err, user) {

    if (err) return done(err);
    if (!user) return done(null, false, { message: 'Incorrect username.' });
    if (!user.validatePassword(password)) return done(null, false, { message: 'Password does not match.' });
    user.passwordHash = undefined;
    user.salt = undefined;
    return done(null, user);
  });
}));
