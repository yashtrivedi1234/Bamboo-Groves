import React from 'react';
import { motion } from 'motion/react';
import aboutImage from '../../../assets/about.png';

const studioHighlights = [
  {
    label: 'Signature Style',
    value: 'Innovative, creative events remembered for all the right reasons.',
  },
  {
    label: 'Planning Lens',
    value: 'Strategic planning, clear communication, and uncompromising quality.',
  },
  {
    label: 'Client Promise',
    value: 'Tailored events that inspire, engage, and deliver measurable results.',
  },
];

const AboutHeroSection: React.FC = () => {
  return (
    <section className="section-padding px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 leading-[0.8]"
        >
          THE ART OF THE <span className="text-accent">EXPERIENCE.</span>
        </motion.h1>

        <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:items-stretch">
          <div className="overflow-hidden md:h-full">
            <img
              src={aboutImage}
              alt="Bamboo Groves Corporate Events"
              className="h-full min-h-[540px] w-full object-cover"
            />
          </div>

          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-8">
              <p className="font-serif italic leading-relaxed text-white/80">
                "We don't just plan events — we create impactful experiences that inspire, engage, and deliver results."
              </p>

              <p>
                At Bamboo Groves Pvt. Ltd., we specialize in creating memorable events that connect
                leading brands and organizations across India with their audiences. With over 7 years
                of experience, our team of expert planners blends creative direction with flawless
                execution to bring every vision to life.
              </p>

              <p>
                From conferences, exhibitions, and product launches to weddings, social gatherings,
                and large-scale celebrations — our expertise covers a wide spectrum of event solutions.
                We maximize budgets and timelines while ensuring every detail supports your objectives
                and adds genuine value.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {studioHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <span className="section-label">{item.label}</span>
                  <p className="text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="section-label">Based In</span>
                <p className="text-white">Lucknow, Uttar Pradesh</p>
              </div>
              <div>
                <span className="section-label">Experience</span>
                <p className="text-white">7+ Years</p>
              </div>
              <div>
                <span className="section-label">Event Spectrum</span>
                <p className="text-white">Corporate, exhibitions, weddings & celebrations</p>
              </div>
              <div>
                <span className="section-label">Approach</span>
                <p className="text-white">Creativity, precision, and measurable outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;