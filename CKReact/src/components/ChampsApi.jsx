import React from 'react'
import { useState, useEffect } from 'react';
const ChampsApi = () => {
    const [campeones, setCampeones] = useState([]);

    useEffect(() => {
      fetch('https://66fddf1a6993693089566ad0.mockapi.io/api/CK/players')
        .then(response => response.json())
        .then(data => setCampeones(data))
        .catch(error => console.error(error));
    }, []);

    const handleClickGallery = () => {
        return (
            <div>
                <h2>Campeones del Mundo</h2>
                {campeones.map((campeon) => (
                    <div key={campeon.id}>{`
                    ${campeon.description}
                    País: ${campeon.country}.
                    Campeón por el período: ${campeon.worldChampion}`}
                    </div> ))}
            </div>
        );
    };
  

  return (
    <div>
      <p>Si deseas conocer información de los campeones, puedes hacer click</p>
      <button className='info-btn' onClick={handleClickGallery}>AQUÍ</button>
    </div>
  );
}

export default ChampsApi;
