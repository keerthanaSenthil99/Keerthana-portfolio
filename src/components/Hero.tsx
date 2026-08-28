import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, FileText, Terminal, CheckCircle2, Copy, Check, MapPin, Briefcase } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';


interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npx keerthana-dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern bg-[#070A11]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[350px] bg-emerald-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[180px] sm:h-[250px] bg-cyan-500/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{siteConfig.role} • 4 YEARS EXP</span>
            </div>

            {/* Editorial Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
              Building scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">React & Next.js</span> web applications.
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">{siteConfig.fullName}</strong>. {siteConfig.shortBio}
            </p>

            {/* Quick Meta Chips */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono text-slate-300">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-slate-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-slate-800 shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>SD Innovations & Sify Tech Alumni</span>
              </div>
            </div>

            {/* Actions & Social Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group text-center"
                aria-label="Scroll to selected projects section"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenResume) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#0F1527] hover:bg-[#151D33] border border-slate-700/80 rounded-xl transition-all duration-200 shadow-sm text-center"
                aria-label="Open Keerthana's resume dialog"
              >
                <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>View Resume</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3.5 text-slate-300 hover:text-white bg-[#0F1527] hover:bg-[#151D33] border border-slate-700/80 rounded-xl transition-colors text-center"
                aria-label="Connect with Keerthana on LinkedIn (opens in new tab)"
              >
                <LinkedInIcon className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-medium sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>


          {/* Minimal Developer Identity / Code Detail */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-[#0B0F19]/90 backdrop-blur-xl text-slate-200 shadow-2xl p-6 font-mono text-xs leading-relaxed space-y-4">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>keerthana.dev</span>
                </div>
              </div>

              {/* Terminal Snippet */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-emerald-400">$ npx keerthana-dev --profile</span>
                  <button
                    onClick={handleCopyCommand}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    title="Copy command"
                    aria-label="Copy CLI command to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                  </button>
                </div>


                <div className="p-4 rounded-xl bg-[#070A11]/80 border border-slate-800/90 space-y-2 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Experience:</span>
                    <span className="text-white font-semibold">4 Years (2021 – Present)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Core Stack:</span>
                    <span className="text-emerald-300 font-semibold">React.js, Next.js, TypeScript</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Database & ORM:</span>
                    <span className="text-cyan-300 font-semibold">PostgreSQL, Prisma, MySQL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-white font-semibold">{siteConfig.location}</span>
                  </div>
                </div>

                {/* Status Checks */}
                <div className="pt-1 space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>35% Page Load Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>High-Traffic Enterprise Portals & SSR Layouts</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


