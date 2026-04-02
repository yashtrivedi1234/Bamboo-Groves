import React from 'react';
import { motion } from 'motion/react';

const ClientsMarqueeSection: React.FC = () => {
  return (
    <section className=" bg-white overflow-hidden" data-scroll-section>
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex space-x-20 items-center px-10"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {['GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'ROLEX', 'PRADA', 'NETFLIX', 'SPOTIFY'].map((client, i) => (
            <span key={i} className="text-black/20 h1 font-display font-bold tracking-tighter">{client}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {['GOOGLE', 'APPLE', 'TESLA', 'NIKE', 'ROLEX', 'PRADA', 'NETFLIX', 'SPOTIFY'].map((client, i) => (
            <span key={i+'_dup'} className="text-black/20 h1 font-display font-bold tracking-tighter">{client}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarqueeSection;
