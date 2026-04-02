import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Corporate Events', path: '/events/corporate' },
  { name: 'Social Events', path: '/events/social' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideOnHomeHero, setHideOnHomeHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setHideOnHomeHero(location.pathname === '/' && window.scrollY < window.innerHeight * 0.85);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (hideOnHomeHero && isOpen) {
      setIsOpen(false);
    }
  }, [hideOnHomeHero, isOpen]);

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/events/corporate') {
      return location.pathname === '/events/corporate';
    }
    if (path === '/events/social') {
      return location.pathname === '/events/social';
    }
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          'px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-14 lg:py-5',
          hideOnHomeHero
            ? 'opacity-0 pointer-events-none -translate-y-full'
            : 'opacity-100 pointer-events-auto translate-y-0',
          scrolled
            ? 'bg-background/85 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="block flex-shrink-0">
            <img
              src={logo}
              alt="Bamboo Groves Pvt. Ltd."
              className={cn(
                'w-auto transition-all duration-300',
                scrolled
                  ? 'h-10 sm:h-12 md:h-14'
                  : 'h-12 sm:h-14 md:h-16 lg:h-20'
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 perspective-1000">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ rotateX: 20, y: -2, z: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* heading utility: Montserrat, uppercase, tracking */}
                <Link
                  to={link.path}
                  className={cn(
                    'heading text-xs lg:text-sm font-medium transition-colors hover:text-accent block whitespace-nowrap',
                    isActiveLink(link.path)
                      ? 'text-accent'
                      : 'text-white/70'
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden"
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <Link to="/" className="mb-10" onClick={() => setIsOpen(false)}>
              <img
                src={logo}
                alt="Bamboo Groves Pvt. Ltd."
                className="h-14 sm:h-16 w-auto"
              />
            </Link>

            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {/* h2 global base style for large mobile nav links */}
                  <Link
                    to={link.path}
                    className={cn(
                      'heading text-2xl sm:text-3xl font-bold transition-colors',
                      isActiveLink(link.path)
                        ? 'text-accent'
                        : 'text-white hover:text-accent'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
