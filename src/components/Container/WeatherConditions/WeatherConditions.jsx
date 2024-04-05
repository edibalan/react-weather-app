// Components
import Card from './Card/Card';

// Node Modules
import PropTypes from 'prop-types';

// Styles
import './WeatherConditions.css';

const WeatherConditions = props => {
  return (
    <div className='weather__conditions'>
      <h2 className='weather__conditions__title | fs-df'>
        Today weather conditions
      </h2>

      <div className='weather__conditions__content'>
        {
          props.titles.map(( _, index ) => (
            <Card
              key={ 'condition-card-' + ( index + 1 ) }
              icon={ props.icons[index] }
              title={ props.titles[index] }
              value={ props.values[index] }
              unit={ props.units[index] }
            />
          ))
        }
      </div>
    </div>
  );
}

WeatherConditions.propTypes = {
  icons: PropTypes.array,
  titles: PropTypes.array,
  units: PropTypes.array,
  values: PropTypes.array
}

export default WeatherConditions