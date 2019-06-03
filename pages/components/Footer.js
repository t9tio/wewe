import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <div className="soc">
            <a href="#"><i className="fa fa-github-alt fa-2x" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-youtube fa-2x" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true" /></a>
          </div>
          <p>
            <strong>Bulma</strong>
            {' '}
by
            {' '}
            <a href="http://jgthms.com">Jeremy Thomas</a>
.
                        The source code is licensed
            {' '}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
.
            {' '}
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
            className="icon button is-white"
            href="https://spectrum.chat/t9tio"
          >
            <i><svg viewBox="0 0 16 16" width="15" height="15"><g fill="#111111"><path d="M0,1.067A1.067,1.067,0,0,1,1.067,0H2A14,14,0,0,1,16,14v.933A1.067,1.067,0,0,1,14.933,16H9.067A1.067,1.067,0,0,1,8,14.933V14A6,6,0,0,0,2,8H1.067A1.067,1.067,0,0,1,0,6.933Z" fill="#111111" /></g></svg></i>
          </a>

          <a
            className="icon button is-white"
            href="https://github.com/t9tio"
          >
            <i className="fab fa-github" />
          </a>

          <a
            className="icon button is-white"
            href="https://twitter.com/t9tio"
          >
            <i className="fab fa-twitter" />
          </a>

          <a
            className="icon button is-white"
            href="https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg"
          >
            <i className="fab fa-weixin" />
          </a>

          <a className="icon button is-white" href="mailto:timqian92@qq.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
 */
