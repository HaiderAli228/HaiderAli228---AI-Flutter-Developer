import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Rocket, Building2, BookOpen, GraduationCap, Users } from 'lucide-react';
import { SectionId } from '../types';

const FutureGoals: React.FC = () => {
  return (
    <section id={SectionId.GOALS} className="py-32 px-4 bg-deep-space relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Future Roadmap</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            "My long-term vision goes beyond software development—I want to build large-scale impact for Pakistan. 
            Here is my structured plan to leverage technology for social and economic uplift."
          </p>
        </div>

        <div className="space-y-12">
          
          <RoadmapCard 
            number="01"
            title="Build Pakistan’s First Earned-Wage Access Platform (Payflow-PK)"
            icon={Rocket}
            color="text-green-400"
          >
            <p>
              I aim to develop a salary-on-demand app for employees in Pakistan, starting from Faisalabad, the industrial hub. 
              Thousands of factory workers need urgent money between pay cycles, yet companies do not offer such a solution.
            </p>
            <p className="mt-4">
              <strong>The Goal:</strong> Design a secure, ethical financial platform that provides early access to earned wages, reduces exploitation by loan sharks, and improves financial stability for the working class.
            </p>
          </RoadmapCard>

          <RoadmapCard 
            number="02"
            title="Pursue a Master’s Degree From a Top Global University"
            icon={Globe2}
            color="text-blue-400"
          >
            <p>
              My immediate academic goal is to study in a world-class university (Europe, US, UK, or Asia) on a fully funded scholarship.
              I intend to gain deep, specialized knowledge in <strong>Software Engineering, AI, and Product Innovation</strong>.
            </p>
            <p className="mt-4">
              <strong>The Impact:</strong> This advanced education will help me build large-scale, scalable solutions for Pakistan by learning from global experts and expanding my international network.
            </p>
          </RoadmapCard>

          <RoadmapCard 
            number="03"
            title="Complete a PhD Focused on AI & Human-Centered Systems"
            icon={GraduationCap}
            color="text-neon-purple"
          >
            <p>
               I want to research how technology can uplift developing nations. A PhD will help me build deep expertise in <strong>AI, Fintech, or Human-Centered Software Systems</strong>.
            </p>
            <p className="mt-4">
              <strong>Research Focus:</strong> Developing frameworks where AI can be used to solve infrastructure and economic challenges specific to emerging markets like Pakistan.
            </p>
          </RoadmapCard>

          <RoadmapCard 
            number="04"
            title="Create a Modern Educational Institute in Pakistan"
            icon={Building2}
            color="text-yellow-400"
          >
            <p>
              In the future, I aim to establish a world-class institute similar to <strong>Y Combinator School</strong> — where students are not just taught programming syntax, but also innovation, entrepreneurship, and real problem-solving.
            </p>
            <p className="mt-4">
              <strong>The Vision:</strong> A place where young Pakistanis learn to create startups, build AI products, and compete at a global level.
            </p>
          </RoadmapCard>

          <RoadmapCard 
            number="05"
            title="Empower Pakistan’s Youth With Opportunity"
            icon={Users}
            color="text-pink-400"
          >
            <p>
              Pakistan has talent and passion, but lacks direction. My long-term dream is to create a ecosystem that guides students, provides mentorship, and helps them build careers in tech.
            </p>
            <p className="mt-4">
               <strong>Action Plan:</strong> Launch community-driven tech programs to mentor youth and reinvest my experience into the local education sector.
            </p>
          </RoadmapCard>

        </div>

        {/* How I Plan to Achieve This */}
        <div className="mt-24 bg-gray-900/50 border border-gray-800 rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Strategic Execution Plan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StrategyItem text="Deepen technical skills through real-world startups & open source." />
                <StrategyItem text="Secure fully funded scholarship for global exposure." />
                <StrategyItem text="Build network with professors, founders, and innovators." />
                <StrategyItem text="Reinvest knowledge to solve local Pakistani problems." />
            </div>
        </div>

      </div>
    </section>
  );
};

const RoadmapCard: React.FC<{ number: string, title: string, icon: any, color: string, children: React.ReactNode }> = ({ number, title, icon: Icon, color, children }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row gap-8 bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:bg-gray-900/50 transition-colors"
  >
    <div className="hidden md:flex flex-col items-center">
        <div className={`text-5xl font-display font-bold opacity-20 ${color}`}>{number}</div>
        <div className={`w-0.5 h-full bg-gradient-to-b from-${color.replace('text-', '')} to-transparent mt-4 opacity-30`} />
    </div>
    
    <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg bg-gray-800 ${color}`}>
                <Icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
        </div>
        <div className="text-gray-400 text-lg leading-relaxed pl-2 md:pl-0 border-l-2 md:border-l-0 border-gray-700">
            {children}
        </div>
    </div>
  </motion.div>
);

const StrategyItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center min-h-[100px]">
        <p className="text-gray-300 text-sm font-medium">{text}</p>
    </div>
)

export default FutureGoals;