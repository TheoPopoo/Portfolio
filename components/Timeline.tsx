import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Education, Experience } from '../types';

interface TimelineProps {
  education: Education[];
  experience: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ education, experience }) => {
  return (
    <section id="experience" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg mr-4">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Expérience Professionnel</h2>
            </div>

            <div className="space-y-12 border-l-2 border-slate-100 ml-4 pl-8 md:pl-12 relative">
              {experience.map((job, index) => (
                <TimelineItem key={index} index={index}>
                  <span className="text-sm font-semibold text-primary-600 mb-1 flex items-center">
                    <Calendar size={14} className="mr-1" /> {job.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{job.position}</h3>
                  <p className="text-slate-700 font-medium mb-2">{job.company}</p>
                  <p className="text-slate-600 text-sm mb-3">{job.description}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="text-slate-500 text-sm pl-1">{ach}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-lg mr-4">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Formation</h2>
            </div>

            <div className="space-y-12 border-l-2 border-slate-100 ml-4 pl-8 md:pl-12 relative">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                   {/* School Header - slightly different layout for grouped degrees */}
                   <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                   >
                     <h3 className="text-lg font-bold text-slate-900 mb-4 inline-block w-full">
                       {edu.school}
                     </h3>
                     
                     <div className="space-y-8">
                       {edu.degrees.map((degree, dIndex) => (
                         <div key={dIndex} className="relative pl-4">
                            {/* Dot indicator */}
                            <div className="absolute -left-[52px] top-1 w-4 h-4 rounded-full border-4 border-white bg-teal-500 shadow-sm"></div>
                            
                            <span className="text-sm font-semibold text-teal-600 mb-1 flex items-center">
                              <Calendar size={14} className="mr-1" /> {degree.period}
                            </span>
                            <h4 className="text-lg font-semibold text-slate-800">{degree.degree}</h4>
                            <p className="text-slate-500 text-sm mt-1">{degree.description}</p>
                         </div> 
                       ))}
                     </div>
                   </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative"
  >
    {/* Timeline Dot */}
    <div className="absolute -left-[45px] md:-left-[61px] top-1 w-4 h-4 rounded-full border-4 border-white bg-primary-500 shadow-sm"></div>
    {children}
  </motion.div>
);