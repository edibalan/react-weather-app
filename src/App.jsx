// Assets
import clouds from './assets/clouds-icon.webp';
import direction from './assets/direction-icon.webp';
import errorPicture from './assets/error-message.webp';
import feels from './assets/feels-icon.webp';
import gust from './assets/gust-icon.webp';
import humidity from './assets/humidity-icon.webp';
import precip from './assets/precip-icon.webp';
import pressure from './assets/pressure-icon.webp';
import sunrise from './assets/sunrise-icon.webp';
import sunset from './assets/sunset-icon.webp';
import uv from './assets/uv-icon.webp';
import visibility from './assets/visibility-icon.webp';
import wind from './assets/wind-icon.webp';

// Components
import Overview from './components/Overview/Overview';
import Container from './components/Container/Container';

// Data
import database from './database';

// React Library
import { useState } from 'react';
import useFetch from 'react-fetch-hook';

const App = () => {
  const [ data, setData ] = useState(database[0]);
  const [ forecast, setForecast ] = useState(database[1]);
  const [ location, setLocation ] = useState('London');

  const handleData = () => {
    data.units.temp.valueOf() === '°C' ? (
      setData({
        units: {
          gust: ' mph',
          precip: ' in',
          temp: '°F',
          vis: ' miles',
          wind: ' mph'
        },

        values: {
          feels: 'feelslike_f',
          gust: 'gust_mph',
          precip: 'precip_in',
          temp: 'temp_f',
          vis: 'vis_miles',
          wind: 'wind_mph'
        }
      })
    )
    : setData(database[0]);
  };

  const handleForecastDay = () => {
    forecast.day <= 1 ? (
      setForecast(prevState => ({ ...prevState, day: prevState.day + 1 })),
  
      forecast.day === 0 ? (
        setForecast({
          day: 1,
          title: "Tomorrow's hourly forecast",
          btnText: "Overmorrow's forecast"
        })
      )
      : (
        setForecast({
          day: 2,
          title: "Overmorrow's hourly forecast",
          btnText: "Today's forecast"
        })
      )
    )
    : setForecast(database[1]);
  };

  const handleLocation = event => {
    event.preventDefault();
    event.target.children[0].value.length > 0 && (
      setLocation(event.target.children[0].value)
    );
  };

  const { data: weatherData, error } = useFetch(`https://api.weatherapi.com/v1/forecast.json?key=38aed6571d944af2ada200228222204&q=${ location }&days=3&aqi=no&alerts=no`);

  if (weatherData) {
    const astro = weatherData.forecast.forecastday[0].astro;
    const today = weatherData.current;

    const weather__conditions = {
      icons: [
        clouds, feels, gust, humidity, pressure, precip, sunrise, sunset, uv, visibility, direction, wind
      ],

      titles: [
        'Clouds', 'Felt tmp.', 'Gust', 'Humidity', 'Atm. p.', 'Rainfall', 'Sunrise', 'Sunset', 'UV Index', 'Visibility', 'Wind dir', 'Wind spd' 
      ],
  
      units: [
        '', data.units.temp, data.units.gust, ' %', ' hPa', data.units.precip, '', '', '', data.units.vis, '', data.units.wind
      ],

      values: [
        today.cloud, today[data.values.feels], today[data.values.gust].toFixed(), today.humidity, today.pressure_mb, today[data.values.precip], astro.sunrise, astro.sunset, today.uv, today[data.values.vis], today.wind_dir, today[data.values.wind].toFixed()
      ]
    };

    return (
      <div className='app__container'>
        <Overview
          city={ weatherData.location.name }
          date={
            new Date(weatherData.location.localtime).toLocaleDateString('en-GB', {
              'weekday': 'short',
              'day': '2-digit',
              'month': 'short',
              'hour': '2-digit',
              'minute': '2-digit'
            })
          }
          handleData={ handleData }
          handleLocation={ handleLocation }
          location={ location }
          overcast={ weatherData.current.condition.text }
          unit={ data.units.temp }
          value={ weatherData.current[data.values.temp] }
        />
        
        <Container
          forecast__button__text={ forecast.btnText }
          forecast__card__data={ weatherData.forecast.forecastday[forecast.day] }
          forecast__card__unit={ data.units.temp }
          forecast__card__value={ data.values.temp }
          forecast__title={ forecast.title }
          handleForecastDay={ handleForecastDay }
          weather__conditions__data={ weather__conditions }
        />
      </div>
    )
  }

  if (error) {
    setTimeout(() => window.location.reload(), 1000);

    return (
      <div className='error-message'>
        <img alt='error picture' src={ errorPicture } />
      </div>
    );
  }
}

export default App