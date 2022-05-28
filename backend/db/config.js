const { Client } = require('pg')
const pg_client = new Client({
  user: 'skincare',
  host: 'skincare.pg',
  database: 'skincare',
  password: '1234',
  port: 5432,
})

const dbConnection = async () => { 
  pg_client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })
};

module.exports = {
  dbConnection,
};