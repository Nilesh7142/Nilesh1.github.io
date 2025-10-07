import React from 'react';

const Extras = () => {
  return (
    <div className="grid-container">
      <section className="card">
        <h2>Certifications</h2>
        <ul>
          <li>Software Conceptual Design (NPTEL)</li>
          <li>Google Cloud Computing Foundations (NPTEL)</li>
          <li>Deep Learning AI (Coursera)</li>
          <li>Introduction to Unix (Infosys)</li>
        </ul>
      </section>
      <section className="card">
        <h2>Awards</h2>
        <ul>
          <li>Campus Techfest 3rd Place (1 time)</li>
          <li>Hackathons Participation (2 times)</li>
        </ul>
      </section>
      <section className="card">
        <h2>Languages</h2>
        <ul>
          <li>Hindi - Advanced</li>
          <li>English - Intermediate</li>
        </ul>
      </section>
    </div>
  );
};

export default Extras;