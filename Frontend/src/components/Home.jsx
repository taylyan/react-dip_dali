import React, { useEffect } from 'react'
import BannerImage from '../assets/security.jpg'
import '../css/Home.css';
import axios from 'axios'


const Home = () => {
  
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >

            <h1>SECURITY IS NUMBER ONE PRIORITY</h1>
            
                    
        </div>
    </div>
  )
}

export default Home