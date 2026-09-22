import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../Animation/Animated.css"


export default function AnimatedOffer() {
  return (
    <div className="animated-offer">
      <h2>
        What We Offer:{" "}
        <span className="typewriter">
          <Typewriter
            words={[
              "Quality Healthcare",
              "Online Consultations",
              "Medical Advice",
              "Emergency Services",
              "24/7 Support"
            ]}
            loop={0}               
            cursor
            cursorStyle="|"
            typeSpeed={100}        
            deleteSpeed={50}      
            delaySpeed={2000}      
          />
        </span>
      </h2>
    </div>
  );
}
