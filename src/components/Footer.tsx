import React from 'react';
import { companyContact } from '@/src/lib/companyContact';
import ccLogo from '../assets/cc-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-5 sm:px-6 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main row: copyright + contact + badge */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between">

          {/* Left: copyright + contact card */}
          <div className="flex w-full flex-col items-center gap-2 md:items-start">
            <p className="text-[11px] text-white/40">
              © 2026 Bamboo Groves Events Group. All Rights Reserved.
            </p>

            <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
              {/* xs / small – stack email+phone on one line, address below */}
              <div className="flex flex-col gap-1 text-[11px] leading-relaxed text-white/75 sm:hidden">
                <p className="break-all">
                  <span className="font-semibold text-white">Email:</span>{' '}
                  {companyContact.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{' '}
                  {companyContact.phonePrimary}
                  <br className="xs:hidden" />
                  <span className="xs:inline hidden">, </span>
                  {companyContact.phoneSecondary}
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span>{' '}
                  {companyContact.addressInline}
                </p>
              </div>

              {/* sm – md: two lines (email+phone | address) */}
              <div className="hidden flex-col gap-0.5 text-[11px] leading-relaxed text-white/75 sm:flex lg:hidden">
                <p>
                  <span className="font-semibold text-white">Email:</span>{' '}
                  {companyContact.email}
                  <span className="mx-2 text-accent/70">•</span>
                  <span className="font-semibold text-white">Phone:</span>{' '}
                  {companyContact.phoneCombined}
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span>{' '}
                  {companyContact.addressInline}
                </p>
              </div>

              {/* lg+: single line */}
              <p className="hidden text-[11px] leading-relaxed text-white/75 lg:block">
                <span className="font-semibold text-white">Email:</span>{' '}
                {companyContact.email}
                <span className="mx-2 text-accent/70">•</span>
                <span className="font-semibold text-white">Phone:</span>{' '}
                {companyContact.phoneCombined}
                <span className="mx-2 text-accent/70">•</span>
                <span className="font-semibold text-white">Address:</span>{' '}
                {companyContact.addressInline}
              </p>
            </div>
          </div>

          {/* Right: CodeCrafter badge */}
          <a
            href="https://www.codecrafter.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-center rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 shadow-[0_0_18px_rgba(136,171,50,0.18)] transition-all hover:bg-accent/15 hover:text-white md:self-start"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
              Crafted by
            </span>
            <img src={ccLogo} alt="CodeCrafter" className="h-5 w-auto sm:h-6" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;