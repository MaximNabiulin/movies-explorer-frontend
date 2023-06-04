import React from 'react';

import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  const {
    loggedIn,
    isOpen,
    onClose,
    onOpenMenu,
    checked,
    onChangeCheckbox,
    currentSearchWord,
    onSearchMovies,
    resultText,
    cards,
    isLoading,
    onLikeMovie
  } = props;

  return (
    <>
      <Header
        isLoggedIn={loggedIn}
        isOpen={isOpen}
        onClose={onClose}
        onOpenMenu={onOpenMenu}
      />
      <main className="content">
        <SearchForm
          checked={checked}
          onChangeCheckbox={onChangeCheckbox}
          currentSearchWord={currentSearchWord}
          onSearchMovies={onSearchMovies}
        />
        <MoviesCardList
          resultText={resultText}
          cards={cards}
          isSavedMovies={true}
          isLoading={isLoading}
          onLikeMovie={onLikeMovie}
        />
      </main>
      <Footer/>
    </>
  );
}

export default SavedMovies;