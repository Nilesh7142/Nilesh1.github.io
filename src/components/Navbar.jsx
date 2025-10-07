import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="#about">Personal Info</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Get In Touch</a>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/nilesh-kumar-353b1926a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Nilesh7142" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;