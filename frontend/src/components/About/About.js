import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className='about-container'>
      <Container className='about-content'>
        <Container className='about-text'>
          <h1 className='about-title'>About This Project</h1>
          <p className='about-description'>
            This is the site I designed for my final flatiron project. Housing a database of different drinks
            and allowing users to add drinks to a list of favorites. It uses a Rails back end to store data
            and React for the frontend.
          </p>
        </Container>
        <Container className='about-image'>
          <img src='/negroni.png' alt='Negroni drink' className='about-img' />
        </Container>
      </Container>
    </Container>
  );
};

export default About;
