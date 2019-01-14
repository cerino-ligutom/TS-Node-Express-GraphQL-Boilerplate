import { shield } from 'graphql-shield';
import { isAuthenticated } from './rules';

export const schemaPermissions = shield({
  Query: {
    _serverTime: isAuthenticated,
  },
});
