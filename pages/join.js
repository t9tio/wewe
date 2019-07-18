import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './join.scss';

const Index = () => (
  <div>
    <Head title="Join wewe" description="Build wewe together" />
    <Nav />
    <div className="section">
      <div className="container ">
        <h1 className="title">
          How to open your awesome group chat to the world
        </h1>
        <h2 className="title is-5">
          Slack
        </h2>
        <p>Install the following slack app to your workspace</p>
        <a href="https://slack.com/oauth/authorize?client_id=672803813953.674350337970&scope=channels:history,channels:read,chat:write:bot,team:read,users.profile:read">
          <img
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>

        <br />
        <br />
        <br />

        <h2 className="title is-5">
          Wechat
        </h2>
          Invite me to your group chat
        <figure className="image join-img">
          <img src="https://raw.githubusercontent.com/timqian/images/master/20190703160423.png" />
        </figure>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <Footer />
  </div>
);

export default Index;
