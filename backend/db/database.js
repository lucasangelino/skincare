const { Pool } = require("pg");

const pg_pool = new Pool({
  user: "skincare",
  host: "skincare.pg",
  database: "skincare",
  password: "1234",
  port: 5432,
});

module.exports = {
  pg_pool,
};
