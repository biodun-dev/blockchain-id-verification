// src/config/db.ts
import knex from 'knex';
import { ENV } from './environment';

// Initialize the Knex.js instance with your database configuration
const db = knex({
  client: 'mysql2',
  connection: {
    host: ENV.DB_HOST,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
  },
  pool: { min: 0, max: 10 },
  migrations: {
    tableName: 'knex_migrations',
  },
});

// Export the Knex.js instance for use in your application
export default db;
