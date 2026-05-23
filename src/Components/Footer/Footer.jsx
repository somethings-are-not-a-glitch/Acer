import React from 'react'
import './Footer.css'
import { CiYoutube } from "react-icons/ci";
import { FaVk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='footer'>

        <div className='left-apps'>
              <CiYoutube className='icon'/>
              <FaVk className='icon'/>
              <FaTwitter className='icon'/>
              <AiFillTikTok className='icon'/>
              <FaInstagramSquare className='icon'/>
        </div>

        <div className='right-text'>
        <img src='https://static.vecteezy.com/system/resources/previews/019/766/411/non_2x/acer-logo-acer-icon-transparent-free-png.png' width={200} alt='acer logo'/>
        <p>Federally registered<br/> Trademarks of 25 acer LLC</p> 
        <p>Much more is coming to this website, Just wait</p>
        </div>

    </div>
  )
}
