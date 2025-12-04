import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone, Code2, BrainCircuit, Server, Cpu, Terminal, Layers, FileText } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HERO} className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-24 pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050511] to-[#050511]">
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left: Deeply Detailed Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
             <span className="px-4 py-1.5 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue rounded-full text-xs md:text-sm font-semibold tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.3)]">
               OPEN TO WORK
             </span>
             <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full text-xs md:text-sm font-semibold tracking-wider shadow-[0_0_15px_rgba(188,19,254,0.3)]">
               FLUTTER ARCHITECT
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple drop-shadow-2xl">Haider Ali</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed">
            I am a <strong className="text-white">High-Performance Flutter Developer</strong> and <strong className="text-white">Computer Science Scholar</strong> based in Faisalabad, Pakistan.
            <br /><br />
            My expertise lies at the intersection of <span className="text-neon-blue font-medium">Software Engineering</span> and <span className="text-neon-purple font-medium">Artificial Intelligence</span>. I don't just build apps; I engineer scalable digital ecosystems using modern tech stacks like <strong>Flutter, Firebase, and Gemini AI</strong>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-12">
            <a href={`#${SectionId.PROJECTS}`} onClick={(e) => scrollToSection(e, SectionId.PROJECTS)} className="px-10 py-4 bg-gradient-to-r from-neon-blue to-blue-600 text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all transform hover:-translate-y-1 hover:scale-105">
              View Case Studies
            </a>
            <a 
              href="/cv.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-transparent border-2 border-gray-600 hover:border-white text-white font-medium text-lg rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <FileText size={20} /> Download / Print CV
            </a>
          </div>

          <div className="flex gap-8 text-gray-400">
            <SocialIcon href="https://github.com/HaiderAli228" Icon={Github} label="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/haiderali228/" Icon={Linkedin} label="LinkedIn" />
            <SocialIcon href="mailto:flutter2830@gmail.com" Icon={Mail} label="Email" />
          </div>
        </motion.div>

        {/* Right: The Enhanced Solar System Animation */}
        <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
          <div className="transform scale-[0.45] sm:scale-75 lg:scale-100 origin-center transition-transform duration-500">
             <SolarSystem />
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 animate-bounce"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll to Explore</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
};

const SocialIcon: React.FC<{ href: string, Icon: React.ElementType, label: string }> = ({ href, Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="group flex flex-col items-center gap-2 hover:text-white transition-colors"
  >
    <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700 group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all">
      <Icon size={24} />
    </div>
    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8">{label}</span>
  </a>
);

/* --- Solar System Logic --- */
const SolarSystem: React.FC = () => {
  return (
    <div className="relative w-[760px] h-[760px] flex items-center justify-center">
      
      {/* Central Star: User Profile */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute z-20 w-48 h-48 rounded-full p-2 bg-gradient-to-b from-gray-800 to-black border-2 border-neon-blue/50 shadow-[0_0_60px_rgba(0,243,255,0.4)]"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <img 
            src="https://github.com/HaiderAli228.png" 
            alt="Haider Ali" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Floating Rings */}
        <div className="absolute -inset-4 border border-neon-blue/30 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute -inset-8 border border-dashed border-neon-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </motion.div>

      {/* Orbit 1: Radius 180px */}
      <OrbitRing diameter={360} duration={25} direction="normal">
        <Planet radius={180} angle={0} icon={Code2} color="text-teal-400" bg="bg-teal-900/90" label="Computer Science" orbitDuration={25} direction="normal" />
        <Planet radius={180} angle={180} icon={Terminal} color="text-blue-400" bg="bg-blue-900/90" label="Software Eng" orbitDuration={25} direction="normal" />
      </OrbitRing>

      {/* Orbit 2: Radius 280px */}
      <OrbitRing diameter={560} duration={35} direction="reverse">
        <Planet radius={280} angle={90} icon={Smartphone} color="text-neon-blue" bg="bg-blue-900/90" label="Flutter Dev" orbitDuration={35} direction="reverse" />
        <Planet radius={280} angle={270} icon={Layers} color="text-yellow-400" bg="bg-yellow-900/90" label="Architecture" orbitDuration={35} direction="reverse" />
      </OrbitRing>

      {/* Orbit 3: Radius 380px */}
      <OrbitRing diameter={760} duration={50} direction="normal">
        <Planet radius={380} angle={45} icon={BrainCircuit} color="text-neon-purple" bg="bg-purple-900/90" label="Artificial Intelligence" orbitDuration={50} direction="normal" />
        <Planet radius={380} angle={165} icon={Cpu} color="text-red-400" bg="bg-red-900/90" label="Data Science" orbitDuration={50} direction="normal" />
        <Planet radius={380} angle={285} icon={Server} color="text-orange-400" bg="bg-orange-900/90" label="Backend Systems" orbitDuration={50} direction="normal" />
      </OrbitRing>

    </div>
  );
};

const OrbitRing: React.FC<{ diameter: number, duration: number, direction: 'normal' | 'reverse', children: React.ReactNode }> = ({ diameter, duration, direction, children }) => {
  return (
    <>
      {/* The Visible Ring (Static Border) */}
      <div 
        className="absolute rounded-full border border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
        style={{ width: diameter, height: diameter }}
      />
      
      {/* The Rotating Container for Planets */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full pointer-events-none"
        style={{ width: diameter, height: diameter }}
        animate={{ rotate: direction === 'normal' ? 360 : -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </>
  );
};

const Planet: React.FC<{ 
  radius: number,
  angle: number, 
  icon: React.ElementType, 
  color: string, 
  bg: string, 
  label: string, 
  orbitDuration: number,
  direction: 'normal' | 'reverse'
}> = ({ radius, angle, icon: Icon, color, bg, label, orbitDuration, direction }) => {
  return (
    <div 
      className="absolute flex items-center justify-center"
      style={{ 
        // Logic: Rotate container to angle -> Translate out by radius -> Rotate back to 0
        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` 
      }}
    >
      {/* 
         Counter-Rotation:
         The parent OrbitRing rotates. This child moves with it.
         To keep the icon upright relative to the screen, we must rotate it in the opposite direction 
         of the OrbitRing.
      */}
      <motion.div
        animate={{ rotate: direction === 'normal' ? -360 : 360 }}
        transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col items-center justify-center pointer-events-auto cursor-pointer group"
      >
         <div className={`w-20 h-20 ${bg} backdrop-blur-xl border-2 border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all group-hover:scale-110 group-hover:border-white/50 z-30`}>
            <Icon size={32} className={`${color}`} />
         </div>
         <div className="mt-3 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg text-xs font-bold tracking-widest uppercase text-white shadow-lg whitespace-nowrap opacity-90 group-hover:opacity-100 group-hover:text-neon-blue transition-colors">
            {label}
         </div>
      </motion.div>
    </div>
  );
};

export default Hero;