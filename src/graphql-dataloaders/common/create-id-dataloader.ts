import { IRepository } from '@EMERE/pg/repositories';
import DataLoader from 'node_modules/dataloader';
import _ from 'lodash';

export const createIdDataLoader = (repository: IRepository<any>) => {
  return new DataLoader(async (ids: number[]) => {
    const rows = await repository.findByIds(ids);
    return ids.map((id) => _.find(rows, (row) => row.id === id));
  });
};
