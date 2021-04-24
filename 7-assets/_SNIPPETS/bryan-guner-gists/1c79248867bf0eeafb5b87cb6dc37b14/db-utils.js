const { Client, Pool } = require('pg');
module.exports.pool = new Pool({
  database: 'postgres',
});
module.exports.Client = Client;
module.exports.Pool = Pool;
