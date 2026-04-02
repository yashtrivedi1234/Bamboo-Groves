import React from 'react';
import { motion } from 'motion/react';

const CreativeLeadershipSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="section-eyebrow">The Minds Behind</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">CREATIVE <span className="text-white/20 outline-text">LEADERSHIP</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Julian Vance', role: 'Creative Director', img: 'https://picsum.photos/seed/leader1/600/800' },
            { name: 'Elena Rossi', role: 'Head of Production', img: 'https://picsum.photos/seed/leader2/600/800' },
            { name: 'Marcus Thorne', role: 'Technical Lead', img: 'https://picsum.photos/seed/leader3/600/800' }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold uppercase tracking-widest mb-1">{member.name}</h3>
              <p className="text-accent text-xs uppercase tracking-widest font-mono">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeLeadershipSection;
