import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import WebDev from './pages/WebDevelop';

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full bg-cover bg-center">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <div className="h-[200vh]">
                  <AboutMe />
                  <Skills />
                  <Education />
                  <Project />
                </div>
              </>
            }
          />
          <Route path="/project" element={<WebDev />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
