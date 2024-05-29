import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../feature/Users/userThunk';
import LoginForm from '../components/Login/Login';

import './LoginContainer.css';

const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (user) => {
    dispatch(login(user));
    setUsername('');
    setPassword('');
  };

  return (
    <div className='container-fluid login'>
      <LoginForm
        username={username}
        password={password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginContainer;
