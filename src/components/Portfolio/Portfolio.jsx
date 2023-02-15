import React from 'react';

import './Portfolio.css';
import arrow from '../../images/NE_arrow.svg';

const statikWebsiteLink = "https://github.com/MaximNabiulin/how-to-learn";
const adaptiveWebsiteLink = "https://maximnabiulin.github.io/russian-travel/index.html";
// const singlePageAplicationLink = "https://mesto.nabiulin.nomoredomains.icu/";
const singlePageAplicationLink = "https://github.com/MaximNabiulin/react-mesto-api-full";

function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__navigation">
        <ul className="portfolio__links">
          <li className="portfolio__link-wrapper">
            <a
              href={statikWebsiteLink}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Статичный сайт
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href={adaptiveWebsiteLink}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Адаптивный сайт
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
          <li className="portfolio__link-wrapper">
            <a
              href={singlePageAplicationLink}
              className="portfolio__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Одностраничное приложение
              <img src={arrow} alt="arrow" className="portfolio__link-arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;