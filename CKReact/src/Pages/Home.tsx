import React from 'react';
import Features from '../Components/Features';
import Logo from '../Components/Logo';
import App from '../App';

function Home () {
  let features: string[] = [      // variable features tipada para que solo pueda ser un array que reciba elementos tipo string. 
    "Fundamentos del ajedrez",
    "Principios teóricos",
    "Grandes partidas clásicas",
    "Galería de imágenes",
    "Videos",
    "¡Y MUCHO MÁS!"
  ]

  // Creo un objeto (logo) que se adapte a la interfaz LogoProps del componente Logo. 
  let logo = {
    src: './img/the-real-king.png',
    alt: 'Imagen principal del sitio, representada por un rey que aterriza en el tablero y con su poder produce una explosión que desplaza a unos peones cercanos.',
    width: '95%',
  }

  return (
    <App>
      <div className='home-container'>
          <div className='image-container'>
              {/*Extiendo las props del objeto logo a lo que el componente Logo renderiza (en este caso solo una imagen) */}
              <Logo {...logo}/> 
          </div>
          <div className='mainContain'>
              <h5 id="motto">Disfrutar y aprender en un mismo lugar</h5>
              <p className="offer">¿Qué podés encontrar en <span className="name">ChessKingdom</span>?</p>
              <Features features={features}/>
          </div>
      </div>
    </App>
  )
}

export default Home
