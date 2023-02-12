import React from 'react';
// import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Outlet } from 'react-router-dom';

import './Header.css';

function Header(props) {
  const { isLoggedIn } = props;

  return (
    <header className={`header ${isLoggedIn ? "header_logged-in" : ""}`}>
      <img
        src={logo}
        alt="Логотип"
        className={`header__logo ${isLoggedIn ? "header__logo_logged-in" : ""}`}
      />
      <Outlet />
    </header>
  )
}

export default Header;
