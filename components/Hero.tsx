import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData['personal'];
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8 md:pt-20 md:pb-0">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-300 via-slate-200 to-slate-100 opacity-70"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-700 uppercase bg-primary-100 rounded-full">
            {data.status}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Je suis <br />
            <span className="text-primary-600">{data.name}</span>
          </h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="text-lg md:text-2xl text-slate-600 font-medium mb-3 md:mb-6"
          >
            {data.title}
          </motion.p>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
            {data.objective}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
            >
              <Send size={18} className="mr-2" />
              Me contacter
            </a>
            <a 
              href="#resume" 
              className="inline-flex items-center px-6 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <FileText size={18} className="mr-2" />
              Voir CV
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-primary-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={data.avatar} 
              alt={data.name} 
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hidden md:block"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};