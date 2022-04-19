import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/Users/userActions'
import LoginForm from '../components/Login/Login'

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

  handleSubmit = (user) => {
    this.props.loginUser(user)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
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
    loginUser: user => dispatch(loginUser(user))
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer)
