import React from 'react';
import { motion } from 'motion/react';

const AwardsRecognitionSection: React.FC = () => {
  return (
    <section className="section-padding border-y border-white/10 bg-black px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="section-eyebrow">Recognition</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">AWARDS & <span className="text-white/20 outline-text">ACCOLADES</span></h2>
          <p className="p mt-12 mx-auto max-w-2xl text-muted">Our commitment to excellence has been recognized by leading industry organizations and publications worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { year: '2025', award: 'Event Producer of the Year', org: 'International Event Awards' },
            { year: '2024', award: 'Best Corporate Event Production', org: 'Luxury Events Magazine' },
            { year: '2024', award: 'Innovation in Event Technology', org: 'Global Events Summit' },
            { year: '2023', award: 'Luxury Destination Event Winner', org: 'World Events Forum' },
            { year: '2023', award: 'Creative Excellence Award', org: 'Event Industry Excellence' },
            { year: '2022', award: 'Sustainability Leadership', org: 'Green Events Initiative' },
            { year: '2022', award: 'Best Event Design', org: 'Design & Production Awards' },
            { year: '2021', award: 'Emerging Leader in Events', org: 'Industry Leadership Council' },
            { year: '2021', award: 'Client Satisfaction Award', org: 'Event Professionals Review' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 border border-white/10 rounded-2xl hover:border-accent hover:bg-accent/10 transition-all duration-500 group"
            >
          <span className="text-accent font-mono font-bold mb-3 block">{item.year}</span>
              <h3 className="font-bold uppercase mb-3 group-hover:text-accent transition-colors">{item.award}</h3>
              <p className="text-muted text-sm uppercase tracking-widest font-mono">{item.org}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center p-12 bg-white/5 rounded-3xl border border-white/10">
          <p className="font-serif italic text-muted mb-4">"These accolades reflect our unwavering commitment to innovation, excellence, and creating unforgettable experiences for every client."</p>
          <p className="text-accent font-bold uppercase tracking-widest">— The Bamboo Groves Team</p>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
