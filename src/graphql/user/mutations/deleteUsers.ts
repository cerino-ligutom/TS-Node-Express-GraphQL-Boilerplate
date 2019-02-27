import { MutationResolvers, IDeleteUserMutationResponse } from '@app/graphql-generated-schema';

const deleteUser: MutationResolvers.DeleteUserResolver = async (
  root,
  { id },
  { services, loaders },
): Promise<IDeleteUserMutationResponse> => {
  const { userService } = services;

  const deletedUser = await userService.deleteUser(id);

  if (deletedUser) {
    loaders.userById.clear(id);
  }

  return {
    user: deletedUser,
    message: '',
    success: !!deletedUser,
  };
};

export default { deleteUser };
