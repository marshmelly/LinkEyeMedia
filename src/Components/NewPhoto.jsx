import React from 'react'
import snip from './project files/snipp.png'
import snip1 from './project files/Snip1.png'
import pic from './project files/theatre.jpg'
import photo from './project files/potrait.jpg'
import './NewPhoto.css'

const NewPhoto = () => {
  return (
    <div className='photography'>
      <h1>Photography</h1>
      <img src={snip} alt="" /><br /> <br /> <br />
      <img src={pic} alt="" className='pic' /> <br /> <br />
      <img src={photo} alt="" className='pic' /><br /><br />
      <img src={snip1} alt="" /><br /><br />
    </div>
  )
}

export default NewPhoto
