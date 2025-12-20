

import React, { useState } from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <>
      {/* TOP HEADER */}
      <div className="head1">
        <div className="logo">
          <span>
            <i style={{ fontSize: 30 }} className="ri-stethoscope-line"></i>
          </span>
          <span style={{ color: "blue", fontWeight: "bold", fontSize: 25 }}>
            Med
          </span>
          <span style={{ fontWeight: "bold", fontSize: 25 }}>ico</span>
          <span style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>+</span>
          <br />
          <span style={{ fontFamily: "cursive" }}>
            Medical Health Center
          </span>
        </div>

        <div className="head-detail">
          <div className="det-1">
            <i className="ri-phone-line"></i>
            Call Us Now! <br />
            <span>+8038043948879</span>
          </div>

          <div className="det-2">
            <i className="ri-calendar-schedule-line"></i>
            Opening Hours <br />
            <span>Mon - Fri : 09:00 - 08:00</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="head2">
        <div className="nav-left">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`navbar ${menuOpen ? "active" : ""}`}>
           <button className="dashb-btn"><Link style={{color:"white",textAlign:"center",fontSize:17,textDecoration:"none"}} to="/dashboard" onClick={() => setMenuOpen(false)}>ADMIN</Link></button> 

            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link>

          </div>
        </div>
        
        <div className="socials">
           

          <button onClick={handleLogin}>Login Now</button>
        </div>
      </div>
    </>
  );
};

export default Header;
