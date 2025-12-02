import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Layers, Server, TrendingUp, ArrowRight } from 'lucide-react';
import { SectionId, Project } from '../types';

const projects: Project[] = [
  {
    title: "K9P Finder – Smart Pet Tracking",
    description: "A complete pet safety ecosystem. This Flutter + Firebase app enables real-time GPS tracking, BLE-based scanning for nearby detection, and a community-driven alert system for missing pets, managed via a robust Admin Dashboard.",
    tags: ["Flutter", "Firebase", "Google Maps", "BLE Scanning"],
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/HaiderAli228/K9P-Finder",
    stats: ["Real-time GPS", "BLE Radar", "Admin Panel"],
    challenge: "Tracking pets in real-time requires high GPS accuracy and battery efficiency, while also needing a solution for indoor detection where GPS signals fail.",
    solution: "Implemented a hybrid tracking system using Google Maps for outdoor tracking and Bluetooth Low Energy (BLE) scanning for precise proximity detection within 100 meters."
  },
  {
    title: "NueraTalk - Gemini AI Chatbot",
    description: "An intelligent conversational agent powered by Google's Gemini 1.5 Flash model. Unlike standard chatbots, NueraTalk features persistent local history using SQLite, smart session grouping, and auto-cleanup mechanisms.",
    tags: ["Flutter", "Gemini API", "SQLite", "DashChat"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/HaiderAli228",
    stats: ["Gemini 1.5 Flash", "Offline History", "Auto-Cleanup"],
    challenge: "Most chatbot apps lose context when closed or rely heavily on cloud storage. The goal was to create a privacy-focused assistant that 'remembers' conversations locally.",
    solution: "Integrated Gemini 1.5 Flash for high-speed AI responses and utilized SQLite to cache conversation history locally, ensuring seamless continuity without cloud dependencies."
  },
  {
    title: "JaggerySales - E-Commerce App",
    description: "A specialized B2C marketplace connecting buyers with jaggery products. Features secure OTP authentication, integrated payment gateways, and a service-oriented architecture using Hive for local caching.",
    tags: ["Flutter", "Firebase", "Hive DB", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1627483262769-04d0a1401487?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/HaiderAli228",
    stats: ["OTP Auth", "Service Pattern", "Cart System"],
    challenge: "Building a scalable e-commerce app that handles real-time inventory updates while ensuring a smooth, instant-load user experience on slower networks.",
    solution: "Utilized a Service-Oriented Architecture with Firebase for real-time cloud sync and Hive for efficient local data persistence, ensuring instant product loading."
  },
  {
    title: "AiNotebook - Privacy-First Notes",
    description: "A local-first Markdown editor prioritizing data privacy. Notes are stored in SQLite and can be exported as .doc files directly from the device without requiring internet access.",
    tags: ["Flutter", "SQLite", "Markdown", "File I/O"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/HaiderAli228",
    stats: ["100% Offline", "Doc Export", "Markdown Render"],
    challenge: "Providing rich-text editing and document generation capabilities on mobile devices without relying on server-side processing or compromising user privacy.",
    solution: "Engineered a custom Markdown rendering engine backed by SQLite for 100% offline persistence and a native file generation system to export content as .doc files."
  },
  {
    title: "SnapSense - AI Image Gen",
    description: "A Clean Architecture demonstration app that leverages Stable Diffusion APIs to generate high-quality art from text prompts. Built using the BLoC state management pattern for robust error handling.",
    tags: ["Flutter", "Bloc Pattern", "Stable Diffusion", "Clean Arch"],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/HaiderAli228",
    stats: ["Bloc State", "Rest API", "Image Gen"],
    challenge: "Managing complex asynchronous states (loading, error, success) and API failures when interacting with heavy AI image generation services.",
    solution: "Applied the BLoC pattern with Clean Architecture to strictly separate UI from business logic, ensuring robust error handling and smooth UI state transitions."
  }
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-32 px-4 bg-gradient-to-b from-[#050511] to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="text-neon-purple">Case Studies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A deep dive into my most technically challenging projects, showcasing innovation, architecture, and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-20">
           <a href="https://github.com/HaiderAli228" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 rounded-full hover:bg-neon-blue hover:text-black transition-all font-bold group">
             View Full GitHub Profile <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCaseStudy: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} gap-12 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group perspective-1000">
        <div className="absolute inset-0 bg-neon-blue/20 rounded-2xl blur-2xl group-hover:bg-neon-purple/20 transition-colors duration-500" />
        <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl transform transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">
           <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
           
           {/* Floating badges on image */}
           <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
             {project.tags.map(tag => (
               <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white">
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <div className="h-1 w-20 bg-neon-blue rounded-full" />
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
            <h4 className="flex items-center gap-2 text-neon-purple font-bold mb-2">
              <Zap size={18} /> The Challenge
            </h4>
            <p className="text-sm text-gray-400">
              {project.challenge}
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
             <h4 className="flex items-center gap-2 text-neon-blue font-bold mb-2">
              <Layers size={18} /> The Solution
            </h4>
            <p className="text-sm text-gray-400">
               {project.solution}
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        {project.stats && (
          <div className="flex flex-wrap gap-6 py-4 border-t border-gray-800">
             {project.stats.map((stat, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="p-1.5 bg-green-500/10 rounded-full text-green-400">
                   <TrendingUp size={16} />
                 </div>
                 <span className="font-bold text-white text-sm">{stat}</span>
               </div>
             ))}
          </div>
        )}

        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Github size={20} /> Source Code
            </a>
          )}
          {project.live && (
             <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={20} /> Live Demo
             </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;