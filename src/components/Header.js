import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Nidhi Tripathi</h1>
      <h2 className="title">Software Engineer</h2>
      <nav>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
