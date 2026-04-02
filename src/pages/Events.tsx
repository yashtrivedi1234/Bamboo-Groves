import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import corporateImage from '../assets/events/corporate.webp';
import socialImage from '../assets/events/social.webp';

const eventCards = [
  {
    slug: 'corporate',
    title: 'Corporate Events',
    description:
      'High-impact launches, conferences, gala nights, and brand-led experiences planned with precision.',
    image: corporateImage,
  },
  {
    slug: 'social',
    title: 'Social Events',
    description:
      'Celebrations, milestone moments, and elegant gatherings shaped with warmth, detail, and flow.',
    image: socialImage,
  },
];

const Events: React.FC = () => {
  return (
    <section className="section-padding bg-background px-6 md:px-12" data-scroll-section>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <span className="section-label">Event Experiences</span>
          <h1 className="mb-4 text-white">Choose Your Event</h1>
          <p className="mx-auto max-w-2xl text-white/75">
            Explore curated event journeys for corporate productions and social celebrations.
            Select one to open its dedicated QR page.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {eventCards.map((event, index) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

              <div className="relative z-10 flex min-h-[500px] flex-col justify-end p-6 md:p-8">
                <div className="max-w-lg rounded-[24px] border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
                  <span className="section-label mb-3">{event.slug === 'corporate' ? 'Corporate' : 'Social'}</span>
                  <h2 className="mb-3 text-white">{event.title}</h2>
                  <p className="mb-6 text-white/80">{event.description}</p>

                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Open QR Page
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
