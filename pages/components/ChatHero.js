import './ChatHero.scss';

function ChatHero({
  group: {
    name: groupName,
    description = '',
    type: groupType,
  },
}) {
  let iconClass = 'fab fa-weixin';
  if (groupType === 'slack') iconClass = 'fab fa-slack';

  const groupDesc = description.split('||')[0];
  const link = description.split('||')[1];
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
          {
            link
              ? <a href={link}>更多介绍</a>
              : ''
          }
        </p>
      </div>

    </div>
  );
}

export default ChatHero;
