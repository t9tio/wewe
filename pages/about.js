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
          Created on 2019-06-26 by
          {' '}
          <a href="https://twitter.com/tim_qian">timqian</a>
        </p>
        <blockquote>
          This page is still under drafting 🔨 help me improve it by
          {' '}
          <a href="https://github.com/t9tio/wewe/blob/master/pages/about.js">edit this page</a>
        </blockquote>
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
          <a href="https://blog.t9t.io/transparent-startup-experiment-2019-05-20/">transparent startup experiment</a>
          {' '}
          and created
          {' '}
          <a href="/chat/t9t.io community">a wechat group</a>
          {' '}
          for people who are interested in it.

        </p>

        <p>
          To my surprise, more than 500 people joined the group and we got some interesting disscussions in the group.
          However the disscussions are only visible to the group members, people outsite the group might also find useful info from the chat history, but they never got the opptunity.
          And every group chat has this issue, no matter it is wechat group, slack group or telegram group.
          There is a giant amount of information hidden inside group chat and people outside that small group might find it useful.
          I think it will be great if there is a tool can bring the valuable/meaningless info to the open internet.
          So I start to build wewe.
        </p>

        <br />
        <br />
        <h4>Ref: Current group chat tools</h4>
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
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
