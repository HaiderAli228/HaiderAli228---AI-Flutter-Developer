import React from 'react';
import { Trophy, Star, Sparkles, Medal } from 'lucide-react';
import { SectionId } from '../types';

const Achievements: React.FC = () => {
  return (
    <section id={SectionId.ACHIEVEMENTS} className="py-24 px-4 bg-surface/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Honors & <span className="text-yellow-400">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A detailed record of my academic excellence and recognized contributions in the field of Computer Science.
          </p>
        </div>

        <div className="space-y-12">
          
          <AchievementSection 
            icon={Trophy}
            title="PEEF Scholarship Awardee (Punjab Educational Endowment Fund)"
            subtitle="Fully Funded Merit Scholarship | 2021 - Present"
            color="text-yellow-400"
            bgColor="bg-yellow-500/10"
            borderColor="border-yellow-500/30"
          >
             <p className="text-gray-300 leading-relaxed text-lg mb-4">
               Awarded the highly competitive, fully-funded <strong>PEEF Scholarship</strong> for my Bachelor's degree (BSCS). This prestigious scholarship is granted to students who demonstrate exceptional academic merit and consistency.
             </p>
             <ul className="list-disc list-inside text-gray-400 space-y-4 mb-6">
               <li>Recognized as a top-tier scholar in the province of Punjab.</li>
               <li>Maintained a GPA threshold above 3.5 throughout the degree to retain eligibility.</li>
               <li>Selected based on a rigorous evaluation of academic history and potential for future impact.</li>
             </ul>
          </AchievementSection>

          <AchievementSection 
            icon={Star}
            title="Government Merit Scholarship - Intermediate"
            subtitle="Ranked among Top District Achievers | 2019 - 2021"
            color="text-neon-blue"
            bgColor="bg-neon-blue/10"
            borderColor="border-neon-blue/30"
          >
             <p className="text-gray-300 leading-relaxed text-lg mb-4">
               Secured a Government Merit Scholarship for achieving an outstanding score of <strong>1020/1100 (A+ Grade)</strong> in Intermediate Computer Science (ICS).
             </p>
             <ul className="list-disc list-inside text-gray-400 space-y-2">
               <li>Scored in the top 1% of students in the Faisalabad District.</li>
               <li>Demonstrated exceptional aptitude in Mathematics, Physics, and Computer Logic.</li>
               <li>Awarded cash prize and certificate of honor by the regional education board.</li>
             </ul>
          </AchievementSection>

          <AchievementSection 
            icon={Medal}
            title="High Achiever - Matriculation"
            subtitle="Outstanding Performance in Computer Science | 2017 - 2019"
            color="text-green-400"
            bgColor="bg-green-500/10"
            borderColor="border-green-500/30"
          >
             <p className="text-gray-300 leading-relaxed text-lg mb-4">
               Graduated with <strong>906/1100 Marks (A+ Grade)</strong> in Matriculation, specializing in the Computer Science group. This early success laid the strong mathematical and logical foundation for my career in Software Engineering.
             </p>
             <ul className="list-disc list-inside text-gray-400 space-y-2">
               <li>Distinction in Mathematics and Computer Science subjects.</li>
               <li>Consistent class topper throughout the academic tenure.</li>
             </ul>
          </AchievementSection>

          <AchievementSection 
            icon={Sparkles}
            title="University Project Lead & Innovator"
            subtitle="Library App E-Community | 7th Semester Project"
            color="text-neon-purple"
            bgColor="bg-purple-500/10"
            borderColor="border-purple-500/30"
          >
             <p className="text-gray-300 leading-relaxed text-lg mb-4">
               Led the development of the "Library" mobile application, a digital e-community platform designed to solve resource sharing problems for university students.
             </p>
             <ul className="list-disc list-inside text-gray-400 space-y-2">
               <li><strong>Role:</strong> Lead Developer & Architect.</li>
               <li><strong>Impact:</strong> The app is currently used by peers to share notes, video lectures, and coding resources.</li>
               <li><strong>Tech:</strong> Built with Flutter, Firebase, and integrated with YouTube API for educational content.</li>
             </ul>
          </AchievementSection>

        </div>
      </div>
    </section>
  );
};

const AchievementSection: React.FC<{ 
  icon: any, 
  title: string, 
  subtitle: string, 
  color: string, 
  bgColor: string,
  borderColor: string,
  children: React.ReactNode 
}> = ({ icon: Icon, title, subtitle, color, bgColor, borderColor, children }) => (
  <div className={`relative p-8 rounded-3xl border ${borderColor} ${bgColor} hover:bg-opacity-20 transition-all group overflow-hidden`}>
    
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className={`p-4 rounded-2xl bg-black/40 border border-white/5 shrink-0 ${color}`}>
         <Icon size={40} />
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <div className={`inline-block px-3 py-1 rounded-md bg-black/30 border border-white/10 text-sm font-bold uppercase tracking-wider mb-6 ${color}`}>
          {subtitle}
        </div>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>

    {/* Decorative Background Icon */}
    <div className={`absolute -right-10 -bottom-10 opacity-5 transform rotate-12 scale-[3] pointer-events-none ${color}`}>
      <Icon size={100} />
    </div>
  </div>
);

export default Achievements;