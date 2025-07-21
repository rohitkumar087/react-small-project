import React from 'react'
import './index.css'
import Nav from "./nav";

const About = () => {
  return (
   <>
    <Nav/>
    <div className="page about">
      <h2>About Me</h2>
      <p>Hello! I’m Rohit Kumar, a Full Stack Java Developer who loves building clean, efficient, and scalable web applications using Java, React, and modern web technologies.</p>
      <h3>Education</h3>
      <p>Currentley pursuing Bachelore of Computer Application</p>
      <p className="muted">2023 - 2026 | Shekhawati  University</p>
    </div>
    </>
  );
};

export default About;

