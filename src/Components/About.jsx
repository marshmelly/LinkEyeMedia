import React from 'react'
import image from './About.jpg'
import  './About.css'

const About = () => {
  return (
    <div className='About-page'>
      <h1 >ABOUT LINK EYE</h1>
       <img src={image} alt="link eye" className='image' />
     
    </div>
  )
}

export default About;
