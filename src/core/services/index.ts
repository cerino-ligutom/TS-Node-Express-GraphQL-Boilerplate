export * from './user/user.service';

import { UserService } from './user/user.service';

export interface IServices {
  userService: UserService;
}

export const services: IServices = {
  userService: new UserService(),
};
