import React, { useEffect } from 'react';
import { initAnalytics } from './analytics';
import useReveal from './useReveal';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Now from './components/Now';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Now />
        <Experience />
        <Projects />
        <Skills />
        <About />
      </main>
      <Contact />
    </>
  );
}

export default App;
