import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDrinks } from '../actions/Drink/drinkActions'
import {DrinkCard} from '../components/Card/DrinkCard'

class DrinkContainer extends Component {
  componentDidMount () {
    this.props.fetchDrinks()
  }

  render () {
    return <div style={{display: 'flex'}}>{this.props.drinks.map( drink => <DrinkCard key={drink.id} drink={drink}/>)}</div>
  }
}

const mapStateToProps = state => {
  return {
    drinks: state.drinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkContainer)
