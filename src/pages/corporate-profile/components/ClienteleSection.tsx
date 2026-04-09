import React from 'react';
import { clientCompanies } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const ClienteleSection: React.FC = () => {
  const marqueeItems = [...clientCompanies, ...clientCompanies];

  const getAbbreviation = (name: string) =>
    name
      .split(/\s+/)
      .map((part) => part[0])
      .join('')
      .slice(0, 4)
      .toUpperCase();

  return (
    <RevealSection id="clients" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading centered title="Our Esteemed Clients" />
        <div className="marquee mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1209]/90 p-4">
          <div className="marquee-track flex w-max items-center gap-5">
            {marqueeItems.map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="min-w-[190px] rounded-2xl bg-white p-4 text-center shadow-md sm:min-w-[220px]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {getAbbreviation(name)}
                </p>
                <p className="mt-2 normal-case text-sm font-semibold tracking-normal text-slate-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default ClienteleSection;
