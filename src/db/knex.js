const Knex = require('knex');
const { db } = require('../config');

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: db.dbFilePath,
  },
  useNullAsDefault: true,
});

module.exports = knex;
