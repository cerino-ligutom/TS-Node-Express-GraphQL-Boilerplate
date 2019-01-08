require('tsconfig-paths/register');

import { execSync as execute } from 'child_process';
import { getTypeDefs } from '@EMERE/utils';
import { writeFileSync } from 'fs';
import { mergeTypes } from 'merge-graphql-schemas';
import fs from 'fs';

// Create folders if it doesn't exist
const TYPINGS_FOLDER_PATH = './typings';
const SCHEMA_FOLDER_PATH = `${TYPINGS_FOLDER_PATH}/emere-graphql`;
if (!fs.existsSync(TYPINGS_FOLDER_PATH)) {
  fs.mkdirSync(TYPINGS_FOLDER_PATH);
}
if (!fs.existsSync(SCHEMA_FOLDER_PATH)) {
  fs.mkdirSync(SCHEMA_FOLDER_PATH);
}

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
