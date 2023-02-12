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
    // onSubmit
  } = props;

  return (
    <div className="auth">
      <h3 className="auth__title">{title}</h3>
      <form
        id={`${name}-form`}
        name={`${name}-form`}
        // onSubmit={onSubmit}
        className="auth__form"
      >
        <div className="auth__inputs">
          {children}
          <div className="input__wrapper">
            <label htmlFor="register-email" className="auth__input-label">E-mail</label>
            <input
                type="email"
                id="register-email"
                name="email"
                // value={formValues.email}
                // onChange={handleChange}
                // placeholder="E-mail"
                required
                className="auth__input"
            />
            <span class="email-error auth__error-span"></span>
          </div>
          <div className="input__wrapper">
            <label htmlFor="register-password" className="auth__input-label">Пароль</label>
            <input
              type="password"
              id="register-password"
              name="password"
              // value={formValues.password}
              // onChange={handleChange}
              // placeholder="Пароль"
              required
              className="auth__input"
            />
            <span class="password-error auth__error-span"></span>
          </div>
        </div>
        <button
          id = "register-submit"
          type="submit"
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