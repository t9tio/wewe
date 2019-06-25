import chunk from 'lodash.chunk';
import ChatCard from './ChatCard';

const ChatCards = ({ groups }) => {
  const chunkedChats = chunk(groups, 3);
  const cards = chunkedChats.map(threeChats => (
    <div className="columns">
      {
        threeChats.map(group => (
          <div className="column is-4 is-flex">
            <ChatCard
              name={group.name}
              description={group.description}
              logoUrl={group.logoUrl}
              userCount={group.userCount}
              type={group.type}
              msgCount={group.msgCount}
              topicCount={group.topicCount}
            />
          </div>
        ))
      }
    </div>
  ));

  return cards;
};

export default ChatCards;
