import React from 'react';

import './Portfolio.css';
import arrow from '../../images/NE_arrow.svg';

function Portfolio() {
  return (
    <section className="section__content portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <li className="portfolio__link-wrapper">
            <a
              href="https://github.com/MaximNabiulin/how-to-learn"
              className="portfolio__link"
            >Статичный сайт</a>
            <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href="https://maximnabiulin.github.io/russian-travel/index.html"
              className="portfolio__link"
            >Адаптивный сайт</a>
            <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href="https://mesto.nabiulin.nomoredomains.icu/"
              className="portfolio__link"
            >Одностраничное приложение</a>
            <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;