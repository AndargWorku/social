import React from 'react'
import './Profile.css'
import ProfileCard from "../../components/profileCard/ProfileCard"
import PostSide from "../../components/postSide/PostSide"
import RightSide from "../../components/RightSide/RightSide"

import ProfileLeft from "../../components/ProfileLeft/ProfileLeft"
const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft/>
      <div className='Profile-center'>
        <ProfileCard/>
        <PostSide/>

      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
