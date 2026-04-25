import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalBackdrop from './ModalBackdrop';
import ContactForm from './ContactForm';
import { getAccessRequestApiUrl } from '../lib/accessRequestApi';
import { getPostVerificationRoute } from '../lib/eventRoute';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  portfolioId?: number;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  portfolioId = 1,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [requestId, setRequestId] = useState<string | undefined>(undefined);
  const [step, setStep] = useState<'details' | 'pin'>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const resetFlowState = () => {
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setAccessCode('');
    setRequestId(undefined);
    setStep('details');
    setIsLoading(false);
    setIsVerifying(false);
  };

  const handleModalClose = () => {
    resetFlowState();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      resetFlowState();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const normalizedPhone = phone.trim().replace(/[\s()-]/g, '');
    const trimmedNotes = notes.trim();
    const e164PhoneRegex = /^\+[1-9]\d{1,14}$/;

    if (!Number.isInteger(portfolioId) || portfolioId <= 0) {
      alert('Invalid portfolio selected. Please try again.');
      return;
    }

    if (!trimmedName || !trimmedEmail || !normalizedPhone) {
      alert('Please fill in all fields');
      return;
    }

    if (!e164PhoneRegex.test(normalizedPhone)) {
      alert('Please enter phone number in E.164 format (example: +1234567890).');
      return;
    }

    setIsLoading(true);

    const data = {
      portfolioId,
      name: trimmedName,
      email: trimmedEmail,
      phoneNumber: normalizedPhone,
      notes: trimmedNotes,
    };

    // Log to console
    console.log('📊 Contact Data:', data);
    console.table(data);

    // Also log in a formatted way
    console.log(`✅ New lead from ${projectTitle}:`);
    console.log(`   Name: ${name}`);
    console.log(`   Email: ${email}`);
    console.log(`   Phone: ${phone}`);
    console.log(`   Notes: ${notes}`);
    console.log(`   Time: ${new Date().toLocaleString()}`);

    try {
      const response = await fetch(getAccessRequestApiUrl('/submit-request'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseBody = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          typeof responseBody?.message === 'string'
            ? responseBody.message
            : `Request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const receivedRequestId = responseBody?.requestId ?? responseBody?.accessRequestId ?? responseBody?.id;
      const resolvedRequestId =
        receivedRequestId !== undefined && receivedRequestId !== null
          ? String(receivedRequestId)
          : undefined;

      if (resolvedRequestId) {
        setRequestId(resolvedRequestId);
      }

      const hasPermanentAccess =
        responseBody?.hasPermanentAccess === true || responseBody?.isPermanent === true;

      if (hasPermanentAccess) {
        const fallbackQueryParams = new URLSearchParams({
          portfolioId: String(portfolioId),
          ...(resolvedRequestId ? { requestId: resolvedRequestId } : {}),
        });

        const fallbackRoute = `${getPostVerificationRoute(portfolioId)}?${fallbackQueryParams.toString()}`;

        setIsLoading(false);
        handleModalClose();
        navigate(fallbackRoute);
        return;
      }

      setIsLoading(false);
      setStep('pin');
    } catch (error) {
      setIsLoading(false);
      console.error('❌ Submit request failed:', error);
      alert('Something went wrong while submitting the form. Please try again.');
    }
  };

  const handlePinVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedCode = accessCode.trim();

    if (normalizedCode.length !== 6) {
      alert('Please enter a valid 6-character OTP.');
      return;
    }

    setIsVerifying(true);

    try {
      const response = await fetch(getAccessRequestApiUrl('/verify-code'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ accessCode: normalizedCode }),
      });

      const responseBody = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          typeof responseBody?.message === 'string'
            ? responseBody.message
            : 'OTP verification failed. Please try again.';
        throw new Error(errorMessage);
      }

      const resolvedRequestId =
        requestId ??
        responseBody?.requestId ??
        responseBody?.accessRequestId ??
        responseBody?.id;

      if (resolvedRequestId === undefined || resolvedRequestId === null) {
        throw new Error('Request ID not found for access validation.');
      }

      setIsVerifying(false);
      handleModalClose();
      const queryParams = new URLSearchParams({
        portfolioId: String(portfolioId),
        requestId: String(resolvedRequestId),
      });
      navigate(`${getPostVerificationRoute(portfolioId)}?${queryParams.toString()}`);
    } catch (error) {
      setIsVerifying(false);
      console.error('❌ OTP verification failed:', error);
      alert(error instanceof Error ? error.message : 'OTP verification failed. Please try again.');
    }
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClose={handleModalClose} title="Get in Touch">
      {step === 'details' ? (
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          notes={notes}
          projectTitle={projectTitle}
          onNameChange={setName}
          onEmailChange={setEmail}
          onPhoneChange={setPhone}
          onNotesChange={setNotes}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      ) : (
        <>
          <h2 className="h2 font-display font-bold mb-1 text-accent">Verify OTP</h2>
          <p className="text-white/60 mb-5 text-sm leading-relaxed">
            OTP has been sent. Enter your 6-character OTP to continue to the event page.
          </p>

          <form onSubmit={handlePinVerify} className="space-y-4">
            <div>
              <label className="block text-white mb-1.5 text-xs font-semibold uppercase tracking-widest">
                OTP
              </label>
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.slice(0, 6))}
                autoComplete="one-time-code"
                placeholder="ABC123"
                maxLength={6}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors tracking-[0.4em]"
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full bg-accent text-black font-bold uppercase tracking-widest py-2.5 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifying ? 'Verifying...' : 'Verify OTP'}
            </button>

            <button
              type="button"
              onClick={() => setStep('details')}
              className="w-full border border-white/20 text-white/80 font-semibold uppercase tracking-wider py-2.5 rounded-lg hover:border-white/40 hover:text-white transition-colors"
            >
              Edit Details
            </button>
          </form>
        </>
      )}
    </ModalBackdrop>
  );
};

export default ContactModal;
