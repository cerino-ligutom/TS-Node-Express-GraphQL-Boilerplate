import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
import { JWT_OPTIONS } from '@EMERE/config/jwt-options';
import { UserRepository } from '@EMERE/pg/repositories';
import { IJwtPayload } from '@EMERE/utils';

passport.use(
  'jwt',
  new JwtStrategy(JWT_OPTIONS, async (jwtPayload: IJwtPayload, done) => {
    try {
      const user = await new UserRepository().findById(jwtPayload.user.id);

      if (!user) {
        done(null, false, { message: 'User not found.' });
      }

      done(null, user, { message: 'User found.' });
    } catch (error) {
      done(error, false, { message: '[jwt-strategy] Something went wrong.'});
    }
  }),
);
