import DataLoader from 'dataloader';
import { services } from '@app/core/services';

const { userService } = services;

export const userByIdLoader = () => {
  return new DataLoader(async (ids: string[]) => {
    return ids.map(async (id) => await userService.findById(id) || null);
  });
};
