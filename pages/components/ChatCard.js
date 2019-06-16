import './ChatCard.scss';
import { abbreviateNumber } from '../utils';

const ChatCard = ({
  name, logoUrl, description, userCount, type, msgCount,
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

            <div className="level-item chatcard-member-count" aria-label="members">
              <span className="icon">
                <i className="fas fa-comment" />
              </span>
              {abbreviateNumber(msgCount)}
            </div>

            <div className="level-item chatcard-member-count" aria-label="members">
              <span className="icon">
                <i className="fas fa-user-alt" />
              </span>
              {userCount}
            </div>
            <div className="level-item chatcard-member-count" aria-label="type">
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
