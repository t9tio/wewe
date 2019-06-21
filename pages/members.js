import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatTabs from './components/ChatTabs';
import './members.scss';

const MemberList = ({ members }) => members.map((member) => {
  if (member.url || member.intro) {
    return (
      <div className="media">
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
    );
  }


});

const Index = (props) => {
  const {
    group, members,
  } = props;


  return (
    <div>
      <Head title={group.name} description={group.description} />
      <Nav />
      <div className="members-section section">
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
                <p className="subtitle is-6">
                  {group.description}
                  &nbsp;
                  <a href="https://jinshuju.net/f/hgoWO3" className="tag is-small is-success">I'm a member of this group</a>
                </p>

                <ChatTabs groupName={group.name} focusedTab="members" />


                <MemberList members={members} />

                <br />

              </div>
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
