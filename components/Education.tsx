import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 px-4 bg-deep-space">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Academic <span className="text-neon-blue">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background reflects consistent excellence and a deep commitment to Computer Science.
          </p>
        </div>

        <div className="space-y-12">
          
          <EducationCard 
            degree="Bachelor of Science in Computer Science"
            institution="Government College University Faisalabad (GCUF)"
            year="2021 - 2025"
            grade="CGPA: 3.54 / 4.00"
            highlight="PEEF Scholar"
            description="Currently in my 7th semester, specializing in Software Engineering and Artificial Intelligence. I have consistently maintained a high GPA while actively leading university technical societies and mentoring juniors."
            courses={["Data Structures & Algorithms", "Artificial Intelligence", "Operating Systems", "Object Oriented Programming", "Database Systems", "Software Design Patterns", "Compiler Construction", "Analysis of Algorithms"]}
          />

          <EducationCard 
            degree="Intermediate in Computer Science (ICS)"
            institution="Government College Faisalabad"
            year="2019 - 2021"
            grade="Marks: 1020 / 1100 (A+ Grade)"
            highlight="Govt Merit Scholar"
            description="Built a rock-solid foundation in Mathematics, Physics, and Computer Logic. My exceptional score placed me among the top achievers in the Faisalabad district, securing a government merit scholarship for higher education."
            courses={["Calculus & Analytical Geometry", "Physics", "Computer Science Principles", "Database Fundamentals", "Statistics"]}
          />

           <EducationCard 
            degree="Matriculation (Computer Science)"
            institution="Divisional Public School & College"
            year="2017 - 2019"
            grade="Marks: 906 / 1100 (A+ Grade)"
            highlight="High Achiever"
            description="Started my journey into technology early with a focus on Computer Science during matriculation. I demonstrated strong aptitude for logic and problem-solving from the very beginning, consistently scoring A+ grades."
            courses={["Mathematics", "Computer Science", "Physics", "Chemistry", "Biology"]}
          />

        </div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<{ 
  degree: string, 
  institution: string, 
  year: string, 
  grade: string, 
  highlight: string,
  description: string,
  courses: string[] 
}> = ({ degree, institution, year, grade, highlight, description, courses }) => (
  <div className="relative bg-gray-900/40 border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-neon-blue/30 transition-all group overflow-hidden">
    
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] -z-10 group-hover:bg-neon-blue/10 transition-colors" />

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{degree}</h3>
        <div className="flex items-center gap-2 text-gray-400">
           <GraduationCap size={20} className="text-neon-purple" />
           <span className="text-xl font-medium">{institution}</span>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end gap-2">
         <span className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm font-mono text-gray-300 border border-gray-700">
            <Calendar size={14} /> {year}
         </span>
         <span className="px-4 py-1.5 bg-green-500/10 text-green-400 text-sm font-bold rounded-lg border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
            {grade}
         </span>
      </div>
    </div>

    <div className="mb-8 pl-4 border-l-2 border-gray-800">
       <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/10 text-neon-purple text-sm font-bold rounded mb-4 border border-neon-purple/20">
         <Award size={14} /> {highlight}
       </div>
       <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
    </div>

    <div className="bg-black/20 rounded-2xl p-6 border border-white/5">
       <h4 className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
         <BookOpen size={16} /> Key Coursework
       </h4>
       <div className="flex flex-wrap gap-2">
         {courses.map(course => (
           <span key={course} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-gray-400 text-sm rounded-lg border border-gray-700 hover:text-white hover:border-gray-500 transition-colors">
             <CheckCircle2 size={12} className="text-neon-blue" />
             {course}
           </span>
         ))}
       </div>
    </div>

  </div>
);

export default Education;