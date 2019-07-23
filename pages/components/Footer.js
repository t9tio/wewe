import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <div className="soc">
            <a href="https://github.com/timqian">
              <i className="fab fa-github-alt fa-2x" />
            </a>
            <a href="https://twitter.com/tim_qian">
              <i className="fab fa-twitter fa-2x" />
            </a>

            <a href="https://join.slack.com/t/t9tio/shared_invite/enQtNjgzMzkwMDM0NTE3LTE5ZTUzYjU4Y2I0YzRiZjNkYTkzMzE1ZmM0NDdmYzRlZmMxNGY1MzZlN2EwYjYyNWVlMWY0Nzk2MDBhNWZlY2I">
              <i className="fab fa-slack fa-2x" />
            </a>
            <a href="https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg">
              <i className="fab fa-weixin fa-2x" />
            </a>

            <a href="mailto:timqian92@qq.com">
              <i className="fas fa-envelope fa-2x" />
            </a>
          </div>
          <p>
            A
            {' '}
            <a href="https://t9t.io">t9t</a>
            {' '}
            project build
            {' '}
            by
            {' '}
            <a href="https://twitter.com/tim_qian">@tim_qian</a>
            .
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

/**
 *
 *
 *     <footer className="footer">
      <div className="container">
        <hr />
        <div className="left">
        Build by &nbsp;
          <a href="https://twitter.com/tim_qian"><span className="tag is-info is-rounded"><strong>@tim_qian</strong></span></a>
        </div>

        <div className="right">

          <a

            href="https://spectrum.chat/t9tio"
          >
            <i><svg viewBox="0 0 16 16" width="15" height="15"><g fill="#111111"><path d="M0,1.067A1.067,1.067,0,0,1,1.067,0H2A14,14,0,0,1,16,14v.933A1.067,1.067,0,0,1,14.933,16H9.067A1.067,1.067,0,0,1,8,14.933V14A6,6,0,0,0,2,8H1.067A1.067,1.067,0,0,1,0,6.933Z" fill="#111111" /></g></svg></i>
          </a>

          <a

            href="https://github.com/t9tio"
          >
            <i className="fab fa-github" />
          </a>

          <a

            href="https://twitter.com/t9tio"
          >
            <i className="fab fa-twitter" />
          </a>

          <a

            href="https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg"
          >
            <i className="fab fa-weixin" />
          </a>

          <a  href="mailto:timqian92@qq.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
 */
