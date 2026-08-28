import React from 'react';
import { LayoutGrid, Gauge, Database, Layers, Sparkles, Server } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "Modular Component Architecture",
      icon: LayoutGrid,
      description: "I build robust, reusable component ecosystems using React.js, Next.js, shadcn/ui, and Tailwind CSS. Isolating state and interface tokens makes enterprise codebases predictable and easy to scale."
    },
    {
      number: "02",
      title: "High-Traffic Performance Optimization",
      icon: Gauge,
      description: "Speed directly impacts user retention and conversion. I specialize in strategic code splitting, lazy loading, and SSR view layouts—having achieved 35% page load speedups on enterprise platforms."
    },
    {
      number: "03",
      title: "Seamless API & Data Layer Integration",
      icon: Database,
      description: "Frontend excellence requires strong backend empathy. I seamlessly connect React interfaces with PostgreSQL and MySQL via Prisma ORM and REST APIs to handle 10K+ daily requests with sub-100ms latency."
    },
    {
      number: "04",
      title: "Enterprise Reliability & Type Safety",
      icon: Server,
      description: "TypeScript and Redux Toolkit ensure end-to-end type safety, synchronous state transitions, and responsive multi-device stability across complex data workflows and candidate portals."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0B0F19] border-y border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="text-white">01</span>
            <span className="text-slate-600">/</span>
            <span>PHILOSOPHY</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Engineering with Scalability & Precision
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            With 4 years of frontend and full-stack development experience, I focus on bridging engineering rigor with responsive, accessible user interfaces for enterprise systems, commercial platforms, and AI-powered products.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0F1527]/90 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#141C33] border border-slate-700/80 flex items-center justify-center text-emerald-400 shadow-inner group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-emerald-400 transition-colors">
                    {p.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2.5 sm:mb-3 group-hover:text-emerald-300 transition-colors">
                  {p.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Detail */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#070A11] border border-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>CORE ENGINEERING PHILOSOPHY</span>
            </div>
            <p className="text-base sm:text-lg font-heading font-medium text-slate-200">
              "Great frontend engineering turns intricate data workflows into fluid, intuitive, and lightning-fast digital experiences."
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-emerald-400 px-3.5 py-2 rounded-lg bg-[#0F1527] border border-slate-700">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>React.js • Next.js • TypeScript</span>
          </div>
        </div>


      </div>
    </section>
  );
};


