import React from 'react'
import './UserProfile.css'

const UserProfile = props => {
  const { currentUser } = props.user
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
export default UserProfile
