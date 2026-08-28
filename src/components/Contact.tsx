import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Phone, ArrowUpRight, Copy, Check, MapPin } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0B0F19] border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            <span className="text-white">05</span>
            <span className="text-slate-600">/</span>
            <span>CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Let's build something scalable.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Whether you're looking for an experienced Frontend Developer, seeking a collaborator on React & Next.js applications, or discussing engineering opportunities — my inbox and line are always open.
          </p>
        </div>

        {/* Contact Action Box */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0F1527] border border-slate-800/90 shadow-2xl space-y-6 sm:space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-800/80">
            {/* Email Card */}
            <div className="space-y-1.5 p-4 sm:p-5 rounded-2xl bg-[#070A11] border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <Mail className="w-3.5 h-3.5" />
                  Direct Email
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Primary</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-white flex items-center justify-between gap-2 pt-1">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-400 hover:underline truncate transition-colors">
                  {siteConfig.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#141C33] hover:bg-[#1C2746] text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="space-y-1.5 p-4 sm:p-5 rounded-2xl bg-[#070A11] border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
                <span className="inline-flex items-center gap-1.5 text-cyan-400">
                  <Phone className="w-3.5 h-3.5" />
                  Direct Phone
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">{siteConfig.location}</span>
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-white flex items-center justify-between gap-2 pt-1">
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-400 hover:underline transition-colors">
                  {siteConfig.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg bg-[#141C33] hover:bg-[#1C2746] text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            {/* Status Indicator */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-semibold text-emerald-300 uppercase">
                {siteConfig.status}
              </span>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {siteConfig.location}
              </span>
            </div>

            {/* Primary Action Buttons (Stacked on mobile, row on desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href={siteConfig.socials.email}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-[#141C33] hover:bg-[#1C2746] border border-slate-700 rounded-xl transition-all duration-200 shadow-sm text-center"
              >
                <LinkedInIcon className="w-4 h-4 text-slate-300" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



