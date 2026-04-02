import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ScanQrCode } from 'lucide-react';
import { useParams, useSearchParams } from 'react-router-dom';
import CustomQR from '../components/CustomQR';
import ContactModal from '../components/ContactModal';
import corporateImage from '../assets/events/corporate.webp';
import socialImage from '../assets/events/social.webp';
import logo from '../assets/logo.png';

const eventContent = {
  corporate: {
    title: 'Tap on the QR',
    eyebrow: 'Corporate Events',
    description:
      'Scan the code for premium corporate planning support, or tap the QR to share your details and let our team connect with you.',
    image: corporateImage,
    projectTitle: 'Corporate Event',
  },
  social: {
    title: 'Tap on the QR',
    eyebrow: 'Social Events',
    description:
      'Scan the code for your social celebration flow, or tap the QR to open the enquiry modal and start planning your event with us.',
    image: socialImage,
    projectTitle: 'Social Event',
  },
} as const;

type EventType = keyof typeof eventContent;

const EventQrPage: React.FC = () => {
  const { eventType } = useParams<{ eventType: EventType }>();
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const content = eventType ? eventContent[eventType as EventType] : undefined;

  useEffect(() => {
    if (content && searchParams.get('openModal') === '1') {
      setIsModalOpen(true);
    }
  }, [content, searchParams]);

  if (!content) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#130607] px-6 text-center text-white">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-accent/80">Event Not Found</p>
          <h1 className="mb-4 font-display text-4xl text-white">Choose a valid event experience.</h1>
          <p className="mx-auto max-w-xl text-white/70">
            Please return to the homepage and select either Corporate Events or Social Events.
          </p>
        </div>
      </section>
    );
  }

  const qrUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/events/${eventType}?openModal=1`
      : '';

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-background text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-18"
          style={{ backgroundImage: `url('${content.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.76),rgba(10,10,10,0.94)),radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_48%,transparent_100%)] opacity-50" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={logo}
            alt="Bamboo Groves"
            className="mb-8 h-16 w-auto sm:h-20"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-4 text-sm uppercase tracking-[0.45em] text-accent/85"
          >
            {content.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl leading-tight text-white sm:text-6xl"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg"
          >
            {content.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="group mt-12 rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_0_30px_rgba(136,171,50,0.15),0_30px_120px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-accent/70"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-accent/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(255,255,255,0.93))] p-3 shadow-inner shadow-black/10">
              <CustomQR url={qrUrl} logoSrc={logo} size={280} />
            </div>
            <div className="flex items-center justify-center gap-3 px-4 pb-2 pt-5 text-sm font-medium uppercase tracking-[0.28em] text-white/90">
              <ScanQrCode size={18} className="text-accent" />
              <span>Scan or tap to open</span>
              <ArrowUpRight
                size={18}
                className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </motion.button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle={content.projectTitle}
      />
    </>
  );
};

export default EventQrPage;
