import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-text">
          <h1>About </h1>
          <h3 style={{fontSize:30}}>Compassionate Care for every patient!</h3>
          <p>
            VitalBloom is dedicated to providing the best healthcare services
            with modern technology and compassionate care. Our mission is to
            ensure your well-being at every stage of life. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Quisquam explicabo, impedit,
            harum exercitationem laudantium maiores voluptatem sed labore vitae
            perferendis, amet voluptatum sunt ipsam aliquam corrupti tempore
            eius ullam officia?
          </p>
          <button>Learn More</button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img src="about1.jpg" alt="About VitalBloom" /> 
           <div className="btm-img">
          <img src="about2.jpg" alt="About VitalBloom" />
          <img src="about3.jpg" alt="About VitalBloom" />
           </div>
          
        </div>
      </div>
    </section>
  );
}
