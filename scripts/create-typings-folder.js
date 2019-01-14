const fs = require('fs');

// Create folders if it doesn't exist
const TYPINGS_FOLDER_PATH = './typings';
const SCHEMA_FOLDER_PATH = `${TYPINGS_FOLDER_PATH}/app-graphql-schema`;
if (!fs.existsSync(TYPINGS_FOLDER_PATH)) {
  fs.mkdirSync(TYPINGS_FOLDER_PATH);
}
if (!fs.existsSync(SCHEMA_FOLDER_PATH)) {
  fs.mkdirSync(SCHEMA_FOLDER_PATH);
}
