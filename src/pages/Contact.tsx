import React from 'react';
import { motion } from 'motion/react';
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { companyContact } from '@/src/lib/companyContact';

const Contact: React.FC = () => {
  return (
    <div className="bg-transparent px-6 pb-20 pt-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <h1 className="mb-2">
              Start Your <span className="text-accent">Event.</span>
            </h1>

            <p className="mb-6 max-w-md">
              Ready to create something extraordinary? Tell us about your event and let&apos;s start
              the planning process.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, label: 'Email', value: companyContact.email },
                { icon: <Phone size={24} />, label: 'Phone', value: companyContact.phoneCombined },
                { icon: <MapPin size={24} />, label: 'Address', value: companyContact.addressMultiline },
                { icon: <Globe size={24} />, label: 'Website', value: companyContact.website },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-accent">
                    {icon}
                  </div>
                  <div>
                    <span className="section-label mb-0">{label}</span>
                    <p className={`text-white ${label === 'Address' ? 'whitespace-pre-line' : ''}`}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{
              rotateY: -5,
              rotateX: 2,
              z: 30,
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
            }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <form className="space-y-5" style={{ transform: 'translateZ(20px)' }}>
              <div className="space-y-2">
                <label className="section-label">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="section-label mb-0">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="section-label mb-0">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-accent"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="heading flex w-full items-center justify-center gap-3 rounded-2xl bg-accent py-6 font-bold text-white"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
