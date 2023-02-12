import React from 'react';
import { Link } from 'react-router-dom';

function HeaderAuthLinks() {
  return (
    <nav className="header__auth">
      <Link to="signup" className="header__register-link">
        Регистрация
      </Link>
      <Link to="signin" className="header__signin-link">
        Войти
      </Link>
    </nav>
  )
}

export default HeaderAuthLinks;
