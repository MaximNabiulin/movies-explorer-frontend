import React from 'react';

import './Techs.css'

function Techs() {
  return (
    <section className="section__content section__content_techs">
      <h2 id="techs" className="section__title">Технологии</h2>

      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили
        технологии, которые применили
        в дипломном проекте.
      </p>
      <nav className="techs_navigation">
        <ul className="techs__links">
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
            className="techs_link">
              HTML
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Web/CSS"
            className="techs_link">
              CSS
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
            className="techs_link">
              JS
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://reactjs.org/"
            className="techs_link">
              React
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://git-scm.com/"
            className="techs_link">
              Git
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://expressjs.com/ru/"
            className="techs_link">
              Express.js
            </a>
          </li>
          <li className="techs__link-wrapper">
            <a
            href="https://www.mongodb.com/"
            className="techs_link">
              mongoDB
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Techs;