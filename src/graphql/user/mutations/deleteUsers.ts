import { IGraphQLContext } from '@EMERE/utils';
import { DeleteUserMutationResponse, DeleteUserMutationArgs } from 'typings/emere-graphql';

export default {
  deleteUser: async (parent: any, { id }: DeleteUserMutationArgs, ctx: IGraphQLContext): Promise<DeleteUserMutationResponse> => {
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
