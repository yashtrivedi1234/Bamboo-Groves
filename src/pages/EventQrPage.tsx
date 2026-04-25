import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ScanQrCode } from 'lucide-react';
import { useParams, useSearchParams } from 'react-router-dom';
import CustomQR from '../components/CustomQR';
import ContactModal from '../components/ContactModal';
import corporateImage from '../assets/events/corporate.webp';
import socialImage from '../assets/events/social.webp';

const eventContent = {
  corporate: {
    title: 'Tap on the QR',
    eyebrow: 'Corporate Events',
    description:
      'Scan the code for premium corporate planning support, or tap the QR to share your details and let our team connect with you.',
    image: corporateImage,
    projectTitle: 'Corporate Event',
    portfolioId: 27,
  },
  social: {
    title: 'Tap on the QR',
    eyebrow: 'Social Events',
    description:
      'Scan the code for your social celebration flow, or tap the QR to open the enquiry modal and start planning your event with us.',
    image: socialImage,
    projectTitle: 'Social Event',
    portfolioId: 2,
  },
} as const;

type EventType = keyof typeof eventContent;

const getResponsiveQrSize = () => {
  if (typeof window === 'undefined') return 250;
  if (window.innerWidth < 640) return 210;
  if (window.innerHeight < 760) return 210;
  if (window.innerHeight < 860) return 230;
  if (window.innerWidth < 1280) return 250;
  return 280;
};

const getAppBaseUrl = () => {
  const envUrl = import.meta.env.VITE_APP_URL?.trim() || import.meta.env.APP_URL?.trim();

  if (envUrl) {
    return envUrl.replace(/\/+$/, '');
  }

  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin.replace(/\/+$/, '');
  }

  return '';
};

const EventQrPage: React.FC = () => {
  const { eventType } = useParams<{ eventType: EventType }>();
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrSize, setQrSize] = useState(getResponsiveQrSize);

  const content = eventType ? eventContent[eventType as EventType] : undefined;

  useEffect(() => {
    if (content && searchParams.get('openModal') === '1') {
      setIsModalOpen(true);
    }
  }, [content, searchParams]);

  useEffect(() => {
    const handleResize = () => setQrSize(getResponsiveQrSize());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const qrUrl = `${getAppBaseUrl()}/events/${eventType}?openModal=1`;

  return (
    <>
      <section className="event-qr-shell">
        <div
          className="event-qr-media"
          style={{ backgroundImage: `url('${content.image}')` }}
        />
        <div className="event-qr-overlay" />

        <div className="event-qr-content">
          <div className="event-qr-text-stack">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="event-qr-eyebrow"
            >
              {content.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="event-qr-title"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="event-qr-copy"
            >
              {content.description}
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="event-qr-card group"
          >
            <div className="event-qr-frame">
              <CustomQR url={qrUrl} size={qrSize} />
            </div>
            <div className="event-qr-action">
              <ScanQrCode size={18} className="event-qr-action-icon" />
              <span>Scan or tap to open</span>
              <ArrowUpRight
                size={18}
                className="event-qr-action-icon"
              />
            </div>
          </motion.button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle={content.projectTitle}
        portfolioId={content.portfolioId}
      />
    </>
  );
};

export default EventQrPage;
