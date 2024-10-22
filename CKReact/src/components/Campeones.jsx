import React from 'react';
import PropTypes from 'prop-types';

function Campeones( {campeonesList} ) {
  return (
    <div>
      {campeonesList.map((campeon) =>
        <div className='champions-img' key={campeon.id}>
          <img src={campeon.src} 
              width={campeon.width} 
              height={campeon.height}
              alt={campeon.alt}
          />
          <span>{campeon.nombre}</span>
        </div>
      )}
    </div>
  )
}

Campeones.propTypes = {
  campeonesList: PropTypes.arrayOf(
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
