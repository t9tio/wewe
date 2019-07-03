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
        <div className="columns">
          <div className="column">

            <h1 className="title is-5">
            Wechat: 备注 "join wewe"
            </h1>

            <figure className="image container join-img">
              <img src="https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg" />
            </figure>
          </div>
          <div className="column">
            <h1 className="title is-5">
              Slack: click the img blow
            </h1>
            <figure className="image container join-img">
              <a href="https://join.slack.com/t/t9tio/shared_invite/enQtNjgzMzkwMDM0NTE3LTE5ZTUzYjU4Y2I0YzRiZjNkYTkzMzE1ZmM0NDdmYzRlZmMxNGY1MzZlN2EwYjYyNWVlMWY0Nzk2MDBhNWZlY2I">
                <img src="https://raw.githubusercontent.com/timqian/images/master/20190703113351.png" />
              </a>
            </figure>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
