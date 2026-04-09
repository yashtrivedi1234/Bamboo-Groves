import React from 'react';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const AboutSection: React.FC = () => (
  <RevealSection id="about" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div>
        <SectionHeading label="Who We Are" title="A Full-Service Events Partner Built for Impact" />
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/70 sm:text-base">
          <p>
            Bamboo Groves Pvt. Ltd. is a full-service event management company trusted by brands for
            corporate events, exhibitions, product launches, award nights, and experiential
            activations.
          </p>
          <p>
            With in-house production, strategic planning, and execution teams under one roof, we
            ensure every detail is coordinated for seamless experiences at any scale.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: '500+', label: 'Events' },
            { value: '200+', label: 'Clients' },
            { value: '15+', label: 'Years' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-2xl font-bold text-[#a4c34f]">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rotate-12 rounded-xl border border-[#88ab32]/25 bg-[#0b0f08]/70" />
        <div className="pointer-events-none absolute -bottom-6 -right-5 h-20 w-20 -rotate-12 rounded-full border border-[#a4c34f]/20 bg-[#88ab32]/10" />
        <div className="relative rounded-3xl border border-[#88ab32]/45 bg-[#0b0f08] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#88ab32]">Mission</p>
          <p className="mt-5 normal-case text-2xl leading-snug text-[#f5f5f5]">
            We turn ambitious ideas into memorable experiences with precision, creativity, and
            accountability.
          </p>
        </div>
      </div>
    </div>
  </RevealSection>
);

export default AboutSection;
