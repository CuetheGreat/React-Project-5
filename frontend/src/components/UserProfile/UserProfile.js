import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../../actions/Users/userActions'
import './UserProfile.css'

class UserProfile extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }
  render () {
    let currentUser = this.props.user_state.user
    console.log("Profile:", currentUser)
    return (
      <div className='profile-container'>
        <img className='image' src={currentUser.avatar} alt='' />
        <div>
          <h2 className='username'>@{currentUser.username}</h2>
          <p className='bio'>{currentUser.bio}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user_state: state.user
  }
}


const mapDispatchToProps = dispatch => {
  return{
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)
