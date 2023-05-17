import React from 'react';
import {
  Routes,
  Route,
  // Navigate,
  useNavigate,
} from 'react-router-dom';

// подключаем объект контекста
import { CurrentUserContext } from '../../context/CurrentUserContext';

// ипортируем хуки
import { useResize } from '../../hooks/useResize';

// импортируем компоненты приложения
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Signin from '../Signin/Signin';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';
import stateStorage from '../../utils/StateStorage';
import {
  searchMovies,
  checkRegisterError,
  checkLoginError,
  checkUserUpdateError,
} from '../../utils/utils';

// -- ПЕРЕМЕННЫЕ --
// переменные для проверки ширины экрана
const SCREEN_BIG = 1105;
const SCREEN_MEDIUM = 607;
// const SCREEN_SMALL = 768;

// переменные для сообщениях об ошибках
const NOT_FOUND_SEARCH_ERROR = 'Ничего не найдено';
const REQUEST_SEARCH_ERROR =
  `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;

function App() {
  // Стейт переменная открытия бургер-меню
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);

  // Стэйт переменныя для данных пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [userUpdateError, setUserUpdateError] = React.useState('');
  const [isOnEdit, setIsOnEdit] = React.useState(false);

  // Стэйт переменные для блока с фильмами
  const [searchErrorText, setSearchErrorText] = React.useState('');

  // страница /movies
  const [cards, setCards] = React.useState([]);
  const [cardsToShow, setCardsToShow] = React.useState([]);
  const [currentSearchWord, setCurrentSearchWord] = React.useState(
    stateStorage.get('search-word') ?? ''
  );
  const [isMovieShort, setIsMovieShort] = React.useState(
    stateStorage.get('checkbox-state') ?? false
  );
  const [isDownloadButtonDisabled, setIsDownloadButtonDisabled] = React.useState(false);
  // const [selectedCard, setSelectedCard] = React.useState({});

  //страница /saved-movies
  const [savedCards, setSavedCards] = React.useState([]);
  const [isSavedMovieShort, setIsSavedMovieShort] = React.useState(false);

  // Стейт переменная для индикаторов загрузки запросов на сервер
  const [isLoading, setIsLoading] = React.useState(false);

  // Стэйт переменные для регистрации и авторизации
  const [isLoggedIn, setIsLoggedIn] = React.useState({ loggedIn: false });
  const [registerError, setRegisterError] = React.useState('');
  const [loginError, setLoginError] = React.useState('');


  const navigate = useNavigate();
  const width = useResize();

  // функция определения КОЛИЧЕСТВА стартовых карточек для отображения
  const getAmountOfInitialCards = (width) => {
    if (width < SCREEN_BIG && width >= SCREEN_MEDIUM) {
      return 8;
    }
    if (width < SCREEN_MEDIUM) {
      return 5;
    }
    return 12;
  };

  // функция определения КОЛИЧЕСТВА подгружаемых карточек
  const getCardsPerDownloadClick = (width) => {
    if (width < SCREEN_BIG) {
      return 2;
    }
    return 3;
  }

  // --- ОБРАБОТЧИКИ КНОПОК ОТКРЫТИЯ И ЗАКРЫТИЯ БУРГЕР-МЕНЮ
  // Обработчик открытия бургер-меню
  function handleBurgerMenuClick () {
    setIsBurgerMenuOpen(true);
    console.log(isBurgerMenuOpen, 'Click!');
  };

  // Обработчик закрытия бургер-меню
  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  // Обработчик фильтра короткометражек на странице /movies
  function handleMoviesCheckboxClick() {
    setIsMovieShort(!isMovieShort);
  }

  // Обработчик фильтра короткометражек на странице /saved-movies
  function handleSavedMoviesCheckboxClick() {
    setIsSavedMovieShort(!isSavedMovieShort);
  }

  // --- ОБРАБОТЧИКИ ЗАПРОСОВ ---
  // --ПРОФИЛЬ--

  // Обработчик обновления данных профиля
  function handleUpdateUser(currentUser) {
    setUserUpdateError('');
    setIsLoading(true);
    mainApi.editUserInfo(currentUser)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setIsOnEdit(oldState => !isOnEdit);
      })
      .catch((err) => {
        console.log(err);
        const message = checkUserUpdateError(err);
        setUserUpdateError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // обработчик кнопки перехода в состояние редактирования профиля
  function handleEditButton() {
    setIsOnEdit(true);
  }

  // --- КАРТОЧКИ С ФИЛЬМАМИ ---

  // функция запуска фильтрации фильмов
  function fetchFilteredMovies() {
    setSearchErrorText('');
    setIsLoading(true);
    setIsDownloadButtonDisabled(true);
    const cardsToRender = getAmountOfInitialCards(width);
    return moviesApi.getMovie({
      limit: cardsToRender
    },
    {
      searchWord: currentSearchWord,
      isMovieShort: isMovieShort
    })
      .then(movies => {
        if (currentSearchWord === '') return;
        setCards(movies.items);
        setSearchErrorText(movies.items.length === 0 ? NOT_FOUND_SEARCH_ERROR : '');
        setIsDownloadButtonDisabled(!movies.meta.more);
        console.log('фильмы:', movies.items);
        // setLikes();
      })
      .catch((err) => {
        setSearchErrorText(REQUEST_SEARCH_ERROR);
        console.log(err)})
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Обработчик поиска фильмов на странице /movies
  function handleMoviesSearchSubmit(searchWord) {
    setCurrentSearchWord(searchWord);
  };

  // Обработчик поиска фильмов на странице /saved-movies
  function handleSavedMoviesSearchSubmit(searchWord) {
    const movies = searchMovies(savedCards, {
      searchWord: searchWord,
      isMovieShort: isSavedMovieShort
    });
    setSavedCards(movies);
  }

  // обработчик добавления отображаемых фильмов
  const handleShowMoreCards = () => {
    const rowSize = getCardsPerDownloadClick(width);
    const setLimit = (width) => {
      const restInLastRow = cards.length % rowSize;
      if (width < SCREEN_BIG || restInLastRow === 0 ) {
        return rowSize + restInLastRow;
      };
      return rowSize + restInLastRow - 1;
    }
    const limit = setLimit(width);
    moviesApi.getMovie({
      limit: limit,
      offset: cards.length
    },
    {
      searchWord: stateStorage.get('search-word'),
      isMovieShort: isMovieShort
    })
      .then(movies => {
        setCards([...cards, ...movies.items]);
        setSearchErrorText(cards.length === 0 ? NOT_FOUND_SEARCH_ERROR: '');
        setIsDownloadButtonDisabled(!movies.meta.more);
      })
      .catch((err) => {
        setSearchErrorText(REQUEST_SEARCH_ERROR);
        console.log(err)
      });
  };

  // --- СОХРАНЕННЫЕ ФИЛЬМЫ ---
  // обработчик добавления фильмов в сохраненные
  function handleSaveMovie(card) {
    mainApi.addCard(card)
      .then(newCard => {
        setSavedCards([newCard, ...savedCards]);
      })
      .catch((err) => console.log(err));
  };

  // обработчик удаления фильмов из сохраненных
  function handleDeleteMovie(card) {
    const cardToDelete = savedCards.find(movie => {
      return movie.movieId === card.movieId;
    });
    mainApi.deleteCard(cardToDelete._id)
    .then(() => {
      setSavedCards((state) => state.filter((item) => item.movieId !== card.movieId));

    })
    .catch((err) => console.log(err));
  };

  // обработчик кнопки лайка
  function handleLikeButton(card) {
    if (!savedCards.some(movie => {
      return movie.movieId === card.movieId
    })) {
      handleSaveMovie(card);
      return
    }
    handleDeleteMovie(card);
  }

  // --- АУТЕНТИФИКАЦИЯ ---

  // Обработчик проверки токена
  function handleCheckToken() {
    return auth.checkToken()
      .then(() => {
        setIsLoggedIn(oldState => ({ ...oldState, loggedIn: true }));
        // navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      })
  }

  // Обработчик авторизации
  function handleLogin(password, email) {
    setLoginError('');
    setIsLoading(true);
    return auth.authorize(password, email)
      .then((data) => {
        if (!data.token) {
          return Promise.reject(`Ошибка: ${data.status}`);
        }
        handleCheckToken();
        navigate('/movies');
        console.log('IsLoggedin?', isLoggedIn);
      })
      .catch((err) => {
        console.log(err);
        const message = checkLoginError(err);
        setLoginError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // Обработчик регистрации
  function handleRegister(password, email, name) {
    setRegisterError('');
    setIsLoading(true);
    return auth.register(password, email, name)
      .then(() => {
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
        const message = checkRegisterError(err);
        setRegisterError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function handleLogout() {
    navigate('/');
    auth.logout()
      .then(() => {
        setIsLoggedIn(oldState => ({ ...oldState, loggedIn: false }));
        stateStorage.removeAll();
        setCurrentUser(null);
        setCardsToShow(null);
        setCurrentSearchWord('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

   // Проверка наличия токена
  React.useEffect(() => {
    handleCheckToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCardsToShow = React.useCallback(() => {
    const likes = savedCards.map(item => item.movieId);
    const updatedCardsToShow = cards.map(card => {
      const item = {...card};
      item.isLiked = likes.includes(card.id);
      return item;
    });
    setCardsToShow(updatedCardsToShow);
  }, [cards, savedCards]);

  React.useEffect(() => {
    updateCardsToShow();
  }, [updateCardsToShow]);

  React.useEffect(() => {
    stateStorage.set('checkbox-state', isMovieShort);
    stateStorage.set('search-word', currentSearchWord);

    fetchFilteredMovies();
  }, [isMovieShort, currentSearchWord]);

  React.useEffect(() => {
    if (!isLoggedIn.loggedIn) return;
    Promise.all([
      mainApi.getUserInfo(),
      mainApi.getUserCards(),
      // moviesApi.getMovie({
      //   limit: cardsToRender
      // },
      // {
      //   searchWord: localStorage.getItem('search-word'),
      //   isMovieShort: isMovieShort
      // })
    ])
      .then(([userInfo, cards]) => {
        setCurrentUser(userInfo);
        setSavedCards(cards);
        // setCards(movies.items);
        // setIsDownloadButtonDisabled(!movies.meta.more);
        // setLikes();
        // console.log('сохраненные карточки inside:', savedCards);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchFilteredMovies();
    // console.log('IsLoggedin?:', isLoggedIn);
  }, [isLoggedIn.loggedIn]);



  // Возвращаем разметку
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Routes>
            <Route path="/signup" element={
              <>
                <Register
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  submitError={registerError}
                />
              </>}
            />
            <Route path="/signin" element={
              <>
                <Signin
                  onLogin={handleLogin}
                  isLoading={isLoading}
                  submitError={loginError}
                />
              </>}
            />
            <Route path="/" element={
              <Main
                loggedIn={isLoggedIn.loggedIn}
                isOpen={isBurgerMenuOpen}
                onClose={closeBurgerMenu}
                onOpenMenu={handleBurgerMenuClick}
              />}
            />

            <Route path="/movies" element={
              <ProtectedRoute loggedIn={isLoggedIn.loggedIn} >
                <Movies
                  loggedIn={isLoggedIn.loggedIn}
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                  onOpenMenu={handleBurgerMenuClick}
                  resultText={searchErrorText}
                  isLoading={isLoading}
                  currentSearchWord={currentSearchWord}
                  cards={cardsToShow}
                  onDisableDownloadButton={isDownloadButtonDisabled}
                  checked={isMovieShort}
                  onChangeCheckbox={handleMoviesCheckboxClick}
                  onSearchMovies={handleMoviesSearchSubmit}
                  onDownloadMore={handleShowMoreCards}
                  onLikeMovie={handleLikeButton}
                />
              </ProtectedRoute>}
            />

            <Route path="/saved-movies" element={
              <ProtectedRoute loggedIn={isLoggedIn.loggedIn}>
                <SavedMovies
                  loggedIn={isLoggedIn.loggedIn}
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                  onOpenMenu={handleBurgerMenuClick}
                  resultText={searchErrorText}
                  isLoading={isLoading}
                  cards={savedCards}
                  checked={isSavedMovieShort}
                  onChangeCheckbox={handleSavedMoviesCheckboxClick}
                  onSearchMovies={handleSavedMoviesSearchSubmit}
                  onLikeMovie={handleDeleteMovie}
                />
              </ProtectedRoute>}
            />

            <Route path="/profile" element={
              <ProtectedRoute loggedIn={isLoggedIn.loggedIn}>
                <Profile
                  loggedIn={isLoggedIn.loggedIn}
                  isOpen={isBurgerMenuOpen}
                  onClose={closeBurgerMenu}
                  onOpenMenu={handleBurgerMenuClick}
                  onEdit={handleEditButton}
                  isOnEdit={isOnEdit}
                  isLoading={isLoading}
                  onUpdateUser={handleUpdateUser}
                  submitError={userUpdateError}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>}
            />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
