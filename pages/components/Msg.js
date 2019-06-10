import dayjs from 'dayjs';
import './Msg.scss';

const Msg = ({
  id, text, from, date,
}) => (
  <div className="">
    <span className="msg-from">
      {from}
      {' '}
      &nbsp;
      <a className="msg-from-time">
        <small>{dayjs((Number(date))).format('HH:mm A')}</small>
      </a>
    </span>

    <br />

    <p className="chat-message">
      {text}
    </p>
  </div>
);

export default Msg;
