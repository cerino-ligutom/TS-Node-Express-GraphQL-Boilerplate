import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { UserRepository } from '@app/pg/repositories';
import { User } from '@app/pg/models';
import { PasswordService } from '@app/utils';

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'usernameOrEmail',
      passwordField: 'password',
      session: false,
    },
    async (username, password, done) => {
      const userRepo = new UserRepository();

      try {
        const user = await userRepo.findOne({
          where: [{ username } as User, { email: username } as User],
        });

        if (user) {
          const isValidPassword = await PasswordService.verify(password, user.passwordHash, user.passwordSalt);

          if (isValidPassword) {
            return done(undefined, user, { message: 'Logged in successfully ' });
          } else {
            return done(undefined, false, { message: 'Wrong password' });
          }
        } else {
          return done(undefined, false, { message: 'User not found.' });
        }
      } catch (error) {
        return done(error, false, { message: '[local-strategy] Something went wrong.' });
      }
    },
  ),
);
