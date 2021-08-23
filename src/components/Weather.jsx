import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { weather } from './Weather.module.scss';

const API_URL = 'https://meteocors.herokuapp.com/weather/kaunas';

export const WeatherIcon = ({ weatherData }) => {
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

const Weather = ({ className }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        try {
          const { forecastTimestamps } = data;
          const currentWeather = forecastTimestamps
            .sort((a, b) => {
              if (
                Math.abs(Date.now() - new Date(a.forecastTimeUtc)) ===
                Math.abs(Date.now() - new Date(b.forecastTimeUtc))
              )
                return 0;
              if (
                Math.abs(Date.now() - new Date(a.forecastTimeUtc)) <
                Math.abs(Date.now() - new Date(b.forecastTimeUtc))
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
  }, []);

  return (
    <div className={`${className} ${weather}`}>
      <WeatherIcon weatherData={weatherData} />
    </div>
  );
};

Weather.propTypes = {
  className: PropTypes.string,
};

Weather.defaultProps = {
  className: '',
};

export default Weather;
