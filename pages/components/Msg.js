import dayjs from 'dayjs';
import './Msg.scss';

const Msg = ({
  id, text, from, date, link, type,
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

    {
      type === 7
        ? (
          <p className="chat-message">
            {text}
          </p>
        )
        : (
          <div className="chat-msg-img">
            <img className="msg-img" src={link} alt="chat img" />
          </div>
        )

    }

  </div>

);

export default Msg;
