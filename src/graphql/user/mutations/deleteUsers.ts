import { MutationResolvers, IDeleteUserMutationResponse } from 'typings/emere-graphql';

const deleteUser: MutationResolvers.DeleteUserResolver = async (
  root,
  { id },
  ctx,
): Promise<IDeleteUserMutationResponse> => {
  const user = await ctx.pg.UserRepository.findById(id);

  if (user) {
    await ctx.pg.UserRepository.remove(user);
  }

  return {
    data: user,
    message: '',
    success: !!user,
  };
};

export default { deleteUser };
