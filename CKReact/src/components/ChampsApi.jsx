import React from 'react'
import { useState, useEffect } from 'react';
function ChampsApi () {
    const [campeones, setCampeones] = useState([]);
    const [showChampions, setShowChampions] = useState(false);
    const btnInfo = document.querySelector('.info-btn');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://66fddf1a6993693089566ad0.mockapi.io/api/CK/players');
                const jsonData = await response.json();
                setCampeones(jsonData);
                } catch (error) {
                setError('No se pudo cargar la información.');
                } 
            };
        fetchData();
        }, []);
    

    const handleClickGallery = () => {
        setShowChampions(true);
        showChampions ? setShowChampions(false) : setShowChampions(true);
        !showChampions ? btnInfo.textContent = 'OCULTAR INFO' : 'VER INFO';
    }
  

  return (
    <div>
      <p>Si deseas conocer información de los campeones...</p>
      <button className='info-btn' onClick={handleClickGallery}>VER INFO</button>
      {showChampions && (
        <div>
          {campeones.map((campeon) => (
            <div className='champions-Info' key={campeon.id}>
              {`${campeon.firstName} ${campeon.lastName} fue Campeón Mundial de Ajedrez durante el período: ${campeon.worldChampion}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChampsApi;
