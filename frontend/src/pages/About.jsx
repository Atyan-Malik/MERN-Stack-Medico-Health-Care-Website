
import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Content */}
        <div className="about-text">
          <span className="about-label">
            About Medico
          </span>

          <h2>
            Compassionate care,
            <span> focused on you.</span>
          </h2>

          <div className="about-line"></div>

          <p className="about-intro">
            Your health deserves trusted care, modern solutions,
            and a team that truly listens.
          </p>

          <p className="about-description">
            Medico is dedicated to providing reliable healthcare services
            with modern technology and compassionate care. Our goal is to
            make quality healthcare accessible, comfortable, and centered
            around every patient's individual needs.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <i className="ri-heart-pulse-line"></i>
              <div>
                <strong>Patient First</strong>
                <span>Care designed around your needs</span>
              </div>
            </div>

            <div className="about-feature">
              <i className="ri-shield-check-line"></i>
              <div>
                <strong>Trusted Care</strong>
                <span>Professional and reliable services</span>
              </div>
            </div>
          </div>

          <button className="about-btn">
            <span>Learn More</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        {/* Images */}
        <div className="about-image">

          <div className="about-main-image">
            <img
              src="/about1.jpg"
              alt="Healthcare professional providing patient care"
            />

            <div className="about-badge">
              <i className="ri-heart-pulse-line"></i>
              <div>
                <strong>Quality Care</strong>
                <span>Always with you</span>
              </div>
            </div>
          </div>

          <div className="btm-img">
            <div>
              <img
                src="/about2.jpg"
                alt="Medical consultation"
              />
            </div>

            <div>
              <img
                src="/about3.jpg"
                alt="Healthcare team"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
