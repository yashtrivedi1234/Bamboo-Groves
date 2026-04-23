import React from 'react';
import { motion } from 'motion/react';
import FormInput from './FormInput';

interface ContactFormProps {
  name: string;
  email: string;
  phone: string;
  notes: string;
  projectTitle: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onNotesChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  email,
  phone,
  notes,
  projectTitle,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onNotesChange,
  onSubmit,
  isLoading = false
}) => {
  return (
    <>
      <h2 className="h2 font-display font-bold mb-1 text-accent">Get in Touch</h2>
      <p className="text-white/60 mb-5 text-sm leading-relaxed">
        Interested in <span className="text-accent font-semibold">{projectTitle}</span>? Share your details and we'll connect with you!
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <FormInput
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="you@example.com"
        />

        <FormInput
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+919648720272"
        />

        <div>
          <label className="block text-white mb-1.5 text-xs font-semibold uppercase tracking-widest">
            Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            placeholder="Tell us a bit about your requirement"
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-black font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Details'}
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
