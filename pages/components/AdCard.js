function AdCard() {
  return (
    <div className="card ad-card">
      <div className="card-image">
        <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi">
          <figure className="image">
            <img src="https://raw.githubusercontent.com/timqian/images/master/tomatopie-header.gif" alt="Placeholder" />
          </figure>
        </a>
      </div>
      <div className="content has-text-centered">
        <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi"><strong>tomato-pie</strong></a>
        <br />
        <a className="has-text-grey" href="https://chrome.google.com/webstore/detail/gffgechdocgfajkbpinmjjjlkjfjampi">Peek into your working status with ease.</a>
      </div>
      <a className="chat-ads-card" href="/advertise"><small>Ad</small></a>
    </div>
  );
}

export default AdCard;
