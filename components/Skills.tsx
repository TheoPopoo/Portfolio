import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

interface SkillsProps {
  skills: string[];
  skillCategories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skills, skillCategories }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Compétences Techniques</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-400 via-slate-400 to-slate-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Un aperçu complet de mes compétences organisées par domaine
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                {/* Header with icon */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.03) }}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-150 transition-all duration-200 cursor-default hover:shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        {skills && skills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Toutes les compétences</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};