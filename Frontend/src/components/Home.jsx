import React, { useEffect } from 'react'
import BannerImage from '../assets/security.jpg'
import '../css/Home.css';
import axios from 'axios'

const Home = () => {
  
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >

            <h1> Securiti is nymber one priority</h1>
            <p>For every valuble place</p>
            
                    
        </div>
    </div>
  )
}

export default Home