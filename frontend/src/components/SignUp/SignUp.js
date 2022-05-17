import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const SignUpForm = props => {
  let navigate = useNavigate()
  const { user } = useSelector(state => state.user)

  const handleSubmitRedirect = e => {
    e.preventDefault()
  }

  useEffect(() => {
    if (!!user) {
      navigate('/profile')
    }
  }, [user])

  return (
    <Container className='form_container' style ={{textAlign:'center'}}>
      <Form onSubmit={e => handleSubmitRedirect(e)}>
        {/* Name Group */}
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
          <Form.Label htmlFor='username'>Password:</Form.Label>
          <Form.Control
            type={'text'}
            name='bio'
            value={props.password}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='username'>Password:</Form.Label>
          <Form.Control
            type={'password'}
            name='avatar'
            value={props.password}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <input type={'submit'} />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default SignUpForm
