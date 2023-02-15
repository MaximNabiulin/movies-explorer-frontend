import React from 'react';
// import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Link, Outlet } from 'react-router-dom';

import './Header.css';

function Header(props) {
  const { isLoggedIn } = props;

  return (
    <header className={`header ${isLoggedIn ? "header_logged-in" : ""}`}>
      <Link to="/" className="header__home-link">
        <img
          src={logo}
          alt="Логотип"
          className={`header__logo ${isLoggedIn ? "header__logo_logged-in" : ""}`}
        />
      </Link>
      <Outlet />
    </header>
  )
}

export default Header;
