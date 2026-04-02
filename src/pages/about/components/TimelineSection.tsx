import React from 'react';
import { motion } from 'motion/react';

const TimelineSection: React.FC = () => {
  return (
    <section className="section-padding bg-white/90 px-6 text-black backdrop-blur-md md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* h2 global base style: Montserrat, uppercase, 700 weight, clamp size */}
        <h2 className="mb-10 text-black">Our Milestones</h2>

        <div className="space-y-5">
          {[
            { year: '2025', title: 'Global Expansion', company: 'International Galas', desc: 'Successfully produced our first multi-city European tour for a major tech brand.' },
            { year: '2022', title: 'Award for Innovation', company: 'Event Excellence Awards', desc: 'Recognized for our pioneering use of immersive AR in live event spaces.' },
            { year: '2019', title: 'The Beginning', company: 'Bamboo Groves Launch', desc: 'Started as a boutique agency focusing on high-end private celebrations in LA.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-black/10 pb-2"
            >
              {/* heading utility: Montserrat, uppercase, tracking — accent color */}
              <span className="heading font-mono font-bold text-accent">{item.year}</span>

              <div className="col-span-2">
                {/* h3 global base style: Montserrat, uppercase, 600 weight */}
                <h3 className="mb-2 text-black">{item.title}</h3>
                {/* p base style — color override for black bg context */}
                <p className="text-black/60">{item.company}</p>
              </div>

              <p className="text-black/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;