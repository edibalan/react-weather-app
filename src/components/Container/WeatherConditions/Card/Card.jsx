// Node Modules
import PropTypes from 'prop-types';

// Styles
import './Card.css';

const Card = props => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__header | fs-sm'>
          <p className='card__label'>{ props.title }</p>
          <div className='card__value'>
            <span className='value'>{ props.value }</span>
            <span className='symbol'>{ props.unit }</span>
          </div>
        </div>

        <img
          alt='weather condition icon'
          className='card__icon'
          src={ props.icon }
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.any
}

export default Card