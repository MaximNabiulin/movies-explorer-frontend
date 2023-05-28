import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const { card, onLikeMovie, isSavedMovies } = props;

  const getCardProperties = (card) => {
    if(!isSavedMovies) {
      return {
        country: card.country,
        director: card.director,
        duration: card.duration ,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co/${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      };
    }
    return card;
  }

  const ImageLink = `${!isSavedMovies
    ? `https://api.nomoreparties.co/${card.image.url}`
    : `${card.image}`
  }`;

  const likeButtonClassName = `${!card.isLiked
    ? 'card__like-button'
    : 'card__like-button card__like-button_active'
  }`;

  const deleteButtonClassName = 'card__delete-button'

  const cardButtonClassName = `${!isSavedMovies
    ? likeButtonClassName
    : deleteButtonClassName
  }`;


  function getDurationInHours(duration) {
    if (duration > 60) {
      const hours = Math.trunc(duration/60);
      const minutes = duration % 60;
      return `${hours}ч ${minutes}м`;
    }

    return `${duration}м`;
  }

  function handleLikeClick() {
    const movieCard = getCardProperties(card);
    onLikeMovie(movieCard);
  }

  return (
    <li className="card">
      <div className="card__image-frame">
        <a
          href={card.trailerLink}
          target='_blank'
          rel='noreferrer'
          className="card__trailer-link"
        >
          <img
            src={ImageLink}
            alt={card.nameRU}
            className="card__image"
          />
        </a>
      </div>
      <div className="card__caption">
        <div className="card__info">
          <h2 className="card__title">{card.nameRU}</h2>
          <p className="card__duration">{getDurationInHours(card.duration)}</p>
        </div>
        <button
          type="button"
          className={cardButtonClassName}
          onClick={handleLikeClick}
        >
        </button>
      </div>
    </li>
  )
}

export default MoviesCard;