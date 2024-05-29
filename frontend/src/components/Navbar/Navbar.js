import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Drinks On Me</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/drinks'>
              <Nav.Link>Drinks</Nav.Link>
            </LinkContainer>
            {user && (
              <LinkContainer to='/profile'>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          <Nav>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            {user ? (
              <LinkContainer to='/logout'>
                <Nav.Link>Log Out</Nav.Link>
              </LinkContainer>
            ) : (
              <>
                <LinkContainer to='/login'>
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
