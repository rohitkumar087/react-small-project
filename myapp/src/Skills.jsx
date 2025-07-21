import React from 'react'
import './index.css'
import Nav from "./nav";

const Skills = () => {
  return (
    <>
    <Nav/>
    <div className="page skills">
      <h2>Skills</h2>
      <div className="skill-group">
        <h3>Frontend</h3>
        <ul style={{ }}>
          <li className='skill-edit'>HTML</li>
          <li className='skill-edit'>CSS</li>
          <li className='skill-edit'>JavaScript</li>
          <li className='skill-edit'>React</li>
          <li className='skill-edit'>Tailwind CSS</li>
        </ul>
      </div>
      <div className="skill-group">
        <h3>Backend</h3>
        <ul style={{}}>
          <li className='skill-edit'>Core Java</li>
        </ul>
      </div>
      <div className="skill-group">
        <h3>Tools</h3>
        <ul style={{}}>
          <li className='skill-edit'>Git</li>
          <li className='skill-edit'>Linux</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Skills;

