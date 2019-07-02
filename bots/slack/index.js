const { WebClient } = require('@slack/web-api');

// Read a token from the environment variables
const token = 'xoxp-369402001654-508067868801-670441994593-f5c918bc32fb2df2b3439a7c77099fa1';

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
