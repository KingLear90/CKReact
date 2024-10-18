import React from 'react';
import App from '../App';
import Campeones from '../Components/Campeones';
import ChampsApi from '../Components/ChampsApi';


function Gallery() {
  const campeonesList = [
    {
    src:'./img/Wilhelm_Steinitz.png', 
    id: 'steinitz',
    nombre: 'Wilhelm Steinitz',
    width: 200, 
    height: 200,
    alt: 'Imagen del 1° campeón mundial de Ajedrez, Wilhelm Steinitz',
    className: 'campeon',
  },
  {
    src: './img/Emmanuel_Lasker.png', 
    id: 'lasker', 
    nombre: 'Emmanuel Lasker',
    width: 200, 
    height: 200,
    alt: "Imagen del 2° campeón mundial de Ajedrez, Emmanuel Lasker",
    className: 'campeon',
  },
  {
    src: './img/Jose_Raul_Capablanca.png', 
    id: 'capablanca', 
    nombre: 'José Raúl Capablanca',
    width: 200, 
    height: 200,
    alt: "Imagen del 3° campeón mundial de Ajedrez, José Raúl Capablanca",
    className: 'campeon',
  },
  {
    src: './img/alexander_alekhine.png', 
    id: 'alekhine', 
    nombre: 'Alexander Alekhine',
    width: 200, 
    height: 200,
    alt: "Imagen del 4° campeón mundial de Ajedrez, Alexander Alekhine",
    className: 'campeon',
  },
  {
    src: './img/Max_Euwe.png', 
    id: 'euwe', 
    nombre: 'Max Euwe',
    width: 200, 
    height: 200,
    alt: "Imagen del 5° campeón mundial de Ajedrez, Max Euwe",
    className: 'campeon',
  },
  {
    src: './img/Mikhail_Botvinnik.png', 
    id: 'botvinnik', 
    nombre: 'Mikhail Botvinnik',
    width: 200, 
    height: 200,
    alt: "Imagen del 6° campeón mundial de Ajedrez, Mikhail Botvinnik",
    className: 'campeon',
  },
  {
    src: './img/Vasily_Smyslov.png', 
    id: 'smyslov', 
    nombre: 'Vasily Smyslov',
    width: 200, 
    height: 200,
    alt: "Imagen del 7° campeón mundial de Ajedrez, Vasily Smyslov",
    className: 'campeon',
  },
  {
    src: './img/Mikhail_Tal.png', 
    id: 'tal', 
    nombre: 'Mikhail Tal',
    width: 200, 
    height: 200,
    alt: "Imagen del 8° campeón mundial de Ajedrez, Mikhail Tal",
    className: 'campeon',
  },
  {
    src: './img/Tigran_Petrosian.png', 
    id: 'petrosian', 
    nombre: 'Tigran Petrosian',
    width: 200, 
    height: 200,
    alt: "Imagen del 9° campeón mundial de Ajedrez, Tigran Petrosian",
    className: 'campeon',
  },
  {
    src: './img/Boris_Spassky.png', 
    id: 'spassky', 
    nombre: 'Boris Spassky',
    width: 200, 
    height: 200,
    alt: "Imagen del 10° campeón mundial de Ajedrez, Boris Spassky",
    className: 'campeon',
  },
  {
    src: './img/Bobby-Fischer-Buenos-Aires.png', 
    id: 'fischer', 
    nombre: 'Robert James "Bobby" Fischer',
    width: 200, 
    height: 200,
    alt: "Imagen del 11° campeón mundial de Ajedrez, Robert James Fischer",
    className: 'campeon',
  },
  {
    src: './img/Anatoly_Karpov.png', 
    id: 'karpov', 
    nombre: 'Anatoly Karpov',
    width: 200, 
    height: 200,
    alt: "Imagen del 12° campeón mundial de Ajedrez, Anatoly Karpov",
    className: 'campeon',
  },
  {
    src:'img/Garry_Kasparov.png',
    id:'kasparov',
    nombre:'Garry Kasparov',
    width:200,
    height:200, 
    alt:'Imagen del 13° campeón mundial de Ajedrez, Garry Kasparov',
    className: 'campeon',
  },
  {
    src: './img/Vladimir_Kramnik.png', 
    id: 'kramnik', 
    nombre: 'Vladimir Kramnik',
    width: 200, 
    height: 200,
    alt: "Imagen del 14° campeón mundial de Ajedrez, Vladimir Kramnik",
    className: 'campeon',
  },
  {
    src: './img/Viswanathan-Anand.png', 
    id: 'anand', 
    nombre: 'Viswanathan Anand',
    width: 200, 
    height: 200,
    alt: "Imagen del 15° campeón mundial de Ajedrez, Viswanathan Anand",
    className: 'campeon',
  },
  {
    src: './img/Magnus_Carlsen.png', 
    id: 'carlsen', 
    nombre: 'Magnus Carlsen',
    width: 200, 
    height: 200,
    alt: "Imagen del 16° campeón mundial de Ajedrez, Magnus Carlsen",
    className: 'campeon',
  },
  {
    src: './img/Ding_Liren.png', 
    id: 'ding', 
    nombre: 'Ding Liren',
    width: 200, 
    height: 200,
    alt: "Imagen del 17° campeón mundial de Ajedrez, Ding Liren",
    className: 'campeon',
  },
]

  return (
    <App>
      <div className="gallery">
        <h4 className="gallery-title">Galería de campeones</h4>
        <h6>De izquierda a derecha y de arriba hacia abajo, los 17 campeones mundiales.</h6>
        <div className='gallery-container'>
          <Campeones campeonesList={campeonesList} />
          <div>
            <ChampsApi />
          </div> 
        </div>
      </div>
    </App>
  )
}

export default Gallery
