import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-dark text-light mt-auto py-3'>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='#' className='text-light'>
                  Aim
                </Link>
              </li>
              <li>
                <Link to='#' className='text-light'>
                  Testimonials
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Services</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/drinks' className='text-light'>
                  Drinks
                </Link>
              </li>
              <li>
                <Link to='/drinks/new' className='text-light'>
                  New Drink
                </Link>
              </li>
              <li>
                <Link to='/profile' className='text-light'>
                  Profile
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@drinksonme.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className='pt-3'>
          <Col className='text-center'>
            <p className='text-muted'>© 2023 Drinks On Me. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
