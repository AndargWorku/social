import React from 'react'
import './Home.css'
import RightSide from "../../components/RightSide/RightSide"
import PostSide from "../../components/postSide/PostSide"
import ProfileSide from "../../components/profileSide/ProfileSide"
const Home = () => {
  return (
    <div className="Home">
 <ProfileSide/> 
 <PostSide/>
 <RightSide/>    
    </div>
  )
}

export default Home
