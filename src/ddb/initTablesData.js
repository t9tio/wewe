const Group = require('./Group');
const Msg = require('./Msg');


async function initDb() {
  // init groups
  await Group.put({
    name: 'wewe',
    description: 'Building wewe together',
    logoUrl: 'https://user-images.githubusercontent.com/5512552/58616555-87959580-82f0-11e9-8ac4-4045463f2f41.png',
    type: 'wechat',
  });

  await Group.put({
    name: 't9t.io community',
    description: 'Building transparent products together',
    logoUrl: 'https://raw.githubusercontent.com/timqian/images/master/font.png',
    type: 'wechat',
  });

  await Group.put({
    name: 'GraphQL 交流',
    description: 'GraphQL 中文交流群',
    logoUrl: 'https://raw.githubusercontent.com/timqian/images/master/font-graphql.png',
    type: 'wechat',
  });

  const item = await Group.get({
    name: 'wewe',
  });

  console.log('inserted group:', item);

  const items = await Group.getAll();
  console.log('group count:', items.length);

  // init msgs
  await Msg.addMsgOfGroup({
    groupName: 'wewe',
    text: 'test 消息 from initTablesData.js',
    from: 'timqian',
    date: new Date().getTime(),
  });

  for (let i = 0; i < 140; i++) {
    await Msg.addMsgOfGroup({
      groupName: 'wewe',
      text: `test ${i} from initTablesData.js`,
      from: 'timqian' + i,
      date: new Date().getTime(),
    });
  }


  const group1 = await Group.get({ name: 'wewe' });
  const msgsOfGroup1 = await Msg.getRange({
    groupName: 'wewe',
    idOffset: 0,
    idLimit: 10,
  });
  console.log('group after inserted msgs: ', group1);
  console.log('msgs in group:', msgsOfGroup1);
}

initDb();
