import React from 'react';
import { workEventGroups } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const WorksSection: React.FC = () => (
  <RevealSection id="works" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading centered title="Works Done Recently at a Glance" />
      <div className="mt-12 space-y-8">
        {workEventGroups.map((group) => (
          <section
            key={group.companyName}
            className="rounded-[28px] border border-white/10 bg-[#0d1209]/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.24)] sm:p-6"
          >
            <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#88ab32]">Client Events</p>
                <h3 className="mt-3 normal-case text-2xl tracking-normal text-[#f5f5f5]">{group.companyName}</h3>
              </div>
              <span className="inline-flex w-fit rounded-full border border-[#88ab32]/30 bg-[#88ab32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d6e8a1]">
                {group.events.length} Events
              </span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.events.map((event, index) => (
                <article
                  key={event.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#10140c] transition duration-300 hover:-translate-y-1 hover:border-[#88ab32] hover:shadow-[0_18px_44px_rgba(136,171,50,0.16)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.alt ?? `${group.companyName} event in ${event.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#88ab32] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a]">
                      Event {index + 1}
                    </span>
                  </div>

                  <div className="flex items-end justify-between gap-4 p-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">Location</p>
                      <h4 className="mt-2 normal-case text-base tracking-normal text-[#f5f5f5]">{event.location}</h4>
                    </div>
                    <p className="text-right text-xs leading-relaxed text-white/45">{group.companyName}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </RevealSection>
);

export default WorksSection;
