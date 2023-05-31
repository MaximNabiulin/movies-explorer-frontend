// -- ПЕРЕМЕННЫЕ --
// переменные для проверки ширины экрана
export const SCREEN_BIG = 1105;
export const SCREEN_MEDIUM = 607;
export const SCREEN_SMALL = 768;

//-Фильмы-
//длительность короткометражек
export const SHORT_MOVIES_MAX_DURATION = 40;

//число карточек для рендинга
export const CARDS_AMOUNT = {
  BIG: {
    INITIAL: 12,
    ROW_SIZE: 3
  },
  MEDIUM: {
    INITIAL: 8,
    ROW_SIZE: 2
  },
  SMALL: {
    INITIAL: 5,
    ROW_SIZE: 2
  }
};

// переменные для сообщений об ошибках при поиске
export const NOT_FOUND_SEARCH_ERROR = 'Ничего не найдено';
export const REQUEST_SEARCH_ERROR =
  `Во время запроса произошла ошибка.
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;


// Переменная для собщений об ошибках с сервера
const RESPONSE_ERRORS = {
  // Ошибка сервера
  SERVER_ERROR: 'На сервере произошла ошибка', //500
  // Ошибки регистрации
  SIGNUP_NOT_UNIQUE_EMAIL: 'Пользователь с таким Email уже существует.', //409
  SIGNUP_DEFAULT: 'При регистрации пользователя произошла ошибка.',
  // Ошибки логина
  SIGNIN_VALIDATION: 'Вы ввели неправильный логин или пароль.', //401
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',
  // Ошибки обновления данных пользователя
  UPDATE__NOT_UNIQUE_EMAIL: 'Пользователь с таким Email уже существует.', //409
  UPDATE_DEFAULT: 'При обновлении  произошла ошибка.',
  // UPDATE_SUCCESSULLY: 'Сохранено!',
};

// сообщение об успешном обновлении данных пользователя
export const UPDATE_SUCCESS_MESSAGE = 'Данные пользователя обновлены!';

//--ФУНКЦИИ--
// проверка типа ошибки при регистрации
export function checkRegisterError(err) {
  if (err === 409) return RESPONSE_ERRORS.SIGNUP_NOT_UNIQUE_EMAIL
  if (err === 500) return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.SIGNUP_DEFAULT;
}

// проверка типа ошибки при логине
export function checkLoginError(err) {
  if (err === 401) return RESPONSE_ERRORS.SIGNIN_VALIDATION
  if (err === 500) return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.SIGNIN_DEFAULT;
}

// проверка типа ошибки при обновлении данных пользователя
export function checkUserUpdateError(err) {
  if (err === 'Ошибка: 409') return RESPONSE_ERRORS.UPDATE__NOT_UNIQUE_EMAIL
  if (err === 'Ошибка: 500') return RESPONSE_ERRORS.SERVER_ERROR;
  return RESPONSE_ERRORS.UPDATE_DEFAULT;
}

// Функция поиска фильмов
export function searchMovies(movies, filters) {
  const { searchWord, isMovieShort } = filters;
  // let filteredMovies = movies;
  // Поиск по ключам
  // if(keys) {
  //   return filteredMovies = movies.filter(movie => keys.includes(movie.key));
  // };

  // Поиск по ключевому слову
  const word = searchWord.toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    if (movie.nameRU?.toLowerCase().includes(word)) {
      return true;
    }
    if (movie.nameEN?.toLowerCase().includes(word)) {
      return true;
    }
  });
  // проверка на включенный фильтр короткометражек
  if(isMovieShort) {
    return filteredMovies.filter((movie) => {
      return movie.duration < SHORT_MOVIES_MAX_DURATION;
    })
  }
  return filteredMovies;
};




