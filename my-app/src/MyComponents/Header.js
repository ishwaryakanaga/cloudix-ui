import React from 'react'
import { FaCaretDown, FaGlobe } from 'react-icons/fa'
import "./mystyle.css"


const Header = () => {
    return (   
        <div className="topnav" >
            <img className="nav"
               src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" 
               alt="primevideo logo"/>
            <a href="#sign in">Sign in</a>
            <div className="dropdown">
           <button className="dropbtn"><FaGlobe />
               EN <FaCaretDown /></button>
           </div>
           <div class="dropdown-content">
               <a href="#Tamil">Tamil</a>
               <a href="#English">English</a>
               <a href="#Hindi" >Hindi</a>
           </div>
         </div>    
    )
}

export default Header;
