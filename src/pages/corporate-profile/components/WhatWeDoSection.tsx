import React from 'react';
import { serviceItems } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const WhatWeDoSection: React.FC = () => {
  const getCardClass = (index: number) => {
    if (index === 8) return 'xl:col-start-2';
    if (index === 9) return 'xl:col-start-3';
    return '';
  };

  return (
    <RevealSection id="what-we-do" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading centered title="What We Do" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`rounded-2xl border border-white/10 bg-[#10140c]/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#88ab32] hover:shadow-[0_16px_40px_rgba(136,171,50,0.18)] ${getCardClass(
                  index,
                )}`}
              >
                <Icon className="h-5 w-5 text-[#a4c34f]" />
                <h3 className="mt-4 normal-case text-lg tracking-normal text-[#f5f5f5]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
};

export default WhatWeDoSection;
