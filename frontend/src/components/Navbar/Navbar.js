import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
  state = {
    active: false
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  handleLogin = () => {
    console.log(localStorage.getItem('jwt'))
  }

  render () {
  console.log(this.props.s)
    return (
      <nav className='Navbar-Items'>
        <h1 className='navbar-logo'>
          Drinks On Me
          <i className='fa fa-glass' />
        </h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a className={item.clName} href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default connect()(Navbar)
