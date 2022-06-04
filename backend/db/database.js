const { Pool } = require('pg')

const pg_pool = new Pool({
  user: 'skincare',
  host: '172.18.0.3',
  database: 'skincare',
  password: '1234',
  port: 5432,
})

module.exports = {
  pg_pool,
};