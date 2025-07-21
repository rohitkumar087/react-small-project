import React from 'react'
import Nav from "./nav";
import { Link } from 'react-router-dom';
let styles = {
    fontSize: "1.6rem",
    cursor: "pointer",
    color: "#1d4ed8",
    fontWeight: "700",
    lineHeight:"50px",
    textDecoration: "none",
    
  }
const Projects = () => {
  return (
    <>
    <Nav/>
    <div className="page projects">
      <h2>Projects</h2>
      <div className="project-card">
        <a href='https://github.com/rohitkumar087/FoodMart-Grocery-Store-Ui-Clone.git' style={styles}>FoodMart Clone</a>
        <p>A fully responsive e-commerce food delivery app clone.</p>
      </div>
      <div className="project-card">
        <a href='https://github.com/rohitkumar087/day2.git' style={styles}>Classroom Clone</a>
        <p>A classroom collaboration tool inspired by Google Classroom.</p>
      </div>
      <div className="project-card">
        <a href='https://github.com/rohitkumar087/Meesho-clone.git' style={styles}>Meesho Clone</a>
        <p>An online marketplace UI built with modern design techniques.</p>
      </div>
    </div>
    </>
  );
};

export default Projects;
