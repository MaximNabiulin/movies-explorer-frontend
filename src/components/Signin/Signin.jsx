import React from 'react';
import Header from '../Header/Header';
import SignForm from '../SignForm/SignForm';

import './Signin.css';

function Signin() {
  return (
    <div className="auth-page signin">
      <Header isLoggedIn={false} />
      <SignForm
        name="signin"
        title="Рады видеть!"
        buttonText="Войти"
        linkPath="signup"
        linkQuestionText="Ещё не зарегистрированы?"
        linkText="Регистрация"
        // onSubmit={handleSubmit}
      />
    </div>
  )
}

export default Signin;