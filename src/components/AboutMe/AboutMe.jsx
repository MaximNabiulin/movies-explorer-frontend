import React from 'react';

import './AboutMe.css';
import photo from '../../images/My_photo.png';

function AboutMe() {
  return (
    <section className="section__content">
      <h2 id="about-me" className="section__title">Студент</h2>

      <div className="about-me__grid">
        <div className="about-me__info">
          <div className="about-me_description">
            <h2 className="about-me__title">Максим</h2>
            <p className="about-me__subtitle">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__text">
              Я родился в Тюмени, закончил факультет
              математические методы в геологии института
              геологии и геоинформатики ТГНГУ. У меня есть жена и сын.
              Работаю в геологии с 2007 года.
              С 2014 года работаю ведущим специалистом
              в инженерно-научных центрах в структурах "Газпрома".
              Недавно заинтерисовался IT сферой и програмированием,
              и захотел сменить профессию
            </p>
          </div>
          <a
            href="https://github.com/MaximNabiulin"
            className="about-me__github-link"
          >Github</a>
        </div>
        <img src={photo} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;