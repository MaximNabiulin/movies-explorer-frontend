import React from 'react';

//подключаем стили
import './Promo.css';

function Promo() {
  return (
    <section className="section promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav className="promo__navigation">
        <ul className="promo__links">
          <li className="promo__link-wrapper">
            <a href="#about-project" className="promo__link">О проекте</a>
          </li>
          <li className="promo__link-wrapper">
            <a href="#techs" className="promo__link">Технологии</a>
          </li>
          <li className="promo__link-wrapper">
            <a href="#about-me" className="promo__link">Студент</a>
          </li>
        </ul>
      </nav>

    </section>
  );
}

export default Promo;
