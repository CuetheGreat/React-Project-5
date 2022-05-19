import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

const NavigationBar = () => {
  const { user } = useSelector(state => state.user)

  let active = user ? 'active' : 'default'

  let activelinks = MenuItems.filter(item => item.clName.includes(`${active}`))

  return (
    <header>
      <Navbar className='Navbar-Items'>
        {/* Navbar Logo Div */}
        <div className='navbar-logo' style={{ display: 'flex' }}>
          <Navbar.Brand style={{ fontSize: '2em', color: 'white' }}>
            <i className='fa fa-glass' />
            <Link className='nav-brand' to='/'>
              Drinks On Me
            </Link>
          </Navbar.Brand>
        </div>

        {/* Navbar Menu Div */}
        <div className='menu-div'>
          <ul className={`nav-menu`}>
            {activelinks.map((item, index) => (
              <li key={index}>
                <Link className={item.clName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar CTA links div  */}
        <div className='cta-div'>
          <Link className='nav-link default nav-right' to='/contact'>
            Contact Us
          </Link>
          {!!user ? (
            <Link className='nav-cta-link default nav-right' to='/log_out'>
              Log Out
            </Link>
          ) : (
            <div className='nav-cta-link'>
              <Link className='cta-link default' to='/log_in'>
                Log In
              </Link>
            </div>
          )}
        </div>
      </Navbar>
    </header>
  )
}

export default NavigationBar
