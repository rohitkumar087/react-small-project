import { useState } from 'react'
import Nav from './nav'
import Home from './Home'
import './index.css'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Non from './Non'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about_us' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact_us' element={<Contact/>}/>
      <Route path='*' element={<Non/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
