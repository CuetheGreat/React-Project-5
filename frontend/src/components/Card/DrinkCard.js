import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

export const DrinkCard = ({ drink }) => {
  return (
    <Container className='drink-card'>
      <Link to={`/drinks/${drink.slug}`}>
        <img src={drink.image} alt={drink.name} className='drink-image' />
      </Link>
      <h6 className='drink-name'>{drink.name}</h6>
    </Container>
  );
};
