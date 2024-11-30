import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import Discover from './pages/Discover';
import Activity from './components/Activity';

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full bg-cover bg-center">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <Home />
                <AboutMe />
                <Project />
                <Contact />
              </div>
            } 
          />

          {/* Halaman Discover */}
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
