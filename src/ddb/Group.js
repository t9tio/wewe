const { dynamodb, docClient } = require('./index');

async function createTable() {
  console.log('going to create "group" table');
  await dynamodb.createTable({
    TableName: 'group',
    KeySchema: [
      { AttributeName: 'name', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'name', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  }).promise();
  console.log('successfully created table "group"');
}

async function deleteTable() {
  await dynamodb.deleteTable({ TableName: 'group' }).promise();
}

async function get({ githubId }) {
  const { Item } = await docClient.get({
    TableName: 'group',
    Key: {
      githubId,
    },
  }).promise();
  return Item;
}

async function put({
  githubId, groupname, name, email, photo,
}) {
  await docClient.put({
    TableName: 'group',
    Item: {
      githubId, groupname, name, email, photo,
    },
  }).promise();
}

module.exports = {
  createTable,
  deleteTable,
  get,
  put,
};
