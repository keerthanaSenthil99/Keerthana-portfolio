import React, { useState, useEffect } from 'react';
import type { Project } from '../data/projects';
import { Sparkles, Layers, CheckCircle2, ZoomIn, X, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <article
        aria-labelledby={`project-title-${project.id}`}
        className="group rounded-3xl bg-[#0D1322]/95 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5 grid grid-cols-1 lg:grid-cols-12 gap-0"
      >
        
        {/* Project Screenshot Column (Fits seamlessly into card with high-res zoom) */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="lg:col-span-7 relative bg-neutral-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800/80 min-h-[220px] sm:min-h-[340px] lg:min-h-[400px] cursor-pointer group/image"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsLightboxOpen(true);
            }
          }}
          aria-label={`Enlarge screenshot preview for ${project.title}`}
        >
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle} user interface screenshot preview`}
            width={1200}
            height={750}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          
          {/* Top-Left Overlay Badges */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-slate-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-[11px] sm:text-xs font-mono font-medium shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" aria-hidden="true" />
              Featured Project
            </span>
            {project.role && (
              <span className="inline-flex items-center px-2.5 py-1 sm:px-3 rounded-full bg-slate-900/95 backdrop-blur-md text-slate-200 border border-slate-700 text-[11px] sm:text-xs font-mono font-medium shadow-xs">
                {project.role}
              </span>
            )}
          </div>

          {/* Hover Zoom Prompt Badge */}
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-mono font-medium border border-slate-700 shadow-xl transform translate-y-2 group-hover/image:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>View Full Screenshot</span>
            </div>
          </div>
        </div>

        {/* Project Details Column */}
        <div className="lg:col-span-5 p-5 sm:p-8 lg:p-9 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3.5 sm:space-y-4">
            
            {/* Subtitle & Title */}
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                {project.subtitle}
              </span>
              <h3 
                id={`project-title-${project.id}`}
                className="text-xl sm:text-3xl font-extrabold font-heading text-white group-hover:text-emerald-300 transition-colors"
              >
                {project.title}
              </h3>
            </div>

            {/* Responsive Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-left sm:text-justify">
              {project.longDescription || project.description}
            </p>

            {/* Highlights List with Responsive Justified Text */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wide">
                  Key Technical Highlights:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {project.highlights.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left sm:text-justify">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics Badge */}
            {project.metrics && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141C33] border border-slate-700 text-slate-200 font-mono text-xs">
                <Layers className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-1.5 flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium bg-[#101626] text-slate-300 rounded-md border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Action Buttons: Live Link & Enlarge Screenshot (Stack on mobile, row on desktop) */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 text-center"
                aria-label={`Visit live website of ${project.title} (opens in a new tab)`}
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-[#141C33] hover:bg-[#1A243F] border border-slate-700 rounded-xl transition-colors cursor-pointer text-center"
              aria-label={`Enlarge full screenshot for ${project.title}`}
            >
              <ZoomIn className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>Enlarge Screenshot</span>
            </button>
          </div>

        </div>

      </article>

      {/* Interactive Screenshot Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.id}`}
        >
          <div 
            className="relative w-full max-w-5xl bg-[#0B0F19] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-[#070A11] text-white">
              <div>
                <h4 
                  id={`modal-title-${project.id}`}
                  className="text-base sm:text-lg font-bold font-heading text-white"
                >
                  {project.title} — Screenshot Preview
                </h4>
                <p className="text-xs font-mono text-emerald-400">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold hover:bg-emerald-500/25 transition-colors"
                    aria-label={`Open live site for ${project.title} in a new tab`}
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label={`Close ${project.title} screenshot preview`}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Screenshot Body */}
            <div className="p-2 sm:p-4 bg-[#070A11] flex items-center justify-center overflow-auto">
              <img
                src={project.image}
                alt={`${project.title} - Full-size application user interface preview`}
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};




