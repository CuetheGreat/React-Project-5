import React from 'react'
import { useParams } from 'react-router-dom'

const DrinkPage = props => {
  let { slug } = useParams()
  const drink = props.drinks.filter(d => d.slug == slug)[0]

  console.log('Drink Page:',props)

  return (
    <div>
      <div className='drink-name'>
        <h1>{drink.name}</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <img src={drink.image} />
        <div className='drink-info'>
          <p className='drink-description'>{drink.description}</p>
          <ul>
            {drink.ingredients.map((i, index) => (
              <li key={index}>{`${i.measure} ${i.kind}`}</li>
            ))}
          </ul>
          <div>
            <p>{drink.glass}</p>
            <p>{drink.garnish}</p>
          </div>
          <div>
            {drink.instructions.map((i, index) => (
              <li key={index}>{`${i.step}`}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrinkPage
