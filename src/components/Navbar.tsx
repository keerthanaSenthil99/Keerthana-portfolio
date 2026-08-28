import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';


interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'journey', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#journey', id: 'journey' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A11]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="group focus:outline-none flex flex-col justify-center"
          aria-label="Keerthana Senthilkumar - Home"
        >
          <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors leading-tight">
            {siteConfig.fullName}
          </span>
          <span className="font-mono text-[11px] font-medium text-emerald-400 tracking-wider uppercase">
            Software Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          {/* Visually Distinct Subtle Resume Button */}
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-200 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-500/80" />
          </a>
        </div>

        {/* Mobile Hamburger Button & Action */}
        <div className="flex md:hidden items-center gap-2">
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
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg active:scale-95 transition-transform"
            aria-label="View Keerthana's Resume modal"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>


      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-2">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

