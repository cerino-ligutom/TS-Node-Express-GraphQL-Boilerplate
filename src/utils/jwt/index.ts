import jwt from 'jsonwebtoken';
import { JWT_OPTIONS } from '@app/config/jwt-options';

const sign = (payload: {}) => {
  const secretKey = `${JWT_OPTIONS.secretOrKey}`;

  return jwt.sign(payload, secretKey, {
    expiresIn: '60d',
  });
};

export const JwtService = {
  sign,
};

export interface IJwtPayload {
  user: {
    id: string;
  };
}
