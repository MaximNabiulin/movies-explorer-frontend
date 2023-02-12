import React from 'react';

import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="movies__filter">
      <label className="filter__toggler-wrapper">
        <input type="checkbox" className="filter__checkbox" />
        <span className="filter__toggler-slider">
          <div className="filter__toggler-knob"></div>
        </span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;