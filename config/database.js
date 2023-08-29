const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 100,
});

module.exports = pool;
