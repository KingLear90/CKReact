import React from 'react';
import PropTypes from 'prop-types';

function Features({ features }) {
    
  return (
    <ul>
       {features.map(feature => 
        <li className='features-list' key={feature}>{feature}</li>    // Se genera una key única propia de cada item.
       )}
    </ul>
    )
};

Features.propTypes = {
  features: PropTypes.array.isRequired,   // 'features' debe ser un array y es obligatorio.
}

export default Features
