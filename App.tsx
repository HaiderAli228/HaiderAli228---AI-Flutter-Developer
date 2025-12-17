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
import References from './components/References';
import Contact from './components/Contact';
import { SectionId } from './types';

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-deep-space min-h-screen text-white relative selection:bg-neon-purple selection:text-white">
      <ParticleBackground />
      
      {/* Navigation (Simple sticky header) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-space/90 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div 
            className="font-display font-bold text-xl tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            HAIDER<span className="text-neon-blue">.DEV</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <a href={`#${SectionId.ABOUT}`} onClick={(e) => scrollToSection(e, SectionId.ABOUT)} className="hover:text-white transition-colors">About</a>
            <a href={`#${SectionId.EXPERIENCE}`} onClick={(e) => scrollToSection(e, SectionId.EXPERIENCE)} className="hover:text-white transition-colors">Experience</a>
            <a href={`#${SectionId.PROJECTS}`} onClick={(e) => scrollToSection(e, SectionId.PROJECTS)} className="hover:text-white transition-colors">Projects</a>
            <a href={`#${SectionId.GOALS}`} onClick={(e) => scrollToSection(e, SectionId.GOALS)} className="hover:text-neon-purple transition-colors">Goals</a>
            <a href={`#${SectionId.REFERENCES}`} onClick={(e) => scrollToSection(e, SectionId.REFERENCES)} className="hover:text-white transition-colors">References</a>
            <a href={`#${SectionId.CONTACT}`} onClick={(e) => scrollToSection(e, SectionId.CONTACT)} className="hover:text-neon-blue transition-colors">Contact</a>
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
        <References />
        <Contact />
      </main>
    </div>
  );
};

export default App;