const execute = require('child_process').execSync;

const args = process.argv.slice(2);
let migrationFileName = args[0];

if (migrationFileName && migrationFileName.trim().length) {
  migrationFileName = migrationFileName.charAt(0).toUpperCase() + migrationFileName.slice(1);
  console.info('Migration file name:', migrationFileName);

  const command = `node ./node_modules/typeorm/cli.js migration:create -n ${migrationFileName}`;
  console.info('Executing command:', command);
  execute(command, {
    stdio: 'inherit'
  });
} else {
  console.error('Migration file name not provided.');
  console.error('Usage: npm run migration:create <filename>');
}
