import React from "react";
import WeatherInfo from "./WeatherInfo";

const SingleCountry = ({ foundCountries, setWeather, weather }) =>
  foundCountries.map(countries => (
    <div key={countries.alpha2Code}>
      <div>
        <h1>{countries.name} </h1>
      </div>
      <div>
        <p>
          capital {countries.capital} <br /> population {countries.population}
        </p>
      </div>
      <div>
        <h2>languages</h2>{" "}
        <ul>
          {countries.languages.map(l => (
            <li key={l.iso639_1}>{l.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={countries.flag} style={{ height: "120px", width: "120px" }} />
      </div>
      <div>
        <WeatherInfo
          setWeather={setWeather}
          capital={countries.capital}
          weather={weather}
        />
      </div>
    </div>
  ));
export default SingleCountry;
