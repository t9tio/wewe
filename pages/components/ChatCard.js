import './ChatCard.scss';
import { abbreviateNumber } from '../utils';

const ChatCard = ({
  name, logoUrl, description, userCount, type, msgCount, topicCount,
}) => (
  <div className="box group-box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <a href={`/chat/${name}`}><img src={logoUrl} alt="logo" /></a>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <a href={`/chat/${name}`}><strong>{name}</strong></a>
          <p>
            {description}
          </p>
        </div>
        <nav className="chatcard-status-nav level is-mobile">
          <div className="level-left">

            <a href={`/chat/${name}`} className="level-item chatcard-info-a" aria-label="msgs">
              <span className="icon">
                <i className="fas fa-comment" />
              </span>
              {abbreviateNumber(msgCount)}
            </a>

            <a href={`/chat/${name}/topics`} className="level-item chatcard-info-a" aria-label="topics">
              <span className="icon">
                <i className="fas fa-comments" />
              </span>
              {topicCount}
            </a>

            <a href={`/chat/${name}/members`} className="level-item chatcard-info-a" aria-label="user">
              <span className="icon">
                <i className="fas fa-user-alt" />
              </span>
              {userCount}
            </a>


            <div className="level-item chatcard-info-div" aria-label="type">
              <span className="icon">
                <i className="fab fa-weixin" />
              </span>
              {type}
            </div>
          </div>
        </nav>
      </div>
    </article>
  </div>
);

export default ChatCard;
