import ReactPaginate from 'react-paginate';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Msg from './components/Msg';
import './chat.scss';
import ChatTabs from './components/ChatTabs';
import ChatHero from './components/ChatHero';
import AdCard from './components/AdCard';

const Index = (props) => {
  const {
    group, msgs, totalPageCount, currentPage,
  } = props;


  return (
    <div>
      <Head title={group.name} description={group.description} />
      <Nav />

      <div className="chat-section section">
        <div className="container">
          <div className="columns">
            <div className="column is-four-fifths ">
              <ChatHero groupName={group.name} groupDesc={group.description} />
              <ChatTabs groupName={group.name} focusedTab="messages" />

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
                  hrefBuilder={num => `/chat/${group.name}/page/${num}`}
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
                        isKnownMember={msg.isKnownMember}
                        groupName={group.name}
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
                  hrefBuilder={num => `/chat/${group.name}/page/${num}`}
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
              <AdCard />
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

// load data from server (or in browser if nav using Link)
// ref: https://stackoverflow.com/a/52136943/4674834
Index.getInitialProps = async ({
  query: {
    group, msgs, totalPageCount, currentPage,
  },
}) => ({
  group, msgs, totalPageCount, currentPage,
});

export default Index;
