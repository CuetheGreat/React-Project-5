import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../feature/Users/userThunk';
import './UserProfile.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return user ? (
    <Container className='profile-container'>
      <img className='image' src={user.avatar} alt='User Avatar' />
      <Container>
        <h2 className='username'>@{user.username}</h2>
        <p className='bio'>{user.bio}</p>
      </Container>
    </Container>
  ) : (
    <div></div>
  );
};

export default UserProfile;
