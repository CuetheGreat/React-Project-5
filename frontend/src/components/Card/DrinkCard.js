import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export const DrinkCard = ({drink}) => {
  return (
    <div className='drink-card'>
      <img
        src={drink.image}
        alt={drink.name}
        className={'card-image'}
      />
      <div className='card-content'>
        <div className='card-title'>
          <h3>{drink.name}</h3>
        </div>
        <div className='card-description'>
          <p>{drink.description}</p>
        </div>
        <div className='btn'>
          <button><Link params={{slug: drink.slug}} to={`/drinks/${drink.slug}`  }>Make This</Link></button>
        </div>
      </div>
    </div>
  )
}
