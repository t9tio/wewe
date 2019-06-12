const Group = require('./Group');
const Msg = require('./Msg');

async function initDb() {
  try {
    await Group.deleteTable();
    await new Promise(r => setTimeout(r, 2000));
  } catch (error) {
    console.log(error.message);
  }
  await Group.createTable();

  try {
    await Msg.deleteTable();
    await new Promise(r => setTimeout(r, 2000));
  } catch (error) {
    console.log(error.message);
  }
  await Msg.createTable();
}

initDb();
