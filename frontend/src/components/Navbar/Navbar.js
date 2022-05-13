import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const NavigationBar = () => {
  return (
    <Container>
      <Navbar className='Navbar-Items'>
        <div className='navbar-logo' style={{ display: 'flex' }}>
          <Navbar.Brand style={{fontSize: '2em', color: 'white'}}>
            <i className='fa fa-glass' />
            Drinks On Me
          </Navbar.Brand>
        </div>
        <ul className='nav-menu active'>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.clName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Navbar>
      <Outlet />
    </Container>
  )
}

export default NavigationBar
