import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import FutureGoals from './components/FutureGoals';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-deep-space min-h-screen text-white relative selection:bg-neon-purple selection:text-white">
      <ParticleBackground />
      
      {/* Navigation (Simple sticky header) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-space/90 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            HAIDER<span className="text-neon-blue">.DEV</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#goals" className="hover:text-neon-purple transition-colors">Goals</a>
            <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <FutureGoals />
        <Contact />
      </main>
    </div>
  );
};

export default App;