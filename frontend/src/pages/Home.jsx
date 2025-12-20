import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Animated from "../components/Animation/Animated"
import About from "./About";
import Services from "./Services";
import Contact from "../pages/Contact"
import Blog from "./Blog";


export default function HeroSlider() {

const navigate=useNavigate()

const handleChange=()=>{
  navigate("/services")
}
 const slides = [
  "/hero2.jpg",
  "/hero1.jpg",
  "/hero3.jpg"
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    arrows: true,
  };

  return (
    <>
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index} className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="hero-content">
        <h1>Welcome to Medico</h1>
        <p>Your trusted healthcare partner</p>
        <button onClick={handleChange}>Get Started</button>
      </div>
    </div>

    <Animated/>
    <About/>
    <Services/>
    <Contact/>
    <Blog/>
    </>
  );
}
