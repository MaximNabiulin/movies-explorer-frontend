import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

import { useForm } from '../../hooks/useForm';

import Header from '../Header/Header';

import './Profile.css';

function Profile(props) {
  const {
    loggedIn,
    isOpen,
    onClose,
    onOpenMenu,
    onEdit,
    isOnEdit,
    isLoading,
    successMessage,
    onUpdateUser,
    onLogout,
    submitError,
  } = props;

  const {
    formValues,
    handleChange,
    // setFormValues,
    errors,
    isValid,
    resetForm,
  } = useForm({ name: '',  email: ''});

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name && currentUser.email) {
      // setFormValues({ name: currentUser.name, email: currentUser.email });
      resetForm({ name: currentUser.name, email: currentUser.email });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, isOnEdit]);

  const greetingText =`Привет, ${currentUser.name}!`;

  const editButtonClassName =
    `${!isOnEdit
      ? 'profile__edit-button'
      : 'profile__edit-button_hidden'
    }`;


    const logoutButtonClassName =
    `${!isOnEdit
      ? 'profile__logout-link'
      : 'profile__logout-link_hidden'
    }`;

    const submitButtonClassName =
    `${isOnEdit
      ? 'profile__submit-button'
      : 'profile__submit-button_hidden'
    }`;

    //Если нужно оставаться в режиме редактирования при ошибке
    // const submitErrorClassName =
    // `${isOnEdit
    //   ? 'profile__submit-error'
    //   : 'profile__submit-error_hidden'
    // }`;

    const inputNameClassName =
      `${!errors.name
        ? 'profile__input'
        : 'profile__input profile__input_error'
    }`;

    const inputEmailClassName =
      `${!errors.email
        ? 'profile__input'
        : 'profile__input profile__input_error'
    }`;

    const isInputDisabled = () => {
      return isLoading || !isOnEdit
    }

    const isButtonDisabled = () => {
      return isLoading ||
      !isValid ||
      (formValues.name === currentUser.name &&
        formValues.email === currentUser.email);
    }

    function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(formValues);
  }

  return (
    <>
      <Header
        isLoggedIn ={loggedIn}
        isOpen={isOpen}
        onClose={onClose}
        onOpenMenu={onOpenMenu}
      />
      <div className="profile-page">
        <div className="profile">
          <h1 className="profile__title">{greetingText}</h1>
          <form
            id='profile-form'
            name='profile-form'
            onSubmit={handleSubmit}
            className="profile__form"
          >
            <div className="profile__inputs">
              <div className="profile__input-wrapper">
                <label htmlFor="profile-name" className="profile__input-label">Имя</label>
                <input
                  type="text"
                  id="profile-name"
                  name="name"
                  disabled={isInputDisabled()}
                  value={formValues.name}
                  onChange={handleChange}
                  // placeholder="Имя"
                  required
                  className={inputNameClassName}
                />
                <span className="name-error profile__error-span">{errors.name}</span>
              </div>
              <div className="profile__input-wrapper">
                <label htmlFor="profile-email" className="profile__input-label">E-mail</label>
                <input
                    type="email"
                    id="profile-email"
                    name="email"
                    disabled={isInputDisabled()}
                    value={formValues.email}
                    onChange={handleChange}
                    // placeholder="Почта"
                    required
                    className={inputEmailClassName}
                />
                <span className="email-error profile__error-span">{errors.email}</span>
              </div>
            </div>
            <p className="profile__success-message">{successMessage}</p>
            {/* <p className={submitErrorClassName}>{submitError}</p> */}
            <p className="profile__submit-error">{submitError}</p>
            <button
              id = "profile-edit"
              type="button"
              className={editButtonClassName}
              onClick={onEdit}
            >
              Редактировать
            </button>
            <button
              id = "profile-submit"
              type="submit"
              disabled={isButtonDisabled()}
              className={submitButtonClassName}
            >
              Сохранить
            </button>
            <button
              id="logout"
              onClick={onLogout}
              className={logoutButtonClassName}
            >
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Profile;