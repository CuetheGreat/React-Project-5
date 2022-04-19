import { connect } from 'react-redux'
import './App.css'
import { Component, Fragment } from 'react'
import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import DrinkContainer from './containers/DrinkContainer'
import DrinkPage from './components/DrinkPage'
import { fetchAllDrinks } from './actions/Drinks/drinkActions'
import DrinkForm from './components/DrinkForm/DrinkForm'

class App extends Component {
  componentDidMount () {
    this.props.fetchDrinks()
  }

  render () {
    return (
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route
            exact
            path='/drinks'
            element={<DrinkContainer drinks={this.props.drinks} />}
          />
          <Route exact path='/new/drink' element={<DrinkForm />} />
          <Route
            path='/drinks/:slug'
            element={<DrinkPage drinks={this.props.drinks} />}
          />
        </Routes>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    drinks: state.drinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchAllDrinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
