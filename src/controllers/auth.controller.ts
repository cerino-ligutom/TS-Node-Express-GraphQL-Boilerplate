import { BaseController } from './base.controller';
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { JwtService, IJwtPayload } from '@app/utils';
import { User } from '@app/pg/models';

export class AuthController extends BaseController {
  public login(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', async (err, user: User, info) => {
      if (err || !user) {
        return next(err);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(error);
        }

        const payload: IJwtPayload = {
          user: {
            id: user.id,
          },
        };

        const token = JwtService.sign(payload);

        return res.json({ token });
      });
    })(req, res, next);
  }
}
