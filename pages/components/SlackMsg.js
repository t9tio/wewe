import { format } from 'timeago.js';
import Linkify from 'linkifyjs/react';

import './Msg.scss';
import { useState } from 'react';

const Msg = ({
  msg: {
    id, text, user, ts, type, files, groupName,
  },
}) => {
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const date = new Date(Number(ts.split('.')[0]) * 1000);
  const MsgDiv = (
    <Linkify className="chat-message">
      {text}
    </Linkify>
  );


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
        <a href={`/chat/${groupName}/member/${user}`}><strong>{user}</strong></a>

        &nbsp;
        <a className="msg-from-time" href={`#${id}`}>
          <small>{format(date)}</small>
        </a>
      </span>

      <br />
      {MsgDiv}
    </div>
  );
};

export default Msg;
