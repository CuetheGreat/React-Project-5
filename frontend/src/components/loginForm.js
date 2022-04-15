import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type={'text'} name='username' value={this.state.username} onChange={this.handleChange} />
        <input type={'password'} name='password' value={this.state.password} onChange={this.handleChange} />
        <input type={'submit'} />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(null,mapDispatchToProps)(LoginForm)
