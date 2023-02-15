import React from 'react';
import Header from '../Header/Header';
import SignForm from '../SignForm/SignForm';

import './Register.css';

function Register() {
  return (
    <div className="auth-page register">
      <Header
        isLoggedIn ={false}
      />
      <SignForm
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkPath="signin"
        linkQuestionText="Уже зарегистрированы?"
        linkText="Войти"
        // onSubmit={handleSubmit}
      >
        <div className="auth__input-wrapper">
          <label htmlFor="register-name" className="auth__input-label">Имя</label>
          <input
              type="text"
              id="register-name"
              name="name"
              // value={formValues.name}
              // onChange={handleChange}
              // placeholder="Имя"
              required
              className="auth__input"
          />
          <span class="name-error auth__error-span"></span>
        </div>
      </SignForm>
    </div>
  )
}

export default Register;