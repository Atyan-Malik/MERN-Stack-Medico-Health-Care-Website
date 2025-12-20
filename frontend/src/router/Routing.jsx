import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Services from '../pages/Services';
import Contact from "../pages/Contact"
import Blog from '../pages/Blog';
import Login from '../pages/Login';
import BlogDetail from "../pages/BlogDetail"
import Appoint from '../pages/Appoint';
import Dashboard from '../pages/Dashboard';
import Appointments from '../pages/Appointments';
import Doctors from '../pages/Doctors';


const Routing = () => {
  return (
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/appoint" element={<Appoint/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/doctors" element={<Doctors/>} />
        
      </Routes>
    
  )
}

export default Routing
