import React from 'react'
import { useState } from 'react'  
import PropTypes from 'prop-types'


function Cards( { cardsItems } ) {

  const [msg, setMsg] = useState('')

  const handleClick = () => {
      setMsg(alert('Sección disponible en breve...'))
  }

  return (
    <>
        <div>
            {cardsItems.map((card) => (
                <div className='cardItem' key={card.id}>
                    <h5>{card.title}</h5>
                    <img className='imgs' src={card.src} 
                    alt={card.alt} 
                    width = {card.imgSize} />
                    <p className='card-Descrip'>{card.description}</p>
                    <button className='learn-btn' onClick={handleClick}>CONOCER MÁS</button>
                </div>
            ))} 
        </div>
    </>
  )
}

Cards.propTypes = {
  cardsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
  })
  ).isRequired
}


export default Cards
