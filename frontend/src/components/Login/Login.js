import React from 'react'
import { useNavigate } from 'react-router'

const LoginForm = props => {
  let navigate = useNavigate()

  const handleSubmitRedirect = (e) => {
  e.preventDefault()
    const user = { user :{
      username:props.username,
      password: props.password
    }}
    props.handleSubmit(user)
    navigate(`/profile`)
  }

  console.log(props)
  return (
      <form onSubmit={e => handleSubmitRedirect(e)}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type={'text'}
            name='username'
            value={props.username}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label htmlFor='username'>Password:</label>
          <input
            type={'password'}
            name='password'
            value={props.password}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input type={'submit'} />
        </div>
      </form>
  )
}

export default LoginForm
