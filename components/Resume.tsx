
/**
 * Resume Component - Composant CV
 * 
 * Fonctionnalités:
 * ✅ Génération dynamique de PDF (html2canvas + jsPDF)
 * ✅ Modal avec zoom ajustable pour aperçu du CV
 * ✅ Récupération des projets GitHub via API
 * ✅ Affichage des informations personnelles
 * ✅ Timeline formation et expérience
 * ✅ Compétences et certifications
 * ✅ Responsive design (mobile + desktop)
 * 
 * @component
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Award, Sparkles, Briefcase, GraduationCap, Target, Car, Waves, Footprints, Eye, Globe, Github, Maximize2, X, Loader } from 'lucide-react';
import { PortfolioData } from '../types';

const MotionDiv = motion.div as any;

interface ResumeProps {
  data: PortfolioData;
}

interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  url: string;
  languages: string[];
  stars: number;
  updated_at: string;
}

export const Resume: React.FC<ResumeProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [gitHubProjects, setGitHubProjects] = useState<GitHubProject[]>([]);
  const [loadingGitHub, setLoadingGitHub] = useState(false);

  // Fetch GitHub projects on component mount
  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoadingGitHub(true);
      // Récupérer les repos de l'utilisateur GitHub
      const response = await fetch('https://api.github.com/users/theo-poletto/repos?sort=updated&per_page=6');
      if (!response.ok) throw new Error('Failed to fetch GitHub projects');
      
      const repos = await response.json();
      
      const projects: GitHubProject[] = repos
        .filter((repo: any) => !repo.fork && repo.description)
        .slice(0, 5)
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          languages: repo.language ? [repo.language] : [],
          stars: repo.stargazers_count,
          updated_at: repo.updated_at
        }));
      
      setGitHubProjects(projects);
    } catch (error) {
      console.error('Erreur lors de la récupération des projets GitHub:', error);
      // Fallback: garder les projets vides si l'API échoue
    } finally {
      setLoadingGitHub(false);
    }
  };

  const handleDownload = async () => {
    try {
      const cvElement = document.getElementById('cv-print-area');
      if (!cvElement) {
        console.error('CV element not found');
        return;
      }

      // Utiliser html2canvas et jsPDF pour générer le PDF
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;

      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`CV_Theo_Poletto_${new Date().toLocaleDateString('fr-FR')}.pdf`);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      // Fallback: télécharger le PDF statique si la génération échoue
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = `CV_Theo_Poletto_${new Date().toLocaleDateString('fr-FR')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-slate-50 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 print:hidden"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
            Mon <span className="text-primary-600">CV</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6 text-lg">
            Un aperçu de mon parcours professionnel et académique.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 font-medium text-sm md:text-base"
            >
              <Download size={18} className="mr-2" />
              <span className="hidden md:inline">Télécharger mon CV</span>
              <span className="md:hidden">Télécharger</span>
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all font-medium text-sm md:text-base"
            >
              <Eye size={18} className="mr-2" />
              <span className="hidden md:inline">Voir en grand</span>
              <span className="md:hidden">Voir</span>
            </button>
          </div>
        </MotionDiv>

        {/* NATIVE PDF VIEWER FOR DESKTOP */}
        <div className="hidden md:block max-w-4xl mx-auto print:hidden bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 mb-12">
          <div className="h-[800px] md:h-[900px] w-full">
            <object 
              data="/resume.pdf" 
              type="application/pdf" 
              className="w-full h-full"
            >
              <div className="p-6 text-center text-slate-600">
                <p className="mb-4">Votre navigateur ne supporte pas la lecture de PDF.</p>
                <a href="/resume.pdf" className="text-primary-600 underline font-semibold hover:text-primary-700">
                  Télécharger le CV en PDF
                </a>
              </div>
            </object>
          </div>
        </div>

        {/* Mobile Modal for PDF Preview */}
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-3xl most-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800">Aperçu du CV</h3>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setZoom(Math.max(50, zoom - 10))}
                      className="p-2 hover:bg-slate-100 rounded text-sm font-medium"
                    >
                      −
                    </button>
                    <span className="px-3 py-2 bg-slate-100 rounded text-sm font-medium min-w-[60px] text-center">
                      {zoom}%
                    </span>
                    <button 
                      onClick={() => setZoom(Math.min(200, zoom + 10))}
                      className="p-2 hover:bg-slate-100 rounded text-sm font-medium"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded"
                  >
                    <X size={20} className="text-slate-600" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div 
                  className="bg-white mx-auto shadow-lg will-change-transform transition-transform"
                  style={{ 
                    transform: `scale(${zoom / 100})`,
                    transformOrigin: 'top center',
                    width: '210mm'
                  }}
                >
                  {/* Embedded CV Content Preview */}
                  <div id="cv-preview" className="resume-container flex flex-col md:flex-row bg-white text-slate-800 w-full" style={{ width: '210mm', height: '297mm', padding: '0' }}>
                    {/* Prévisualisation du CV avec zoom */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* HIDDEN HTML CV FOR PUPPETEER PRINTING ONLY */}
        {/* CSS Reset inside cv-print-area to enforce typography */}
        <div
          id="cv-print-area"
          className="hidden print:flex resume-container flex-col md:flex-row print:shadow-none print:ring-0 print:rounded-none print:max-w-none print:w-[210mm] print:h-[297mm] print:overflow-hidden bg-white text-slate-800"
        >
          
          {/* SIDEBAR */}
          <aside 
            className="w-[32%] bg-primary-100 text-slate-900 pt-5 pb-6 px-6 print:w-[32%] flex flex-col justify-between border-r border-primary-200"
            style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
          >
            <div>
              {/* QR Code Section -> Made Clickable */}
              <div className="flex flex-col items-center mb-4">
                <a href="https://poletto-theo.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-xl mb-2 hover:shadow-md transition-shadow block cursor-pointer border border-slate-200">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=55x55&data=https://poletto-theo.vercel.app/&bgcolor=ffffff&color=0f172a`}
                    alt="QR Code Portfolio"
                    className="w-[55px] h-[55px]"
                  />
                </a>
                <a href="https://poletto-theo.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-600 hover:text-slate-900 font-medium tracking-wide">
                  poletto-theo.vercel.app
                </a>
              </div>

              {/* Photo and Name */}
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <img 
                    src={data.personal.avatar} 
                    alt={data.personal.name} 
                    className="relative w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1 className="text-[22px] font-extrabold tracking-tight leading-tight text-slate-900 mb-1">Theo Poletto</h1>
                <p className="text-primary-600 font-semibold text-[13px] uppercase tracking-widest mt-1">{data.personal.title}</p>
              </div>

              <div className="space-y-6">
                {/* Contact */}
                <section>
                  <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-300 pb-1.5">Contact</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-[10.5px] text-slate-700 gap-2.5">
                      <Mail size={13} className="text-primary-600 shrink-0" />
                      <span className="truncate">{data.contact.email}</span>
                    </li>
                    <li className="flex items-center text-[10.5px] text-slate-700 gap-2.5">
                      <Phone size={13} className="text-primary-600 shrink-0" />
                      {data.contact.phone}
                    </li>
                    <li className="flex items-center text-[10.5px] text-slate-700 gap-2.5">
                      <MapPin size={13} className="text-primary-600 shrink-0" />
                      Mobilité : Toute la France
                    </li>
                    <li className="flex items-center text-[10.5px] text-slate-700 gap-2.5">
                      <Car size={13} className="text-primary-600 shrink-0" />
                      Permis B + Véhicule
                    </li>
                    <li className="flex items-center text-[10.5px] text-slate-700 gap-2.5">
                      <Linkedin size={13} className="text-primary-600 shrink-0" />
                      <a href="https://www.linkedin.com/in/theo-poletto/" target="_blank" rel="noopener noreferrer" className="text-primary-700 font-medium hover:underline">
                        THEO POLETTO
                      </a>
                    </li>
                  </ul>
                </section>

                {/* Categorized Skills */}
                <section>
                  <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-300 pb-1.5">Expertise</h3>
                  <div className="space-y-3">
                    {data.skillCategories.slice(0, 4).map((cat, idx) => (
                      <div key={idx}>
                        <p className="text-[10px] font-bold text-primary-700 mb-1.5 uppercase tracking-wide">
                          {cat.category}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.slice(0, 5).map(s => (
                            <span key={s} className="px-2 py-1 bg-white border border-slate-200 shadow-sm text-[9px] font-medium rounded-md text-slate-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Certifications */}
                {data.certifications && data.certifications.length > 0 && (
                <section>
                  <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-300 pb-1.5">Certifications</h3>
                  <div className="space-y-1.5">
                    {data.certifications.map((cert, i) => (
                      <div key={i} className="p-2 bg-primary-50 border border-primary-200 rounded-lg">
                        <p className="text-[10.5px] font-bold text-primary-700 flex items-center mb-0.5">
                          <Award size={12} className="mr-1.5 shrink-0" /> {cert.name}
                        </p>
                        <p className="text-[9.5px] text-slate-600 mt-0.5 leading-snug">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </section>
                )}

                {/* Centres d'intérêt */}
                {data.hobbies && data.hobbies.length > 0 && (
                <section>
                  <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2 border-b border-slate-300 pb-1.5">Centres d'intérêt</h3>
                  <div className="flex flex-wrap gap-2 text-[10px] text-slate-700 font-medium">
                    {data.hobbies.map((hobby, i) => (
                      <React.Fragment key={i}>
                        <span>{hobby}</span>
                        {i < data.hobbies.length - 1 && <span className="text-slate-300">•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </section>
                )}
              </div>
            </div>
            
            {/* Bottom Footer block in sidebar if needed, currently empty */}
            <div></div>
          </aside>

          {/* MAIN CONTENT (68%) */}
          <main className="w-[68%] pt-5 pb-6 px-6 overflow-hidden print:w-[68%]">
            
            {/* Recherche CDI Banner */}
            <div className="mb-4 p-2 bg-primary-50/80 border border-primary-100 rounded-xl">
              <p className="flex items-center justify-center text-[11px] font-bold text-primary-700 uppercase tracking-widest">
                <Target size={14} className="mr-2 text-primary-600" />
                {data.personal.status}
              </p>
            </div>

            {/* ORDER: Profil -> Formation -> Experiences -> Projets -> Langues */}

            {/* 1. Profil / Summary */}
            <section className="mb-4">
              <h3 className="flex items-center text-[13px] font-bold text-primary-600 mb-1.5 uppercase tracking-widest">
                <Sparkles size={14} className="mr-2" />
                Profil & Objectif
              </h3>
              <p className="text-[#333333] leading-[1.6] text-[10.5px] border-l-[3px] border-primary-300 pl-3 py-1 font-medium">
                "{data.personal.objective}"
              </p>
            </section>

            {/* 2. Formation Section */}
            <section className="mb-4">
              <h3 className="flex items-center text-[13px] font-bold text-primary-600 mb-2 uppercase tracking-widest">
                <GraduationCap size={14} className="mr-2" />
                Formation
              </h3>
              <div className="space-y-3.5 pl-1.5">
                {data.education.map((edu, idx) => (
                  <div key={idx} className={`relative pl-4 border-l-2 border-primary-100 ${idx > 0 ? "mt-2" : ""}`}>
                    <div className="absolute -left-[7px] top-1 w-3 h-3 bg-primary-500 rounded-full ring-4 ring-white"></div>
                    <h4 className="text-[11.5px] font-bold text-[#1f2937] uppercase tracking-wide mb-1">{edu.school}</h4>
                    {edu.degrees.map((deg, i) => (
                      <div key={i} className={`flex justify-between items-baseline ${i === 0 ? "mt-1" : "mt-0.5"}`}>
                        <div className="w-[80%] pr-2">
                          <p className="text-[10.5px] font-medium text-[#333333] leading-snug">{deg.degree}</p>
                          {deg.description && <p className="text-[9.5px] text-[#6b7280] mt-0.5">{deg.description}</p>}
                        </div>
                        <span className="text-[9.5px] font-medium text-[#6b7280] shrink-0 text-right">{deg.period}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Experience */}
            <section className="mb-4">
              <h3 className="flex items-center text-[13px] font-bold text-primary-600 mb-2 uppercase tracking-widest">
                <Briefcase size={14} className="mr-2" />
                Expériences Professionnelles
              </h3>
              <div className="space-y-4 pl-1.5">
                {data.experience.slice(0, 3).map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-primary-100">
                    <div className="absolute -left-[7px] top-1 w-3 h-3 bg-primary-600 rounded-full ring-4 ring-white"></div>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="font-bold text-[#1f2937] text-[12px]">{exp.position}</h4>
                      <span className="text-[8.5px] font-bold text-primary-700 uppercase bg-primary-50 px-2 py-0.5 rounded-md min-w-max ml-3">{exp.period}</span>
                    </div>
                    <p className="text-[10.5px] font-bold text-[#6b7280] mb-1">{exp.company}</p>
                    <p className="text-[10px] text-[#333333] leading-[1.6] mb-1.5">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-0.5 mt-1">
                        {exp.achievements.slice(0, 2).map((ach, i) => (
                          <li key={i} className="text-[10px] text-[#4b5563] flex items-start leading-[1.5]">
                            <span className="text-primary-500 mr-2 font-bold mt-0.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Featured Projects */}
            <section className="mb-4">
              <h3 className="flex items-center text-[14px] font-bold text-primary-600 mb-2 uppercase tracking-widest">
                <ExternalLink size={14} className="mr-2" />
                Projets & Réalisations
              </h3>
              <div className="space-y-1.5 pl-1.5">
                {data.projects.slice(0, 3).map((project, idx) => (
                  <div key={idx} className="pb-1.5 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-[#1f2937] text-[11px]">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {project.technologies.slice(0, 4).map(t => (
                          <span key={t} className="text-[8px] font-bold text-primary-600 bg-primary-50/50 px-1.5 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                     <ul className="space-y-0.5">
                      {project.achievements.slice(0, 2).map((ach, i) => (
                        <li key={i} className="text-[10px] text-[#4b5563] flex items-start leading-[1.5]">
                          <span className="text-primary-400 mr-2 font-bold mt-[1px]">▹</span>
                          <span className="line-clamp-1">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Langues */}
            {data.languages && data.languages.length > 0 && (
            <section className="mt-auto">
              <h3 className="flex items-center text-[13px] font-bold text-primary-600 mb-2 uppercase tracking-widest">
                <Globe size={14} className="mr-2" />
                Langues
              </h3>
              <div className="flex flex-wrap gap-6 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                {data.languages.map((lang, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-[#1f2937] mb-0.5">{lang.name}</span>
                      <span className="text-[10px] font-medium text-[#6b7280]">{lang.level}</span>
                    </div>
                    {i < data.languages!.length - 1 && <div className="w-px bg-slate-200"></div>}
                  </React.Fragment>
                ))}
              </div>
            </section>
            )}

          </main>

        </div>

        {/* GitHub Projects Section - Dynamic */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 print:hidden"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Github size={32} className="text-primary-600" />
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">Projets GitHub</h3>
                  <p className="text-slate-600 text-sm">Récupérés automatiquement depuis mon profil</p>
                </div>
              </div>
              <a 
                href="https://github.com/TheoPopoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
              >
                <Github size={18} className="mr-2" />
                Voir plus
              </a>
            </div>

            {loadingGitHub ? (
              <div className="flex items-center justify-center py-12">
                <Loader size={24} className="text-primary-600 animate-spin mr-2" />
                <span className="text-slate-600">Chargement des projets...</span>
              </div>
            ) : gitHubProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gitHubProjects.map((project) => (
                  <motion.a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ translateY: -8 }}
                    className="group p-6 bg-white border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary-600 transition-colors flex-1 line-clamp-2">
                        {project.name}
                      </h4>
                      <ExternalLink size={18} className="text-slate-400 group-hover:text-primary-600 transition-colors ml-2 shrink-0" />
                    </div>
                    
                    {project.description && (
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                      <span>Mis à jour: {new Date(project.updated_at).toLocaleDateString('fr-FR')}</span>
                      {project.stars > 0 && (
                        <span>⭐ {project.stars}</span>
                      )}
                    </div>
                    
                    {project.languages.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.languages.map((lang) => (
                          <span 
                            key={lang}
                            className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
                <Github size={48} className="mx-auto text-slate-300 mb-3" />
                <p className="text-slate-600">Aucun projet GitHub disponible pour l'instant</p>
              </div>
            )}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
