import React, { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, Download, ExternalLink, FileText, CheckCircle2, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Handle escape key & scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-[#0B0F19] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#070A11]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold font-heading text-white">
                {siteConfig.fullName}'s Resume
              </h3>
              <p className="text-[11px] sm:text-xs font-mono text-emerald-400">
                Software Developer • 4 Years Experience • PDF
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close resume dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto">
          
          {/* Quick Snapshot Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#070A11] border border-slate-800 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Executive Summary</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">{siteConfig.location}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {siteConfig.shortBio}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#070A11] border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                <span>Experience (4 Years)</span>
              </div>
              <p className="text-slate-400">SD Innovations & Sify Technologies Ltd (Frontend & Software Developer)</p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#070A11] border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>Education (8.4 CGPA)</span>
              </div>
              <p className="text-slate-400">B.E. Computer Science, Sri Sairam Engineering College (2017–2021)</p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#070A11] border border-slate-800 space-y-1 sm:col-span-2">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <Code className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                <span>Core Technical Stack</span>
              </div>
              <p className="text-slate-400">React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, shadcn/ui, PostgreSQL, Prisma ORM</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30"
              aria-label="Open resume PDF in a new tab"
            >
              <span>Open PDF in New Tab</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={siteConfig.resumeUrl}
              download="Keerthana_Senthilkumar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-[#141C33] hover:bg-[#1C2746] border border-slate-700 rounded-xl transition-colors"
              aria-label="Download resume PDF file"
            >
              <Download className="w-4 h-4 text-slate-400" aria-hidden="true" />
              <span>Download PDF Resume</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};



