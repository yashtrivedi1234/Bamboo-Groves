import React from 'react';
import { motion } from 'motion/react';

const ExploreExperiencesSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#02030a] px-6 pb-0 text-white"
      data-scroll-section
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white tracking-[0.18em]"
        >
          Explore Experiences
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        className="relative z-10 mx-auto mt-6 flex max-w-7xl justify-center md:mt-10"
      >
        <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border border-white/10 shadow-[0_-40px_120px_rgba(255,255,255,0.05)] md:h-[560px] md:w-[560px]">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80"
            alt="Luxury event experience"
            className="h-full w-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-[#02030a]" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#02030a] to-transparent" />
    </section>
  );
};

export default ExploreExperiencesSection;
