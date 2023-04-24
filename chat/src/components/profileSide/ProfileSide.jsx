import React from 'react'
import LogoSearch from "../logoSearch/LogoSearch"
import ProfileCard from "../profileCard/ProfileCard"
import './ProfileSide.css'
import FollowCard from "../followCard/FollowCard"
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowCard/>
    </div>
  )
}

export default ProfileSide
