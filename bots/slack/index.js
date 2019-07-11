const { WebClient } = require('@slack/web-api');
const { t9tSlackToken } = require('../../secret.json');

// https://api.slack.com/apps/AKUAA9XUJ/install-on-team?
const token = t9tSlackToken;

// Initialize
const web = new WebClient(token);

(async () => {
  const result = await web.api.test();

  console.log(result);

  const res2 = await web.channels.list();
  const channel = res2.channels.find(channel => channel.name = 'general');
  const history = await web.channels.history({ channel: channel.id });
  console.log(JSON.stringify(history, 2, null));
  // const user = await web.users.info({ user: 'UEY1ZRJPK' });
  // console.log(user);
})();
