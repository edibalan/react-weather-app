// Components
import Card from './Card/Card';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Forecast.css';

const Forecast = props => {
  return (
    <div className='forecast'>
      <h2 className='forecast__title | fs-df'>{ props.title }</h2>
      <div className='forecast__content'>
        {
          props.card__data.hour.map(( item, index ) => (
            <Card
              key={ 'forecast-card-' + ( index + 1 ) }
              hour={ index }
              icon={ item.condition.icon }
              unit={ props.card__unit }
              value={ item[props.card__value] }
            />
          ))
        }
      </div>
      <button className='forecast__button | fs-xs' onClick={ props.handleForecastDay }>
        { props.button__text }
      </button>
    </div>
  );
}

Forecast.propTypes = {
  button__text: PropTypes.string,
  card__data: PropTypes.object,
  card__unit: PropTypes.string,
  card__value: PropTypes.any,
  handleForecastDay: PropTypes.func,
  title: PropTypes.string
}

export default Forecast