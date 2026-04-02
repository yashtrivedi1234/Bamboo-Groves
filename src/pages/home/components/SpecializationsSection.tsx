import React from 'react';
import { motion } from 'motion/react';

const SpecializationsSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="section-eyebrow">Core Specializations</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">OUR SIGNATURE <span className="text-white/20 outline-text">EXPERIENCES</span></h2>
        </div>

        <div className="space-y-40">
          {[
            { 
              title: 'Corporate Galas', 
              desc: 'Elegance meets corporate vision. We produce high-stakes galas that leave a lasting impression on stakeholders and employees alike, blending formal prestige with creative flair.',
              img: 'https://picsum.photos/seed/gala-lux/1200/800',
              tags: ['Strategic Networking', 'Theatrical Lighting', 'VIP Management']
            },
            { 
              title: 'Private Soirées', 
              desc: 'Intimate, exclusive, and deeply personal. From milestone birthdays to private concerts, we craft moments that belong only to you, focused on storytelling and emotional resonance.',
              img: 'https://picsum.photos/seed/soiree-night/1200/800',
              tags: ['Bespoke Decor', 'Curated Entertainment', 'Atmospheric Design']
            },
            { 
              title: 'Product Launches', 
              desc: 'The world is watching. We create high-impact, tech-forward launches that turn products into cultural phenomena, utilizing immersive technology to tell your brand story.',
              img: 'https://picsum.photos/seed/tech-launch/1200/800',
              tags: ['Immersive Tech', 'Media Integration', 'High-Impact Visuals']
            },
            { 
              title: 'Destination Events', 
              desc: 'No borders, no limits. We handle the complex logistics of international events, ensuring a seamless experience in any corner of the globe, from tropical retreats to historic European estates.',
              img: 'https://picsum.photos/seed/destination-resort/1200/800',
              tags: ['Global Logistics', 'Cultural Integration', 'Travel Concierge']
            }
          ].map((spec, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center perspective-2000`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  rotateY: i % 2 === 0 ? 10 : -10,
                  rotateX: 5,
                  scale: 1.02,
                  z: 50
                }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 aspect-[3/2] overflow-hidden rounded-3xl group shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img 
                  src={spec.img} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  style={{ translateZ: "20px" }}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <h3 className="h3 font-display font-bold uppercase mb-6">{spec.title}</h3>
                <p className="p mb-8 text-muted">{spec.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {spec.tags.map((tag, j) => (
                    <span key={j} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest font-bold text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
