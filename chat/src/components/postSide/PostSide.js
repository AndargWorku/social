import React from 'react'
import './PostSide.css';
import Posts from "../posts/Posts"
import PostShare from "../../components/postShare/PostShare"
const PostSide = () => {
  return (
    <div className='PostSide'>
      <PostShare/>
      <Posts/>
    </div>
  )
}

export default PostSide
