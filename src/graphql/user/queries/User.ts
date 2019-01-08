import { QueryResolvers, IUser } from 'typings/emere-graphql';

const User: QueryResolvers.UserResolver = async (obj, { id }, ctx) => {
  const user = await ctx.UserRepository.findById(id);

  return user ? user : null;
};

export default {
  User,
};
