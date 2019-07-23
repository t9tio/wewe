import React, { useState, useEffect } from 'react';
// import ReactGA from 'react-ga';
import './Nav.scss';

function Nav({ searchUrl, groupName }) {
  // const [user, setUser] = useState('');
  const [isBurgerActive, setBugerActive] = useState(false);
  const [search, setSearch] = useState('');

  // ref https://stackoverflow.com/a/11384018/4674834
  function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  function onSearch(e) {
    if (e.key === 'Enter') {
      openInNewTab(`https://www.google.com/search?q=site:"${searchUrl || 'wewe.t9t.io'}" ${search}`);
    }
  }

  function onSearchChange(value) {
    setSearch(value);
  }
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const userOnQuery = urlParams.get('user');
  //   if (userOnQuery) {
  //     window.localStorage.setItem('user', userOnQuery);
  //     window.history.replaceState({}, '', '/');
  //     setUser(userOnQuery);
  //   } else if (window.localStorage.getItem('user')) {
  //     setUser(window.localStorage.getItem('user'));
  //   }

  //   ReactGA.initialize('UA-56506279-9');
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // });

  // function signout() {
  //   window.localStorage.removeItem('user');
  //   setUser('');
  // }

  return (
    <div>
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="https://t9t.io/favicon.ico" alt="favicon" width="28" height="28" />
            </a>
            <a href="/groups" className="navbar-item">
              <strong>Groups</strong>
            </a>
            <a href="/join" className="navbar-item">
              <strong>Join wewe</strong>
            </a>

            <a
              href
              className={`navbar-burger ${isBurgerActive ? 'is-active' : ''}`}
              onClick={() => setBugerActive(!isBurgerActive)}
            >
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}>
            <div className="navbar-start" />

            {/* {
              user
                ? (
                  <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a href className="navbar-link">
                        {user}
                      </a>
                      <div className="navbar-dropdown is-right">
                        <a href className="navbar-item" onClick={() => signout()}>
                          Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                )
                : (
                  <div className="navbar-end">
                    <a href className="navbar-item"><strong>Sign up</strong></a>
                    <a href className="navbar-item"><strong>Sign in</strong></a>
                  </div>
                )
            } */}

            <div className="navbar-end">
              <div className="navbar-item">
                <p className="control has-icons-right">
                  <input
                    className="input nav-input"
                    type="search"
                    placeholder={`Search ${groupName || ''}`}
                    onKeyDown={e => onSearch(e)}
                    onChange={e => onSearchChange(e.target.value)}
                  />
                  <span className="icon is-small is-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#666" d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg>
                  </span>
                </p>
              </div>
              <a href="/about" className="navbar-item"><strong>About</strong></a>
              {/* <a href="https://github.com/t9tio/wewe" className="navbar-item">
                <span className="icon">
                  <i className="fab fa-github" />
                </span>
              </a> */}
              <a className="navbar-item" href="https://github.com/t9tio/wewe">
                <img alt="GitHub stars" src="https://img.shields.io/github/stars/t9tio/wewe.svg?style=social" />
              </a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;
