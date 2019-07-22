import React from "react";

const RenderButtonForManyCountries = ({ foundCountries, handleSelect }) =>
  foundCountries.map(countries => (
    <h1 key={countries.name}>
      {countries.name}
      <button name={countries.name} type="submit" onClick={handleSelect}>
        show
      </button>
    </h1>
  ));
export default RenderButtonForManyCountries;
