import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Interests />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
