import React from 'react';
import { workItems } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const WorksSection: React.FC = () => (
  <RevealSection id="works" className="bg-[#0a0a0a] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading centered title="Works Done Recently at a Glance" />
      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {workItems.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#88ab32]"
          >
            <div
              className={`h-48 bg-gradient-to-br ${item.gradient} transition duration-500 group-hover:scale-105 sm:h-56`}
            />
            <span className="absolute left-3 top-3 rounded-full bg-[#88ab32] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a0a0a]">
              {item.category}
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-4 pt-10">
              <h3 className="normal-case text-base tracking-normal text-[#f5f5f5]">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  </RevealSection>
);

export default WorksSection;
