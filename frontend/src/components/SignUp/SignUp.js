import React, { useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const SignUpForm = (props) => {
  let navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleSubmitRedirect = (e) => {
    e.preventDefault();
    props.handleSubmit(); // Assuming handleSubmit is passed as a prop to handle the form submission
  };

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [navigate, user]);

  return (
    <Container className='form_container' style={{ textAlign: 'center' }}>
      <Form onSubmit={handleSubmitRedirect}>
        <Form.Group>
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control type='text' name='username' value={props.username} onChange={props.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={props.password}
            onChange={props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='bio'>Bio:</Form.Label>
          <Form.Control type='text' name='bio' value={props.bio} onChange={props.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='avatar'>Avatar URL:</Form.Label>
          <Form.Control type='text' name='avatar' value={props.avatar} onChange={props.handleChange} />
        </Form.Group>
        <Form.Group>
          <input type='submit' value='Sign Up' />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignUpForm;
