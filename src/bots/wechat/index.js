const { Wechaty } = require('wechaty');
const qrcodeTerminal = require('qrcode-terminal');
const db = require('../../db');

const bot = Wechaty.instance();

bot.start();

bot.on('scan', (url, status) => {
  const loginUrl = url.replace(/\/qrcode\//, '/l/');
  qrcodeTerminal.generate(loginUrl);
  console.log(status);
});


bot.on('login', user => console.log(`User ${user} logined`));

bot.on('message', async (message) => {
  console.log(`Message: ${message}`);
  const room = await message.room();
  if (room) {
    const groupName = await room.topic();
    const text = await message.text();
    const from = await message.from().name();
    const date = await message.date();

    const groupId = await db.getGroupIdByGroupName(groupName);

    await db.insertMsg({
      groupId, groupName, text, from, date,
    });

    console.log('msg saved to db', groupId, groupName, text, from, date);
  }
});
