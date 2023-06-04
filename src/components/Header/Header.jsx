import React from 'react';
import logo from '../../images/logo.svg';
import {
  Link,
  useLocation
  // Outlet
} from 'react-router-dom';

import HeaderAuthLinks from '../HeaderAuthLinks/HeaderAuthLinks';
import HeaderWithNavigation from '../HeaderWithNavigation/HeaderWithNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

function Header(props) {
  const { isLoggedIn, isOpen, onClose, onOpenMenu } = props;

  const location = useLocation();

  if (location.pathname === '/signup' || location.pathname === '/signin') {
    return (
      <header className="header">
        <Link to="/" className="header__home-link">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
        </Link>
      </header>
    )
  } else {
    return isLoggedIn
      ? (
      <header className="header header_main-pages">
        <Link to="/" className="header__home-link">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo header__logo_main-pages"
          />
        </Link>
        <HeaderWithNavigation
          onOpenMenu={onOpenMenu}
          onClose={onClose}
        />
        <BurgerMenu
          isOpen={isOpen}
          onClose={onClose}
        />
      </header>
    )
    : (
      <header className="header header_main-pages">
        <Link to="/" className="header__home-link">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo header__logo_main-pages"
          />
        </Link>
        <HeaderAuthLinks />
      </header>
    )
  }
}

export default Header;
