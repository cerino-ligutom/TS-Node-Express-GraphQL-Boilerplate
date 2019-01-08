// Registers
require('ts-node/register');
require('tsconfig-paths/register');
const execute = require('child_process').execSync;

// Build graphql schema and typings
execute('npm run generate:graphql-schema', {
  stdio: 'inherit',
});

// Run app
require('./src/app.ts');
