export interface SocialLinks {
  linkedin: string;
  github?: string;
  twitter?: string;
  email: string;
  phone?: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  role: string;
  tagline: string;
  shortBio: string;
  aboutBio: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  socials: SocialLinks;
  resumeUrl: string;
}

/**
 * Centralized site configuration populated from Keerthana Senthilkumar's resume.
 */
export const siteConfig: SiteConfig = {
  name: "Keerthana",
  fullName: "Keerthana Senthilkumar",
  title: "Keerthana Senthilkumar — Frontend Developer",
  role: "FRONTEND DEVELOPER",
  tagline: "Building scalable React.js & Next.js web applications with 4+ years of engineering experience.",
  shortBio: "Frontend Developer with 4 years of experience building scalable React.js and Next.js applications. Experienced in TypeScript, Redux Toolkit, REST API integration, PostgreSQL, and performance optimization. Skilled in building high-traffic enterprise applications and AI-powered web products.",
  aboutBio: "I specialize in engineering high-traffic enterprise applications and modern web products. With deep expertise across React.js, Next.js, TypeScript, PostgreSQL, and Prisma ORM, I focus on crafting component-driven architectures, reducing latency, and delivering seamless multi-device experiences.",
  email: "keerthiesk@gmail.com",
  phone: "+91 892 577 8812",
  location: "Chennai, India",
  status: "Available for new opportunities",
  socials: {
    linkedin: "https://linkedin.com/in/keerthana-senthilkumar-dev",
    email: "mailto:keerthiesk@gmail.com",
    phone: "tel:+918925778812"
  },
  resumeUrl: "/resume.pdf"
};


