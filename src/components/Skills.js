// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Importing the CSS for the Skills component

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
        <div className="skill-item">Python</div>
        <div className="skill-item">Django</div>
        <div className="skill-item">Flask</div>
        <div className="skill-item">SQL</div>
        <div className="skill-item">Git</div>
        <div className="skill-item">Docker</div>
        {/* Add more skills as needed */}
      </div>
    </section>
  );
};

export default Skills;
