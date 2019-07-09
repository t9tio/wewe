const Tabs = ({ groupName, focusedTab }) => (
  <div className="tabs">
    <ul>
      <li className={focusedTab === 'messages' ? 'is-active' : ''}><a href={`/chat/${groupName}`}>Messages</a></li>
      <li className={focusedTab === 'topics' ? 'is-active' : ''}><a href={`/chat/${groupName}/topics`}>Topics</a></li>
      <li className={focusedTab === 'members' ? 'is-active' : ''}><a href={`/chat/${groupName}/members`}>Members</a></li>
      {/* <li className={focusedTab === 'live' ? 'is-active' : ''}><a href onClick={() => alert('unfinshed, stay tuned')}>Live</a></li> */}
      {/* <li className={focusedTab === 'events' ? 'is-active' : ''}><a href onClick={() => alert('unfinshed, stay tuned')}>Events</a></li> */}
      {/* <li className={focusedTab === 'statics' ? 'is-active' : ''}><a href onClick={() => alert('unfinshed, stay tuned')}>Statistics</a></li> */}
    </ul>
  </div>
);

export default Tabs;
