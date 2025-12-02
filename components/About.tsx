import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code, Globe, BookOpen, Star } from 'lucide-react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 px-4 bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-neon-blue">Haider Ali</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive look at my journey from a passionate student to a professional Flutter Developer and aspiring AI Engineer.
          </p>
        </div>

        {/* The Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Column 1: The Developer */}
          <InfoColumn 
            icon={Code} 
            title="The Developer" 
            color="text-neon-blue"
            delay={0}
          >
             <p className="mb-4">
               My coding journey is fueled by a desire to build <strong>scalable, high-performance applications</strong>. I specialize in <span className="text-neon-blue">Flutter & Dart</span>, crafting seamless cross-platform experiences that run smoothly on both Android and iOS.
             </p>
             <p>
               I don't just write code; I architect solutions. From managing complex state with <strong>Provider</strong> to integrating <strong>Firebase/Supabase</strong> for robust backends, I ensure every app I build is production-ready, secure, and user-centric. My recent work involves integrating <strong>Generative AI (Gemini)</strong> into mobile apps to create smarter, adaptive interfaces.
             </p>
          </InfoColumn>

          {/* Column 2: The Scholar */}
          <InfoColumn 
            icon={GraduationCap} 
            title="The Scholar" 
            color="text-neon-purple"
            delay={0.2}
          >
             <p className="mb-4">
               Academic excellence is the foundation of my career. I am currently pursuing my <strong>BS in Computer Science</strong> at GCUF, holding a stellar <strong>CGPA of 3.54/4.0</strong>.
             </p>
             <p className="mb-4">
               My dedication was recognized early on when I secured a <strong>Government Scholarship</strong> during my Intermediate studies, scoring an impressive <strong>1020/1100 marks</strong>.
             </p>
             <p>
               Currently, I am a proud recipient of the <strong>PEEF (Punjab Educational Endowment Fund) Scholarship</strong>, a fully-funded merit award that validates my consistent academic performance and potential for future research in Computer Science.
             </p>
          </InfoColumn>

          {/* Column 3: The Visionary */}
          <InfoColumn 
            icon={Globe} 
            title="The Visionary" 
            color="text-yellow-400"
            delay={0.4}
          >
             <p className="mb-4">
               My goals extend beyond personal success. I am driven by a mission to <strong>uplift Pakistan's tech ecosystem</strong>. I envision building platforms like <em>Payflow-PK</em> to solve local financial challenges.
             </p>
             <p>
               I aim to pursue a <strong>Master's & PhD abroad</strong> in AI and Data Science to bring global expertise back home. My ultimate dream is to establish a world-class educational institute in Pakistan—similar to <strong>Y Combinator</strong>—to empower the next generation of innovators, helping them turn ideas into impactful startups.
             </p>
          </InfoColumn>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard icon={GraduationCap} value="3.54" label="CGPA (BSCS)" sub="Top Tier Performance" />
          <StatCard icon={Star} value="1020" label="Inter Marks" sub="Out of 1100 (A+)" />
          <StatCard icon={Award} value="2x" label="Scholarships" sub="PEEF & Govt Merit" />
          <StatCard icon={Code} value="15+" label="Projects" sub="Deployed & Open Source" />
        </div>

      </div>
    </section>
  );
};

const InfoColumn: React.FC<{ icon: any, title: string, color: string, delay: number, children: React.ReactNode }> = ({ icon: Icon, title, color, delay, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 hover:bg-gray-900/60 hover:border-gray-700 transition-all group"
  >
    <div className={`p-4 rounded-xl bg-gray-800 w-fit mb-6 group-hover:scale-110 transition-transform ${color}`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-neon-blue transition-colors">{title}</h3>
    <div className="text-gray-400 leading-relaxed text-base font-light space-y-4">
      {children}
    </div>
  </motion.div>
);

const StatCard: React.FC<{ icon: any, value: string, label: string, sub: string }> = ({ icon: Icon, value, label, sub }) => (
  <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-neon-blue/40 transition-colors">
    <Icon className="text-gray-500 mb-3" size={24} />
    <div className="text-4xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-bold text-neon-blue uppercase tracking-wider mb-1">{label}</div>
    <div className="text-xs text-gray-500">{sub}</div>
  </div>
);

export default About;