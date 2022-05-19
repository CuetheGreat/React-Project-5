import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import DrinksPage from '../containers/DrinkContainer'
import DrinkPage from '../components/DrinkPage'
import DrinkForm from '../components/DrinkForm/DrinkForm'
import LoginPage from '../containers/LoginContainer'
import UserProfilePage from '../components/UserProfile/UserProfile'
import Home from '../components/Home/Home'

class App extends Component {
  render () {
    return (
      <section id='body'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='drinks' element={<DrinksPage />}>
            <Route exact path='new' element={<DrinkForm />} />
            <Route path=':slug' element={<DrinkPage />} />
          </Route>
          <Route path='log_in' element={<LoginPage />} />
          <Route path='sign_up' element={<LoginPage />} />
          <Route path='profile' element={<UserProfilePage />} />
        </Routes>
      </section>
    )
  }
}

export default App
