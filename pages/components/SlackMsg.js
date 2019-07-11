/* eslint-disable camelcase */
import { format } from 'timeago.js';
import Linkify from 'linkifyjs/react';

import './Msg.scss';
import { useState } from 'react';
import axios from 'axios';

const Msg = ({
  msg: {
    id, text, user, ts, type, files, groupName, reply_count,
  },
  noReply,
}) => {
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFetchingThread, setIsFetchingThread] = useState(false);
  const [threadMsgs, setThreadMsgs] = useState(undefined);

  const date = new Date(Number(ts.split('.')[0]) * 1000);

  async function showThread(threadTs) {
    setIsFetchingThread(true);
    const res = await axios.get(`/api/slackThread/${threadTs}`);
    setThreadMsgs(res.data);
    setIsFetchingThread(false);
  }

  const MsgDiv = (
    <div className="chat-message">
      <Linkify>
        {text}
      </Linkify>
      <br />
      {
        reply_count && !noReply ? (
          <a className={`button is-small is-primary ${isFetchingThread ? 'is-loading' : ''}`} href onClick={() => showThread(ts)}>
            show replies
          </a>
        ) : ''
      }

      {
        threadMsgs
          ? threadMsgs.filter(msg => !msg.replies).sort((a, b) => a.id - b.id).map(msg => (
            <div>
              <br />
              <span className="msg-from">
                {msg.user}

                &nbsp;
                <a className="msg-from-time" href={`#${id}`}>
                  <small>{format(new Date(Number(msg.ts.split('.')[0]) * 1000))}</small>
                </a>
              </span>
              <br />
              <Linkify className="chat-message">
                {msg.text}
              </Linkify>
            </div>
          ))
          : ''
      }
    </div>
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
        {user}

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
