import { IGraphQLContext } from '@EMERE/utils';
import { UpdateUserMutationResponse, UpdateUserMutationArgs } from 'typings/emere-graphql';
import _ from 'lodash';
import { UserInputError } from 'apollo-server-core';

export default {
  updateUser: async (parent: any, { input }: UpdateUserMutationArgs, ctx: IGraphQLContext): Promise<UpdateUserMutationResponse> => {
    const user = await ctx.UserRepository.findById(input.id);

    if (user) {
      user.firstName = input.firstName;
      user.middleName = input.middleName;
      user.lastName = input.lastName;
      user.description = input.description;

      await ctx.UserRepository.save(user);

      return {
        data: user,
        success: true,
        message: 'User successfully updated.',
      } as UpdateUserMutationResponse;
    } else {
      throw new UserInputError(`User id ${input.id} does not exist.`);
    }
  },
};
