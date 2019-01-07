import { UserEntity } from '@EMERE/pg/models';
import { UserRepository } from '@EMERE/pg/repositories';

export interface IGraphQLContext {
  user?: UserEntity;
  UserRepository: UserRepository;
}
