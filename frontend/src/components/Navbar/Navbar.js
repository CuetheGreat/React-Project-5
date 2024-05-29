import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';

const NavigationBar = () => {
  const { user } = useSelector((state) => state.user);

  const activeClass = user ? 'active' : 'default';
  const activeLinks = MenuItems.map((item) => ({
    ...item,
    clName: item.clName.includes('default') ? `nav-link ${activeClass}` : item.clName,
  }));

  return (
    <header>
      <Navbar className='Navbar-Items'>
        <Container>
          {/* Navbar Logo Div */}
          <Navbar.Brand style={{ fontSize: '2em', color: 'white', display: 'flex', alignItems: 'center' }}>
            <i className='fa fa-glass' />
            <Link className='nav-brand' to='/'>
              Drinks On Me
            </Link>
          </Navbar.Brand>

          {/* Navbar Menu Div */}
          <ul className='nav-menu'>
            {activeLinks.map((item, index) => (
              <li key={index}>
                <Link className={item.clName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Navbar CTA links div */}
          <div className='cta-div'>
            <Link className='nav-link default nav-right' to='/contact'>
              Contact Us
            </Link>
            {user ? (
              <Link className='nav-cta-link default nav-right' to='/log_out'>
                Log Out
              </Link>
            ) : (
              <Link className='cta-link default nav-right' to='/log_in'>
                Log In
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
