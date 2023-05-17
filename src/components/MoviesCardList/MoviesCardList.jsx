import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const {
    resultText='',
    cards,
    onLikeMovie,
    isSavedMovies=false,
    isLoading=false
  } = props;

  const getCardKey = (card) => {
    if (!isSavedMovies) {
      return card.id
    }
    return card._id
  }
  if (!cards) return;
  if(isLoading) {
    return (
      <Preloader />
    )
  } else {
    if(cards.length === 0) {
      return (
        <p className="search-text">{resultText}</p>
      )
    } else if(cards.length === 1) {
      return (
        <ul className="movies-cards movies-cards_with-one-card">
          {cards.map((card) => {
            return (
              <MoviesCard
                card={card}
                key={getCardKey(card)}
                isSavedMovies={isSavedMovies}
                onLikeMovie={onLikeMovie}
              />
            );
          })}
          <div className="ghost-card"></div>
          <div className="ghost-card"></div>
        </ul>
      )
    } else if(cards.length === 2) {
      return (
        <ul className="movies-cards">
          {cards.map((card) => {
            return (
              <MoviesCard
                card={card}
                key={getCardKey(card)}
                isSavedMovies={isSavedMovies}
                onLikeMovie={onLikeMovie}
                />
            );
          })}
          <div className="ghost-card"></div>
        </ul>
      )
    } else {
      return (
        <ul className="movies-cards">
          {cards.map((card) => {
            return (
              <MoviesCard
                card={card}
                key={getCardKey(card)}
                isSavedMovies={isSavedMovies}
                onLikeMovie={onLikeMovie}
                />
            );
          })}
        </ul>
      )
    }
  }
}

export default MoviesCardList;