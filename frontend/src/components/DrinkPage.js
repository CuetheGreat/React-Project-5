import React from 'react'
import { useParams } from 'react-router-dom'

const DrinkPage = props => {
  let { slug } = useParams()
  const drink = props.drinks.filter(d => d.slug === slug)[0]

  console.log(drink)
  return (
    <div>
      <div className='drink-name'>
        <h1>{drink.name}</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <img src={drink.image} alt={drink.slug}/>
        <div className='drink-info'>
          <p className='drink-description'>{drink.description}</p>
          <ul className='drink-ingredients'>
            {drink.ingredients.map((i, index) => (
              <li className='bullet-point' key={index}>{`${i.measure} ${i.kind}`}</li>
            ))}
          </ul>
          <div className='drink-extras'>
            <p>{drink.glass}</p>
            <p>{drink.garnish}</p>
          </div>
          <ul className='drink-instructions'>
            {drink.instructions.map((i, index) => (
              <li className='bullet-point' key={index}>{`${i.step}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// instructions: (3) [{…}, {…}, {…}]

export default DrinkPage
