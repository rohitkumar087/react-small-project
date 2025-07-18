import { useState } from 'react'
import Nav from './nav'
import Home from './Home'
import './index.css'
import About from './About'
import Skills from './Footer'
import Projects from './Header'
import Contact from './Contact'



function App() {

  return (
  <>
  <Nav /> 
  <Home/>
  <About/> 
  <Skills/>
  <Projects/>
  <Contact/>
  </>
  );
};

export default App;
