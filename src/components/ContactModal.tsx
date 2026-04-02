import React, { useState } from 'react';
import ModalBackdrop from './ModalBackdrop';
import ContactForm from './ContactForm';
import SuccessMessage from './SuccessMessage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, projectTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    const data = {
      timestamp: new Date().toISOString(),
      projectTitle,
      name: name.trim(),
      phone: phone.trim(),
      userAgent: navigator.userAgent
    };

    // Log to console
    console.log('📊 Contact Data:', data);
    console.table(data);

    // Also log in a formatted way
    console.log(`✅ New lead from ${projectTitle}:`);
    console.log(`   Name: ${name}`);
    console.log(`   Phone: ${phone}`);
    console.log(`   Time: ${new Date().toLocaleString()}`);

    // Show success message
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setPhone('');
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 500);
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClose={onClose} title="Get in Touch">
      {!submitted ? (
        <ContactForm
          name={name}
          phone={phone}
          projectTitle={projectTitle}
          onNameChange={setName}
          onPhoneChange={setPhone}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      ) : (
        <SuccessMessage projectTitle={projectTitle} />
      )}
    </ModalBackdrop>
  );
};

export default ContactModal;
