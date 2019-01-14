import { MutationResolvers, IDeleteUserMutationResponse } from 'typings/app-graphql-schema';

const deleteUser: MutationResolvers.DeleteUserResolver = async (
  root,
  { id },
  ctx,
): Promise<IDeleteUserMutationResponse> => {
  const user = await ctx.pg.UserRepository.findById(id);

  if (user) {
    await ctx.pg.UserRepository.remove(user);
    await ctx.loaders.userById.clear(user.id);
  }

  return {
    data: user,
    message: '',
    success: !!user,
  };
};

export default { deleteUser };
