import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import servicesBackground from '../../../assets/Gemini_Generated_Image_o1735po1735po173.png';
import agreementIcon from '../../../assets/icon2/agreement.png';
import blueprintIcon from '../../../assets/icon2/blueprint.png';
import budgetPlanIcon from '../../../assets/icon2/budget_16841758.png';
import diagramIcon from '../../../assets/icon2/diagram.png';
import digitalSignatureIcon from '../../../assets/icon2/digital-signature.png';
import gridIcon from '../../../assets/icon2/grid.png';
import strategyIcon from '../../../assets/icon2/strategy.png';
import timeManagementIcon from '../../../assets/icon2/time-management.png';
import approveIcon from '../../../assets/icons/approve.png';
import budgetingIcon from '../../../assets/icons/budgeting.png';
import cameraIcon from '../../../assets/icons/camera.png';
import diamondRingIcon from '../../../assets/icons/diamond-ring.png';
import interiorDesignIcon from '../../../assets/icons/interior-design.png';
import itSecurityIcon from '../../../assets/icons/it-security.png';
import lcdDisplayIcon from '../../../assets/icons/lcd-display.png';
import musicIcon from '../../../assets/icons/music.png';
import newsReporterIcon from '../../../assets/icons/news-reporter.png';
import printerIcon from '../../../assets/icons/printer.png';
import { accordionSections, inHouseCapabilities } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const capabilityIcons = [
  interiorDesignIcon,
  lcdDisplayIcon,
  cameraIcon,
  printerIcon,
  musicIcon,
  diamondRingIcon,
  newsReporterIcon,
  itSecurityIcon,
  approveIcon,
  budgetingIcon,
];

const preEventIcons = [
  agreementIcon,
  budgetPlanIcon,
  timeManagementIcon,
  strategyIcon,
  digitalSignatureIcon,
  blueprintIcon,
  gridIcon,
  diagramIcon,
];

const onsiteEventIcons = [approveIcon, itSecurityIcon, cameraIcon, newsReporterIcon, musicIcon];

const ServicesSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<'pre' | 'onsite' | null>('pre');

  const toggleSection = (section: 'pre' | 'onsite') => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <RevealSection id="services" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <img
            src={servicesBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/72 to-black/84" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <SectionHeading centered title="Our Services" />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#10140c]/72 p-7 backdrop-blur-md">
                <h3 className="normal-case text-2xl tracking-normal text-[#f5f5f5]">In-House Capabilities</h3>
                <ul className="mt-6 space-y-3">
                  {inHouseCapabilities.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <img
                        src={capabilityIcons[index % capabilityIcons.length]}
                        alt=""
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0"
                      />
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
                      className="overflow-hidden rounded-3xl border border-white/10 bg-[#10140c]/78 backdrop-blur-md"
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
                            {section.items.map((item, index) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                                <img
                                  src={
                                    key === 'pre'
                                      ? preEventIcons[index % preEventIcons.length]
                                      : onsiteEventIcons[index % onsiteEventIcons.length]
                                  }
                                  alt=""
                                  aria-hidden="true"
                                  className="mt-0.5 h-4 w-4 shrink-0"
                                />
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
        </div>
      </div>
    </RevealSection>
  );
};

export default ServicesSection;
