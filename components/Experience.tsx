import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Globe } from 'lucide-react';
import { SectionId } from '../types';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Professional <span className="text-neon-purple">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A deep dive into my professional roles where I have applied my technical skills to solve real-world problems.
          </p>
        </div>

        <div className="space-y-12">
          
          <WorkCard 
            role="Freelance Flutter Developer"
            company="Self-Employed / Global Clients"
            period="Nov 2024 - Present"
            location="Remote"
            description="Currently operating as an independent consultant, delivering end-to-end mobile solutions for international clients. I handle the entire software lifecycle—from requirement gathering with clients to deployment on App Stores."
            responsibilities={[
              "Successfully delivered 'K9P Finder', a complex pet tracking application with real-time GPS and BLE integration, as a fully managed client project.",
              "Managing client communication, requirement analysis, and project timelines for multiple concurrent projects.",
              "Implementing production-grade architectures (Clean Architecture + MVVM) for scalable client applications.",
              "Providing post-launch support and maintenance, ensuring 99.9% app uptime for deployed solutions."
            ]}
            techStack={["Flutter", "Firebase", "Google Maps API", "BLE", "Client Management"]}
          />

          <WorkCard 
            role="Flutter Developer Intern"
            company="The Web Concept (TWC)"
            period="Aug 2024 - Oct 2024"
            location="Faisalabad, PK"
            description="A focused internship where I refined my architectural skills and contributed to enterprise-level applications under senior mentorship."
            responsibilities={[
              "Collaborated on real-time projects, applying advanced state management techniques (Provider) to optimize app performance.",
              "Integrated complex animations using Rive and Lottie to enhance user engagement metrics by 25%.",
              "Worked with Firebase Cloud Functions to implement serverless backend logic, reducing infrastructure costs.",
              "Participated in code reviews and architectural planning sessions, learning industry standards for code maintainability."
            ]}
            techStack={["Flutter", "Dart", "Firebase", "Rive Animations", "Provider"]}
          />

          <WorkCard 
            role="Flutter Developer Intern"
            company="Techloset Solutions"
            period="Jul 2024 - Sep 2024"
            location="Faisalabad, PK"
            description="Gained intensive hands-on experience in a fast-paced software house environment, contributing to live production codebases."
            responsibilities={[
              "Transformed Figma designs into pixel-perfect, responsive Flutter code, ensuring 100% design fidelity.",
              "Implemented offline-first functionality using SQLite and Hive for apps deployed in low-connectivity areas.",
              "Integrated Google Maps API for location-based services in a delivery management application.",
              "Assisted in debugging critical issues and refactoring legacy code modules."
            ]}
            techStack={["Flutter", "Figma to Code", "SQLite", "Google Maps API", "Agile"]}
          />

        </div>
      </div>
    </section>
  );
};

const WorkCard: React.FC<{ 
  role: string, 
  company: string, 
  period: string, 
  location: string, 
  description: string, 
  responsibilities: string[], 
  techStack: string[] 
}> = ({ role, company, period, location, description, responsibilities, techStack }) => (
  <div className="flex flex-col lg:flex-row gap-8 bg-gray-900/40 border border-gray-800 p-8 rounded-3xl hover:border-neon-purple/40 transition-all group">
    
    {/* Left: Header Info */}
    <div className="lg:w-1/3 flex flex-col items-start border-r-0 lg:border-r border-gray-800 lg:pr-8">
      <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg mb-4">
        <Briefcase size={28} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-purple transition-colors">{company}</h3>
      <div className="text-neon-blue font-semibold mb-4 text-lg">{role}</div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-mono bg-black/40 px-3 py-1 rounded">
        <Calendar size={14} /> {period}
      </div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>

    {/* Right: Detailed Content */}
    <div className="lg:w-2/3">
      <p className="text-gray-300 italic mb-6 leading-relaxed">
        "{description}"
      </p>

      <div className="space-y-4 mb-8">
        {responsibilities.map((res, i) => (
          <div key={i} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-neon-purple mt-1 shrink-0" />
            <span className="text-gray-400 text-sm leading-relaxed">{res}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-bold uppercase tracking-wide rounded border border-gray-700 hover:text-white hover:border-gray-500 transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;