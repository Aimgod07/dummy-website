import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>
          Discover amazing content and connect with our community. Join us today!
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="./hero-image.png" alt="Hero" />
      </div>
    </div>
  );
};
export default Hero;