const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { secret } = require('./config');
const User = require('./api/resources/user/user.model');
const LocalStrategy = require('passport-local').Strategy;

// jwt strategy
const f = async (payload, done) => {
  try {
    // find user from token
    const user = await User.findById(payload.sub);
    // handle if user doesn't exist'
    if (!user) {
      return done(null, false);
    }
    // return user
    done(null, user);
  } catch (e) {
    done(e, false);
  }
};
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}, f));

// local strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      }

      const match = await user.isCorrectPassword(password);
      if (!match) {
        return done(null, false);
      }

      done(null, user);
    } catch (e) {
      done(e, false);
    }
  }));
