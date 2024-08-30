
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import React from 'react'
import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import Service from "../components/Services"
import Services from '../components/Services';
import Appreciation from '../components/Appreciations'
import Appreciations from '../components/Appreciations';
import Program from '../components/Programs';
import Footers from '../components/Footers'

const HomePages = () => {
  return (
    <div fluid className=' py-5' style={{backgroundColor:'#06D001'}}>
    <Hero/>
    <Testimonials/>
    <Services/>
    <Appreciations/>

    {/* <Program/> */}

'
  
  
    <Footers/>
    
  


   </div> 
  )
}

export default HomePages