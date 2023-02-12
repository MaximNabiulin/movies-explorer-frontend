import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useResize } from '../../hooks/useResize';

import burgerIcon from '../../images/burger-menu_icon.svg';

const SCREEN_BREAKPOINT = 768;

function HeaderWithNavigation(props) {
  const { onOpenMenu, onClose } = props;

  const width = useResize();

  React.useEffect(() => {
    if (width < SCREEN_BREAKPOINT) return;
    onClose();
  });

  const setActive = ({ isActive }) => (
    isActive
    ? "navigation__link navigation__link_active"
    : "navigation__link"
  );

  if (width > SCREEN_BREAKPOINT) {
    return (
      <>
        <nav className="header__navigation">
          <NavLink to="/movies" className={setActive}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={setActive}>
            Сохранённые фильмы
          </NavLink>
        </nav>
        <nav className="navigation__profile">
          <Link to="/profile" className="navigation__profile-link">
            Аккаунт
          </Link>
          <Link to="/profile" className="navigation__profile-icon"/>
        </nav>
      </>
    )
  } else {
    return (
      <img
        src={burgerIcon}
        alt="<Меню>"
        className='header__burger-icon'
        onClick={onOpenMenu}
        />
    )
  }
}

export default HeaderWithNavigation;