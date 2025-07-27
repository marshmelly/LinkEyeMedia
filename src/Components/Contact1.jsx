import React from 'react'
import pic from './project files/Pic.png'
import './Contact1.css'
import fb from './project files/fbb.jpeg'
import ig from './project files/ig.jpeg'





const Contact = () => {
return (
    <div className='text'>
      <h1>Contact Us</h1>
    <div className='p-2 pic'>
        <img src={pic} alt="" className='pic' />
    </div>
    
    
<br /><br />
 
    <div className="row justify-content-center mt-2">

    
       <div className="shadow card col-md-6 p-2">
        <h3>You can also contact us and book at</h3>
     <div className="">
       <a href='https://mail.google.com/mail/u/0/?fs=1&to=linkeyemedia@gmail.com&tf=cm'>linkeyemedia@gmail.com</a>
      <p> Phone: +254 720 887</p>
     </div>

    <div className="container-fluid row">
       <div className="col-md-6">
      <a href="https://www.facebook.com/Zashteh">
      <img src={fb} alt="facebook" className='contact-pic'/> </a>
       <p>@Link Eye Media</p>
     </div>

     <div className="col-md-6">
      <a href="https://www.instagram.com/zashphotocreations/">
      <img src={ig} alt="instagram" className='contact-pic' /></a>
      <p>@Zashphotocreations</p>
     </div>
    </div>

     </div>
     
<br /><br />
   </div>

    
 
     <br />
    </div>
  )
}

export default Contact;
