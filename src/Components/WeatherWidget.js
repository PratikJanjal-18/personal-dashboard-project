import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'b3d88bb259be48e7d68334ab86560055'; // Replace with your OpenWeatherMap API key

  const getWeather = async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setError('');
      } catch (err) {
        setError('City not found. Please try another city.');
        setWeatherData(null);
      }
    }
  };

  return (
    <div className="widget weather-widget">
      <h3>Weather App</h3>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <strong>{weatherData.name}</strong>
          <br></br>
          <span>Temperature: {weatherData.main.temp} °C</span>
          <br></br>
          <span>Humidity: {weatherData.main.humidity} %</span>
          
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
