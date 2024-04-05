// Assets
import dayMode from '../../assets/day-background.webp';
import nightMode from '../../assets/night-background.webp';

// Node Modules
import PropTypes from 'prop-types';

// React Library
import { useEffect, useState } from 'react';

// Styles
import './Overview.css';

const Overview = props => {
  const [ theme, setTheme ] = useState({
    bgColor: '#8FCBE5',
    color: '#000',
    image: dayMode
  });

  useEffect(
    () => {
      const hour = new Date(props.date).getHours();
      hour < 7 || hour > 19 ? (
        setTheme({ bgColor: '#1C2657', color: '#FFF', image: nightMode }),
        document.querySelector('.container').classList.add('night-mode')
      )
      : (
        setTheme({ bgColor: '#8FCBE5', color: '#000', image: dayMode }),
        document.querySelector('.container').classList.remove('night-mode')
      )
    },
    [ props.date ]
  );

  return (
    <section
      className='overview'
      style={{
        backgroundColor: theme.bgColor,
        backgroundImage: `url(${ theme.image })`,
        color: theme.color
      }}
    >
      <form className='city__selector' onSubmit={ props.handleLocation }>
        <input
          className='fs-sm'
          placeholder={ props.location }
          style={{ borderColor: theme.color, color: theme.color }}
          type='text'
        />
        <button
          className='search__button | fs-xs'
          style={{ borderColor: theme.color }}
          type='submit'
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className='city__container'>
        <h1 className='city | fs-md'>{ props.city }</h1>
        <p className='date | fs-sm'>{ props.date }</p>
      </div>

      <p className='temperature | fs-xl' onClick={ props.handleData }>
        <span>{ props.value.toFixed() }</span>
        <sup className='unit | fs-lg'>{ props.unit }</sup>
      </p>
      
      <p className='overcast | fs-sm'>{ props.overcast }</p>
    </section>
  );
}

Overview.propTypes = {
  city: PropTypes.string,
  date: PropTypes.string,
  handleLocation: PropTypes.func,
  handleData: PropTypes.func,
  location: PropTypes.string,
  overcast: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number
}

export default Overview