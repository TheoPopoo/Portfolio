
import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { portfolioDataByVariant, CV_VARIANTS, CVVariant } from './constants.ts';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume.tsx';

const DEFAULT_VARIANT: CVVariant = 'alternance-ipssi';

const PAGE_TITLES: Record<CVVariant, string> = {
  'alternance-ipssi': "Theo Poletto | Administrateur Systèmes & Réseaux",
  'alternance-eni': "Theo Poletto | Administrateur Systèmes & Réseaux",
  'cdi': "Theo Poletto | Administrateur Systèmes & Réseaux (CDI)"
};

function getPathVariant(): string {
  return window.location.pathname.replace(/^\/+|\/+$/g, '');
}

const App: React.FC = () => {
  const path = getPathVariant();
  const isKnownVariant = (CV_VARIANTS as string[]).includes(path);

  useEffect(() => {
    if (!isKnownVariant) {
      window.location.replace(`/${DEFAULT_VARIANT}`);
    }
  }, [isKnownVariant]);

  const variant = (isKnownVariant ? path : DEFAULT_VARIANT) as CVVariant;

  useEffect(() => {
    document.title = PAGE_TITLES[variant];
  }, [variant]);

  if (!isKnownVariant) {
    // Redirection en cours vers la variante par défaut, on n'affiche rien entre-temps.
    return null;
  }

  const portfolioData = portfolioDataByVariant[variant];

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
        <Resume data={portfolioData} variant={variant} />
      </main>
      <Footer contact={portfolioData.contact} />
      <Analytics />
    </div>
  );
};

export default App;
