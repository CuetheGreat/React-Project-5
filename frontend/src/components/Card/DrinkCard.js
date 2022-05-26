import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Card.css'

export const DrinkCard = ({ drink }) => {
  return (
    <Container style={{backgroundColor:'white', margin: 'auto'}}>
      <Link to={`/drinks/${drink.slug}`}>
        <img
          src={drink.image}
          alt={drink.name}
          style={{ display: 'block', height: 'auto%', width: '25%' }}
        />
      </Link>

      <h6>{drink.name}</h6>
    </Container>
  )
}
