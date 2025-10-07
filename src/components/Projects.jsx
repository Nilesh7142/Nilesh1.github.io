import React from 'react';

const Projects = () => {
  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Student Management System</h3>
        <p>Built a system to manage student registration, courses, and performance records with easy add/update features, improving data organization and accessibility.</p>
      </div>
      <div className="project-item">
        <h3>Hospital Management System</h3>
        <p>Designed and implemented a system to manage patient/doctor registrations, appointment scheduling, and billing, improving hospital record-keeping and efficiency.</p>
      </div>
      <div className="project-item">
        <h3>Voting System using Blockchain</h3>
        <p>Developed a secure and transparent electronic voting platform leveraging blockchain technology to ensure data integrity, prevent tampering, and build trust in the voting process.</p>
      </div>
    </section>
  );
};

export default Projects;