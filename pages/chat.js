import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WechatMsg from './components/WechatMsg';
import SlackMsg from './components/SlackMsg';
import './chat.scss';
import ChatTabs from './components/ChatTabs';
import ChatHero from './components/ChatHero';
import AdCard from './components/AdCard';

const Index = (props) => {
  const {
    group, msgs, totalPageCount, currentPage,
  } = props;


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [topicTitle, setTopicTitle] = useState('');
  const [topicDesc, setTopicDesc] = useState('');
  const [password, setPassword] = useState('');
  const [topicMsg, setTopicMsg] = useState({});

  const addTopic = async () => {
    await axios.post('/api/topics/add', {
      groupName: group.name,
      from: topicMsg.from,
      title: topicTitle,
      date: topicMsg.date,
      msgRange: [topicMsg.id],
      description: topicDesc || undefined,
      type: 'wechat',
      password,
    });

    window.location.href = `/chat/${group.name}/topics`;
  };


  const Msgs = () => {
    if (group.type === 'wechat') {
      return (
        <div className="msg-container">
          {
            msgs.map(msg => (
              <div>
                <div className="is-pulled-right dropdown is-hoverable is-right">
                  <a className="dropdown-trigger" href>
                    ...
                  </a>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a
                        href
                        className="dropdown-item"
                        onClick={() => {
                          setIsModalVisible(true);
                          setTopicTitle(msg.text);
                          setTopicMsg(msg);
                        }}
                      >
                        Add to topics
                      </a>
                    </div>
                  </div>
                </div>
                <WechatMsg
                  id={msg.id}
                  text={msg.text}
                  from={msg.from}
                  date={msg.date}
                  link={msg.link}
                  type={msg.type}
                  isKnownMember={msg.isKnownMember}
                  groupName={group.name}
                />
              </div>
            ))
          }
        </div>
      );
    } if (group.type === 'slack') {
      return (
        <div className="msg-container">
          {
            msgs.filter(msg => !msg.thread_ts || msg.replies).map(msg => (
              <SlackMsg
                msg={msg}
              />
            ))
          }
        </div>
      );
    }
  };

  return (
    <div>
      <Head title={group.name} description={group.description} />
      <Nav groupName={group.name} searchUrl={`wewe.t9t.io/chat/${encodeURIComponent(group.name)}`} />

      <div className="chat-section section">
        <div className="container">
          <div className="columns">
            <div className="column is-four-fifths ">
              <ChatHero group={group} />
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
                <Msgs />
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


      <div className={`modal ${isModalVisible ? 'is-active' : ''}`}>
        <div className="modal-background" role="presentation" onClick={() => setIsModalVisible(false)} />
        <div className="modal-content box">
          <div className="">
            <p className="title is-5 has-text-centered">
              This message is the starting point of a valuable topic
            </p>
            <hr />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Topic title</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <input className="input is-dark" onChange={e => setTopicTitle(e.target.value)} value={topicTitle} />
                  <p className="help has-text-grey-light">
                    (Required) This message will be the title of the topic if not filled
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Description</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <textarea className="input" onChange={e => setTopicDesc(e.target.value)} />
                  <p className="help has-text-grey-light">
                    (Optional)
                  </p>
                </div>
              </div>
            </div>


            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Password</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <input className="input is-dark" type="password" onChange={e => setPassword(e.target.value)} />
                  <p className="help has-text-grey-light">
                    (Required) Used to validate your identity
                  </p>
                </div>
              </div>
            </div>


            <div className="field is-horizontal">
              <div className="field-label">
              &nbsp;
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button className="button is-success" type="button" onClick={addTopic}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="modal-close is-large" aria-label="close" onClick={() => setIsModalVisible(false)} />
      </div>
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
