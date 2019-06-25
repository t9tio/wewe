import { format } from 'timeago.js';

import './Msg.scss';
import { useState } from 'react';
import { maskName } from '../utils';

const Msg = ({
  id, text, from, date, link, type, isKnownMember, groupName,
}) => {
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);


  let msgDiv;
  if (type === 7 && text) {
    const fixedText = text
      .replace(/<a.*?>/gi, '')
      .replace(/<\/a>/gi, '')
      .replace(/<br\/>/gi, '\n')
      // TODO: better emoji support
      .replace(/<img class="qqemoji.*?\/>/gi, '[emoji]')
      .replace(/<img class="emoji.*?\/>/gi, '[emoji]');

    msgDiv = (
      <p className="chat-message">
        {fixedText}
      </p>
    );
  } else {
    msgDiv = (
      <div className="chat-msg-img">
        <a
          href
          style={{ cursor: 'zoom-in' }}
          onClick={() => {
            setModalImgSrc(link);
            setIsModalVisible(true);
          }}
        >
          <img className="msg-img" src={link} alt="chat img" />
        </a>
      </div>
    );
  }

  return (
    <div className="">

      <div className={`modal ${isModalVisible ? 'is-active' : ''}`}>
        <div className="modal-background" role="presentation" onClick={() => setIsModalVisible(false)} />
        <div className="modal-content">
          <p className="image">
            <img src={modalImgSrc} alt="chat img" />
          </p>
        </div>
        <button type="button" className="modal-close is-large" aria-label="close" onClick={() => setIsModalVisible(false)} />
      </div>

      <span className="msg-from">
        {
          isKnownMember
            ? <a href={`/chat/${groupName}/member/${from}`}><strong>{from}</strong></a>
            : `u-${maskName(from)}`
        }
        &nbsp;
        <a className="msg-from-time" href={`#${id}`}>
          <small>{format(Number(date))}</small>
        </a>
      </span>

      <br />
      {msgDiv}
    </div>
  );
};

export default Msg;

{ /* <img class="emoji emoji1f604" text="_web" src="/zh_CN/htmledition/v2/images/spacer.gif" /><img class="emoji emoji1f4a7" text="_web" src="/zh_CN/htmledition/v2/images/spacer.gif" /> */ }
{ /* <a target="_blank" href="/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=http%3A%2F%2Ft9t.io&skey=%40crypt_216e39b4_5387dc88880abddb577eaecc5ac50ede&deviceid=e802725134756922&pass_ticket=J7AdtEJ1wGDSii1fE4O4KiEVe6oHiXGH5lLk6E6m5%252BEMyR9dQ3bkUCgzRgJI6XR%252B&opcode=2&scene=1&username=@b208aa6cf8a40e7671cdddd77801df0b"> t9t.io</a>; */ }
