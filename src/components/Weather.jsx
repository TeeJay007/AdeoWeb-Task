import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { weather } from './Weather.module.scss';

const API_URL = 'https://meteocors.herokuapp.com/weather/';

const WeatherIcon = ({ weatherData }) => {
  if (!weatherData) return <img src="/sunglasses.svg" alt="sunglasses" />;

  const { conditionCode } = weatherData;
  if (!conditionCode) return <img src="/sunglasses.svg" alt="sunglasses" />;

  switch (conditionCode) {
    case 'overcast':
    case 'light-rain':
    case 'moderate-rain':
    case 'heavy-rain':
    case 'fog':
      return <img src="/umbrella.svg" alt="umbrella" />;

    case 'sleet':
    case 'light-snow':
    case 'moderate-snow':
    case 'heavy-snow':
      return <img src="/snowflake.svg" alt="snowflake" />;

    case 'clear':
    case 'isolated-clouds':
    case 'scattered-clouds':
    default:
      return <img src="/sunglasses.svg" alt="sunglasses" />;
  }
};

WeatherIcon.propTypes = {
  weatherData: PropTypes.shape({
    conditionCode: PropTypes.string,
  }),
};

WeatherIcon.defaultProps = {
  weatherData: {},
};

const Weather = ({ className, cities }) => {
  const [weatherData, setWeatherData] = useState();
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    fetch(API_URL + selectedCity, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        try {
          const { forecastTimestamps } = data;
          const currentDate = Date.now();
          const currentWeather = forecastTimestamps
            .sort((a, b) => {
              if (
                Math.abs(currentDate - new Date(a.forecastTimeUtc)) ===
                Math.abs(currentDate - new Date(b.forecastTimeUtc))
              )
                return 0;
              if (
                Math.abs(currentDate - new Date(a.forecastTimeUtc)) <
                Math.abs(currentDate - new Date(b.forecastTimeUtc))
              )
                return -1;
              return 1;
            })
            .shift();

          setWeatherData(currentWeather);
        } catch (e) {
          throw new Error(e);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [selectedCity]);

  return (
    <div className={`${className} ${weather}`}>
      <WeatherIcon weatherData={weatherData} />
      {cities.length > 1 && (
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

Weather.propTypes = {
  className: PropTypes.string,
  cities: PropTypes.arrayOf(String),
};

Weather.defaultProps = {
  className: '',
  cities: ['Vilnius'],
};

export default Weather;
