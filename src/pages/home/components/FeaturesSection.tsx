import React from 'react';
import { motion } from 'motion/react';
import {
  CalendarCheck2,
  LampDesk,
  ShieldCheck,
  Clock3,
  Smartphone,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: CalendarCheck2,
    title: 'End-To-End Planning',
    description:
      'From concept boards to final run sheets, we map every milestone so your event moves with clarity and confidence.',
  },
  {
    icon: LampDesk,
    title: 'Guest Experience Design',
    description:
      'Hospitality, ambience, entertainment, and flow are curated together to create a seamless experience for every guest.',
  },
  {
    icon: Sparkles,
    title: 'Signature Styling',
    description:
      'Luxury decor concepts, immersive staging, and refined visual direction give each celebration its own identity.',
  },
  {
    icon: Clock3,
    title: 'Precision Execution',
    description:
      'Detailed timelines, coordinated cues, and smooth transitions keep the entire production on schedule.',
  },
  {
    icon: ShieldCheck,
    title: 'On-Ground Coordination',
    description:
      'Venue operations, vendor alignment, and guest management are handled carefully so the day feels effortless.',
  },
  {
    icon: Smartphone,
    title: 'Real-Time Communication',
    description:
      'Live coordination across teams keeps production, hospitality, and client communication aligned throughout the event.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-4 text-white md:px-8" data-scroll-section>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <span className="section-label">Why Clients Choose Bamboo Groves</span>
          <h2 className="text-white">Luxury Events, Managed Beautifully</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-20 md:gap-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left md:gap-5 md:border-0 md:bg-transparent md:p-0"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-black shadow-[0_0_22px_rgba(136,171,50,0.28)] md:h-24 md:w-24">
                  <Icon
                    size={34}
                    strokeWidth={1.6}
                    className="text-accent drop-shadow-[0_0_12px_rgba(136,171,50,0.85)] md:h-[50px] md:w-[50px]"
                  />
                </div>

                <div className="flex-1 pt-1">
                  <h4 className="mb-2 text-sm text-white md:mb-3 md:text-base">
                    {feature.title}
                  </h4>

                  <p className="max-w-xl text-xs text-white/80 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
