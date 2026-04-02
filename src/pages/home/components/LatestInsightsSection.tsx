import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const LatestInsightsSection: React.FC = () => {
  return (
    <section className="section-padding bg-white px-6 text-black md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="section-eyebrow">Journal</span>
            <h2 className="h2 font-display font-bold uppercase tracking-tighter">LATEST INSIGHTS</h2>
          </div>
          <Link to="/journal" className="text-black font-bold uppercase tracking-widest border-b border-black pb-2">Read All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { date: 'MAR 15, 2026', title: 'The Future of Immersive Tech in Events', category: 'Technology' },
            { date: 'FEB 28, 2026', title: 'Sustainable Luxury: A New Standard', category: 'Sustainability' },
            { date: 'JAN 12, 2026', title: 'Designing for Emotional Resonance', category: 'Design' }
          ].map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="p-10 border border-black/10 hover:border-accent transition-colors cursor-pointer group"
            >
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">{post.category}</span>
              <h3 className="font-bold uppercase leading-tight mb-8 group-hover:text-accent transition-colors">{post.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-black/40 text-xs font-mono">{post.date}</span>
                <ArrowRight size={16} className="text-black/20 group-hover:text-accent transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
