import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../feature/Users/userThunk'
import LoginForm from '../components/Login/Login'

import './LoginContainer.css'


class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = user => {
    this.props.login(user)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div className='container-fluid login'>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
