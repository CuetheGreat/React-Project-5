import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { DrinkCard } from '../components/Card/DrinkCard';
import { fetchAllDrinks } from '../feature/Drinks/drinkThunk';

const DrinkContainer = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks.drinks);

  useEffect(() => {
    dispatch(fetchAllDrinks());
  }, [dispatch]);

  return drinks.length ? (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          margin: 'auto',
          padding: '10px',
        }}
      >
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} />
        ))}
      </Container>
      <Outlet />
    </Container>
  ) : (
    <h1 style={{ color: 'white' }}>Loading...</h1>
  );
};

export default DrinkContainer;
