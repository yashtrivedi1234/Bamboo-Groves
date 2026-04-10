import React from 'react';
import { motion } from 'motion/react';
import { Star, Target, Users, Globe, Gem, Trophy } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    { icon: Star, title: 'Unmatched Expertise', desc: '7+ years of experience in luxury event production with a portfolio spanning 500+ successful events worldwide.' },
    { icon: Target, title: 'Precision & Innovation', desc: 'We combine meticulous planning with cutting-edge technology and creative storytelling.' },
    { icon: Users, title: 'Dedicated Partnership', desc: 'Your vision becomes our mission. We provide white-glove service from conceptization to execution.' },
    { icon: Globe, title: 'Global Reach', desc: 'With partners in 24 countries, we seamlessly execute destination events at any scale.' },
    { icon: Gem, title: 'Luxury Standards', desc: 'We specialize exclusively in high-end productions, ensuring premium quality in every detail.' },
    { icon: Trophy, title: 'Award-Winning Team', desc: 'Our creative leadership has been recognized with 15+ industry awards for excellence.' }
  ];

  return (
    <section className="section-padding bg-white px-6 text-black md:px-12" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="section-eyebrow">Our Promise</span>
          <h2 className="h2 font-display font-bold uppercase tracking-tighter">WHY CHOOSE <span className="text-accent">BAMBOO GROVES</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, i) => {
            const IconComponent = item.icon;
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-black/10 rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-500"
            >
              <div className="mb-6 text-accent">
                <IconComponent size={48} strokeWidth={1.5} />
              </div>
              <h3 className="h4 mb-4 font-bold uppercase tracking-widest">{item.title}</h3>
              <p className="p text-black/60">{item.desc}</p>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
