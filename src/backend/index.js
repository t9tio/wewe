const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const next = require('next');
const path = require('path');
const db = require('../db');
// const UserDao = require('../db/User');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  // dir: path.join(__dirname, './pages'),
});
const handle = nextApp.getRequestHandler();

const app = express();

nextApp.prepare().then(() => {
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/', async (req, res) => {
    const groups = await db.getGroups();
    nextApp.render(req, res, '/index', { groups });
  });

  // cat history of today
  app.get('/chat/:idStr', async (req, res) => {
    const { idStr } = req.params;
    const id = Number(idStr);
    if (Number.isNaN(id)) {
      res.status(404);
      return;
    }
    const group = await db.getGroupById(id);
    const msgs = await db.getMsgsByGroupId(id);
    console.log(msgs)
    nextApp.render(req, res, '/chat', { group, msgs });
  });

  app.get('*', (req, res) => handle(req, res));

  const { PORT = 8080 } = process.env;
  app.listen(PORT);
  console.log(`server running on http://localhost:${PORT}`);
});
