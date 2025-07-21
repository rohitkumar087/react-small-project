import React from 'react'
import './index.css'

import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navbar">
    <Link to={'/'}>Home</Link>
    <Link to={'/about_us'}>About</Link>
    <Link to={'/skills'}>Skills</Link>
    <Link to={'/projects'}>Projects</Link>
    <Link to={'/contact_us'}>Contact</Link>
  </nav>
  );
}

export default Nav;
