import React from "react";
import './index.css'
import Nav from "./nav";
import profileImage from './assets/Profile.jpg'

const Home = () => {
  return (
    
    <>
    <Nav/>
    <div className="page home">
      <img src={profileImage} alt="Profile image" style={{height:"300px",width:"300px", borderRadius:"50%"}}/>
      <div style={{position:"relative", bottom:"40px"}}><h1>Rohit Kumar</h1>
      <p>Full Stack Java Developer</p>
      <a href="/projects" className="btn">View Projects</a>
    </div></div>
    </>
  );
};

export default Home;
