import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm(props) {
  const { name } = props;
  return (
      <section className="section__content">
        <form name={`${name}-form`} className="movies__form">
          <div className="movies__input-container">
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
              className="movies__input"
            />

            <button
              id = {`${name}-submit`}
              type="submit"
              className="movies__submit-button"
              >
              Поиск
            </button>
          </div>

          <FilterCheckbox/>
        </form>
      </section>
  );
}

export default SearchForm;