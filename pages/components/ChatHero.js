import './ChatHero.scss';

function ChatHero({
  group: {
    name: groupName,
    description: groupDesc,
    type: groupType,
  },
}) {
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
        </p>
      </div>

    </div>
  );
}

export default ChatHero;
