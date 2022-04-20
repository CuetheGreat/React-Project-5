import { connect } from 'react-redux'
import './App.css'
import { Component, Fragment } from 'react'
import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import DrinkContainer from './containers/DrinkContainer'
import DrinkPage from './components/DrinkPage'
import { getDrinks } from './actions/Drinks/drinkActions'
import DrinkForm from './components/DrinkForm/DrinkForm'
import LoginContainer from './containers/LoginContainer'
import { getCurrentUser } from './actions/Users/userActions'
import UserProfile from './components/UserProfile/UserProfile'

class App extends Component {
  componentDidMount () {
    this.props.fetchDrinks()
  }

  render () {
  console.log( 'App:',this.props.drinks_state.drinks)

    return (
      this.props.loading ?  (<div></div>): (
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route
            exact path='/drinks'
            element={<DrinkContainer drinks={this.props.drinks_state.drinks} />}
          />
          <Route exact path='/drinks/new' element={<DrinkForm />} />
          <Route
            path='/drinks/:slug'
            element={<DrinkPage drinks={this.props.drinks_state.drinks} />}
          />
          <Route path='/login' element={<LoginContainer />} />
          <Route
            path='/profile'
            element={<UserProfile user={this.props.currentUser} />}
          />
        </Routes>
      </Fragment>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    loading_state: state.loading,
    drinks_state: state.drinks,
    user_state: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(getDrinks()),
    fetchCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
