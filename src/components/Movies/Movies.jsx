import React from 'react';

import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesDownload from '../MoviesDownload/MoviesDownload';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies(props) {
  const {
    loggedIn,
    isOpen,
    onClose,
    onOpenMenu,
    resultText,
    cards,
    currentSearchWord,
    onDisableDownloadButton,
    isLoading,
    checked,
    onChangeCheckbox,
    onSearchMovies,
    onDownloadMore,
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
          currentSearchWord={currentSearchWord}
          onChangeCheckbox={onChangeCheckbox}
          onSearchMovies={onSearchMovies}
        />
        <MoviesCardList
          resultText={resultText}
          cards={cards}
          isLoading={isLoading}
          onLikeMovie={onLikeMovie}
        />
        <MoviesDownload
          onDownloadMore={onDownloadMore}
          onDisable={onDisableDownloadButton}
        />
      </main>
      <Footer/>
    </>
  );
}

export default Movies;