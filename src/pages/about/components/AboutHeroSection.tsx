import React from 'react';
import { motion } from 'motion/react';

const studioHighlights = [
  {
    label: 'Signature Style',
    value: 'Luxury storytelling shaped with calm, detail-first execution.',
  },
  {
    label: 'Planning Lens',
    value: 'Design, hospitality, guest flow, and production working together.',
  },
  {
    label: 'Client Promise',
    value: 'Experiences that feel personal, polished, and easy to enjoy.',
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
              src="https://picsum.photos/seed/event-planner/800/1000"
              alt="Event Planner"
              className="h-full min-h-[540px] w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-8">
              <p className="font-serif italic leading-relaxed text-white/80">
                "We don't just plan events; we design atmospheres that resonate and memories that endure."
              </p>

              <p>
                Bamboo Groves Events was built on the idea that every celebration should carry a
                clear feeling, a strong identity, and a smooth guest experience from start to finish.
                Our team blends creative direction with hospitality thinking to shape moments that
                feel elevated without losing warmth.
              </p>

              <p>
                From intimate social gatherings to high-impact corporate productions, we focus on
                visual harmony, operational discipline, and thoughtful storytelling so every detail
                supports the mood of the event rather than competing with it.
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
                <span className="section-label">Events Produced</span>
                <p className="text-white">500+</p>
              </div>
              <div>
                <span className="section-label">Industry Reach</span>
                <p className="text-white">Corporate, luxury, and private celebrations</p>
              </div>
              <div>
                <span className="section-label">Approach</span>
                <p className="text-white">Creative direction backed by precise logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
