import _ from 'lodash';
import { MutationResolvers, CreateUserMutationResponse } from 'typings/app-graphql-schema';

const createUser: MutationResolvers.CreateUserResolver = async (
  root,
  { input },
  ctx,
): Promise<CreateUserMutationResponse> => {
  const createdUser = await ctx.services.userService.createUser(input);

  return {
    user: createdUser,
    success: true,
    message: 'User successfully created.',
  };
};

export default { createUser };
