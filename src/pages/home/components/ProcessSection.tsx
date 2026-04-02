import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section className="section-padding overflow-hidden bg-black px-6 md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="section-eyebrow">How We Work</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">OUR PROCESS</h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your vision, goals, and audience to build a solid foundation.' },
              { step: '02', title: 'Design', desc: 'Our creative team crafts a unique visual and experiential language for your event.' },
              { step: '03', title: 'Production', desc: 'We handle every technical detail, from lighting and sound to vendor logistics.' },
              { step: '04', title: 'Execution', desc: 'On-site management ensures a flawless experience from the first guest to the last.' }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-white/10 p-8 rounded-2xl hover:border-accent transition-colors">
                <span className="text-accent font-display font-bold text-4xl mb-6 block">{item.step}</span>
                <h3 className="h5 mb-4 uppercase tracking-widest">{item.title}</h3>
                <p className="p text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
