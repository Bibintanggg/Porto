import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';

function App() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center">
      <Navbar />
      <Home />
      <div className="h-[2000vh]">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
