import React from 'react'
import SidePic from '../assets/security.jpg'
import '../css/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${SidePic})` }}></div>
        <div className='aboutBottom'>
            <h1> За нас</h1>
            <p>We get robbed, we fuck up robber, *ding*ding buisness idea</p>
        </div>
    </div>
  )
}

export default About