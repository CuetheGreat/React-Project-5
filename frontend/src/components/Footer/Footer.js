import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
  <footer className='footer'>
    <Row>
      <Col>
        <h2>About Us</h2>
        <Link to='#'>Aim</Link>
        <Link to='#'>Testimonials</Link>
      </Col>
      <Col>
        <h2>Services</h2>
        <Link to='#'>Drinks</Link>
        <Link to='#'>New Drink</Link>
        <Link to='#'>Profile</Link>
      </Col>
    </Row>
  </footer>)
}

export default Footer
