import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleCountry from "./components/SingleCountry";
import RenderButtonForManyCountries from "./components/RenderButtonForManyCountries";

/** 2.12*2.13 Data for countries, step1*/
const App = () => {
  const [country, setCountry] = useState([]);
  const [typeSearch, setTypeSearch] = useState("");
  const [foundCountries, setFoundCountries] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountry(response.data);
    });
  }, []);

  const handleCountrySearch = event => {
    setTypeSearch(event.target.value);
    const countrySearched = country.filter(countries =>
      countries.name.toUpperCase().includes(event.target.value.toUpperCase())
    );
    setFoundCountries(countrySearched);
  };

  const handleSelect = event => {
    setTypeSearch(event.target.name);

    const countrySearched = country.filter(countries =>
      countries.name.toUpperCase().includes(event.target.name.toUpperCase())
    );

    setFoundCountries(countrySearched);
  };

  const rows = () =>
    foundCountries.length > 10 ? (
      <div>"Too many matches, specify another filter."</div>
    ) : foundCountries.length === 1 ? (
      <SingleCountry
        foundCountries={foundCountries}
        setWeather={setWeather}
        weather={weather}
      />
    ) : (
      <RenderButtonForManyCountries
        foundCountries={foundCountries}
        handleSelect={handleSelect}
      />
    );

  return (
    <div>
      find countries
      <input value={typeSearch} onChange={handleCountrySearch} />
      {rows()}
    </div>
  );
};
export default App;
