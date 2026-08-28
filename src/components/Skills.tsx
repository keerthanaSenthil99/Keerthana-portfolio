import React from 'react';
import { Code2, Database, Wrench, Lightbulb } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; tag?: string }[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      skills: [
        { name: "React.js", tag: "Primary" },
        { name: "Next.js", tag: "SSR" },
        { name: "TypeScript", tag: "Strict" },
        { name: "JavaScript (ES6+)" },
        { name: "Redux Toolkit", tag: "State" },
        { name: "Tailwind CSS", tag: "Expert" },
        { name: "shadcn/ui", tag: "UI" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "jQuery" }
      ]
    },
    {
      title: "Database & ORM",
      icon: Database,
      skills: [
        { name: "PostgreSQL", tag: "Primary" },
        { name: "Prisma ORM", tag: "ORM" },
        { name: "MySQL" },
        { name: "Relational Modeling" },
        { name: "Query Optimization" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", tag: "VCS" },
        { name: "VS Code" },
        { name: "Postman", tag: "API Testing" },
        { name: "REST APIs" },
        { name: "Vercel", tag: "Deploy" },
        { name: "Claude", tag: "AI Tool" },
        { name: "Cursor", tag: "AI IDE" }
      ]
    },
    {
      title: "Engineering Concepts",
      icon: Lightbulb,
      skills: [
        { name: "Performance Optimization", tag: "35% Boost" },
        { name: "Component-based Architecture", tag: "Design" },
        { name: "Responsive Web Design" },
        { name: "Agile / Scrum" },
        { name: "Code Splitting & Lazy Loading" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#070A11] border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="text-white">04</span>
            <span className="text-slate-600">/</span>
            <span>CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical Skills & Technologies
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A comprehensive technical toolkit refined over 4 years of engineering scalable frontend architectures, relational database schemas, and AI-accelerated workflows.
          </p>
        </div>

        {/* Clean Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#0F1527]/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-xl space-y-5 sm:space-y-6"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-[#141C33] border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#070A11] border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-emerald-500/40 hover:text-white transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



