import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
import { JWT_OPTIONS } from '@EMERE/config/jwt-options';
import { UserRepository } from '@EMERE/pg/repositories';

passport.use(
  'jwt',
  new JwtStrategy(JWT_OPTIONS, async (jwtPayload, done) => {
    try {
      const user = await new UserRepository().findById(jwtPayload.id);

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
