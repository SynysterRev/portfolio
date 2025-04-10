import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Games from './components/Games';
import Contact from './components/Contact';

export default function App() {

  return (
    <div id="about" className="py-8">
      <NavBar />
      <About />
      <hr id="skills" className="border-gray-800 dark:border-white/30" />
      <Skills />
      <hr id="projects" className="border-gray-800 dark:border-white/30" />
      <Projects />
      <hr id="games" className="border-gray-800 dark:border-white/30" />
      <Games />
      <hr id="contact" className="border-gray-800 dark:border-white/30" />
      <Contact />
      <footer className="text-center text-gray-500 dark:text-white/50 mt-10">
        <p>© 2025 Michaël. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
        </footer>
    </div>
  );
}