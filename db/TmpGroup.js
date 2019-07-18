const { dynamodb, docClient } = require('./index');

async function createTable() {
  console.log('going to create "wewe-tmp-group" table');
  await dynamodb.createTable({
    TableName: 'wewe-tmp-group',
    KeySchema: [
      { AttributeName: 'team_id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'team_id', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  }).promise();
  console.log('successfully created table "wewe-tmp-group"');
}

async function deleteTable() {
  await dynamodb.deleteTable({ TableName: 'wewe-tmp-group' }).promise();
}

async function get({ name }) {
  const { Item } = await docClient.get({
    TableName: 'wewe-tmp-group',
    Key: {
      name,
    },
  }).promise();
  return Item;
}

async function put(data) {
  await docClient.put({
    TableName: 'wewe-tmp-group',
    Item: data,
  }).promise();
}


module.exports = {
  createTable,
  deleteTable,
  get,
  put,
};

// createTable()
// put({
//   name: 'wewe',
//   description: 'Building wewe together',
//   logoUrl: 'https://user-images.githubusercontent.com/5512552/58616555-87959580-82f0-11e9-8ac4-4045463f2f41.png',
//   type: 'wechat',
//   userCount: 3,
//   msgCount: 0,
//   topicCount: 0,
// });
