import { User } from '@EMERE/pg/models';
import { UserRepository } from '@EMERE/pg/repositories';
import { ILoaders } from 'src/graphql-dataloaders';

export interface IGraphQLContext {
  user?: User;
  pg: {
    UserRepository: UserRepository;
  };
  loaders: ILoaders;
}
