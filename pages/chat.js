import './chat.scss';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Msg from './components/Msg';

class Index extends React.Component {
  static async getInitialProps({ query: { group, msgs } }) {
    return { group, msgs };
  }

  render() {
    const { group, msgs } = this.props;

    return (
      <div>
        <Head />
        <Nav />
        <div className="section chat-section">
          {/* <h1 className="title is-2">
            <a href="/" className="chat-head-title">wewe</a>
          </h1> */}
          <div className="container chat-container">
            <div className="columns">
              <div className="column chat-sidebar">
                <div className="chat-desc">
                  <p className="title is-3">{group.name}</p>
                  <p className="subtitle is-6">{group.description}</p>
                  <p>2019-06-01</p>
                </div>
              </div>
              <div className="column is-four-fifths msg-container">
                <p className="has-text-centered">
                  <a className="button is-rounded is-inverted is-outlined">
                    Earlier messages
                    &nbsp;
                    <i className="fas fa-chevron-up" />
                  </a>
                </p>
                {
                  msgs.map(msg => (
                    <Msg
                      id={msg.id}
                      text={msg.text}
                      from={msg.from}
                      date={msg.date}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
