const ChatCard = ({
  id, name, logoUrl, description, userCount, type,
}) => (
  <div className="box group-box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={logoUrl} alt="logo" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <a href={`/chat/${id}`}><strong>{name}</strong></a>
          <p>
            {description}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item" aria-label="reply">
              <span className="icon is-small">
                <i className="fas fa-reply" aria-hidden="true" />
              </span>
            </a>
            <a className="level-item" aria-label="retweet">
              <span className="icon is-small">
                <i className="fas fa-retweet" aria-hidden="true" />
              </span>
            </a>
            <a className="level-item" aria-label="like">
              <span className="icon is-small">
                <i className="fas fa-heart" aria-hidden="true" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </div>
);

export default ChatCard;
