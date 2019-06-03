import dayjs from 'dayjs';
import './Msg.scss';

const Msg = ({
  id, text, from, date,
}) => (
  <div className="content">
    <span>
      {from}
      {' '}
    </span>
    &nbsp;
    <a><small>{dayjs((Number(date))).format('HH:mm A')}</small></a>
    <br />

    <p className="chat-message">
      {text}
    </p>
  </div>
);

export default Msg;
