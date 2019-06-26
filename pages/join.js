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
        <h1 className="title is-5">
          Wewe is in beta stage now, join the wechat group to discuss about her future or open your group chat to the world
        </h1>

        <figure className="image container join-img">
          <img src="https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg" />
        </figure>
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
