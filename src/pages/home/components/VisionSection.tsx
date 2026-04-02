import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ctaHighlights = ['Concept to execution', 'Corporate and social events', 'Luxury details, seamless flow'];

const VisionSection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden px-6 md:px-12" data-scroll-section>
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-1/4 h-[80vw] w-[80vw] rounded-full bg-accent/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-1/4 h-[60vw] w-[60vw] rounded-full bg-white/5 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-10 md:py-14"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.35fr_0.95fr]">
            <div className="text-center md:text-left">
              <span className="section-label">Let&apos;s Build Your Signature Event</span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mb-4 text-white"
              >
                Turn Your
                <br />
                <span className="outline-text">Vision Into A Headline Moment.</span>
              </motion.h2>

              <p className="mx-auto max-w-2xl font-light text-white/78 md:mx-0">
                Whether you&apos;re hosting a high-impact brand experience or an intimate celebration,
                Bamboo Groves shapes every detail around your story so the final event feels elevated,
                effortless, and unforgettable.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:items-start">
                <Link to="/contact" className="cta-button">
                  Start Planning
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all hover:border-white hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              {ctaHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 * index, ease: 'easeOut' }}
                  className="rounded-[24px] border border-white/10 bg-black/25 p-5 text-left"
                >
                  <p className="section-label mb-2 text-white/55">0{index + 1}</p>
                  <p className="heading text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
