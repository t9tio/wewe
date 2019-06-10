import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Msg from './components/Msg';
import './chat.scss';

const DatePickerInput = ({ onClick, value }) => (
  <span
    className="button is-white"
    onClick={onClick}
  >
    {value}
  </span>
);

class Index extends React.Component {
  static async getInitialProps({ query: { group, msgs } }) {
    return { group, msgs };
  }

  componentDidMount() {
    // Initialize all input of date type.
    // const calendars = bulmaCalendar.attach('[type="date"]', {});

    // // Loop on each calendar initialized
    // calendars.forEach((calendar) => {
    //   // Add listener to date:selected event
    //   calendar.on('date:selected', (date) => {
    //     console.log(date);
    //   });
    // });

    // // To access to bulmaCalendar instance of an element
    // const element = document.querySelector('#my-element');
    // if (element) {
    //   // bulmaCalendar instance is available as element.bulmaCalendar
    //   element.bulmaCalendar.on('select', (datepicker) => {
    //     console.log(datepicker.data.value());
    //   });
    // }
  }

  render() {
    const { group, msgs } = this.props;

    return (
      <div>
        <Head />
        <Nav />
        <div className="chat-section section">
          <br />
          <div className="container">
            <div className="">
              <p className="title is-5">{group.name}</p>
              <p className="subtitle is-6">{group.description}</p>
              <div className="tabs ">
                <ul>
                  <li className="is-active"><a>Messages</a></li>
                  <li><a>Topics</a></li>
                  <li><a>Statics</a></li>
                  <li><a>Setting</a></li>
                </ul>
              </div>
            </div>

            {/* <div className="date-picker-container">
              <div className="date-picker">
                <a className="x  is-white"><i className="fas fa-chevron-left" /></a>
                &nbsp;
                <DatePicker
                  customInput={<DatePickerInput />}
                  selected={new Date()}
                  onChange={this.handleChange}
                  dateFormat="yyyy-MM-dd"
                />
                <span contenteditable="true">50</span>/50&nbsp;
                <a className="x is-white"><i className="fas fa-chevron-right" /></a>
              </div>
            </div> */}
            <nav className="pagination is-right is-small" role="navigation" aria-label="pagination">
              <a className="pagination-previous"><i className="fas fa-chevron-left" /></a>
              <a className="pagination-next"><i className="fas fa-chevron-right" /></a>
              <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" aria-label="Goto page 45">495</a></li>
                <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">496</a></li>
                <li><a className="pagination-link" aria-label="Goto page 47">497</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" aria-label="Goto page 86">896</a></li>
              </ul>
            </nav>
            <div className="msg-section">
              {
                msgs.map(msg => (
                  <Msg
                    id={msg.id}
                    text={msg.text}
                    from={msg.from}
                    date={msg.date}
                  />
                ))
              }
            </div>
            <br />

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Index;
