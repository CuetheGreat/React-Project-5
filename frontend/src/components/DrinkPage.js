import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDrinkBySlug } from '../feature/Drinks/drinkThunk'

const DrinkPage = props => {
  let { slug } = useParams()
  let dispatch = useDispatch()
  const { currentDrink } = useSelector(state => state.drinks)

  useEffect(() => {
    dispatch(fetchDrinkBySlug(slug))
  }, [slug, dispatch])

  console.log('Current Drink', currentDrink)
  return !!currentDrink.name ? (
    <Container className='w-75'>
      <Card style={{justifyContent: 'center'}}>
        <Card.Title>{currentDrink.name}</Card.Title>
        <Card.Img src={currentDrink.image} style={{width: '50vw'}}/>
        <Card.Body>
          <Card.Text>{currentDrink.description}</Card.Text>
          <Card.Subtitle>Ingredients</Card.Subtitle>
          <ul>
            {currentDrink.ingredients.map((i, index) => (
              <li key={index}>{`${i.measure} ${i.kind}`}</li>
            ))}
          </ul>

          <Card.Subtitle>Glass</Card.Subtitle>
          <Card.Text>{currentDrink.glass}</Card.Text>
          <Card.Subtitle>Garnish</Card.Subtitle>
          <Card.Text>{currentDrink.garnish}</Card.Text>

          <Card.Subtitle>Instructions</Card.Subtitle>
          <ol>
            {currentDrink.instructions.map((i, index) => (
              <li key={index}>{`${i.step}`}</li>
            ))}
          </ol>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <Card>
      <Card.Title>No Drink Selected</Card.Title>
      <Card.Body>
        <Card.Text>Please select a drink to view.</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DrinkPage
