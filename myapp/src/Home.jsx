import React from "react";
import './index.css'
import Nav from "./nav";
import profileImage from './assets/Profile.jpg'
import { Link } from "react-router-dom";
const Home = () => {
  return (

    <>
      <Nav />
      <div className="page home">
        <div className="imgPosition">
          <img src={profileImage} alt="Profile image" style={{ height: "300px", width: "300px", borderRadius: "50%" }} />

        </div>
        <div style={{ position: "relative", bottom: "40px" }}><h1>Rohit Kumar</h1>
          <p>Full Stack Java Developer</p>
          <div className="btnPosition">
            <Link to={'/projects'} className="btn">View Projects</Link>
          </div>
        </div></div>
    </>
  );
};

export default Home;
