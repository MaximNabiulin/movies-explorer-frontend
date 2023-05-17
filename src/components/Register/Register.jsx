import React from 'react';
import Header from '../Header/Header';
import SignForm from '../SignForm/SignForm';

import './Register.css';

import { useForm } from '../../hooks/useForm';

const initValues = {
  name: '',
  email: '',
  password: '',
}

function Register(props) {
  const { onRegister, isLoading, submitError } = props;
  const {
    formValues,
    handleChange,
    // setFormValues,
    errors,
    isValid,
    resetForm,
  } = useForm(initValues);

  const inputClassName =
    `${!errors.name
      ? 'auth__input'
      : 'auth__input auth__input_error'
    }`;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {password, email, name} = formValues;

    onRegister(password, email, name)
      .then(() => {
        // setFormValues(initValues);
        resetForm(initValues);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
        formValues={formValues}
        errors={errors}
        isValid={isValid}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        submitError={submitError}
      >
        <div className="auth__input-wrapper">
          <label htmlFor="register-name" className="auth__input-label">Имя</label>
          <input
              type="text"
              id="register-name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              disabled={isLoading}
              // placeholder="Имя"
              required
              className={inputClassName}
          />
          <span class="name-error auth__error-span">{errors.name}</span>
        </div>
      </SignForm>
    </div>
  )
}

export default Register;