import React from 'react';
import { processSteps } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const HowWeDoSection: React.FC = () => (
  <RevealSection id="how-we-do" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading centered title="How We Do It" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <article
            key={step.number}
            className={`rounded-2xl border border-white/10 bg-[#0d1209] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.25)] ${
              step.title === 'Awards & Gift Items' ? 'lg:col-start-2' : ''
            }`}
          >
            <p className="border-l-2 border-[#88ab32] pl-3 text-3xl font-bold text-[#88ab32]">{step.number}</p>
            <h3 className="mt-4 normal-case text-xl tracking-normal text-[#f5f5f5]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </RevealSection>
);

export default HowWeDoSection;
