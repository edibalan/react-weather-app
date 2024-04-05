// Components
import Forecast from './Forecast/Forecast';
import WeatherConditions from './WeatherConditions/WeatherConditions';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Container.css';

const Container = props => {
  return (
    <div className='container'>
      <Forecast
        button__text={ props.forecast__button__text }
        card__data={ props.forecast__card__data }
        card__unit={ props.forecast__card__unit }
        card__value={ props.forecast__card__value }
        handleForecastDay={ props.handleForecastDay }
        title={ props.forecast__title }
      />

      <WeatherConditions
        icons={ props.weather__conditions__data.icons }
        titles={ props.weather__conditions__data.titles }
        units={ props.weather__conditions__data.units }
        values={ props.weather__conditions__data.values }
      />
    </div>
  );
}

Container.propTypes = {
  forecast__button__text: PropTypes.string,
  forecast__card__data: PropTypes.object,
  forecast__card__unit: PropTypes.string,
  forecast__card__value: PropTypes.any,
  forecast__title: PropTypes.string,
  handleForecastDay: PropTypes.func,
  weather__conditions__data: PropTypes.object
}

export default Container