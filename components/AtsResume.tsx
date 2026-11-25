/**
 * AtsResume - CV au format ATS (route /ats et /ats/<variante>)
 *
 * Une seule colonne, du texte brut et des titres de section standards,
 * sans icônes, sans images ni animations : le texte reste lisible par les
 * logiciels de tri de candidatures (ATS) et l'impression donne un PDF texte.
 * Le contenu vient de constants.ts, comme le reste du site.
 */

import React from 'react';
import { PortfolioData } from '../types';
import { CVVariant } from '../constants';

export const ATS_PDF_FILENAMES: Record<CVVariant, string> = {
  'alternance-ipssi': 'Poletto_Theo_CV_ATS_Alternance_IPSSI.pdf',
  'alternance-eni': 'Poletto_Theo_CV_ATS_Alternance_ENI.pdf',
  'alternance-openclassrooms': 'Poletto_Theo_CV_ATS_Alternance_OpenClassrooms.pdf',
  'cdi': 'Poletto_Theo_CV_ATS_CDI.pdf'
};

const PORTFOLIO_URL = 'https://poletto-theo.vercel.app';

const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

interface AtsResumeProps {
  data: PortfolioData;
  variant: CVVariant;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="ats-section mt-4">
    <h2 className="text-[13px] font-bold uppercase tracking-wide border-b border-slate-900 pb-0.5 mb-2">
      {title}
    </h2>
    {children}
  </section>
);

export const AtsResume: React.FC<AtsResumeProps> = ({ data, variant }) => {
  const { personal, contact } = data;
  const pdfFilename = ATS_PDF_FILENAMES[variant];

  // Les centres d'intérêt sont des chaînes dans constants.ts, des objets Hobby dans types.ts.
  const hobbies = ((data.hobbies ?? []) as unknown as Array<string | { name: string }>)
    .map((h) => (typeof h === 'string' ? h : h.name));

  const contactItems = [
    contact.location,
    'Permis B',
    contact.phone,
    contact.email,
    displayUrl(contact.linkedin),
    displayUrl(contact.github),
    displayUrl(PORTFOLIO_URL)
  ];

  return (
    <div className="ats-root min-h-screen bg-slate-100 px-4 py-6 sm:py-10" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <nav className="ats-no-print max-w-[210mm] mx-auto mb-4 flex flex-wrap items-center gap-2 text-sm">
        <a
          href={`/${pdfFilename}`}
          download
          className="rounded-md bg-slate-900 px-3 py-2 font-medium text-white hover:bg-slate-700"
        >
          Télécharger le PDF (ATS)
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 font-medium text-slate-800 hover:bg-slate-50"
        >
          Imprimer
        </button>
        <a href={`/${variant}`} className="ml-auto text-slate-600 underline hover:text-slate-900">
          Voir le portfolio complet
        </a>
      </nav>

      <article className="ats-sheet max-w-[210mm] mx-auto bg-white text-slate-900 text-[11px] leading-snug p-6 sm:p-[14mm] shadow-sm border border-slate-200">
        <header className="text-center">
          <h1 className="text-[24px] font-bold uppercase tracking-wide">{personal.name}</h1>
          <p className="text-[14px] font-semibold mt-0.5">{personal.title}</p>
          <p className="text-[12px] mt-0.5">{personal.status}</p>
          <p className="mt-1.5">
            {contactItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && ' | '}
                {item}
              </React.Fragment>
            ))}
          </p>
        </header>

        <Section title="Profil">
          <p>{personal.objective}</p>
        </Section>

        <Section title="Compétences techniques">
          <ul className="list-disc pl-4 space-y-0.5">
            {data.skillCategories.map((cat) => (
              <li key={cat.category}>
                <strong>{cat.category} :</strong> {cat.skills.join(', ')}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Expérience professionnelle">
          {data.experience.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="ats-entry mb-2.5">
              <div className="flex flex-wrap justify-between gap-x-4">
                <h3 className="font-bold text-[12px]">
                  {exp.position} - {exp.company}
                </h3>
                <span className="font-semibold">{exp.period}</span>
              </div>
              {exp.description.split('\n').map((line) => (
                <p key={line} className="italic">{line}</p>
              ))}
              <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                {exp.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Projets">
          {data.projects.map((project) => (
            <div key={project.id} className="ats-entry mb-1.5">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <span className="font-semibold">Technologies :</span> {project.technologies.join(', ')}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Formation">
          {data.education.flatMap((edu) =>
            edu.degrees.map((deg) => (
              <div key={`${edu.school}-${deg.degree}`} className="ats-entry mb-1.5">
                <div className="flex flex-wrap justify-between gap-x-4">
                  <h3 className="font-bold">
                    {deg.degree} - {edu.school}
                  </h3>
                  <span className="font-semibold">{deg.period}</span>
                </div>
                <p>{deg.description}</p>
              </div>
            ))
          )}
        </Section>

        {data.certifications && data.certifications.length > 0 && (
          <Section title="Certifications">
            <ul className="list-disc pl-4">
              {data.certifications.map((c) => (
                <li key={c.name}>
                  {c.name} - {c.issuer}
                  {c.date ? ` (${c.date})` : ''}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {data.languages && data.languages.length > 0 && (
          <Section title="Langues">
            <p>{data.languages.map((l) => `${l.name} : ${l.level}`).join(' | ')}</p>
          </Section>
        )}

        {hobbies.length > 0 && (
          <Section title="Centres d'intérêt">
            <p>{hobbies.join(', ')}</p>
          </Section>
        )}
      </article>
    </div>
  );
};
