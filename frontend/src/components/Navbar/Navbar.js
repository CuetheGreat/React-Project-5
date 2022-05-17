import React, { Fragment } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Link, NavLink } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const NavigationBar = () => {
  const { user } = useSelector(state => state.user)

  let active = user ? 'active' : 'inactive'

  let activelinks = MenuItems.filter( item => item.clName === `nav-links ${active}` )

  return (
    <Fragment>
      <Navbar className='Navbar-Items'>
        <div className='navbar-logo' style={{ display: 'flex' }}>
          <Navbar.Brand style={{fontSize: '2em', color: 'white'}}>
            <i className='fa fa-glass' />
            <Link className='nav-logo' to='/'>Drinks On Me</Link>
          </Navbar.Brand>
        </div>

        <ul className={`nav-menu`}>
          {activelinks.map((item, index) => (
            <li key={index}>
              <Link className={item.clName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Navbar>
    </Fragment>
  )
}

export default NavigationBar
