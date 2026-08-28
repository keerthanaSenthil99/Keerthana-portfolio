import React, { useState } from 'react';
import { Briefcase, GraduationCap, Building2, ChevronRight, Calendar, MapPin } from 'lucide-react';

interface JourneyStage {
  phase: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education';
  icon: React.ElementType;
  skills: string[];
  description: string;
  keyLearnings: string[];
  metrics?: string;
}

export const Journey: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0); // Default to SD Innovations or Sify

  const stages: JourneyStage[] = [
    {
      phase: "01",
      period: "Feb 2026 – March 2026",
      role: "Front End Developer",
      organization: "SD Innovations Private Ltd",
      location: "Chennai, India",
      type: "experience",
      icon: Briefcase,
      skills: ["React.js", "Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
      description: "Spearheaded front-end engineering for a responsive conference/event management white-labeled application. Focused on crafting reusable design systems and fluid data orchestration for live-streamed audience workflows.",
      keyLearnings: [
        "Built 10+ reusable UI components using shadcn/ui & Tailwind CSS for event schedules & ticket flows",
        "Integrated frontend views with PostgreSQL via Prisma ORM for synchronized data delivery",
        "Optimized end-to-end rendering pipelines for high-concurrency live-streamed conference sessions"
      ],
      metrics: "10+ Reusable UI Components • Live Conference Scale"
    },
    {
      phase: "02",
      period: "Aug 2021 – May 2025 (4 Years)",
      role: "Software Developer",
      organization: "Sify Technologies Limited",
      location: "Chennai, India",
      type: "experience",
      icon: Building2,
      skills: ["React.js", "TypeScript", "SQL", "REST APIs", "HTML5", "CSS3", "Redux Toolkit", "Performance Tuning"],
      description: "Engineered and maintained high-traffic enterprise portals serving millions of candidate registrations, results, and call-letters. Spearheaded frontend speed enhancements and internal productivity tooling.",
      keyLearnings: [
        "Boosted page load performance by 35% utilizing strategic code splitting, lazy loading, and responsive design",
        "Constructed dynamic, robustly validated forms closely coupled with REST APIs and SQL backends",
        "Designed and launched an internal task management tool enabling real-time operation tracking across teams"
      ],
      metrics: "35% Page Load Performance Boost • Multi-Million User Traffic"
    },
    {
      phase: "03",
      period: "2017 – 2021",
      role: "Bachelor of Engineering, Computer Science",
      organization: "Sri Sairam Engineering College",
      location: "Chennai, India",
      type: "education",
      icon: GraduationCap,
      skills: ["Data Structures", "Algorithms", "Database Management", "Computer Networks", "Software Engineering"],
      description: "Comprehensive 4-year undergraduate degree in Computer Science. Built foundational expertise in algorithmic efficiency, database normalization, system design, and software engineering methodologies.",
      keyLearnings: [
        "Graduated with a distinguished 8.4 CGPA academic standing",
        "Deep foundation in Data Structures, Relational Database Systems & Software Engineering",
        "Developed full-stack capstone projects and led collaborative engineering team assignments"
      ],
      metrics: "8.4 CGPA • B.E. Computer Science"
    }
  ];

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#070A11] border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="text-white">02</span>
            <span className="text-slate-600">/</span>
            <span>EXPERIENCE & EDUCATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Professional Experience & Milestones
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A 4-year track record across high-growth product teams and enterprise technology leaders—building scalable frontend architectures, optimizing high-traffic portals, and crafting modern web experiences.
          </p>
        </div>

        {/* Timeline Progression Layout */}
        <div className="space-y-4 sm:space-y-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isSelected = selectedPhase === index;

            return (
              <div
                key={stage.phase}
                onClick={() => setSelectedPhase(index)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 p-5 sm:p-8 ${
                  isSelected
                    ? 'bg-[#0F1527] border-emerald-500/50 shadow-xl shadow-emerald-500/5'
                    : 'bg-[#0B0F19]/80 hover:bg-[#0F1527]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-colors shrink-0 ${
                      isSelected
                        ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/20'
                        : 'bg-[#141C33] text-slate-300 group-hover:bg-[#1A243F]'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1 text-emerald-400">
                          <Calendar className="w-3 h-3" />
                          {stage.period}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {stage.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                        {stage.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-400">
                        {stage.organization}
                      </p>
                    </div>
                  </div>


                  <div className="flex items-center gap-3">
                    {stage.metrics && (
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hidden sm:inline">
                        {stage.metrics}
                      </span>
                    )}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${
                      isSelected ? 'bg-emerald-400 text-slate-950 rotate-90' : 'bg-slate-800 text-slate-400 group-hover:translate-x-0.5'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Detail Content */}
                <div className={`pt-6 space-y-6 transition-all duration-300 ${isSelected ? 'block' : 'hidden md:block opacity-75'}`}>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-medium text-slate-500 mr-2 uppercase">Tech / Topics:</span>
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
                          isSelected
                            ? 'bg-[#141C33] text-emerald-300 border border-emerald-500/30'
                            : 'bg-[#101626] text-slate-400 border border-slate-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Key Contributions & Learnings */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#070A11] border border-slate-800/90 space-y-2.5">
                    <div className="text-xs font-mono font-semibold text-white uppercase tracking-wide">
                      Key Highlights & Impact:
                    </div>
                    <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-300">
                      {stage.keyLearnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

