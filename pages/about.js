import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './about.scss';

const Index = () => (
  <div>
    <Head title="About wewe" description="What is wewe and why I build it" />
    <Nav />
    <div className="section" style={{ paddingTop: '1.8rem' }}>
      <div className="container content about-content">
        <h1 className="title">
          What is wewe and why I build it
        </h1>

        <p className="subtitle is-7 has-text-grey">
          Updated on 2019-07-17 by
          {' '}
          <a href="https://twitter.com/tim_qian">timqian</a>
        </p>

        <p>Wewe is a tool used to sync group chat message to the open web.</p>

        <h3>Core values of wewe</h3>

        <ul className="about-ul">
          <li>
            Open group chat to the internet
          </li>
          <li>
            Search engine friendly
          </li>
          <li>
            Aggregate Topics
          </li>
        </ul>

        <h3>Why I build it</h3>
        <p>
          Several weeks ago, I started doing a
          {' '}
          <a href="https://blog.t9t.io/transparent-startup-experiment-2019-05-20/">transparent startup experiment(Chinese)</a>
          {' '}
          and created
          {' '}
          <a href="/chat/t9t.io community">a wechat group</a>
          {' '}
          for people who are interested in it.

        </p>

        <p>
          To my surprise, more than 500 people joined the group and we got some interesting disscussions in the group.
          However the disscussions are only visible to the group members, people outsite the group might also find useful info from the chat history, but they never got the opportunity.
          And every group chat has this issue, no matter it is wechat group, slack group or telegram group.
          There is a giant amount of information hidden inside group chat and people outside that small group might find it useful.
          I think it will be great if there is a tool can bring the valuable/meaningless info to the open internet.
        </p>
        <p>
          I explored some mainstream group chat tools, no tool can sync chat messages to the internet and make them accessible to search engine.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>group history</th>
              <th>open on the web</th>
              <th>search engine accessible</th>
              <th>topic extraction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>wechat</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
            </tr>
            <tr>
              <td>slack/tg</td>
              <td>✓</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
            </tr>
            <tr>
              <td>gitter</td>
              <td>✓</td>
              <td>✓</td>
              <td>✗</td>
              <td>✗</td>
            </tr>
          </tbody>
        </table>
        <p>
          So I start to build wewe.
        </p>

        <h3>How it works</h3>
        <h4>For slack group</h4>
        <p>
          I created a
          {' '}
          <a href="https://slack.com/oauth/authorize?client_id=672803813953.674350337970&scope=channels:history,channels:read,chat:write:bot,team:read,users.profile:read">slack app</a>
          , and after user install this app on their group, wewe can get messages from that group via slack API
        </p>
        <h4>For wechat group</h4>
        <p>
          I make use of
          {' '}
          <a href="https://github.com/Chatie/wechaty">wechaty</a>
          , which is an official wechat bot implementation, so group admin need to invite me into their group chat so that I can receive the messages from that group and record messages to database
        </p>

        <h4>Source code</h4>
        <p>
          As a product of
          {' '}
          <a href="t9t.io">t9t.io</a>
          , wewe is open sourced on
          {' '}
          <a href="https://github.com/t9tio/wewe">GitHub</a>
          , you can find the implementation details there.
        </p>

        <h3>Interested?</h3>
        <p><a className="button is-large is-dark is-outlined is-fullwidth" href="/join">Join wewe</a></p>
        <br />
        <br />
        <blockquote>
          This page is still under drafting 🔨 help me improve it by
          {' '}
          <a href="https://github.com/t9tio/wewe/blob/master/pages/about.js">edit this page</a>
        </blockquote>
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
