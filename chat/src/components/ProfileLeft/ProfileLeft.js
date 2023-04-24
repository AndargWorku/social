import React from 'react'

import LogoSearch from "../logoSearch/LogoSearch"
import InfoCard from "../infoCard/InfoCard"
import FollowCard from "../followCard/FollowCard"
const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <InfoCard/>
      <FollowCard/>
    </div>
  )
}

export default ProfileLeft
