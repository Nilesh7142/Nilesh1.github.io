import React, { useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Extras from './components/Extras';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // This hook replicates the functionality from your script.js file
  useEffect(() => {
    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const sections = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4, // Trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Add 'visible' class to animate cards when they scroll into view
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }

        // Highlight the active navigation link
        const navLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          navLinks.forEach((link) => link.classList.remove('active'));
          if (navLink) {
            navLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function to unobserve elements when the component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;