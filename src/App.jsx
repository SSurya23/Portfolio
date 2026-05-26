import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const PAGES = { Home, About, Education, Projects, Skills, Contact };

function App() {
  const [active, setActive] = useState('Home');
  const Page = PAGES[active];

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar active={active} setActive={setActive} />
      <Page setActive={setActive} />
    </div>
  );
}

export default App;
