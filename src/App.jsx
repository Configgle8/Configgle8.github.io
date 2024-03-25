import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import VideoBackground from './components/VideoBackground';



function App() {

  return (
      <div className="h-screen w-screen scroll-smooth snap-y snap-proximity bg-chocolate">

        <VideoBackground />
        <Navbar />
        <Home />
        <Contact />
        <About />
        <Projects />
        
      </div>
  )
}

export default App;