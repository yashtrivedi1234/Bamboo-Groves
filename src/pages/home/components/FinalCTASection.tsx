import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden px-6 text-center md:px-12" data-scroll-section>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="h2 font-display font-bold uppercase tracking-tighter mb-12">
          READY TO <span className="text-accent">CELEBRATE?</span>
        </h2>
        <Link 
          to="/contact"
          className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all group"
        >
          Start Planning <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-bold text-white/5 pointer-events-none select-none">
        Bamboo Groves
      </div>
    </section>
  );
};

export default FinalCTASection;
