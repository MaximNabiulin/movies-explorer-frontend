import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './BurgerMenu.css';

function BurgerMenu(props) {
  const { isOpen, onClose } = props;

  React.useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  }

  const setActive = ({ isActive }) => (
    isActive
    ? "burger-menu__link burger-menu__link_active"
    : "burger-menu__link"
  );

  return (
    <div
      className={`burger-menu ${isOpen ? "burger-menu_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="burger-menu__content">
        <button
          id ='close-button'
          type='button'
          className='burger-menu__close-button'
          onClick={onClose}
        />
        <nav className="burger-menu__navigation">
            <NavLink to="/" className={setActive}>Главная</NavLink>
            <NavLink to="/movies" className={setActive}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={setActive}>Сохранённые фильмы</NavLink>
        </nav>
          <nav className="navigation__profile navigation__profile_burger">
            <Link to="/profile" className="navigation__profile-link">
              Аккаунт
            </Link>
            <Link to="/profile" className="navigation__profile-icon"/>
          </nav>
      </div>
    </div>
  )
}

export default BurgerMenu;