import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nilesh Kumar</h1>
          <p className="intro-text">
            A motivated B.Tech Computer Science student with hands-on experience in C and Python programming. I enjoy working in fast-paced, collaborative environments and take pride in being a quick learner who is always looking to grow.
          </p>
          
          {/* --- ADD THIS NEW BUTTON --- */}
          <a href="/Nilesh_Kumar_CV.pdf" className="cta-button" download>
            Download CV
          </a>

        </div>
        <div className="hero-image">
          <img src="/Nilesh Kumar.png" alt="Nilesh Kumar Profile Picture" />
        </div>
      </div>
    </header>
  );
};

export default Hero;