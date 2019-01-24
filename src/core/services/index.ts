export * from './user/user.service';

import { UserService, userService } from './user/user.service';
import { AddressService, addressService } from './address/address.service';

export interface IServices {
  userService: UserService;
  addressService: AddressService;
}

export const services: IServices = {
  userService,
  addressService,
};
