import { UserRepository } from '@EMERE/pg/repositories';
import { createIdDataLoader } from './common';
import DataLoader from 'dataloader';

export const userByIdLoader = () => {
  const userRepo = new UserRepository();
  return createIdDataLoader(userRepo);
};
