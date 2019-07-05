import { useState } from 'react';
import './ChatHero.scss';
import axios from 'axios';
import validator from '../../services/validator';

function ChatHero({
  group: {
    name: groupName,
    description: groupDesc,
    type: groupType,
  },
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    groupName,
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
      window.location.href = `/chat/${groupName}/members`;
    } catch (error) {
      alert(error.response.data);
    }
  };

  let iconClass = 'fab fa-weixin';
  if (groupType === 'slack') iconClass = 'fab fa-slack';

  return (
    <div>
      <div className="chat-hero">
        <p className="title is-5">
          <a href={`/chat/${groupName}`}>
            <i className={iconClass} />
            &nbsp;
            {groupName}
          </a>
        </p>
        <p className="subtitle is-6">
          {groupDesc}
          &nbsp;
          <a href className="tag is-small is-success" onClick={() => setIsModalVisible(true)}>
            I&apos;m a member of this group
          </a>
        </p>
      </div>

    </div>
  );
}

export default ChatHero;
