import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="py-20 px-4 bg-deep-space border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          Let's Build the <span className="text-neon-blue">Future</span>
        </h2>
        <p className="text-gray-400 mb-12">
          I am currently open to new opportunities, collaborations, and scholarship discussions.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <ContactLink 
            href="mailto:flutter2830@gmail.com" 
            icon={Mail} 
            label="flutter2830@gmail.com" 
          />
          <ContactLink 
            href="tel:+923496292972" 
            icon={Phone} 
            label="+92-349-6292972" 
          />
          <ContactLink 
            href="https://www.linkedin.com/in/haiderali228/" 
            icon={Linkedin} 
            label="LinkedIn" 
          />
           <ContactLink 
            href="https://github.com/HaiderAli228" 
            icon={Github} 
            label="GitHub" 
          />
        </div>

        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Haider Ali. Built with React, Tailwind & Framer Motion.
        </div>
      </div>
    </footer>
  );
};

const ContactLink: React.FC<{ href: string, icon: any, label: string }> = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-neon-purple hover:text-neon-purple transition-all group"
  >
    <Icon size={18} className="group-hover:scale-110 transition-transform" />
    <span>{label}</span>
  </a>
);

export default Contact;