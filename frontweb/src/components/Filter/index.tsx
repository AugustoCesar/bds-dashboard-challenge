import React from 'react';
import './styles.css';

const Filter = () => {
  return (
    <div className="base-card filter-container">
      <select className="filter-input">
        <option value="">Selecione uma cidade</option>
        <option value="">Araguari</option>
        <option value="">Uberlandia</option>
        <option value="">Uberaba</option>
      </select>
    </div>
  );
};

export default Filter;
