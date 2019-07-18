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
         Thanks for joining wewe👏
        </h1>
        <h2 className="title is-4">One more step</h2>
        <p>
          Invite
          {' '}
          <a href="mailto:timqian92@qq.com">timqian92@qq.com</a>
          {' '}
          to your slack group so that we can check if your group is suitable to be opened.
        </p>
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
