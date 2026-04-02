import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="section-padding border-y border-white/10 bg-black px-6 md:px-12" data-scroll-section>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="h2 font-display font-bold uppercase tracking-tighter mb-8">STAY IN THE <span className="text-accent">LOOP</span></h2>
        <p className="p mb-12 mx-auto max-w-xl text-muted">Subscribe to receive exclusive insights into the world of luxury event production and early access to our signature showcases.</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-accent transition-colors font-mono text-sm"
          />
          <button className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
