const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const databaseConfig = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_CLIENT,
};

const requiredVariables = [
  'DB_USER',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_HOST',
  'DB_CLIENT',
];
const missingVariables = requiredVariables.filter(
  (variable) =>
    process.env[variable] === undefined ||
    (variable !== 'DB_PASSWORD' && !process.env[variable])
);

if (missingVariables.length > 0) {
  throw new Error(
    `Missing database configuration: ${missingVariables.join(', ')}`
  );
}

module.exports = {
  development: { ...databaseConfig },
  test: { ...databaseConfig },
  production: { ...databaseConfig },
};
