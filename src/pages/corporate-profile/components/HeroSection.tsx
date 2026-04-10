import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../../assets/logo.png';
import aboutImage from '../../../assets/events/about.webp';
import corporateImage from '../../../assets/events/corporate.webp';

const heroPanels = [
  {
    id: 'planning',
    label: 'Concept & Planning',
    detail: 'Venue | Flow | Experience',
    image: corporateImage,
  },
  {
    id: 'delivery',
    label: 'Production & Delivery',
    detail: 'AV | Fabrication | Execution',
    image: aboutImage,
  },
] as const;

const quickLinks = [
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'How We Do It', href: '#how-we-do' },
  { label: 'Our Services', href: '#services' },
] as const;

const HeroSection: React.FC = () => {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePanel((current) => (current + 1) % heroPanels.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {heroPanels.map((panel, index) => (
          <motion.div
            key={panel.id}
            className="absolute inset-0"
            animate={{
              opacity: index === activePanel ? 1 : 0,
              scale: index === activePanel ? 1.06 : 1,
            }}
            transition={{
              opacity: { duration: 0.9, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'easeOut' },
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(136,171,50,0.24),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.12),transparent_30%)]"
              animate={{ opacity: index === activePanel ? 1 : 0.45 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.84))]" />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(136,171,50,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.82))]" />

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#88ab32]/20"
        />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88ab32]/12 blur-3xl" />
      </div>

      <div className="absolute left-1/2 top-8 z-40 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-full border border-white/12 bg-black/32 px-5 py-3 backdrop-blur-md"
        >
          <img src={logo} alt="Bamboo Groves" className="h-10 w-auto sm:h-12" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-[21%] z-30 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.12, ease: 'easeOut' },
            x: { duration: 0.6, delay: 0.12, ease: 'easeOut' },
            y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="ml-10 w-64 rounded-[28px] border border-white/10 bg-black/28 p-3 backdrop-blur-md"
        >
          <div className="overflow-hidden rounded-[22px]">
            <img
              src={heroPanels[0].image}
              alt={heroPanels[0].label}
              className="h-36 w-full object-cover"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a4c34f]">
            {heroPanels[0].label}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
            {heroPanels[0].detail}
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-[18%] z-30 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.18, ease: 'easeOut' },
            x: { duration: 0.6, delay: 0.18, ease: 'easeOut' },
            y: { duration: 5.8, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="ml-auto mr-10 w-64 rounded-[28px] border border-white/10 bg-black/28 p-3 backdrop-blur-md"
        >
          <div className="overflow-hidden rounded-[22px]">
            <img
              src={heroPanels[1].image}
              alt={heroPanels[1].label}
              className="h-36 w-full object-cover"
            />
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a4c34f]">
            {heroPanels[1].label}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
            {heroPanels[1].detail}
          </p>
        </motion.div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-40 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,7,7,0.58),rgba(7,7,7,0.22))] p-4 text-center backdrop-blur-xl sm:p-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a4c34f]">
            Corporate Profile
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#88ab32]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/62">
              Strategy To Execution
            </span>
            <span className="h-2 w-2 rounded-full bg-white/35" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-1/2 z-40 flex w-[calc(100%-2.5rem)] max-w-3xl -translate-x-1/2 flex-wrap items-center justify-center gap-3">
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-white/14 bg-black/22 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-md transition hover:border-[#88ab32]/50 hover:text-[#a4c34f]"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="absolute bottom-40 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 md:hidden">
        {heroPanels.map((panel, index) => (
          <div
            key={panel.id}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === activePanel ? 'w-8 bg-[#a4c34f]' : 'w-2 bg-white/35'
            }`}
          />
        ))}
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 animate-bounce flex-col items-center text-[10px] uppercase tracking-[0.22em] text-white/55 transition hover:text-[#a4c34f]"
      >
        Scroll
        <ChevronDown className="mt-1 h-4 w-4" />
      </a>
    </section>
  );
};

export default HeroSection;
