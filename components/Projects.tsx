import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2, Layers, ZoomIn } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProjectId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProjectId]);

  return (
    <section id="projects" className="py-20 bg-slate-200 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projets Réalisés</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mb-4 mx-auto"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Cliquez sur un projet pour voir les détails, les captures d'écran et les technologies utilisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProjectId(project.id)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// --- PREVIEW CARD COMPONENT ---

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const mainImage = project.images && project.images.length > 0 ? project.images[0] : '';

  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-200">
        {!imgError && mainImage ? (
          <img
            src={mainImage}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
           <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100">
             <Layers size={32} className="mb-2 opacity-50"/>
             <span className="text-xs">Aperçu non disponible</span>
           </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <span className="bg-white/90 backdrop-blur text-slate-800 px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <Maximize2 size={14} className="mr-2"/> Détails
           </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
             <span className="px-2 py-1 text-slate-400 text-xs font-medium">+ {project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- MODAL COMPONENT WITH CAROUSEL ---

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Keyboard: Escape closes fullscreen or modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) setIsFullscreen(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, onClose]);

  // If we have images, calculate index. If array is empty, handle safely.
  const hasImages = project.images && project.images.length > 0;
  const imageIndex = hasImages ? Math.abs(page % project.images.length) : 0;
  const currentImage = hasImages ? project.images[imageIndex] : '';

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
    setDirection(newDirection);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="relative bg-white w-full max-w-6xl h-[55vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left: Carousel (or Top on mobile) */}
        <div className="w-full md:w-1/2 h-40 md:h-full bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden flex-shrink-0 flex items-center justify-center">
          {hasImages ? (
            <AnimatePresence initial={false} custom={direction}>
              {!imgError ? (
                <motion.img
                  key={page}
                  src={currentImage}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onError={() => setImgError(true)}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) {
                      paginate(1);
                    } else if (swipe > 10000) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-contain p-3 cursor-zoom-in"
                  onClick={() => setIsFullscreen(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                    <Layers size={48} className="mb-2 opacity-50"/>
                    <span>Image non trouvée</span>
                </div>
              )}
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
               <span className="italic">Aucune image disponible</span>
            </div>
          )}

          {/* Fullscreen zoom button */}
          {hasImages && !imgError && (
            <button
              className="absolute top-2 left-2 z-10 p-1.5 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors"
              onClick={() => setIsFullscreen(true)}
              title="Voir en plein écran"
            >
              <ZoomIn size={16} />
            </button>
          )}

          {/* Carousel Controls */}
          {hasImages && project.images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors z-10"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors z-10"
                onClick={() => paginate(1)}
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === imageIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right: Content (or Bottom on mobile) */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Description</h4>
              <p className="text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.achievements && project.achievements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Réalisations Clés</h4>
                <ul className="space-y-2">
                  {project.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="mr-2 text-primary-500 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen image viewer */}
      <AnimatePresence>
        {isFullscreen && hasImages && !imgError && (
          <motion.div
            key="fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close fullscreen */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
              title="Fermer (Échap)"
            >
              <X size={24} />
            </button>

            {/* Navigation arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
                  onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"
                  onClick={(e) => { e.stopPropagation(); paginate(1); }}
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image with slide animation */}
            <div className="relative overflow-hidden" style={{ width: 'min(95vw, 1400px)', height: 'min(90vh, 900px)' }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentImage}
                  src={currentImage}
                  alt={project.title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) paginate(1);
                    else if (swipe > 10000) paginate(-1);
                  }}
                  className="absolute inset-0 w-full h-full object-contain select-none"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            {project.images.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === imageIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};