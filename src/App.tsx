import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Scene3D from './components/Scene3D';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookEvent from './pages/BookEvent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import EventQrPage from './pages/EventQrPage';
import CorporateProfile from './pages/CorporateProfile';
import CorporateEventPage from './pages/CorporateEventPage';
import AllClients from './pages/corporate-profile/AllClients';
import ServiceDetails from './pages/corporate-profile/ServiceDetails';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, rotateY: 10, scale: 0.95, z: -100 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
        exit={{ opacity: 0, rotateY: -10, scale: 0.95, z: -100 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="perspective-2000 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <SmoothScroll>
          <div className="pointer-events-auto">
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </motion.div>
    </AnimatePresence>
  );
};

const MinimalPageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, rotateY: 10, scale: 0.95, z: -100 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
        exit={{ opacity: 0, rotateY: -10, scale: 0.95, z: -100 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="perspective-2000 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-auto">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();
  const isEventRoute = location.pathname.startsWith('/events/');

  return (
    <>
      <Scene3D />
      <CustomCursor />
      {!isEventRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="/corporate-profile" element={<PageWrapper><CorporateProfile /></PageWrapper>} />
        <Route path="/service/:serviceSlug" element={<PageWrapper><ServiceDetails /></PageWrapper>} />
        <Route path="/all-clients" element={<PageWrapper><AllClients /></PageWrapper>} />
        <Route path="/corporate-events" element={<PageWrapper><CorporateEventPage /></PageWrapper>} />
        <Route path="/events/:eventType" element={<MinimalPageWrapper><EventQrPage /></MinimalPageWrapper>} />
        <Route path="/book-event" element={<PageWrapper><BookEvent /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
      </Routes>
    </>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <AppLayout />
      )}
    </Router>
  );
}
