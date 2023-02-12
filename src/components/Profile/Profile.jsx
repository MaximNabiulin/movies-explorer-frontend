import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
    <Header isLoggedIn ={true} />
    <div className="profile__page">
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form
          id='profile-form'
          name='profile-form'
          // onSubmit={onSubmit}
          className="profile__form"
        >
          <div className="profile__inputs">
            <div className="profile__wrapper">
              <label htmlFor="profile-name" className="profile__input-label">Имя</label>
              <input
                type="text"
                id="profile-name"
                name="name"
                // value={formValues.name}
                // onChange={handleChange}
                // placeholder="Имя"
                required
                className="profile__input"
              />
              <span class="name-error profile__error-span"></span>
            </div>
            <div className="profile__wrapper">
              <label htmlFor="profile-email" className="profile__input-label">E-mail</label>
              <input
                  type="email"
                  id="profile-email"
                  name="email"
                  // value={formValues.email}
                  // onChange={handleChange}
                  // placeholder="Почта"
                  required
                  className="profile__input"
              />
              <span class="email-error profile__error-span"></span>
            </div>
          </div>
          <button
            id = "profile-submit"
            type="submit"
            className="profile__submit-button"
          >
            Редактировать
          </button>
          <Link to='/' className="logout__link">Выйти из аккаунта</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Profile;