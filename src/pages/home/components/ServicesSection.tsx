import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white px-6 text-black md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-20 mb-20">
          <div>
            <span className="section-eyebrow">Our Expertise</span>
            <h2 className="h2 font-display font-bold uppercase tracking-tighter">
              THE ART OF CELEBRATION
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { title: 'Corporate Galas', desc: 'Sophisticated productions that reflect your company\'s prestige and vision.' },
            { title: 'Private Soirées', desc: 'Intimate and exclusive celebrations tailored to your personal story.' },
            { title: 'Product Launches', desc: 'High-impact events designed to create buzz and leave a lasting impression.' },
            { title: 'Destination Events', desc: 'Seamlessly executed experiences in the world\'s most breathtaking locations.' },
            { title: 'Immersive Tech', desc: 'Integrating AR, VR, and interactive installations into live environments.' },
            { title: 'Brand Activations', desc: 'Creative experiential marketing that connects brands with their audience.' }
          ].map((service, i) => (
            <div key={i} className="p-12 border border-black/10 hover:bg-accent hover:text-black transition-all duration-500 group">
              <span className="h3 font-display font-bold mb-8 block opacity-20 group-hover:opacity-100">0{i+1}</span>
              <h3 className="h3 mb-4 font-bold uppercase tracking-tight">{service.title}</h3>
              <p className="p opacity-60 group-hover:opacity-80">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
