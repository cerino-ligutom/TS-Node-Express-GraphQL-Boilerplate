import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { repositories } from '@app/pg/repositories';
import { PasswordService } from '@app/utils';

const { userRepository } = repositories;

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'usernameOrEmail',
      passwordField: 'password',
      session: false
    },
    async (username, password, done) => {
      try {
        const user = await userRepository.findByUsernameOrEmail(username);

        if (user) {
          const isValidPassword = await PasswordService.verify(password, user.passwordHash, user.passwordSalt);

          if (isValidPassword) {
            return done(undefined, user, { message: 'Logged in successfully ' });
          }
          return done(undefined, false, { message: 'Wrong password' });
        }
        return done(undefined, false, { message: 'User not found.' });
      } catch (error) {
        return done(error, false, { message: '[local-strategy] Something went wrong.' });
      }
    }
  )
);
