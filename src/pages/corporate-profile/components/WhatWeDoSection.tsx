import React from 'react';
import { Link } from 'react-router-dom';
import whatWeDoBackground from '../../../assets/Networking in a modern conference hall.png';
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
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <img
            src={whatWeDoBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/70 to-black/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <SectionHeading centered title="What We Do" />
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {serviceItems.map((service, index) => {
                const Icon = service.icon;
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                  <Link
                    to={`/service/${slug}`}
                    key={service.title}
                    className={`block rounded-2xl border border-white/10 bg-[#10140c]/72 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#88ab32] hover:shadow-[0_16px_40px_rgba(136,171,50,0.18)] cursor-pointer ${getCardClass(
                      index,
                    )}`}
                  >
                    <Icon className="h-5 w-5 text-[#a4c34f]" />
                    <h3 className="mt-4 normal-case text-lg tracking-normal text-[#f5f5f5]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{service.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default WhatWeDoSection;
