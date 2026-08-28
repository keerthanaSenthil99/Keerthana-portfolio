import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, ArrowUp, Phone } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A11] py-12 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <span className="font-heading font-bold text-base text-white">
              {siteConfig.fullName}
            </span>
            <p className="text-xs text-slate-400 font-mono">
              Software Developer • React.js, Next.js & TypeScript Architecture • {siteConfig.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              aria-label="Connect with Keerthana on LinkedIn (opens in new tab)"
            >
              <LinkedInIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.socials.email}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              aria-label="Send direct email to Keerthana"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              aria-label="Call Keerthana direct by phone"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. Crafted with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>


      </div>
    </footer>
  );
};


