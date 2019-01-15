import _ from 'lodash';
import { MutationResolvers, ICreateUserMutationResponse } from 'typings/app-graphql-schema';

const createUser: MutationResolvers.CreateUserResolver = async (
  root,
  { input },
  ctx,
): Promise<ICreateUserMutationResponse> => {
  const createdUser = await ctx.services.userService.createUser(input);

  return {
    data: createdUser,
    success: true,
    message: 'User successfully created.',
  };
};

export default { createUser };
