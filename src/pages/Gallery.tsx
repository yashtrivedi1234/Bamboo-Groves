import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  { id: 1, img: 'https://picsum.photos/seed/event1/800/1200', size: 'tall' },
  { id: 2, img: 'https://picsum.photos/seed/event2/800/600', size: 'small' },
  { id: 3, img: 'https://picsum.photos/seed/event3/800/800', size: 'square' },
  { id: 4, img: 'https://picsum.photos/seed/event4/800/1200', size: 'tall' },
  { id: 5, img: 'https://picsum.photos/seed/event5/800/600', size: 'small' },
  { id: 6, img: 'https://picsum.photos/seed/event6/800/800', size: 'square' },
  { id: 7, img: 'https://picsum.photos/seed/event7/800/1200', size: 'tall' },
  { id: 8, img: 'https://picsum.photos/seed/event8/800/600', size: 'small' },
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
        <h1 className="mb-20">Gallery</h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 perspective-2000">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                z: 50,
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-zoom-in"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={item.img}
                alt={`Gallery ${item.id}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                style={{ transform: 'translateZ(20px)' }}
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;