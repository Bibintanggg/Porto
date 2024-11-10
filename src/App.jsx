import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Background from './assets/Background.svg'

function App() {
  return (
    <div
      className='relative h-screen w-full bg-cover bg-center'
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
