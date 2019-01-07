import { IGraphQLContext } from '@EMERE/utils';
import { UserEntity } from '@EMERE/pg/models';

export default {
  User: async (parent: any, { id }: { id: number }, ctx: IGraphQLContext): Promise<UserEntity | undefined> => {
    return ctx.UserRepository.findById(id);
  },
};
