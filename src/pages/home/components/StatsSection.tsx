import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Globe, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding border-y border-white/10 bg-black/40 px-6 backdrop-blur-sm md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { icon: <Calendar size={32} />, value: '500+', label: 'Events Produced' },
          { icon: <Users size={32} />, value: '1M+', label: 'Guests Served' },
          { icon: <Globe size={32} />, value: '24', label: 'Countries Reached' },
          { icon: <Award size={32} />, value: '15', label: 'Industry Awards' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-accent mb-4 flex justify-center">{stat.icon}</div>
            <h3 className="h3 font-display font-bold mb-2">{stat.value}</h3>
            <p className="text-muted text-xs uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
