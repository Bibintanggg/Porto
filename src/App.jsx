import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background from '/src/assets/Background.svg';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <div
        className='relative h-screen w-full bg-cover bg-center '
        style={{backgroundImage: `url(${Background})`}}
      >
          <Navbar />
          <Home />
        <div className='h-[200vh]'>
          <AboutMe/>
        </div>
      </div>
    </div>
  );
}

export default App;
