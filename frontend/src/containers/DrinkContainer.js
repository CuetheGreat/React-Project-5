
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Outlet } from 'react-router'
import { DrinkCard } from '../components/Card/DrinkCard'
import { fetchAllDrinks } from '../feature/Drinks/drinkThunk'

class DrinkContainer extends Component {
  componentDidMount () {
    this.props.fetchAllDrinks()
  }

  render () {
    return !!this.props.drinks[0] ? (
      <Container style={{ display: 'flex' }}>
      <Container style={{ display: 'grid', gridTemplateColumns:'repeat(4,auto)', margin: 'auto', padding: '10px' }}>
          {this.props.drinks.map(drink => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}</Container>
        <Outlet />
      </Container>
    ) : (
      <h1 style={{color: 'white'}}>Loading...</h1>
    )
  }
}

const mapStateToProps = state => {
  return {
    drinks: state.drinks.drinks,
    currentDrink: state.drinks.currentDrink
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDrinks: () => dispatch(fetchAllDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkContainer)
