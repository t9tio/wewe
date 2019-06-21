const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const next = require('next');

const Group = require('../db/Group');
const Msg = require('../db/Msg');
const GroupMember = require('../db/GroupMember');
const { pageMsgCount } = require('../config');
const validator = require('../services/validator');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
});
const handle = nextApp.getRequestHandler();

const app = express();

nextApp.prepare().then(() => {
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/', async (req, res) => {
    const groups = await Group.getAll();
    nextApp.render(req, res, '/index', { groups });
  });

  // cat history of today
  app.get('/chat/:name', async (req, res) => {
    const { name } = req.params;
    const group = await Group.get({ name });
    if (!group) {
      res.status(404);
      return;
    }

    const totalPageCount = Math.ceil(group.msgCount / pageMsgCount);
    // console.log(totalPageCount);
    let msgs = await Msg.getRange({
      groupName: name,
      idOffset: (totalPageCount - 1) * pageMsgCount,
      idLimit: pageMsgCount,
    });

    // potential bug: more than 100 member of a group
    const members = await GroupMember.getAllMemberNames({
      groupName: name,
    });

    // console.log(members);
    msgs = msgs.map((msg) => {
      if (members.includes(msg.from)) {
        msg.isKnownMember = true;
      }
      return msg;
    });

    nextApp.render(req, res, '/chat', {
      group, msgs, totalPageCount, currentPage: totalPageCount,
    });
  });

  app.get('/chat/:name/page/:page', async (req, res) => {
    const { name, page } = req.params;
    const group = await Group.get({ name });
    if (!group) {
      res.status(404);
      return;
    }

    const totalPageCount = Math.ceil(group.msgCount / pageMsgCount);

    let msgs = await Msg.getRange({
      groupName: name,
      idOffset: (page - 1) * pageMsgCount,
      idLimit: pageMsgCount,
    });

    // potential bug: more than 100 member of a group
    const members = await GroupMember.getAllMemberNames({
      groupName: name,
    });

    // console.log(members);
    msgs = msgs.map((msg) => {
      if (members.includes(msg.from)) {
        msg.isKnownMember = true;
      }
      return msg;
    });

    // console.log(msgs);
    nextApp.render(req, res, '/chat', {
      group, msgs, totalPageCount, currentPage: page,
    });
  });

  app.get('/chat/:groupName/members', async (req, res) => {
    const { groupName } = req.params;
    const group = await Group.get({ name: groupName });
    const members = await GroupMember.getAllMembers({ groupName });

    nextApp.render(req, res, '/members', {
      group, members,
    });
  });

  app.get('/chat/:groupname/member/:username', async (req, res) => {
    const { groupname, username } = req.params;
    const groupMember = await GroupMember.get({ groupName: groupname, name: username });
    if (!groupMember) {
      res.status(404);
      return;
    }

    res.json(groupMember);
    // nextApp.render(req, res, '/chat', {
    //   group, msgs, totalPageCount, currentPage: page,
    // });
  });

  app.get('/join', async (req, res) => {
    nextApp.render(req, res, '/join');
  });

  // APIs
  app.post('/groupmember/add', async (req, res) => {
    const {
      groupName,
      name,
      email,
      url,
      intro,
      date,
    } = req.body;

    const valRes = validator.memberInfo({
      groupName,
      name,
      email,
      url,
      intro,
      date,
    });

    if (valRes.success === false) {
      res.status(400).json(valRes);
      return 0;
    }

    const currentMember = await GroupMember.get({ groupName, name });
    if (currentMember) {
      res.status(400).json('Member already exist, contact support if other person takes your name');
      return 0;
    }

    await GroupMember.put({
      groupName,
      name,
      email,
      url,
      intro,
      date,
    });

    res.json('ok');
  });

  app.get('*', (req, res) => handle(req, res));

  const { PORT = 8080 } = process.env;
  app.listen(PORT);
  console.log(`server running on http://localhost:${PORT}`);
});
