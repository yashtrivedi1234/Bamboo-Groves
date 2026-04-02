import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import logo from '../../../assets/logo.png';
import corporateImage from '../../../assets/events/corporate.webp';
import socialImage from '../../../assets/events/social.webp';

const Stars = (props: any) => {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#88AB32"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const carouselSlides = [
  {
    image: corporateImage,
    title: 'Corporate',
    subtitle: 'Events',
  },
  {
    image: socialImage,
    title: 'Social',
    subtitle: 'Events',
  },
];

export const HeroSection: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'corporate' | 'private' | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const navigateToEvent = (eventType: 'corporate' | 'social') => navigate(`/events/${eventType}`);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const splitPos = useSpring(50, { damping: 40, stiffness: 80, mass: 1 });

  useEffect(() => {
    if (hoveredSide === 'corporate') splitPos.set(70);
    else if (hoveredSide === 'private') splitPos.set(30);
    else splitPos.set(50);
  }, [hoveredSide, splitPos]);

  // Auto-rotate carousel on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const leftClipPath = useTransform(
    splitPos,
    (val) => `polygon(0 0, ${val + 10}% 0, ${val - 10}% 100%, 0 100%)`
  );
  const rightClipPath = useTransform(
    splitPos,
    (val) => `polygon(${val + 10}% 0, 100% 0, 100% 100%, ${val - 10}% 100%)`
  );

  const showPreviousSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const showNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <section
      ref={containerRef}
      // FIX 1: Use `overflow-hidden` without relying on [contain] alone.
      // `contain: strict` blocks both layout AND paint leaks from scaled/clipped children.
      className="relative isolate h-screen w-full overflow-hidden bg-black"
      style={{ contain: 'strict' }}
      data-scroll-section
    >
      {/* Stars background */}
      {/* FIX 2: Explicitly constrain the Canvas wrapper so WebGL never bleeds out */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Logo / Title */}
      <div className="absolute left-1/2 top-8 z-50 flex -translate-x-1/2 flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <img
            src={logo}
            alt="Bamboo Groves"
            className="h-16 w-auto sm:h-20 md:h-24"
          />
        </motion.div>
      </div>

      {/* ── MOBILE CAROUSEL (hidden on md+) ── */}
      {/* FIX 3: overflow-hidden here prevents scaled bg images from leaking horizontally */}
      <div className="relative z-10 h-full w-full overflow-hidden md:hidden">
        {carouselSlides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 cursor-pointer overflow-hidden"
            animate={{ opacity: i === carouselIndex ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ opacity: i === 0 ? 1 : 0 }}
            onClick={() => navigateToEvent(i === 0 ? 'corporate' : 'social')}
          >
            {/* Background image — scale is clipped by overflow-hidden on parent */}
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Text */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
              <h2 className="text-white">
                {slide.title} <br />
                <span className="italic text-accent">{slide.subtitle}</span>
              </h2>
            </div>
          </motion.div>
        ))}

        <div className="absolute inset-x-0 bottom-20 z-20 flex items-center justify-between px-4">
          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {carouselSlides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === carouselIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP SPLIT (hidden below md) ── */}
      {/* FIX 4: This wrapper clips both panels so clip-path edges never paint outside the section */}
      <div className="relative z-10 hidden h-full w-full overflow-hidden md:block">
        {/* Corporate / Left */}
        <motion.div
          style={{ clipPath: leftClipPath }}
          onMouseEnter={() => setHoveredSide('corporate')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigateToEvent('corporate')}
          // FIX 5: overflow-hidden on each panel clips the scale-110 bg image to the panel bounds
          className="group absolute inset-0 z-20 cursor-pointer overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            style={{ y: backgroundY, backgroundImage: `url('${corporateImage}')` }}
          />
          <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30" />

          <div className="relative z-30 flex h-full w-full flex-col justify-center p-8 md:w-1/2 md:p-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <h2 className="mb-8 text-white">
                Corporate <br />
                <span className="italic text-accent">Events</span>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Social / Right */}
        <motion.div
          style={{ clipPath: rightClipPath }}
          onMouseEnter={() => setHoveredSide('private')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigateToEvent('social')}
          // FIX 5 (same): overflow-hidden clips the scaled bg image
          className="group absolute inset-0 z-10 cursor-pointer overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            style={{ y: backgroundY, backgroundImage: `url('${socialImage}')` }}
          />
          <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30" />

          <div className="relative z-30 flex h-full w-full flex-col items-start justify-center p-8 text-left md:ml-auto md:w-1/2 md:items-end md:p-24 md:text-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <h2 className="mb-8 text-white">
                Social <br />
                <span className="italic text-accent">Events</span>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Coordinates — desktop only */}
      <div className="absolute left-12 top-12 z-50 hidden md:block">
        <div className="flex flex-col space-y-1">
          <span className="font-mono text-[8px] tracking-tighter text-white/20">LAT: 26.8467 N</span>
          <span className="font-mono text-[8px] tracking-tighter text-white/20">LNG: 80.9462 E</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-50 hidden md:block">
        <div className="text-right">
          <span className="font-mono text-[8px] uppercase tracking-tighter text-white/20">
            Luxury Event Curators
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
