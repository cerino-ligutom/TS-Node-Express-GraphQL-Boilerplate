import { User } from '@app/pg/models';
import { ILoaders } from 'src/graphql-dataloaders';
import { IServices } from '@app/core/services';

export interface IGraphQLContext {
  user?: User;
  services: IServices;
  loaders: ILoaders;
}
