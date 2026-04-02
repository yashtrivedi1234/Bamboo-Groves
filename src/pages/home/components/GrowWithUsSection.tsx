import React from 'react';
import { motion } from 'motion/react';
import { Compass, GraduationCap, Network, BriefcaseBusiness } from 'lucide-react';

const items = [
  {
    icon: Compass,
    title: 'Creative Direction',
    description: 'We shape the visual language, mood, and story of your event so every detail feels intentional.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Brand Experiences',
    description: 'From launches to corporate showcases, we build events that reflect your identity with polish and impact.',
  },
  {
    icon: Network,
    title: 'Production Network',
    description: 'Trusted collaborators across venues, decor, hospitality, and technical execution keep every event running smoothly.',
  },
  {
    icon: GraduationCap,
    title: 'Private Celebrations',
    description: 'Milestones, intimate gatherings, and large-format social occasions are crafted with warmth and sophistication.',
  },
];

const GrowWithUsSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#02040b] px-6 text-white md:px-10" data-scroll-section>
      <div className="mx-auto max-w-7xl">

        <div className="mb-6 text-center">
          <span className="section-label">What We Bring</span>
          <h2 className="text-white">
            More Than Planning
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center cursor-default"
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: 'easeInOut',
                  }}
                  className="mb-4 flex h-20 w-20 items-center justify-center text-accent drop-shadow-[0_0_10px_rgba(136,171,50,0.45)] md:h-24 md:w-24"
                >
                  <Icon size={56} strokeWidth={1.5} className="md:h-[68px] md:w-[68px]" />
                </motion.div>

                <h3 className="mb-3 text-white">
                  {item.title}
                </h3>

                <p className="max-w-[260px] text-sm text-white/90 md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowWithUsSection;
