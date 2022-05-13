
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
    console.log('Drink Page Props:', this.props)
    return !!this.props.drinks[0] ? (
      <Container style={{ display: 'flex' }}>
        <div className='w-25'>
          {this.props.drinks.map(drink => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
        <Outlet />
      </Container>
    ) : (
      <div></div>
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
