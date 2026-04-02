import React from 'react';
import { motion } from 'motion/react';
import newDelhiImage from '../../../assets/city/imgi_46_1.png';
import lucknowImage from '../../../assets/city/imgi_47_2.png';
import patnaImage from '../../../assets/city/imgi_48_3.png';
import ranchiImage from '../../../assets/city/imgi_49_4.png';
import kolkataImage from '../../../assets/city/imgi_50_5.png';
import bhubaneswarImage from '../../../assets/city/imgi_51_6.png';
import jaipurImage from '../../../assets/city/imgi_52_7.png';
import vadodaraImage from '../../../assets/city/imgi_53_8.png';
import mumbaiImage from '../../../assets/city/imgi_54_9.png';
import visakhapatnamImage from '../../../assets/city/imgi_55_10.png';
import hyderabadImage from '../../../assets/city/imgi_56_11.png';
import bangaloreImage from '../../../assets/city/imgi_57_12.png';
import chennaiImage from '../../../assets/city/imgi_58_13.png';
import goaImage from '../../../assets/city/imgi_59_14.png';
import raipurImage from '../../../assets/city/imgi_60_15.png';
import chandigarhImage from '../../../assets/city/imgi_61_16.png';
import noidaImage from '../../../assets/city/imgi_62_17.png';
import gurugramImage from '../../../assets/city/imgi_63_18.png';
import ludhianaImage from '../../../assets/city/imgi_64_19.png';
import indoreImage from '../../../assets/city/imgi_65_20.png';

const locations = [
  { city: 'New Delhi', image: newDelhiImage },
  { city: 'Lucknow', image: lucknowImage },
  { city: 'Patna', image: patnaImage },
  { city: 'Ranchi', image: ranchiImage },
  { city: 'Kolkata', image: kolkataImage },
  { city: 'Bhubaneswar', image: bhubaneswarImage },
  { city: 'Jaipur', image: jaipurImage },
  { city: 'Vadodara', image: vadodaraImage },
  { city: 'Mumbai', image: mumbaiImage },
  { city: 'Visakhapatnam', image: visakhapatnamImage },
  { city: 'Hyderabad', image: hyderabadImage },
  { city: 'Bangalore', image: bangaloreImage },
  { city: 'Chennai', image: chennaiImage },
  { city: 'Goa', image: goaImage },
  { city: 'Chandigarh', image: chandigarhImage },
  { city: 'Noida', image: noidaImage },
  { city: 'Gurugram', image: gurugramImage },
  { city: 'Ludhiana', image: ludhianaImage },
  { city: 'Indore', image: indoreImage },
  { city: 'Raipur', image: raipurImage },
];

const OurPresenceSection: React.FC = () => {
  return (
    <section className="section-padding bg-black px-4 text-white md:px-8" data-scroll-section>
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 text-center">
          <h2 className="text-white">Our Presence</h2>
          <p className="mt-2 text-white/80">
            Producing curated celebrations and premium event experiences across India.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.25 } }}
              className="group mx-auto w-full max-w-[120px] text-center sm:max-w-[130px] lg:max-w-[140px] cursor-default"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] transition-all duration-500
                  before:pointer-events-none before:absolute before:inset-0
                  before:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0)_100%)]
                  before:opacity-70 before:transition-opacity before:duration-500
                  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-20
                  after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]
                  after:opacity-80 after:transition-opacity after:duration-500
                  group-hover:-translate-y-2 group-hover:border-white/20
                  group-hover:before:opacity-100 group-hover:after:opacity-100"
              >
                <img
                  src={location.image}
                  alt={location.city}
                  className="aspect-[1.06/1] w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  referrerPolicy="no-referrer"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%)] opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              </div>
              <p className="heading mt-3 text-sm font-semibold tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-white/90">
                {location.city}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresenceSection;
