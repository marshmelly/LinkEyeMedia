import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css';
import { FaArrowRight} from 'react-icons/fa';

const Landing = () => {
 const navigate = useNavigate('');
  
  return (
   <div className="header">
    <div className="background-image">
      
      <div className="overlay">
        <h1>
          Welcome to Link Eye Media
        </h1>
        <p>Come and explore a world full of ecstatic memories</p>
      </div>
      <div className="button-container">
        <button className='explore-button' onClick={()=> navigate('/home')}>Explore <FaArrowRight/></button>
      </div>
    </div>
   </div>
  )
}

export default Landing;
