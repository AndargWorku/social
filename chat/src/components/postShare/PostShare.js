import React,{useState,useRef} from 'react'
import "./PostShare.css"
import * as Unicons from '@iconscout/react-unicons';
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";
import ProfileImage from "../../img/profileImg.jpg"
const PostShare = () => {

    const[image,setImage]=useState(null)
    const imageRef=useRef()

    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img=event.target.files[0];
            setImage({
                image:URL.createObjectURL(img),
            });
        }

    }
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt=''/>
      <div>
        <input type='text' placeholder="What's happing"/>
        <div className="postOptions">
        <div className="option"
        style={{color:"var(--photo)"}}
        onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            photo
        </div>
        <div className="option"
        style={{color:"var(--video)"}}>
            <UilPlayCircle/>
            video
        </div>
        <div className="option"
        style={{color:"var(--location)"}}>
            <UilLocationPoint/>
            Location
        </div>
        <div className="option"
        style={{color:"var(--schedule)"}}>
            <UilSchedule/>
            schedule
        </div>
        <button className="button ps-button">Share</button>
        <div
        style={{display:'none'}} onChange={onImageChange}>
            <input type="file" name="myImage" ref={imageRef}/>
        </div>
      </div>
      {image &&(
        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)} />
          <img src={image.image} alt=""/>  
        </div>
      )}
      </div>
      
    </div>
  )
}

export default PostShare
