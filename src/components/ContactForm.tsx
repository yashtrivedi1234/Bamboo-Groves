import React from 'react';
import { motion } from 'motion/react';
import FormInput from './FormInput';

interface ContactFormProps {
  name: string;
  phone: string;
  projectTitle: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  phone,
  projectTitle,
  onNameChange,
  onPhoneChange,
  onSubmit,
  isLoading = false
}) => {
  return (
    <>
      <h2 className="h2 font-display font-bold mb-2 text-accent">Get in Touch</h2>
      <p className="text-white/60 mb-8">
        Interested in <span className="text-accent font-semibold">{projectTitle}</span>? Share your details and we'll connect with you!
      </p>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
        />

        <FormInput
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+91 9648 720 272"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-accent text-black font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Details'}
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
