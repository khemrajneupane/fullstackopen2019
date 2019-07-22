import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ setWeather, capital, weather }) => {
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  useEffect(() => {
    const API_KEY = "143b574ad18f4bfc8a4113237191407";
    let URL = `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${capital}`;
    axios.get(URL).then(response => {
      setWeather(response.data.current);
      setImage(response.data.current.condition.icon);

      setAlt(response.data.current.condition.text);
    });
  }, []);

  return (
    <div>
      <h1>
        {" "}
        <strong> Weather in {capital} </strong>
      </h1>
      <strong> temperature:</strong> {weather.temp_c} Celcius <br />
      <div>
        <img src={image} alt={alt} />
      </div>
      <strong>wind:</strong> {weather.wind_kph} kph direction{" "}
      <strong>{weather.wind_dir}</strong>
    </div>
  );
};
export default WeatherInfo;
