const fs = require('fs');
const path = require('path');
const knex = require('./knex');
const { db } = require('../config');

const createGroups = fs.readFileSync(path.join(__dirname, './createGroups.sql'), 'utf8');
const createMsgs = fs.readFileSync(path.join(__dirname, './createMsgs.sql'), 'utf8');

async function initDB() {
  console.log('going to rm db');
  try {
    fs.unlinkSync(db.dbFilePath);
  } catch (error) {
    console.log('db file not found and will create one');
  }

  console.log('going to init db');
  await knex.raw(createGroups);
  await knex.raw(createMsgs);

  // init groups
  await knex('groups')
    .insert([{
      name: 't9t.io community',
      description: 'Building transparent products together',
      logoUrl: 'https://raw.githubusercontent.com/timqian/images/master/font.png',
      type: 'wechat',
      userCount: 190,
    }, {
      name: 'wewe',
      description: 'Building wewe together',
      logoUrl: 'https://user-images.githubusercontent.com/5512552/58616555-87959580-82f0-11e9-8ac4-4045463f2f41.png',
      type: 'wechat',
    }, {
      name: 'GraphQL 交流',
      description: 'GraphQL 中文交流群',
      logoUrl: 'https://raw.githubusercontent.com/timqian/images/master/font-graphql.png',
      type: 'wechat',
    }]);
  knex.destroy();
}

initDB();
