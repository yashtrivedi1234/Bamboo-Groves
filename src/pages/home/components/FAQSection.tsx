import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="section-padding px-6 md:px-12" data-scroll-section>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">FAQ</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: 'How far in advance should we book?', a: 'For large-scale corporate events, we recommend booking 6-12 months in advance. For private soirées, 3-6 months is usually sufficient.' },
            { q: 'Do you handle destination events?', a: 'Yes, we have a global network of partners and can produce events anywhere in the world, handling all logistics and local vendor management.' },
            { q: 'What is your typical event budget?', a: 'We specialize in luxury productions. Our projects typically start at $50,000, but we tailor every proposal to the specific scale and requirements of the event.' },
            { q: 'Can you integrate custom technology?', a: 'Absolutely. We have an in-house tech team that specializes in AR/VR, custom lighting installations, and interactive digital experiences.' }
          ].map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-bold uppercase tracking-widest">{faq.q}</span>
                {activeFaq === i ? <Minus className="text-accent" /> : <Plus className="text-accent" />}
              </button>
              <motion.div 
                initial={false}
                animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 text-muted leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
