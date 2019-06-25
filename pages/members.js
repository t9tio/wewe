import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatTabs from './components/ChatTabs';
import './members.scss';
import ChatHero from './components/ChatHero';
import AdCard from './components/AdCard';

const MemberList = ({ members }) => members.map(member => (
  <div className="media members-media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{member.name}</strong>
              &nbsp;
          {member.url ? <a href={member.url}><small><i className="fas fa-home" /></small></a> : ''}
          <br />
          {member.intro ? <small>{member.intro}</small> : <small>&nbsp;</small>}
        </p>
      </div>
    </div>
  </div>
));

const Index = (props) => {
  const {
    group, members,
  } = props;


  return (
    <div>
      <Head title={group.name} description={group.description} />
      <Nav />
      <div className="members-section section">
        <div className="container">
          <div className="columns">
            <div className="members-column column is-four-fifths">
              <ChatHero groupName={group.name} groupDesc={group.description} />
              <ChatTabs groupName={group.name} focusedTab="members" />
              <MemberList members={members} />
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
    group, members,
  },
}) => ({
  group, members,
});

export default Index;
