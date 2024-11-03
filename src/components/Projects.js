import React from "react";
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: "E-commerce Website",
      description: "Developed an e-commerce platform using Django, React, and Stripe for payment integration."
    },
    {
      name: "Task Management Tool",
      description: "Built a task management web app using Flask and React with a REST API."
    },
    {
      name: "Personal Portfolio",
      description: "Created a personal portfolio website using React to showcase my skills and projects."
    },
    {
      name: "Blog Platform",
      description: "Developed a blogging platform where users can create and share articles using Django and React."
    },
    {
      name: "Chat Application",
      description: "Built a real-time chat application using Flask and WebSockets for messaging."
    },
    {
      name: "Weather App",
      description: "Created a weather forecasting application using React and OpenWeather API to display current weather."
    },
    {
      name: "Fitness Tracker",
      description: "Developed a fitness tracking application to log workouts and monitor progress using React and Node.js."
    },
    {
      name: "Recipe App",
      description: "Created a recipe management app where users can browse, create, and save recipes using Django."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
