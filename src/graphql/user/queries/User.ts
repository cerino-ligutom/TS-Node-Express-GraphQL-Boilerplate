import { QueryResolvers, IUser } from 'typings/emere-graphql';

const User: QueryResolvers.UserResolver = async (obj, { id }, ctx) => {
  return await ctx.loaders.userById.load(id);
};

export default {
  User,
};
