
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
import { AtsResume } from './components/AtsResume';

const DEFAULT_VARIANT: CVVariant = 'alternance-eni';

const FOOTER_MESSAGES: Partial<Record<CVVariant, string>> = {
  'alternance-eni': "Je recherche actuellement une alternance en administration systèmes et réseaux pour la rentrée 2027. N'hésitez pas à me contacter pour discuter de la façon dont je peux contribuer à votre équipe."
};

const PAGE_TITLES: Record<CVVariant, string> = {
  'alternance-ipssi': "Theo Poletto | Administrateur Systèmes & Réseaux",
  'alternance-eni': "Theo Poletto | Administrateur Systèmes & Réseaux",
  'alternance-openclassrooms': "Theo Poletto | Administrateur Systèmes & Réseaux",
  'cdi': "Theo Poletto | Administrateur Systèmes & Réseaux (CDI)"
};

function getPathVariant(): string {
  return window.location.pathname.replace(/^\/+|\/+$/g, '');
}

// /ats -> CV ATS de la variante par défaut ; /ats/<variante> -> CV ATS de cette variante.
function parsePath(path: string): { isAts: boolean; variantPath: string } {
  if (path === 'ats') return { isAts: true, variantPath: DEFAULT_VARIANT };
  if (path.startsWith('ats/')) return { isAts: true, variantPath: path.slice(4) };
  return { isAts: false, variantPath: path };
}

const App: React.FC = () => {
  const { isAts, variantPath } = parsePath(getPathVariant());
  const isKnownVariant = (CV_VARIANTS as string[]).includes(variantPath);

  useEffect(() => {
    if (!isKnownVariant) {
      window.location.replace(isAts ? '/ats' : `/${DEFAULT_VARIANT}`);
    }
  }, [isKnownVariant, isAts]);

  const variant = (isKnownVariant ? variantPath : DEFAULT_VARIANT) as CVVariant;

  useEffect(() => {
    document.title = isAts ? `CV ATS | ${PAGE_TITLES[variant]}` : PAGE_TITLES[variant];
  }, [variant, isAts]);

  if (!isKnownVariant) {
    // Redirection en cours vers la variante par défaut, on n'affiche rien entre-temps.
    return null;
  }

  const portfolioData = portfolioDataByVariant[variant];

  if (isAts) {
    return (
      <>
        <AtsResume data={portfolioData} variant={variant} />
        <Analytics />
      </>
    );
  }

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
      <Footer contact={portfolioData.contact} message={FOOTER_MESSAGES[variant]} />
      <Analytics />
    </div>
  );
};

export default App;
