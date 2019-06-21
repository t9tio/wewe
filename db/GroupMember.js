const { dynamodb, docClient } = require('./index');

async function createTable() {
  console.log('going to create "wewe-group-member" table');
  await dynamodb.createTable({
    TableName: 'wewe-group-member',
    KeySchema: [
      { AttributeName: 'groupName', KeyType: 'HASH' },
      { AttributeName: 'name', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'groupName', AttributeType: 'S' },
      { AttributeName: 'name', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  }).promise();
  console.log('successfully created table "wewe-group-member"');
}

async function deleteTable() {
  await dynamodb.deleteTable({ TableName: 'wewe-group-member' }).promise();
}

async function get({ groupName, name }) {
  const { Item } = await docClient.get({
    TableName: 'wewe-group-member',
    Key: {
      groupName, name,
    },
    AttributesToGet: [ // list of specific attribute names to return
      'name',
      'intro',
      'url',
    ],
  }).promise();
  return Item;
}

async function put({
  groupName, name, email, url, intro, date,
}) {
  await docClient.put({
    TableName: 'wewe-group-member',
    Item: {
      groupName, name, email, url, intro, date,
    },
  }).promise();
}

async function getAllMembers({ groupName }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-group-member',
    KeyConditions: {
      groupName: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [groupName],
      },
    },
  }).promise();

  return Items;
}

async function getAllMemberNames({ groupName }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-group-member',
    KeyConditions: {
      groupName: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [groupName],
      },
    },
    AttributesToGet: [ // list of specific attribute names to return
      'name',
    ],
  }).promise();

  return Items.map(item => item.name);
}

module.exports = {
  createTable,
  deleteTable,
  get,
  put,
  getAllMembers,
  getAllMemberNames,
};

// createTable();
// put({
//   groupName: 't9t.io community',
//   name: 'timbot',
//   intro: 'building t9t.io',
//   url: 't9t.io',
//   email: 'timqian92@qq.com',
// });


// put({
//   groupName: 'wewe',
//   name: '秋虫儿闹声喧',
//   email: 'liuyunli1992@163.com',
//   // url: 'https://weibo.com/345981205',
//   // intro: '野路子产品菜🐶，立志要做全栈产品。小程序：小确幸Me',
//   date: new Date().getTime(),
// });
