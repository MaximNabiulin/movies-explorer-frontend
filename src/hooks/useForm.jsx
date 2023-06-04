import React, { useCallback } from 'react';
import validator from 'validator';

const EMPTY_INPUT_ERROR_MESSAGE = 'Это поле обязательное к заполнению'
const NAME_VALIDATION_ERROR_MESSAGE = 'Поле должно содержать только латиницу, кириллицу, пробел или дефис';
const NOT_EMAIL_ERROR_MESSAGE = 'Неверный формат электронной почты.';

function validateName(value) {
  if (value === '') return EMPTY_INPUT_ERROR_MESSAGE;
  const regex = /^[a-zа-яё\-\s]+$/gi;
  if (!regex.test(value)) return NAME_VALIDATION_ERROR_MESSAGE;
  return '';
};

function validateEmail(value) {
  if (value === '') return EMPTY_INPUT_ERROR_MESSAGE;
  if (!validator.isEmail(value)) return NOT_EMAIL_ERROR_MESSAGE;
  return '';
}

function validatePassword(value) {
  if (value === '') return EMPTY_INPUT_ERROR_MESSAGE;
  return '';
}

export function useForm(inputValues) {
  const [formValues, setFormValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target
    const { name, value } = target;

    switch (name) {
      case 'name':
        const nameErrorMessage = validateName(value);
        setErrors(oldState => ({
          ...oldState,
          [name]: nameErrorMessage
        }));
        target.setCustomValidity(nameErrorMessage);
        break;

      case 'email':
        const emailErrorMessage = validateEmail(value);
        setErrors(oldState => ({
          ...oldState,
          [name]: emailErrorMessage
        }));
        target.setCustomValidity(emailErrorMessage);
        break;

        case 'password':
          const passwordErrorMessage = validatePassword(value);
          setErrors(oldState => ({
            ...oldState,
            [name]: passwordErrorMessage
          }));
          target.setCustomValidity(passwordErrorMessage);
          break;

      default:
        setErrors(oldState => ({
          ...oldState,
          [name]: target.validatonMessage
        }));
    }

    setFormValues(oldState => ({
      ...oldState,
      [name]: value
    }));

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback((
      newFormValues = {},
      newErrors = {},
      newIsValid = false
    ) => {
      setFormValues(newFormValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }, [setFormValues, setErrors, setIsValid]
  );

  return {
    formValues,
    handleChange,
    setFormValues,
    errors,
    isValid,
    resetForm
  };
}

