import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { UserRepository } from '@EMERE/pg/repositories';
import { User } from '@EMERE/pg/models';
import { PasswordService } from '@EMERE/utils';

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
            return done(null, user, { message: 'Logged in successfully ' });
          } else {
            return done(null, false, { message: 'Wrong password' });
          }
        } else {
          return done(null, false, { message: 'User not found.' });
        }
      } catch (error) {
        return done(error, false, { message: '[local-strategy] Something went wrong.' });
      }
    },
  ),
);
