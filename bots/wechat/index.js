const { Wechaty } = require('wechaty');
const qrcodeTerminal = require('qrcode-terminal');
const MsgDao = require('../../db/Msg');
const GroupDao = require('../../db/Group');
const TopicDao = require('../../db/Topics');

const s3 = require('../services/s3');

GroupDao.getAll().then(async (groups) => {
  const knownGroups = groups.map(group => group.name);
  console.log(knownGroups);

  const bot = Wechaty.instance();

  bot.start();

  bot.on('scan', (url, status) => {
    const loginUrl = url.replace(/\/qrcode\//, '/l/');
    qrcodeTerminal.generate(loginUrl);
    console.log(status);
  });

  bot.on('login', user => console.log(`User ${user} logined`));

  bot.on('message', async (message) => {
    try {
    // console.log(`Message: ${message}`);
      const room = await message.room();

      if (room) {
        const groupName = await room.topic();

        // TODO: get groups from db
        if (knownGroups.includes(groupName)) {
          const from = await message.from().name();
          const rawDate = await message.date();
          const date = new Date(rawDate).getTime();
          // MessageType.Unknown
          // MessageType.Attachment
          // MessageType.Audio
          // MessageType.Contact
          // MessageType.Emoticon
          // MessageType.Image
          // MessageType.Text
          // MessageType.Video
          // MessageType.Url
          const type = await message.type();
          if (knownGroups.includes(from) && type !== bot.Message.Type.Recalled) return;
          if (type === bot.Message.Type.Audio || type === bot.Message.Type.Video || type === bot.Message.Type.Image) {
            const filebox = await message.toFileBox();
            const filename = filebox.name;
            const fileStream = await filebox.toBuffer();
            const link = await s3.uploadToS3AndGetUrl(fileStream, groupName, filename);
            await MsgDao.addMsgOfGroup({
              groupName, from, date, type, link,
            });
            console.log('msg saved to db', groupName, from, date, type, link);
          } else if (type === bot.Message.Type.Recalled) {
            const recalledMsg = await message.toRecalled();
            await MsgDao.addMsgOfGroup({
              groupName,
              text: recalledMsg.text(),
              from: recalledMsg.from().name(),
              date,
              type,
            });
            console.log('msg saved to db', groupName, recalledMsg.text(), recalledMsg.from().name(), type);
          } else {
            const text = await message.text();
            const msgId = await MsgDao.addMsgOfGroup({
              groupName, text, from, date, type,
            });
            if (text.includes('#topic')) {
              await TopicDao.add({
                groupName,
                from,
                title: text,
                date,
                msgRange: [msgId],
                type:'wechat',
              });
            }
            console.log('msg saved to db', groupName, text, from, date, type);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  });
});
