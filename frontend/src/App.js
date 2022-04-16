import { connect } from 'react-redux'
import './App.css'
import { Component, Fragment } from 'react'
import Landing from './components/Landing/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </Fragment>
    )
  }
}

export default connect()(App)
