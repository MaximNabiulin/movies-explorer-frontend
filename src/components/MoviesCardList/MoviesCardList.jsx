import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const { cards } = props;

  return (
    <ul className="movies-cards">
      {cards.map((card) => {
        return (
          <MoviesCard
            card={card}
            key={card.id}
            // onCardLike={onCardLike}
            />
        );
      })}
    </ul>
  )
}

export default MoviesCardList;