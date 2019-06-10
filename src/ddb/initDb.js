const Group = require('./Group');

async function initDb() {
  try {
    await Group.deleteTable();
  } catch (error) {
    console.log(error.message);
  }
  await Group.createTable();

  // init data
  await Group.put({
    githubId: '1212',
    username: 'timqian',
    email: 'timqian92@qq.com',
    photo: 'aa',
  });
  const item = await Group.get({
    githubId: '1212',
  });

  console.log(item);
}

initDb();
