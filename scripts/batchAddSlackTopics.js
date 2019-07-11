const abc = require('./abc.json');
const { add } = require('../db/Topics');

async function batchInsertSlackMsgs(msgs) {
  // filter out channel_join msgs and thread replies
  const validMsgs = msgs.filter(msg => msg.thread_ts && msg.replies);


  // reverse order
  for (let i = validMsgs.length - 1; i >= 0; i -= 1) {
    const msg = validMsgs[i];
    console.log(msg, 'msg');
    await add({
      groupName: 't9tio',
      title: msg.text,
      type: 'slack',
      ts: msg.ts,
      from: msg.user,
      date: Number(msg.ts.split('.')[0]) * 1000,
    });
  }
}

batchInsertSlackMsgs(abc.messages);
