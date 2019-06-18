import ReactPaginate from 'react-paginate';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Msg from './components/Msg';
import './chat.scss';

class Index extends React.Component {
  static async getInitialProps({
    query: {
      group, msgs, totalPageCount, currentPage,
    },
  }) {
    return {
      group, msgs, totalPageCount, currentPage,
    };
  }

  render() {
    const {
      group, msgs, totalPageCount, currentPage,
    } = this.props;

    return (
      <div>
        <Head title={group.name} description={group.description} />
        <Nav />
        <div className="chat-section section">
          <br />
          <div className="container">

            <div className="columns">
              <div className="column is-four-fifths ">
                <div className="">
                  <p className="title is-5">
                    <a href={`/chat/${group.name}`}>
                      <i className="fab fa-weixin has-text-success" />
                      &nbsp;
                      {group.name}
                    </a>
                  </p>
                  <p className="subtitle is-6">{group.description}</p>
                  <div className="tabs">
                    <ul>
                      <li className="is-active"><a href={`/chat/${group.name}`}>Messages</a></li>
                      <li><a>Live</a></li>
                      <li><a>Events</a></li>
                      <li><a>Members</a></li>
                      <li><a>Topics</a></li>
                      <li><a>Statistics</a></li>
                    </ul>
                  </div>
                </div>


                <div className="msg-section">
                  <ReactPaginate
                    pageCount={totalPageCount}
                    initialPage={currentPage - 1}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    previousLabel="←"
                    nextLabel="→"
                    containerClassName="paginate-container"
                    pageLinkClassName="button is-white is-small"
                    previousLinkClassName="button is-white is-small"
                    nextLinkClassName="button is-white is-small"
                    breakLinkClassName="button is-white is-small"
                    disabledLinkClassName="button is-white is-small disabled"
                    activeLinkClassName="is-dark active-link-mark"
                    hrefBuilder={num => `./${num}`}
                    // to enable redirect
                    // ref: https://github.com/AdeleD/react-paginate/issues/213
                    onPageChange={({ selected }) => {
                      if (selected !== currentPage - 1) {
                        setTimeout(() => {
                          document.querySelector('.active-link-mark').classList.remove('is-dark');
                          document.querySelector('.active-link-mark').classList.add('is-loading');
                          window.location = `/chat/${group.name}/page/${selected + 1}`;
                        }, 0);
                      }
                    }}
                  />
                  <div className="msg-container">
                    {
                      msgs.map(msg => (
                        <Msg
                          id={msg.id}
                          text={msg.text}
                          from={msg.from}
                          date={msg.date}
                          link={msg.link}
                          type={msg.type}
                        />
                      ))
                    }
                  </div>
                  <ReactPaginate
                    pageCount={totalPageCount}
                    initialPage={currentPage - 1}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    previousLabel="←"
                    nextLabel="→"
                    containerClassName="paginate-container"
                    pageLinkClassName="button is-white is-small"
                    previousLinkClassName="button is-white is-small"
                    nextLinkClassName="button is-white is-small"
                    breakLinkClassName="button is-white is-small"
                    disabledLinkClassName="button is-white is-small disabled"
                    activeLinkClassName="is-dark active-link-mark-2"
                    hrefBuilder={num => `./${num}`}
                    // to enable redirect
                    // ref: https://github.com/AdeleD/react-paginate/issues/213
                    onPageChange={({ selected }) => {
                      if (selected !== currentPage - 1) {
                        setTimeout(() => {
                          document.querySelector('.active-link-mark-2').classList.remove('is-dark');
                          document.querySelector('.active-link-mark-2').classList.add('is-loading');
                          window.location = `/chat/${group.name}/page/${selected + 1}`;
                        }, 0);
                      }
                    }}
                  />
                </div>
                <br />

              </div>
              <div className="column">
                <div className="card ad-card">
                  <div className="card-image">
                    <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi">
                      <figure className="image">
                        <img src="https://raw.githubusercontent.com/timqian/images/master/tomatopie-header.gif" alt="Placeholder" />
                      </figure>
                    </a>
                  </div>
                  <div className="content has-text-centered">
                    <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi"><strong>tomato-pie</strong></a>
                    <br />
                    <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi">Peek into your working status with ease.</a>
                  </div>
                  <a className="chat-ads-card" href="/advertise"><small>Ad</small></a>
                </div>
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
