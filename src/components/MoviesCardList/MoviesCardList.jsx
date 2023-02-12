import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const { cards } = props;

  return (
    <section className="movies">
      {cards.map((card) => {
        return (
          <MoviesCard
            card={card}
            key={card.id}
            // onCardLike={onCardLike}
            />
        );
      })}
    </section>
  )
}

export default MoviesCardList;