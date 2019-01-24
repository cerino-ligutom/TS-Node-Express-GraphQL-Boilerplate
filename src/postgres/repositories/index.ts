export * from './interfaces';
import { userRepository } from './user.repository';
import { addressRepository } from './address.repository';

export const repositories = {
  userRepository,
  addressRepository,
};
