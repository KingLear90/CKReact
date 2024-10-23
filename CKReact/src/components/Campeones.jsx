import React from 'react';
import { ChampionsList } from '../data/ChampionsList';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Campeones( {ChampionsList} ) {

  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex(index + 1);
    index === ChampionsList.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function handlePrevious() {
    setIndex(index - 1);
    index === 0 ? setIndex(ChampionsList.length - 1) : setIndex(index - 1);
  }

  let campeon = ChampionsList[index];

  return (
    <div>
      <div className='campeon-container'>
        <img className='champions' src={campeon.src} 
            width={campeon.width} 
            height={campeon.height}
            alt={campeon.alt}
        />
        <span>{campeon.id} {campeon.nombre}</span>
      </div>
      <div className='gallery-btns'>
        <button onClick={handlePrevious}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="gallery-btns"><path d="m15 18-6-6 6-6"/></svg></button>
        <button onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="gallery-btns"><path d="m9 18 6-6-6-6"/></svg></button>
      </div>
    </div>
      )
}

Campeones.propTypes = {
  ChampionsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Campeones
