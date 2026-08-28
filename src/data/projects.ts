export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  role?: string;
}

/**
 * Data structure for projects, loaded from Keerthana Senthilkumar's portfolio.
 */
export const projectsData: Project[] = [
  {
    id: "formcraft-automation",
    title: "FormCraft",
    subtitle: "Schema-Driven Data Automation Platform",
    description: "A full-stack data automation platform leveraging React.js and TypeScript to transform complex, unstructured Excel inputs into validated JSON schemas via dynamic form-builders.",
    longDescription: "Engineered a full-stack data automation platform leveraging React.js, TypeScript, and Node.js. Built a highly responsive frontend architecture using Tailwind CSS, featuring real-time state synchronization and modular, component-based view layouts to handle large-scale data manipulation. Implemented a robust backend with PostgreSQL to effortlessly process 10K+ daily API requests with sub-100ms latency.",
    highlights: [
      "Dynamic schema form-builder converting unstructured Excel to validated JSON schemas",
      "Real-time state synchronization with modular component layouts for large-scale data",
      "High-throughput backend processing 10K+ daily API requests with sub-100ms latency",
      "Integrated modular REST APIs ensuring synchronous transitions and cross-device stability"
    ],
    image: "/projects/formcraft.jpg",
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    metrics: "10K+ Daily Requests • Sub-100ms Latency",
    role: "Full Stack & Frontend Engineer"
  },
  {
    id: "sk-construction-chennai",
    title: "SK Construction Chennai",
    subtitle: "Premier Architectural & Civil Construction Platform",
    description: "A production-grade web platform for SK Construction Chennai (Pallikaranai) showcasing luxury residential villas, duplex house construction, turnkey estimation tools, and local SEO architecture.",
    longDescription: "Architected and developed a full-featured commercial web application for SK Construction Chennai. Designed interactive duplex villa portfolios, architectural floor-plan showcases, turnkey construction cost estimators, and direct client conversion funnels. Integrated Google Local SEO JSON-LD structured data to maximize organic discovery across Pallikaranai, Velachery, and Chennai.",
    highlights: [
      "Engineered a high-performance, mobile-first responsive layout with fluid visual aesthetics and micro-animations",
      "Built interactive project showcase galleries and architectural duplex floor plan viewers",
      "Integrated instant WhatsApp consultation, direct call booking, and client inquiry lead capture forms",
      "Implemented comprehensive Schema.org JSON-LD structured data for #1 local SEO ranking in Pallikaranai, Chennai"
    ],
    image: "/projects/sk-construction.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "SEO Structured Data", "Responsive Design"],
    liveUrl: "https://sk-construction-pallikaranai.vercel.app/",
    featured: true,
    metrics: "Local SEO Optimized • Interactive Villa Portfolio",
    role: "Lead Frontend Engineer & Architect"
  },
  {
    id: "event-management-system",
    title: "White-Label Event Management System",
    subtitle: "Customizable Multi-Tenant Client Platform",
    description: "A customizable, multi-tenant Event Management System built using a single codebase to support multiple clients. Implemented role-based access control and authorization, developed features and workflows for different user roles, integrated APIs, and contributed to creating a flexible platform that could be customized based on each client's requirements.",
    longDescription: "A customizable, multi-tenant Event Management System built using a single codebase to support multiple clients. Implemented role-based access control and authorization, developed features and workflows for different user roles, integrated APIs, and contributed to creating a flexible platform that could be customized based on each client's requirements.",
    highlights: [
      "Customizable multi-tenant architecture supporting multiple enterprise clients from a single codebase",
      "Implemented comprehensive role-based access control (RBAC) and authorization security workflows",
      "Engineered specialized features, management flows, and intuitive dashboards for various user roles",
      "Integrated modular REST APIs to deliver a high-performance, client-customizable experience"
    ],
    image: "/projects/eventhub.jpg",
    technologies: ["React.js", "Next.js", "TypeScript", "shadcn/ui", "PostgreSQL", "Prisma ORM"],
    featured: true,
    metrics: "Multi-Tenant Platform • Role-Based Access Control",
    role: "Front End Developer (SD Innovations)"
  }
];





