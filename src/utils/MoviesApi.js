import {searchMovies} from './utils';

const baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor(options, searchMovies) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._searchMovies = searchMovies;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

    // ---- КАРТОЧКИ -----------------
  // 1. Загрузка всех карточек с сервера
  _getAllMovies() {
    if (localStorage.getItem('movies')) {
      return Promise.resolve(JSON.parse(localStorage.getItem('movies')));
    }
    return this._request(this._baseUrl, {
      headers: this._headers
    })
      .then(movies => {
        localStorage.setItem('movies', JSON.stringify(movies));
        return movies;
      });
  }

  // 2. Загрузка отфильтрованных карточек
  async getMovie(navigation, filters) {
    const { limit, offset = 0 } = navigation;
    if (!limit) return;
    const allMovies = await this._getAllMovies();
    const movies = this._searchMovies(allMovies, filters);
    const more = movies.length > offset + limit;
    const items = movies.slice(offset, offset + limit);
    const moviesToShow = {
      items,
      meta: {
        more
      }
    }
    return moviesToShow;
  }
}

const moviesApi = new MoviesApi({
  baseUrl: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  //   authorization: `Bearer ${localStorage.getItem('jwt')}`,
  }
},
  searchMovies
);

export default moviesApi;