const { dynamodb, docClient } = require('./index');
const Group = require('./Group');

async function createTable() {
  console.log('going to create "wewe-topic" table');
  await dynamodb.createTable({
    TableName: 'wewe-topic',
    KeySchema: [
      { AttributeName: 'groupName', KeyType: 'HASH' },
      { AttributeName: 'id', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'groupName', AttributeType: 'S' },
      { AttributeName: 'id', AttributeType: 'N' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  }).promise();
  console.log('successfully created table "wewe-topic"');
}

async function deleteTable() {
  await dynamodb.deleteTable({ TableName: 'wewe-topic' }).promise();
}

async function get({ groupName, id }) {
  const { Item } = await docClient.get({
    TableName: 'wewe-topic',
    Key: {
      groupName, id,
    },
  }).promise();
  return Item;
}

async function getRange({ groupName, idOffset, idLimit }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-topic',
    KeyConditions: {
      groupName: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [groupName],
      },
      id: {
        ComparisonOperator: 'BETWEEN',
        AttributeValueList: [idOffset, idOffset + idLimit],
      },
    },
  }).promise();
  return Items;
}

async function add({
  groupName, title, description, from, date, msgRange, hiddenMsgs,
}) {
  const msgCount = await Group.incTopicCount({
    name: groupName,
  });
  await docClient.put({
    TableName: 'wewe-topic',
    Item: {
      groupName, id: msgCount - 1, title, description, from, date, msgRange, hiddenMsgs,
    },
  }).promise();
}

module.exports = {
  createTable,
  deleteTable,
  get,
  getRange,
  add,
};

// createTable();
// add({
//   groupName: 'GraphQL交流', title: 'test', from: 'timbot', date: new Date().getTime(), msgRange: [0, 43], hiddenMsgs: []
// });
