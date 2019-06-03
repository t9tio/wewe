const path = require('path');

const config = {
  db: {
    client: 'sqlite3',
    dbFilePath: path.join(__dirname, '../db.sqlite'),
  },
};

module.exports = config;
