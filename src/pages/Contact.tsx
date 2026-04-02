import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <div>
            {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
            <h1 className="mb-2">
              Start Your <span className="text-accent">Event.</span>
            </h1>

            {/* p global base style: Inter, 1.7 line-height, muted color */}
            <p className="mb-6 max-w-md">
              Ready to create something extraordinary? Tell us about your event and let's start the planning process.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />,  label: 'Email',  value: 'events@bamboogroves.com' },
                { icon: <Phone size={24} />, label: 'Phone',  value: '+1 (555) 123-4567' },
                { icon: <MapPin size={24} />, label: 'Studio', value: 'Lucknow, Uttar Pradesh' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                    {icon}
                  </div>
                  <div>
                    {/* section-label: accent color, uppercase, tracking — mb-0 to suppress default margin */}
                    <span className="section-label mb-0">{label}</span>
                    <p className="text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
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
            className="bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-md"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <form className="space-y-5" style={{ transform: 'translateZ(20px)' }}>
              <div className="space-y-2">
                <label className="section-label">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="section-label mb-0">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="section-label mb-0">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors resize-none text-white"
                />
              </div>

              {/* heading utility: Montserrat, uppercase, tracking */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="heading w-full bg-accent text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-3"
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
