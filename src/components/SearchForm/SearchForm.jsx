import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import { useForm } from '../../hooks/useForm';

import './SearchForm.css';

function SearchForm(props) {
  const {
    checked,
    onChangeCheckbox,
    currentSearchWord = '',
    onSearchMovies
  } = props;

  const {formValues, handleChange, setFormValues} = useForm({ search: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchMovies(formValues.search)
  }

  React.useEffect(() => {
    setFormValues({ search: currentSearchWord });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className="section">
        <form
          name="search-form"
          className="movies-form"
          onSubmit={handleSubmit}
        >
          <div className="movies-form__input-container">
            <input
              type="text"
              id="movies-search"
              name="search"
              value={formValues.search}
              onChange={handleChange}
              placeholder="Фильм"
              // minLength="2"
              // maxLength="40"
              required
              className="movies-form__input"
            />

            <button
              id = "search-submit"
              type="submit"
              className="movies-form__submit-button"
              >
              Поиск
            </button>
          </div>

          <FilterCheckbox checked={checked} onChangeCheckbox={onChangeCheckbox} />
        </form>
      </div>
  );
}

export default SearchForm;