import React from 'react';
import { motion } from 'motion/react';

interface SuccessMessageProps {
  projectTitle: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ projectTitle }) => {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          ✓
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-accent font-bold mb-2">Thank You!</h3>
        <p className="text-white/60">
          We've received your details for <span className="text-accent font-semibold">{projectTitle}</span>. 
          <br />
          We'll be in touch soon!
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessMessage;
