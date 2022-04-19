import React from 'react'

import { DrinkCard } from '../components/Card/DrinkCard'

const DrinkContainer = props => {
  console.log(props)
  return (
    <div style={{ display: 'flex' }}>
      {props.drinks.map(drink => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </div>
  )
}

export default DrinkContainer
