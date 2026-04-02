import React from 'react';
import { motion } from 'motion/react';
import aboutImage from '../../../assets/events/about.webp';

const AboutUsSection: React.FC = () => {
  return (
    <section className="section-padding bg-background px-6 min-h-screen md:min-h-0 md:px-12" data-scroll-section>
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-stretch md:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)] min-h-[calc(100vh-6rem)] md:min-h-[420px]"
        >
          {/* Background image */}
          <img
            src={aboutImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.24),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

          <div className="relative z-10 flex h-full min-h-[inherit] items-end justify-end p-4 md:items-center md:p-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="w-full max-w-[560px] rounded-[26px] border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6"
            >
              <span className="section-label">
                About Bamboo Groves
              </span>

              <h2 className="mb-2 text-white">
                A New Standard Of Celebration
              </h2>

              <p className="mb-4 max-w-xl text-white/85 text-sm">
                Bamboo Groves crafts luxury events that feel cinematic, precise, and deeply personal.
                From corporate galas to private milestone celebrations, we blend storytelling, design,
                and flawless execution to create experiences that leave a lasting impression.
              </p>

              <div className="mb-4 grid grid-cols-2 gap-3 text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="heading font-semibold text-white">500+</p>
                  <p className="section-label mt-0.5 mb-0 text-xs">Events Produced</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <p className="heading font-semibold text-white">24</p>
                  <p className="section-label mt-0.5 mb-0 text-xs">Countries Reached</p>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
