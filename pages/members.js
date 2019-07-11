import { useState } from 'react';
import axios from 'axios';
import Linkify from 'linkifyjs/react';
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatTabs from './components/ChatTabs';
import './members.scss';
import ChatHero from './components/ChatHero';
import AdCard from './components/AdCard';
import validator from '../services/validator';



const MemberList = ({ members }) => members.sort((a, b) => a.date - b.date).map(member => (
  <div className="media members-media">
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{member.name}</strong>
          &nbsp;
          {
            member.url ? (
              <Linkify>
                <small>
                  <span className="icon has-text-info">
                    <i className="fas fa-home" />
                  </span>
                  {member.url}
                </small>

              </Linkify>
            ) : ''
          }
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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    groupName: group.name,
    name: undefined,
    email: undefined,
    url: undefined,
    intro: undefined,
  });

  const onNameChange = e => setMemberInfo({ ...memberInfo, name: e.target.value });
  const onEmailChange = e => setMemberInfo({ ...memberInfo, email: e.target.value });
  const onUrlChange = e => setMemberInfo({ ...memberInfo, url: e.target.value });
  const onIntroChange = e => setMemberInfo({ ...memberInfo, intro: e.target.value });

  // TODO: spin submit button
  const submit = async () => {
    const {
      name, email, url, intro,
    } = memberInfo;
    const valRes = validator.memberInfo({
      name, email, url, intro,
    });
    if (valRes.success !== true) {
      alert(valRes.msg);
      return;
    }
    try {
      await axios.post('/groupmember/add', {
        ...memberInfo,
        date: new Date().getTime(),
      });
      window.location.href = `/chat/${group.name}/members`;
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div>
      <Head title={group.name} description={group.description} />
      <Nav groupName={group.name} searchUrl={`wewe.t9t.io/chat/${encodeURIComponent(group.name)}`} />
      <div className="members-section section">
        <div className="container">
          <div className="columns">
            <div className="members-column column is-four-fifths">
              <ChatHero group={group} />
              <ChatTabs groupName={group.name} focusedTab="members" />
              <div>
                &nbsp;
                {
                  group.type === 'wechat' ? (
                    <a href className="member-btn button is-small is-success" onClick={() => setIsModalVisible(true)}>
                    I&apos;m a member of this group
                    </a>
                  ) : ''
                }
              </div>
              <MemberList members={members} />
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
              认领你在「&nbsp;
              {group.name}
              &nbsp;」的独到见解
            </p>
            <hr />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Wechat Name</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <input className="input is-dark" onChange={e => onNameChange(e)} />
                  <p className="help has-text-grey-light">Your messages will be higlighted</p>
                </div>

              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <input className="input is-dark" type="email" onChange={e => onEmailChange(e)} />
                  <p className="help has-text-grey-light">
                    Be notified of verification result and updates on wewe (
                    <span className="has-text-danger">Private</span>
                    )
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">About you</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input is-dark" placeholder="Brief introduction of yourself" onChange={e => onIntroChange(e)} />
                  </div>
                  <p className="help has-text-grey-light">This will show up in your home page on wewe</p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">URL</label>
              </div>
              <div className="field-body">
                <div className="field ">
                  <p className="control is-expanded has-icons-left">
                    <input className="input" type="url" placeholder="e.g. https://t9t.io (optional)" onChange={e => onUrlChange(e)} />
                    <span className="icon is-small is-left">
                      <i className="fas fa-link" />
                    </span>
                  </p>
                  <p className="help has-text-grey-light">The link you want to share (social media account/blog/your product etc.)</p>
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
                    <button className="button is-success" type="button" onClick={submit}>
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
    group, members,
  },
}) => ({
  group, members,
});

export default Index;
