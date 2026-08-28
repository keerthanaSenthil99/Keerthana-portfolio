import React from 'react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0B0F19] border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="text-white">03</span>
            <span className="text-slate-600">/</span>
            <span>SELECTED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Production Applications & Systems
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed font-normal text-justify">
            A curated showcase of production web applications, commercial platforms, and full-stack systems engineering demonstrating React architecture, Next.js performance, and modern UI execution.
          </p>
        </div>

        {/* Uniform Projects Showcase List */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};


