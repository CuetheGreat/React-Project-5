import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <Container className='home-page'>
      <div className='home-splash'>
        <div className='title-div'>
          <span className='subtitle'>Your personalized bartender</span>
          <div className='title'>
            One Stop For All Of Your Favorite Drink Recipes.
          </div>
          <Link className='cta-btn' to='#'>
            View Drinks
          </Link>
        </div>
        <div className='image-div'>
          <Image className='drink-image' src='/pngegg.png' alt='bourbon logo' />
        </div>
      </div>
    </Container>
  )
}

export default Home
