import './App.css';
import React, { useState } from 'react';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { weatherApiKey, weatherApiUrl } from './api';
import Forecast from './components/forecast/forecast';
import News from './components/news/news';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=metric`
    );
    const currentForecastFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${long}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, currentForecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, weatherResponse });
      setForecast({ city: searchData.label, forecastResponse });
    })

      .catch((err) => console.log(err));

  }
  console.log(forecast);
  console.log(currentWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <News /> {}   
       </div>

  );
}

export default App;
