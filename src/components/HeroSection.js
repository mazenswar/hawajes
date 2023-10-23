import React from 'react';

function HeroSection({ img, text }) {
  return (
    <div className="hero-section">
      <img src={img} alt="aqeel-headshot" />
      <div className="text-div">
        <h2 className="linebreak">{text}</h2>
      </div>
    </div>
  );
}

export default HeroSection;
