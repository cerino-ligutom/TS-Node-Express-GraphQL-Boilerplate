import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
import { userRepository } from '@EMERE/pg/repositories';
import { JWT_OPTIONS } from '@EMERE/config/jwt-options';

passport.use(
  'jwt',
  new JwtStrategy(JWT_OPTIONS, async (jwtPayload, done) => {
    try {
      const user = await userRepository.findById(jwtPayload.id);

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  }),
);
