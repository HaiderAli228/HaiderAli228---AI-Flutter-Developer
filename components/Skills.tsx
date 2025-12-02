import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SectionId } from '../types';

const data = [
  { subject: 'Flutter/Dart', A: 98, fullMark: 100 },
  { subject: 'System Design', A: 85, fullMark: 100 },
  { subject: 'AI Integration', A: 90, fullMark: 100 },
  { subject: 'Data Science', A: 75, fullMark: 100 },
  { subject: 'Backend (Node/DB)', A: 80, fullMark: 100 },
  { subject: 'UI/UX', A: 88, fullMark: 100 },
];

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-32 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Technical <span className="text-neon-purple">Arsenal</span>
          </h2>
          <p className="text-gray-400">A visualized breakdown of my engineering capabilities.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Detailed Categories */}
          <div className="space-y-10">
            <SkillCategory 
              title="Mobile Engineering" 
              desc="Building scalable, pixel-perfect native experiences."
              skills={['Flutter', 'Dart', 'Provider/Riverpod', 'Clean Architecture', 'Method Channels', 'CI/CD for Mobile']} 
              color="bg-blue-500" 
            />
            <SkillCategory 
              title="Artificial Intelligence" 
              desc="Integrating LLMs and ML models into practical applications."
              skills={['Gemini API', 'LangChain', 'Python', 'LLM.cpp', 'RAG Pipelines', 'Prompt Engineering']} 
              color="bg-purple-500" 
            />
            <SkillCategory 
              title="Backend & Cloud" 
              desc="Serverless architectures and real-time databases."
              skills={['Firebase Suite', 'Supabase', 'PostgreSQL', 'Node.js (Basic)', 'REST & GraphQL']} 
              color="bg-green-500" 
            />
             <SkillCategory 
              title="Tools & Design" 
              desc="The ecosystem that powers my workflow."
              skills={['Git & GitHub', 'Figma', 'Postman', 'Docker', 'Linux/Bash', 'Agile/Scrum']} 
              color="bg-yellow-500" 
            />
          </div>

          {/* Right: Radar Chart */}
          <div className="h-[500px] w-full bg-gray-900/20 rounded-3xl border border-gray-800 p-8 flex flex-col items-center justify-center relative backdrop-blur-sm">
             <div className="absolute top-6 left-6 text-sm font-bold text-gray-500 uppercase tracking-widest">Skill Distribution</div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#374151" strokeDasharray="3 3" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#e5e7eb', fontSize: 13, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#bc13fe"
                  strokeWidth={3}
                  fill="#bc13fe"
                  fillOpacity={0.4}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-center text-gray-500 text-sm max-w-xs">
              *Visual representation of relative proficiency across core technical domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{ title: string, desc: string, skills: string[], color: string }> = ({ title, desc, skills, color }) => (
  <div className="relative pl-6 border-l-2 border-gray-800 hover:border-neon-blue transition-colors duration-300">
    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
      {title}
    </h3>
    <p className="text-gray-400 text-sm mb-4">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-4 py-1.5 bg-gray-800/50 border border-gray-700 rounded-md text-sm text-gray-200 hover:bg-gray-800 hover:border-white/30 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;