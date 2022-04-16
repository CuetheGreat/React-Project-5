import { connect } from 'react-redux'
import './App.css'
import { Component } from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'


class App extends Component {
  render () {
    return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    )
  }
}

export default connect()(App)
