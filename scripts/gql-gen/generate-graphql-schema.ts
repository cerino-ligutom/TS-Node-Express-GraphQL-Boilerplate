require('tsconfig-paths/register');

import { getTypeDefs } from '../../src/graphql/schema';
import { writeFileSync } from 'fs';
import { mergeTypes } from 'merge-graphql-schemas';

const execute = require('child_process').execSync;

console.info('Retrieving graphql schema...');
const typeDefs = mergeTypes(getTypeDefs());

console.info('Writing schema to file...');
writeFileSync('schema.graphql', typeDefs);

console.info('Generating typings...');
const command = 'gql-gen --config codegen.yml';
console.info('Executing command:', command);
execute(command, {
  stdio: 'inherit',
});
