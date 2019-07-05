const abc = require('./abc.json');
const { batchAddSlackMsgs } = require('../db/Msg');
const chunk = require('lodash.chunk');

async function batchInsertSlackMsgs(msgs) {
  // filter out channel_join msgs and thread replies
  const validMsgs = msgs.filter(msg => msg.subtype !== 'channel_join' || (msg.thread_ts && !msg.replies));

  const msgsArr = chunk(validMsgs, 25);

  for (let i = msgsArr.length - 1; i >= 0; i -= 1) {
    console.log(msgsArr[i], 'msgs')
    await batchAddSlackMsgs({
      groupName: 't9tio',
      msgs: msgsArr[i],
    });
  }
}

batchInsertSlackMsgs(abc.messages);
