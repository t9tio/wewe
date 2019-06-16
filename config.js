const path = require('path');

const config = {
  db: {
    client: 'sqlite3',
    dbFilePath: path.join(__dirname, '../db.sqlite'),
  },
  pageMsgCount: 20,
  knownGroups: ['t9t.io community', 'wewe'],
};

module.exports = config;
