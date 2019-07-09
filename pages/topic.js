import dayjs from 'dayjs';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatTabs from './components/ChatTabs';
import ChatHero from './components/ChatHero';
import AdCard from './components/AdCard';
import Msg from './components/WechatMsg';
import './topic.scss';

const TopicComponent = ({ topic, msgs, group }) => {
  console.log(msgs.length);
  return (
    <div>
      <h1 className="title is-4">{topic.title}</h1>
      <p className="subtitle is-7 has-text-grey">
        collected on
        {' '}
        {dayjs((Number(topic.date))).format('YYYY-MM-DD')}
        {' '}
          by
        {' '}
        {topic.from}
      </p>
      {topic.description}
      <div className="topic-msg-container">
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
    </div>
  );
};

const Index = (props) => {
  const {
    group, topic, msgs,
  } = props;

  return (
    <div>
      <Head title={topic.title} />
      <Nav />
      <div
        className="section"
        style={{
          paddingTop: '1.5rem',
          minHeight: '75vh',
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-four-fifths ">
              <ChatHero group={group} />
              <ChatTabs groupName={group.name} focusedTab="topics" />
              <TopicComponent topic={topic} msgs={msgs} group={group} />
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
    group, topic, msgs,
  },
}) => ({
  group, topic, msgs,
});

export default Index;
