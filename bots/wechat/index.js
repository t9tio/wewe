const { Wechaty } = require('wechaty');
const qrcodeTerminal = require('qrcode-terminal');
const MsgDao = require('../../db/Msg');
const config = require('../../config');

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

    if (config.knownGroups.includes(groupName)) {
      await MsgDao.addMsgOfGroup({
        groupName, text, from, date,
      });
      console.log('msg saved to db', groupName, text, from, date);
    }

  }
});
