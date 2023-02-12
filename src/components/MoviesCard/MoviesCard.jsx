import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const { card } = props;

  function getDurationInHours(duration) {
    if (duration > 60) {
      const hours = Math.trunc(duration/60);
      const minutes = duration % 60;
      return `${hours}ч ${minutes}м`;
    }

    return `${duration}м`;
  }

  return (
    <div className="card__frame">
      <img
      src={card.image}
      alt={card.nameRU}
      className="card__image" />
      <div className="card__caption">
        <div className="card__info">
          <h2 className="card__title">{card.nameRU}</h2>
          <p className="card__duration">{getDurationInHours(card.duration)}</p>
        </div>
        <button
          type="button"
          className="card__like-button"
          // onClick={handleLikeClick}
        >
        </button>
      </div>
    </div>
  )
}

export default MoviesCard;