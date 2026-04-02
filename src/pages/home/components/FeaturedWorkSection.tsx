import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const FeaturedWorkSection: React.FC = () => {
  return (
    <section className="section-padding px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">
            FEATURED PRODUCTIONS
          </h2>
          <Link to="/portfolio" className="text-accent font-bold uppercase tracking-widest border-b border-accent pb-2">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'The Crystal Gala', category: 'Corporate', img: 'https://picsum.photos/seed/gala/800/1000' },
            { title: 'Velvet Night', category: 'Private Soirée', img: 'https://picsum.photos/seed/velvet/800/1000' },
            { title: 'Nexus Tech Launch', category: 'Product Launch', img: 'https://picsum.photos/seed/techlaunch/800/1000' },
            { title: 'Artisan Dinner', category: 'Private Event', img: 'https://picsum.photos/seed/dinner/800/1000' }
          ].map((work, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest">View Details</span>
                </div>
              </div>
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">{work.category}</span>
              <h3 className="h3 font-display font-bold uppercase">{work.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
