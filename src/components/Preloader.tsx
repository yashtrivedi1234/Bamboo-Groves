import React from 'react';
import { motion } from 'motion/react';

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-background flex items-center justify-center flex-col"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          Bamboo Groves
        </motion.h1>
      </div>

      {/* Use a fixed-width container — never animates width so no layout shift */}
      <div className="w-48 h-[1px] bg-white/20 mt-4 relative overflow-hidden">
        {/* scaleX from 0→1 is GPU-composited and never causes horizontal overflow */}
        <motion.div
          className="absolute inset-0 bg-white/60 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-accent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;