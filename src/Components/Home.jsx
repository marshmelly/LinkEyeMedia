import React from 'react';
import image from './project files/potrait.jpg';
import snip from './project files/snipp.png';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Cards from './Cards';



const Home = () => {
  const navigate = useNavigate('')
  return (
    <div className='Home'>
   <marquee className='marquee'>Welcome To Link Eye</marquee>
   <h3 className='text'>Thank you for contacting Link Eye Media! Please Let us Know how we can be of help.
    Link Eye Agencies is a proffessional photography company  based in the heart of Kisumu CBD, led by the C.E.O Zadock Rolfenson.
    We are specialized in capturing life's most cherished moments with creativity and heart felt moments. 
   </h3>
   <div className='shadow card p-2 home-image'>
    <img src={image} alt="" className='image' />
   </div><br />
   <div className='butt'>
    <img src={snip} alt="" />
    <p>We have different services</p>
   <div className='but-div'>
   <button className='button' onClick={()=>{navigate('/photography')}}> Photography</button>
   
   </div>
   <p>
    We also provide both videography and photography as a combined package.
    Currently we have three packages which you can choose from
   </p>
   <Cards/>
  

   </div>
   
     
    </div>
  )
}

export default Home
