import React from 'react';
import { motion } from 'motion/react';

const ToolkitSection: React.FC = () => {
  return (
    <section className="section-padding bg-black/20 px-6 backdrop-blur-sm md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* h2 global base style: Montserrat, uppercase, 700 weight, clamp size */}
        <h2 className="mb-2 text-center">Our Toolkit</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 perspective-1000">
          {['Creative Direction', 'Logistics Management', 'Technical Production', 'Vendor Curation', 'Spatial Design', 'Guest Experience', 'Brand Integration', 'Budget Strategy'].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 45, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: -10,
                z: 50,
                borderColor: '#88AB32',
                boxShadow: '0 20px 40px rgba(136, 171, 50, 0.2)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: i * 0.05,
              }}
              className="p-10 border border-white/10 rounded-2xl flex items-center justify-center text-center bg-background/50 backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* heading utility: Montserrat, uppercase, tracking */}
              <span className="heading text-sm font-bold" style={{ transform: 'translateZ(20px)' }}>
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;