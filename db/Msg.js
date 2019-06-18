const { dynamodb, docClient } = require('./index');
const Group = require('./Group');

async function createTable() {
  console.log('going to create "wewe-msg" table');
  await dynamodb.createTable({
    TableName: 'wewe-msg',
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
  console.log('successfully created table "wewe-msg"');
}

async function deleteTable() {
  await dynamodb.deleteTable({ TableName: 'wewe-msg' }).promise();
}

async function get({ groupName, id }) {
  const { Item } = await docClient.get({
    TableName: 'wewe-msg',
    Key: {
      groupName, id,
    },
  }).promise();
  return Item;
}

async function getRange({ groupName, idOffset, idLimit }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-msg',
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

async function addMsgOfGroup({
  groupName, text, from, date, type, link,
}) {
  const msgCount = await Group.incMsgCount({
    name: groupName,
  });
  await docClient.put({
    TableName: 'wewe-msg',
    Item: {
      groupName, text, from, date, type, link, id: msgCount - 1,
    },
  }).promise();
}

module.exports = {
  createTable,
  deleteTable,
  get,
  getRange,
  addMsgOfGroup,
};
