import { baseUrl } from './auth.js';

// const baseUrl = 'http://localhost:3001';

class MainApi {
  constructor(options, searchMovies) {
    this._baseUrl = options.baseUrl;
    // this._headers = options.headers;
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

  // ---- ПОЛЬЗОВАТЕЛЬ -----------------------------
  // 1. Загрузка информации о пользователе с сервера

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      // headers: this._headers
    });
  }

  // 2. Редактирование профиля

  editUserInfo(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      // headers: this._headers,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    });
  }

    // ---- КАРТОЧКИ -----------------
  // 3. Загрузка карточек с сервера

  getUserCards() {
    return this._request(`${this._baseUrl}/movies`, {
      credentials: 'include',
      // headers: this._headers
    });
  }

  // 4. Добавление новой карточки

  addCard(data) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      // headers: this._headers,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
  }

  // 5. Удаление карточки

  deleteCard(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      // headers: this._headers
    });
  }
}

const mainApi = new MainApi({
  baseUrl: baseUrl,
  // credentials: 'include',
  // headers: {
  //   'Content-Type': 'application/json',
  //   authorization: `Bearer ${localStorage.getItem('jwt')}`,
  // }
  },
  // searchMovies
);

export default mainApi;