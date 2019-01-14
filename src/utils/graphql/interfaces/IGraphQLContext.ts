import { User } from '@app/pg/models';
import { UserRepository } from '@app/pg/repositories';
import { ILoaders } from 'src/graphql-dataloaders';

export interface IGraphQLContext {
  user?: User;
  pg: {
    UserRepository: UserRepository;
  };
  loaders: ILoaders;
}
