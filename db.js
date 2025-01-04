// const { Pool } = require('pg');
// require('dotenv').config();

// // Create a pool using environment variables
// const pool = new Pool({
//   host: 'localhost',
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// module.exports = pool;


const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Ensure DATABASE_URL is set in your .env
    ssl: { rejectUnauthorized: false }, // Necessary for hosted PostgreSQL (e.g., Render or Heroku)
});

module.exports = pool;
