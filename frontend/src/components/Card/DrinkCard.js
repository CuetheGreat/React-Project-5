import React from 'react'
import './Card.css'

export const DrinkCard = props => {
  return (
    <div className='drink-card'>
      <img
        src={props.drink.image}
        alt={props.drink.name}
        className={'card-image'}
      />
      <div className='card-content'>
        <div className='card-title'>
          <h3>{props.drink.name}</h3>
        </div>
        <div className='card-description'>
          <p>{props.drink.description}</p>
        </div>
        <div className='btn'>
          <button><a>Make This</a></button>
        </div>
      </div>
    </div>
  )
}
