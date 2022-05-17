import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { currentUser } from '../../feature/Users/userThunk'
import './UserProfile.css'

class UserProfile extends Component {
  componentDidMount () {
    this.props.getCurrentUser()
  }
  render () {
    console.log('Profile:', this.props.user)
    const currentUser = this.props.user
    return !!currentUser ? (
      <Container className='profile-container'>
        <img className='image' src={currentUser.avatar} alt='' />
        <Container>
          <h2 className='username'>@{currentUser.username}</h2>
          <p className='bio'>{currentUser.bio}</p>
        </Container>
      </Container>
    ) : (
      <div></div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(currentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
