import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar2';
import Footer from './Components/Footer2';
import NewPhoto from './Components/NewPhoto';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './Components/Landing';
import Portfolio from './Components/Portfolio';
import Service from './Components/Services';
import  Weddings from'./Components/Wedding';








function App() {
  return (
    <div className='App'>
     
      
       <Navbar/>       
           <BrowserRouter>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/' element={<Landing/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/weddings' element={<Weddings/>}/>
              <Route path='/services' element={<Service/>}/>
              <Route path='/photography' element={<NewPhoto/>}/>
              <Route path='/footer' element={<Footer/>}/>
            </Routes>
           </BrowserRouter>
       <Footer/>    
    </div>
      );
}

export default App;
