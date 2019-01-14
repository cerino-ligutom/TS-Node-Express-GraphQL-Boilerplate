import { IGraphQLContext } from '@EMERE/utils';

export default {
  // @ts-ignore
  _dummy: async (parent, args, context: IGraphQLContext, info) => {
    return 'Dummy Mutation';
  },
};
