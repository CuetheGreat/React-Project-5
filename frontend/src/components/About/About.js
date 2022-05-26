import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container className='about-container' style={{ color: 'white' }}>
      <Container style={{ display: 'flex' }}>
        <Container className='about-text' style={{ margin: 'auto' }}>
          <h1 className='about-title' style={{ textAlign: 'center' }}>
            About This Project
          </h1>
          <p
            style={{
              backgroundColor: '#cc3500',
              borderRadius: '12px',
              height: 'fit-content',
              padding: '20px',
              margin: 'auto'
            }}
            className='about-description'
          >
            This is the site I designed for my final flatiron project. Housing a
            database a database of different drinks and allow users to add
            drinks to a list of favorites. It uses a Rails back end to store
            data and React for the frontend.
          </p>
        </Container>
        <Container className='about-image'>
          <img
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '50%'
            }}
            src='/negroni.png'
            alt=''
          />
        </Container>
      </Container>
    </Container>
  )
}

export default About
