import _ from 'lodash';
import { MutationResolvers, IUpdateUserMutationResponse } from 'typings/app-graphql-schema';

const updateUser: MutationResolvers.UpdateUserResolver = async (
  root,
  { input },
  { services, loaders },
): Promise<IUpdateUserMutationResponse> => {
  const { userService } = services;

  const updatedUser = await userService.updateUser(input);

  if (updatedUser) {
    await loaders.userById.clear(input.id).load(input.id);
  }

  return {
    user: updatedUser,
    success: !!updatedUser,
    message: '',
  };
};

export default { updateUser };
