import React from 'react';
import { companyContact } from '@/src/lib/companyContact';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-6 sm:px-6 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row md:items-center">
        <div className="w-full space-y-2 text-center md:text-left">
          <p className="section-label mb-0 text-xs text-white/40">
            © 2026 Bamboo Groves Events Group. All Rights Reserved.
          </p>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="sm:hidden space-y-1 text-[11px] leading-relaxed text-white/75">
              <p className="truncate">
                <span className="font-semibold text-white">Email:</span> {companyContact.email}{' '}
                <span className="mx-1 text-accent/70">•</span>
                <span className="font-semibold text-white">Phone:</span> {companyContact.phoneCombined}
              </p>
              <p className="truncate" title={companyContact.addressInline}>
                <span className="font-semibold text-white">Address:</span> {companyContact.addressInline}
              </p>
            </div>

            <p className="hidden text-[11px] leading-relaxed text-white/75 sm:block">
              <span className="font-semibold text-white">Email:</span> {companyContact.email}
              <span className="mx-2 text-accent/70">•</span>
              <span className="font-semibold text-white">Phone:</span> {companyContact.phoneCombined}
              <span className="mx-2 text-accent/70">•</span>
              <span className="font-semibold text-white">Address:</span> {companyContact.addressInline}
            </p>
          </div>
        </div>

        <a
          href="https://www.codecrafter.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 shadow-[0_0_18px_rgba(136,171,50,0.18)] transition-all hover:bg-accent/15 hover:text-white"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
            Crafted by
          </span>
          <img src={ccLogo} alt="CodeCrafter" className="h-5 w-auto sm:h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
