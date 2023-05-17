import React from 'react';
import { Link } from 'react-router-dom';

import './SignForm.css';

function SignForm(props) {
  const {
    name,
    title,
    buttonText,
    linkQuestionText,
    linkPath,
    linkText,
    children,
    formValues,
    errors,
    isValid,
    onChange,
    onSubmit,
    isLoading,
    submitError
  } = props;

  const inputEmailClassName =
    `${!errors.email
      ? 'auth__input'
      : 'auth__input auth__input_error'
    }`;

  const inputPasswordClassName =
    `${!errors.password
      ? 'auth__input'
      : 'auth__input auth__input_error'
    }`;

  const isButtonDisabled = () => {
    return isLoading ||
    !isValid;
  }

  return (
    <div className="auth">
      <h3 className="auth__title">{title}</h3>
      <form
        id={`${name}-form`}
        name={`${name}-form`}
        onSubmit={onSubmit}
        noValidate
        className="auth__form"
      >
        <div className="auth__inputs">
          {children}
          <div className="auth__input-wrapper">
            <label htmlFor="register-email" className="auth__input-label">E-mail</label>
            <input
                type="email"
                id="register-email"
                name="email"
                value={formValues.email}
                onChange={onChange}
                disabled={isLoading}
                // placeholder="E-mail"
                required
                className={inputEmailClassName}
            />
            <span className="email-error auth__error-span">{errors.email}</span>
          </div>
          <div className="auth__input-wrapper">
            <label htmlFor="register-password" className="auth__input-label">Пароль</label>
            <input
              id="register-password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={onChange}
              disabled={isLoading}
              // placeholder="Пароль"
              required
              className={inputPasswordClassName}
            />
            <span className="password-error auth__error-span">{errors.password}</span>
          </div>
        </div>
        <p className="auth__submit-error">{submitError}</p>
        <button
          id = "register-submit"
          type="submit"
          disabled={isButtonDisabled()}
          className="auth__submit-button"
        >
          {buttonText}
        </button>
        <div className="auth__link-container">
          <p className="auth__link-text">{linkQuestionText}</p>
          <Link to={`/${linkPath}`} className="auth__link">{linkText}</Link>
        </div>
      </form>
    </div>
  )
}

export default SignForm;