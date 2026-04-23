import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { serviceItems } from './data';

const EVENT_IMAGE_IDS = [
  '1511795409834-ef04bb5a6c9e',
  '1492684223066-81342ee5ff30',
  '1501281668745-f7f57922c3b1',
  '1505373877841-8d25f7d46678',
  '1540575467063-178a50c2df87',
  '1459749411175-04bf5292ceea',
  '1515162816999-a0c47dc192f7',
  '1478147427282-58a87a120781',
  '1523580494863-6f3031224c94',
];

function shuffleArray(array: any[]) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

const ServiceDetails: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [images, setImages] = useState<string[]>([]);
  const normalizedServiceSlug = (serviceSlug ?? '').trim();

  const service = serviceItems.find(
    (s) =>
      s.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') === normalizedServiceSlug
  );

  useEffect(() => {
    if (!normalizedServiceSlug) return;
    const shuffled = shuffleArray(EVENT_IMAGE_IDS);
    setImages(shuffled);
    window.scrollTo(0, 0);
  }, [normalizedServiceSlug]);

  if (!normalizedServiceSlug) {
    return null;
  }

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="mb-4">Service Not Found</h1>
          <Link to="/corporate-profile" className="text-accent hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const displayedImages = images.slice(0, 9);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">

        {/* ── Hero header ── */}
        <div className="mb-16">
          {/* Icon badge */}
       

          {/* Section eyebrow */}
          <span className="section-label">Our Service</span>

          {/* Title — uses global h1 styles */}
          <h2 className="mb-4" >
            {service.title}
          </h2>

          {/* Description — uses global p styles */}
          <p className="max-w-2xl" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.125rem)' }}>
            {service.description}
          </p>
        </div>

        {/* ── 3×3 Image grid ── */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {displayedImages.map((id, index) => (
            <motion.div
              key={`${id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl aspect-4/3"
              style={{ background: 'rgb(255 255 255 / 0.04)', border: '1px solid rgb(255 255 255 / 0.06)' }}
            >
              <img
                src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`}
                alt={`${service.title} showcase ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'linear-gradient(to top, rgb(0 0 0 / 0.65), transparent)' }}
              />
              {/* Accent corner dot */}
              <div
                className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  background: 'var(--color-accent)',
                }}
              />
            </motion.div>
          ))}
        </div>

   

      </div>
    </div>
  );
};

export default ServiceDetails;