import { Component, Fragment } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import DrinksPage from '../containers/DrinkContainer'
import DrinkPage from '../components/DrinkPage'
import DrinkForm from '../components/DrinkForm/DrinkForm'
import LoginPage from '../containers/LoginContainer'
import UserProfilePage from '../components/UserProfile/UserProfile'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='drinks' element={<DrinksPage />}>
            <Route exact path='new' element={<DrinkForm />} />
            <Route path=':slug' element={<DrinkPage />} />
          </Route>
          <Route path='log_in' element={<LoginPage />} />
          <Route path='sign_up' element={<LoginPage />} />
          <Route path='profile' element={<UserProfilePage />} />
        </Routes>
        <Outlet />
      </Fragment>
    )
  }
}

export default App
