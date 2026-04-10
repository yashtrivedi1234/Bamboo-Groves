import React from 'react';
import howWeDoBackground from '../../../assets/events/img.jpeg';
import { processSteps } from '../data';
import RevealSection from './RevealSection';

const HowWeDoSection: React.FC = () => {
  const mainSteps = processSteps.slice(0, -1);
  const lastStep = processSteps[processSteps.length - 1];

  return (
    <RevealSection
      id="how-we-do"
      className="bg-[#0b0f08] px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">

          {/* Background Image */}
          <img
            src={howWeDoBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/70 to-black/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Process Overview
                </span>
              </div>
              <h2 className="normal-case text-3xl font-bold leading-tight tracking-[0.03em] text-[#f5f5f5] sm:text-4xl">
                How We Do It
              </h2>
              <div className="mx-auto mt-4 h-0.5 w-24 bg-accent" />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
                Every project follows a clear execution flow — from planning to final delivery.
              </p>
            </div>

            {/* Grid */}
            <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur-sm">

              {/* 2-col rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {mainSteps.map((step, i) => {
                  const isRightCol = i % 2 === 1;
                  return (
                    <div
                      key={step.number}
                      className={[
                        'group flex flex-col gap-3 p-7 bg-white/2.5 transition-colors duration-200 hover:bg-accent/[0.07]',
                        !isRightCol ? 'sm:border-r border-white/7' : '',
                        'border-b border-white/7',
                      ].join(' ')}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold tracking-[0.18em] text-accent">
                          {step.number}
                        </span>
                        <div className="h-px w-10 bg-accent/25" />
                      </div>
                      <p className="normal-case text-lg font-semibold text-[#efefef]">
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed text-white/55">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Last step — full width */}
              <div className="flex flex-col items-start gap-5 bg-white/2.5 p-7 transition-colors duration-200 hover:bg-accent/[0.07] sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold tracking-[0.18em] text-accent">
                      {lastStep.number}
                    </span>
                    <div className="h-px w-10 bg-accent/25" />
                  </div>
                  <p className="mt-3 text-lg font-semibold normal-case text-[#efefef]">
                    {lastStep.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {lastStep.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl border border-accent/25 bg-accent/10 px-6 py-4 text-center">
                  <p className="text-3xl font-bold leading-none text-[#a4c34f]">
                    {processSteps.length}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-white/45">
                    Core Steps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default HowWeDoSection;