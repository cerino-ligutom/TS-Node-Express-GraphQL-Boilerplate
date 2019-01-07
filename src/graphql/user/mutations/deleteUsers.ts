import { IGraphQLContext } from '@EMERE/utils';
import { DeleteUserMutationResponse } from 'typings/generated/graphql';

export default {
  deleteUser: async (parent: any, { id }: { id: number }, ctx: IGraphQLContext): Promise<DeleteUserMutationResponse> => {
    const user = await ctx.UserRepository.findById(id);

    if (user) {
      await ctx.UserRepository.remove(user);
    }

    return {
      data: user,
      message: '',
      success: !!user,
    } as DeleteUserMutationResponse;
  },
};
