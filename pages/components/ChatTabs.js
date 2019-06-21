const Tabs = ({ groupName, focusedTab }) => (
  <div className="tabs">
    <ul>
      <li className={focusedTab === 'messages' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Messages</a></li>
      <li className={focusedTab === 'members' ? 'is-active' : ''}><a href={`/chat/${groupName}/members`}>Members</a></li>
      <li className={focusedTab === 'live' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Live</a></li>
      <li className={focusedTab === 'events' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Events</a></li>
      <li className={focusedTab === 'topic' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Topics</a></li>
      <li className={focusedTab === 'statics' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Statistics</a></li>
    </ul>
  </div>
);

export default Tabs;
