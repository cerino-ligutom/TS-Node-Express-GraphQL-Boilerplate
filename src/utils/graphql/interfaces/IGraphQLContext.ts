import { User } from '@EMERE/pg/models';

export interface IGraphQLContext {
  user?: User;
}
