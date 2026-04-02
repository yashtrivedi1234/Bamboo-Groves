import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTASection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-6 md:px-12" data-scroll-section>
      <div className="mx-auto max-w-7xl">
        <div className="cta-shell px-6 py-14 text-center md:px-12 md:py-20">
          <span className="section-label mx-auto">Let&apos;s Create Something Memorable</span>
          <h2 className="cta-title text-white">
            Ready To Plan
            <br />
            Your Next Event?
          </h2>
          <p className="cta-copy mt-6">
            From corporate experiences to social celebrations, Bamboo Groves turns ideas into
            beautifully executed moments with precision, creativity, and hospitality at every step.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="cta-button">
              Start Planning
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center text-[18vw] font-bold uppercase tracking-[-0.06em] text-white/4">
            Bamboo
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTASection;
