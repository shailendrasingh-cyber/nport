// src/components/About.js
import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../images/Profile.jpeg'; // Ensure correct path

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="about-description">
        I am a passionate Software Engineer with 1 year of experience in designing and building scalable web applications and services. My expertise lies in working with modern technologies such as Django, Flask, React, and SQL. I have successfully completed multiple internships, earning certificates that recognize my technical skills and contributions. Throughout my journey, I have developed a strong foundation in full-stack development, collaborating on both backend and frontend aspects of projects.
        <br />
        I am now eager to expand my horizons and contribute to innovative solutions at top product-based companies, particularly FAANG/MAANG, where I can continue to grow and apply my skills in a fast-paced, cutting-edge environment.
      </p>

      <h3>Qualifications</h3>
      <ul className="qualifications-list">
        <li>Diploma in Computer Science</li>
        <li>Bachelor's in Computer Science</li>
        <li>Certified in Python Full Stack Development</li>
        <li>Certified in Java Competition for Outstanding Performance</li>
        <li>Proficient in web development frameworks</li>
      </ul>

      <h3>Hobbies</h3>
      <ul className="hobbies-list">
        <li>Reading Story Books</li>
        <li>Exploring Open Source Projects</li>
        <li>Exploring New Things & Latest Technologies</li>
      </ul>

      <h3>Experience</h3>
      <p>
        I have worked on various projects, including an e-commerce platform and a task management tool. My responsibilities included backend development, API integration, and collaborating with front-end developers to create seamless user experiences.
      </p>

      <h3>Connect with Me</h3>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/nidhi-tripathi-067189225" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/Professionalnidhi77" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="mailto:professionalnidhitripathi77@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </div>
    </section>
  );
}

export default About;
