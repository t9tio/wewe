import dayjs from 'dayjs';
import './Msg.scss';

const Msg = ({
  id, text, from, date, link, type,
}) => {
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
        <img className="msg-img" src={link} alt="chat img" />
      </div>
    );
  }

  return (
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
      {msgDiv}
    </div>
  );
};

export default Msg;

{ /* <img class="emoji emoji1f604" text="_web" src="/zh_CN/htmledition/v2/images/spacer.gif" /><img class="emoji emoji1f4a7" text="_web" src="/zh_CN/htmledition/v2/images/spacer.gif" /> */ }
{ /* <a target="_blank" href="/cgi-bin/mmwebwx-bin/webwxcheckurl?requrl=http%3A%2F%2Ft9t.io&skey=%40crypt_216e39b4_5387dc88880abddb577eaecc5ac50ede&deviceid=e802725134756922&pass_ticket=J7AdtEJ1wGDSii1fE4O4KiEVe6oHiXGH5lLk6E6m5%252BEMyR9dQ3bkUCgzRgJI6XR%252B&opcode=2&scene=1&username=@b208aa6cf8a40e7671cdddd77801df0b"> t9t.io</a>; */ }
