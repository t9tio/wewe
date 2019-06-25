# wewe

Open group chat messages to the world

## Develop

```bash
# reinitialize tables
npm run initDb

# start the web server
npm run sb

# start wechat bot
npm run sw

# deploy the website
npm run deploy
```

### prepare new instance on aws to deploy wechat bot

```bash
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source ~/.bashrc

# install stable nodejs
nvm install node
node -v

# prepare repo to start the bot
git clone https://github.com/t9tio/wewe.git
cd wewe
npm i
cd bots/wechat
npm i
cd ../..
vim secret.json # add secret config
sudo apt-get update # prepare dependencies of wechaty
sudo apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
tmux new -s bot # start mux
npm run sw

# Detach from session:
ctrl+b d
```

refs:
- [tmux cheat sheet](https://github.com/timqian/my-notes/issues/191)
- [wechaty on ubnutu](https://github.com/Chatie/wechaty/issues/1515#issuecomment-503364700)