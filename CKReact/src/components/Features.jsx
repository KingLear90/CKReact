import React from 'react';

function Features({ features }) {
    
  return (
    <ul>
       {features.map(feature => 
        <li className='features-list' key={feature}>{feature}</li>    // Se genera una key única propia de cada item.
       )}
    </ul>
    )
};

export default Features
