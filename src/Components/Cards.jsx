import React from 'react'
import bronze from './project files/Bronzepackage.jpg'
import silver from './project files/Silverpackage.jpg'
import platinum from './project files/Platinumpackage.jpg'
import { useNavigate } from 'react-router-dom'
import './Cards.css'

const Cards = () => {
    const navigate = useNavigate("");
  return (
    
     <div className="container-fluid row">
     <div className="col-md-4" >
            <div className="card shadow">
              <img src={bronze} alt=""  className='card-image'/>
              <div className="card-body">
                <h5 className="mt-2">Bronze Package</h5>
                
                <b className="text-warning">Ksh 65000</b> <br />
                <button
                  className="button"
                  onClick={() => {
                    navigate("/contact");}}>
                  Book Now
                </button>
              </div>
            </div>
           
          </div>

          <div className="col-md-4 mb-3" >
            <div className="card shadow">
              <img src={silver} alt=""  className='card-image'/>
              <div className="card-body">
                <h5 className="mt-2">Silver Package</h5>
                
                <b className="text-warning">Ksh 85000</b> <br />
                <button
                  className="button"
                  onClick={() => {
                    navigate("/contact");}}>
                  Book Now
                </button>
              </div>
            </div><hr />
            
          </div>

          <div className="col-md-4" >
            <div className="card shadow">
              <img src={platinum} alt=""  className='card-image'/>
              <div className="card-body">
                <h5 className="mt-2">Platinum Package</h5>
                
                <b className="text-warning">Ksh 120000</b> <br />
                <button
                  className="button"
                  onClick={() => {
                    navigate("/contact");}}>
                  Book Now
                </button>
              </div>
            </div>
            
          </div>
     </div>

    
  )
}

export default Cards
