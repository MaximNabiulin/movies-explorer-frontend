import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm(props) {
  const { name } = props;
  return (
      <div className="section">
        <form name={`${name}-form`} className="movies-form">
          <div className="movies-form__input-container">
            <input
              type="text"
              id="movies-search"
              name="movies-search"
              // value={formValues.name}
              // onChange={handleChange}
              placeholder="Фильм"
              // minLength="2"
              // maxLength="40"
              required
              className="movies-form__input"
            />

            <button
              id = {`${name}-submit`}
              type="submit"
              className="movies-form__submit-button"
              >
              Поиск
            </button>
          </div>

          <FilterCheckbox/>
        </form>
      </div>
  );
}

export default SearchForm;