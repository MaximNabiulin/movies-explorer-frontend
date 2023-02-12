import React from 'react';

import './AboutProject.css'

function AboutProject() {
  return (
    <section className="section__content">
      <h2 id="about-project" className="section__title">О проекте</h2>

      <div className="about-project__description">
        <div className="description__conainer">
          <h3 className="description__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="description__text">
            Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и
            финальные доработки.
          </p>
        </div>

        <div className="description__conainer">
          <h3 className="description__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="description__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="timeline_backend">
          <h3 className="timeline__title timeline__title_theme_backend">1 неделя</h3>
          <p className="timeline__subtitle">Back-end</p>
        </div>
        <div className="timeline__frontend">
          <h3 className="timeline__title timeline__title_theme_frontend">4 недели</h3>
          <p className="timeline__subtitle">Front-end</p>
        </div>
      </div>

    </section>
  );
}

export default AboutProject;
