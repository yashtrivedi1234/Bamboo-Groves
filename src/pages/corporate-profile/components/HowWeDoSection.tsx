import React from 'react';
import { processSteps } from '../data';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';

const HowWeDoSection: React.FC = () => (
  <RevealSection id="how-we-do" className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading centered title="How We Do It" />
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/65 sm:text-base">
        Every project follows a clear execution flow, so strategy, production, and delivery stay
        aligned from start to finish.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,20,12,0.96),rgba(10,10,10,0.96))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-8 lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#88ab32]">
            Process Overview
          </p>
          <h3 className="mt-4 normal-case text-2xl leading-snug text-[#f5f5f5] sm:text-[2rem]">
            A practical workflow for planning, production, and execution.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
            We move step by step, keeping every part of the event connected so the final experience
            feels smooth, polished, and on-brand.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-[#a4c34f]">{processSteps.length}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/62">Core Steps</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-[#f5f5f5]">One connected team</p>
              <p className="mt-2 text-sm leading-relaxed text-white/68">
                Creative, technical, and production support stay aligned under one workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-7 top-8 hidden w-px bg-[linear-gradient(180deg,rgba(136,171,50,0.6),rgba(255,255,255,0.12),transparent)] sm:block" />
          <div className="space-y-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#10140c]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-6 sm:pl-24"
              >
                <div className="flex items-start gap-4 sm:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#88ab32]/30 bg-[#88ab32] text-sm font-bold tracking-[0.12em] text-[#0a0a0a] sm:absolute sm:left-0 sm:top-6 sm:h-14 sm:w-14 sm:rounded-[20px]">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#88ab32]/90">
                      Step {step.number}
                    </p>
                    <h3 className="mt-2 normal-case text-xl tracking-normal text-[#f5f5f5]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </RevealSection>
);

export default HowWeDoSection;
