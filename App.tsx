
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { portfolioData } from './constants.ts';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Hobbies } from './components/Hobbies';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero data={portfolioData.personal} />
        <Skills 
          skills={portfolioData.skills}
          skillCategories={portfolioData.skillCategories}
        />
        <Projects projects={portfolioData.projects} />
        <Timeline 
          education={portfolioData.education} 
          experience={portfolioData.experience} 
        />
        <Resume data={portfolioData} />
        {portfolioData.hobbies && portfolioData.hobbies.length > 0 && (
          <Hobbies hobbies={portfolioData.hobbies} />
        )}
      </main>
      <Footer contact={portfolioData.contact} />
      <Analytics />
    </div>
  );
};

export default App;
