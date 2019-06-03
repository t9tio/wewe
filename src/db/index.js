const knex = require('./knex');


const getGroups = () => knex('groups').select('*');

const getGroupById = async (id) => {
  const res = await knex('groups').where({ id });
  return res[0];
};

const getGroupIdByGroupName = async (groupName) => {
  const groups = await knex('groups').where({ name: groupName });
  if (groups[0]) return groups[0].id;
  return null;
};


const insertMsg = async ({
  groupId, groupName, text, from, date,
}) => {
  const insertRes = await knex('msgs')
    .insert({
      groupId, groupName, text, from, date,
    });

  const id = insertRes[0];

  return id;
};

const getMsgsByGroupId = async (groupId) => {
  const msgs = await knex('msgs')
    .where({ groupId });
  return msgs;
};

module.exports = {
  getGroups,
  getGroupIdByGroupName,
  getGroupById,
  insertMsg,
  getMsgsByGroupId,
};
