import React from 'react';
import { processSteps } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const HowWeDoSection: React.FC = () => (
  <RevealSection id="how-we-do" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading centered title="How We Do It" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => {
          const isAwardsGift = step.title === 'Awards & Gift Items';

          return (
            <article
              key={step.number}
              className={`rounded-2xl border border-white/10 bg-[#0d1209] p-6 shadow-[0_12px_36px_rgba(0,0,0,0.25)] ${
                isAwardsGift
                  ? 'text-center md:col-span-2 md:mx-auto md:max-w-xl lg:col-span-1 lg:col-start-2 lg:max-w-none'
                  : ''
              }`}
            >
              <p
                className={`text-3xl font-bold text-[#88ab32] ${
                  isAwardsGift
                    ? 'inline-block border-b-2 border-[#88ab32] pb-1'
                    : 'border-l-2 border-[#88ab32] pl-3'
                }`}
              >
                {step.number}
              </p>
              <h3 className="mt-4 normal-case text-xl tracking-normal text-[#f5f5f5]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </RevealSection>
);

export default HowWeDoSection;
