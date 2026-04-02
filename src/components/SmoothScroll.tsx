import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      },
    });

    // Ensure scroll to top on mount
    window.scrollTo(0, 0);
    locomotiveScroll.scrollTo(0, { immediate: true });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="smooth-scroll-content">
      {children}
    </div>
  );
};

export default SmoothScroll;
