import _ from 'lodash';
import { UserInputError } from 'apollo-server-core';
import { MutationResolvers, IUpdateUserMutationResponse } from 'typings/app-graphql-schema';

const updateUser: MutationResolvers.UpdateUserResolver = async (
  root,
  { input },
  ctx,
): Promise<IUpdateUserMutationResponse> => {
  const user = await ctx.pg.UserRepository.findById(input.id);

  if (user) {
    user.firstName = input.firstName;
    user.middleName = input.middleName;
    user.lastName = input.lastName;
    user.description = input.description;

    await ctx.pg.UserRepository.save(user);
    await ctx.loaders.userById.clear(user.id).load(user.id);

    return {
      data: user,
      success: true,
      message: 'User successfully updated.',
    };
  } else {
    throw new UserInputError(`User id ${input.id} does not exist.`);
  }
};

export default { updateUser };
