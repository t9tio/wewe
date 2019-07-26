// Note: Create global secondary index on Msg table
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

  return msgCount -1; // msg id
}

/**
 *
 * @param {Array} msgs
 * @example msgs
 * [{
 *     "user": "UL54328J0",
 *     "type": "message",
 *     "subtype": "channel_join",
 *     "ts": "1562311078.029900",
 *     "text": "<@UL54328J0> has joined the channel"
 * },
 * {
 *     "client_msg_id": "6C579416-B4D1-4EED-85A8-8DD952244312",
 *     "type": "message",
 *     "text": "好多做公众号的，做到一定量，就给你直接砍了",
 *     "user": "UKTHARF34",
 *     "ts": "1562305844.029700",
 *     "team": "TKSPMPXU1"
 * }]
 */
// batch write at most 25 at a time
// ref: https://docs.aws.amazon.com/zh_cn/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
async function batchAddSlackMsgs({
  groupName, msgs,
}) {
  const curMsgCount = await Group.incMsgCountByN({
    name: groupName, n: msgs.length,
  });

  console.log(curMsgCount, 'curmsgcount');
  const putRequests = msgs.map((msg, i) => ({
    PutRequest: {
      Item: {
        groupName,
        id: curMsgCount - i - 1,
        ...msg,
      },
    },
  }));

  await docClient.batchWrite({
    RequestItems: {
      'wewe-msg': putRequests,
    },
  }).promise();
}

async function getByThreadTs({ ts }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-msg',
    IndexName: 'thread_ts-index',
    KeyConditions: {
      thread_ts: {
        ComparisonOperator: 'EQ',
        AttributeValueList: [ts],
      },
    },
  }).promise();

  return Items;
}

async function getByTsArr({ tsArr }) {
  const { Items } = await docClient.query({
    TableName: 'wewe-msg',
    IndexName: 'ts',
    KeyConditions: {
      ts: {
        ComparisonOperator: 'IN',
        AttributeValueList: tsArr,
      },
    },
  }).promise();

  return Items;
}

module.exports = {
  createTable,
  deleteTable,
  get,
  getRange,
  addMsgOfGroup,
  batchAddSlackMsgs,
  getByThreadTs,
  getByTsArr,
};
