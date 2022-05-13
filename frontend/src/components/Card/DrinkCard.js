import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Card.css'

export const DrinkCard = ({ drink }) => {
  return (
    <Card className='m-1 rounded shadow '>
      <Row >
        <Col style={{paddingRight: 0, width: '50%' }}>
          <Card.Img
            src={drink.image}
            style={{verticalAlign: 'top', height: '100%', width: '100%' }}
          />
        </Col>
        <Col style={{paddingRight: 0}}>
          <Card.Body>
            <Card.Title>{drink.name}</Card.Title>
            <Link params={{ slug: drink.slug }} to={`/drinks/${drink.slug}`}>
              <Button variant='primary'>Make This</Button>{' '}
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
