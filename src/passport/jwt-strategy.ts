import { Strategy as JwtStrategy } from 'passport-jwt';
import passport from 'passport';
import { JWT_OPTIONS } from '@app/config/jwt-options';
import { repositories } from '@app/pg/repositories';
import { IJwtPayload } from '@app/utils';

const { userRepository } = repositories;

passport.use(
  'jwt',
  new JwtStrategy(JWT_OPTIONS, async (jwtPayload: IJwtPayload, done) => {
    try {
      const user = await userRepository.findById(jwtPayload.user.id);

      if (!user) {
        done(undefined, false, { message: 'User not found.' });
      }

      done(undefined, user, { message: 'User found.' });
    } catch (error) {
      done(error, false, { message: '[jwt-strategy] Something went wrong.'});
    }
  }),
);
