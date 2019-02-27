import _ from 'lodash';
import { MutationResolvers, IUpdateUserMutationResponse } from '@app/graphql-generated-schema';
import { User } from '@app/pg/models';

const updateUser: MutationResolvers.UpdateUserResolver = async (
  root,
  { input },
  { services, loaders },
): Promise<IUpdateUserMutationResponse> => {
  const user = _.merge(new User(), input);

  const { userService } = services;

  const updatedUser = await userService.updateUser(user);

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
