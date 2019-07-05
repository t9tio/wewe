import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatCards from './components/ChatCards';
import './index.scss';

class Index extends React.Component {
  static async getInitialProps({ query: { groups } }) {
    return { groups };
  }

  render() {
    const { groups } = this.props;


    return (
      <div>
        <Head title="wewe" description="open group chat to the world" />
        <Nav />
        <div className="chat-list-section">
          <div id="flow">
            <span className="flow-1" />
            <span className="flow-2" />
            <span className="flow-3" />
          </div>
          <div className="container has-text-centered">
            <h1 className="title head-title is-1 has-text-white">wewe</h1>
            <h2 className="subtitle has-text-white">
              Open group chat to the world
            </h2>
            <a href="/join">
              <img alt="Add group" src={`https://img.shields.io/badge/Join-${groups.length}-lightgrey.svg?style=social&&logo=stack-exchange&&logoColor=black`} />
            </a>
            &nbsp; &nbsp;
            <a href="https://github.com/t9tio/wewe">
              <img alt="GitHub stars" src="https://img.shields.io/github/stars/t9tio/wewe.svg?style=social" />
            </a>
          </div>

          <div className="section container">
            <ChatCards groups={groups.filter(group => group.logoUrl)} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
