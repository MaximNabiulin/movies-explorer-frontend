import React from 'react';

import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesDownload from '../MoviesDownload/MoviesDownload';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies(props) {
  const { cards } = props;

  return (
    <>
      <Header isLoggedIn={true} />
      <main className="content">
        <SearchForm/>
        <MoviesCardList
        cards={cards}
        />
        <MoviesDownload/>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;