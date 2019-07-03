import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './join.scss';

const Index = () => (
  <div>
    <Head title="Join wewe" description="Build wewe together" />
    <Nav />
    <div className="section">
      <div className="container has-text-centered">

        <h1 className="title">
          Open your awesome group chat to the world
        </h1>
        <br />
        <br />
        <div className="columns">
          <div className="column">

            <h2 className="title is-5">
            Wechat: 备注 "join wewe"
            </h2>

            <figure className="image container join-img">
              <img src="https://raw.githubusercontent.com/timqian/images/master/20190703160423.png" />
            </figure>
          </div>
          <div className="column">
            <h2 className="title is-5">
              Slack: click the img blow
            </h2>
            <figure className="image container join-img">
              <a href="https://join.slack.com/t/t9tio/shared_invite/enQtNjgzMzkwMDM0NTE3LTE5ZTUzYjU4Y2I0YzRiZjNkYTkzMzE1ZmM0NDdmYzRlZmMxNGY1MzZlN2EwYjYyNWVlMWY0Nzk2MDBhNWZlY2I">
                <img src="https://raw.githubusercontent.com/timqian/images/master/20190703113351.png" />
              </a>
            </figure>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
