import React,{useState} from 'react'
import './InfoCard.css'
import {UilPen} from "@iconscout/react-unicons"
import ProfileModal from "../profileModal/ProfileModal"
const InfoCard = () => {

    const[modalOpened,setModalOpened]=useState(false)
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>your info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <ProfileModal  modalOpened={modalOpened}  setModalOpened={setModalOpened}/>
            </div>

        </div>
        <div className='info'>
            <span>
                <b>Status</b>
                <span>Relationship</span>

                </span>

        </div>
        <div className='info'>
            <span>
                <b>Live in </b>
                <span>Ethiopia</span>

                </span>

        </div>
        <div className='info'>
            <span>
                <b>works at  </b>
                <span>mereb</span>

                </span>

        </div>
        <button className='button logout-button'>Logo out</button>
      
    </div>
  )
}

export default InfoCard
