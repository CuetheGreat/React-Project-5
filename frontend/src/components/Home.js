import React from 'react'

const Home = () => {
    return (
      <div className='container'>
        <h1>Welcome</h1>
        <img
          src='https://www.svgheart.com/wp-content/uploads/2020/07/drink-and-fruit-free-svg-file.png'
          alt='drinks'
        />
        <div>
          <a href='/signin'>
            <button> Sign In </button>
          </a>
          <a href='/signup'>
            <button>Sign Up</button>
          </a>
        </div>
      </div>
    )
}

export default Home
