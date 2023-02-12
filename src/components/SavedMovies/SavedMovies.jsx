import React from 'react';

import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const { cards } = props;

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="content">
        <SearchForm/>
        <MoviesCardList
        cards={cards}
        />
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;