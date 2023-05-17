import React from 'react';

import './FilterCheckbox.css'

function FilterCheckbox(props) {
  const { checked, onChangeCheckbox } = props;
  return (
    <div className="filter">
      <label className="filter__toggler-wrapper">
        <input type="checkbox" checked={checked} onChange={onChangeCheckbox} className="filter__checkbox" />
        <span className="filter__toggler-slider">
          <span className="filter__toggler-knob"></span>
        </span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;