import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './Login.css'

const LoginForm = props => {
  let navigate = useNavigate()
  const { user } = useSelector(state => state.user)

  const handleSubmitRedirect = e => {
    e.preventDefault()
    const login = {
      user: {
        username: props.username,
        password: props.password
      }
    }
    props.handleSubmit(login)

    if (user) {
      navigate(`/profile`)
    }
  }

  return (
    <Container className='form_container' >
    <h1 className=''>Log In:</h1>
      <Form onSubmit={e => handleSubmitRedirect(e)}>
        <Form.Group>
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control
            type={'text'}
            name='username'
            value={props.username}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='username'>Password:</Form.Label>
          <Form.Control
            type={'password'}
            name='password'
            value={props.password}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button className='form_button' type={'submit'}>Submit </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default LoginForm
