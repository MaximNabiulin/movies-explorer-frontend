import React from 'react';
import Header from '../Header/Header';
import SignForm from '../SignForm/SignForm';

import './Signin.css';

import { useForm } from '../../hooks/useForm';

const initValues = {
  email: '',
  password: '',
}

function Signin(props) {
  const { onLogin, isLoading, submitError } = props;
  const {
    formValues,
    handleChange,
    // setFormValues,
    errors,
    isValid,
    resetForm,
  } = useForm(initValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {password, email} = formValues;
    if (!password || !email) return;

    onLogin(password, email)
      .then(() => {
        // setFormValues(initValues);
        resetForm(initValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        formValues={formValues}
        errors={errors}
        isValid={isValid}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        submitError={submitError}
      />
    </div>
  )
}

export default Signin;