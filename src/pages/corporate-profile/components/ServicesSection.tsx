import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { accordionSections, inHouseCapabilities } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const ServicesSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<'pre' | 'onsite' | null>('pre');

  const toggleSection = (section: 'pre' | 'onsite') => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <RevealSection id="services" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading centered title="Our Services" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#10140c] p-7">
            <h3 className="normal-case text-2xl tracking-normal text-[#f5f5f5]">In-House Capabilities</h3>
            <ul className="mt-6 space-y-3">
              {inHouseCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[3px] rounded-full border border-[#88ab32]/40 p-0.5 text-[#88ab32]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/72">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {(Object.keys(accordionSections) as Array<'pre' | 'onsite'>).map((key) => {
              const section = accordionSections[key];
              const isOpen = openSection === key;
              return (
                <article
                  key={key}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#10140c]/95"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(key)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="normal-case text-lg font-semibold tracking-normal text-[#f5f5f5]">
                      {section.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#a4c34f]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#a4c34f]" />
                    )}
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] border-t border-white/10' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 px-6 py-5">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#88ab32]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default ServicesSection;
