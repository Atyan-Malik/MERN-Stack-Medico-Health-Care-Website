import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Animated from "../components/Animation/Animated";
import About from "./About";
import Services from "./Services";
import Contact from "../pages/Contact";
import Blog from "./Blog";
import Doctors from "./Doctors";

export default function HeroSlider() {
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate("/services");
  };

  const handleServices = () => {
    navigate("/services");
  };

  const slides = [
    "/hero2.jpg",
    "/hero1.jpg",
    "/hero3.jpg",
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
      <section className="hero-slider">
        <Slider {...settings}>
          {slides.map((img, index) => (
            <div key={index} className="slide">
              <div
                className="slide-background"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>

        <div className="hero-content">
          <div className="hero-main-content">

            <span className="hero-eyebrow">
              <i className="ri-heart-pulse-line"></i>
              Trusted Healthcare Center
            </span>

            <h1>
              Your Health.
              <span>Our Priority.</span>
            </h1>

            <p>
              Quality healthcare made simple, accessible, and
              centered around you. Get professional medical care
              from a team you can trust.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="hero-primary-btn"
                onClick={handleAppointment}
              >
                <span>Book an Appointment</span>
                <i className="ri-arrow-right-line"></i>
              </button>

              <button
                type="button"
                className="hero-secondary-btn"
                onClick={handleServices}
              >
                Explore Services
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong>24/7</strong>
                <span>Healthcare Support</span>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <strong>100%</strong>
                <span>Patient Focused</span>
              </div>

              <div className="hero-stat-divider"></div>

              <div className="hero-stat">
                <strong>Trusted</strong>
                <span>Professional Care</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Animated />
      <About />
      <Doctors />
      <Services />
      <Contact />
      <Blog />
    </>
  );
}