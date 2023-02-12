import React from 'react';

import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found__page">
      <div className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <Link to="/movies" className="not-found__back-link">Назад</Link>
    </div>
  )
}

export default NotFound;