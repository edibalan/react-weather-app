// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Card.css';

const Card = props => {
  return (
    <div className='card | fs-sm'>
      <p className='card__title'>{ props.hour + ':00' }</p>
      <img className='card__icon' alt='card__icon' src={ props.icon } />
      <div className='card__value'>
        <span className='value'>{ props.value.toFixed() }</span>
        <span className='unit'>{ props.unit }</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  hour: PropTypes.number,
  icon: PropTypes.string,
  value: PropTypes.any,
  unit: PropTypes.string
}

export default Card