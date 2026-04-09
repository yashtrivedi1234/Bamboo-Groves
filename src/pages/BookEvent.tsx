import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, DollarSign, Package, Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown, Globe } from 'lucide-react';
import * as Yup from 'yup';
import { companyContact } from '@/src/lib/companyContact';

// ── Yup Validation Schema ──────────────────────────────────────────────────────
const bookingSchema = Yup.object({
  eventType:   Yup.string().required('Event type is required'),
  eventDate:   Yup.string().required('Event date is required'),
  guestCount:  Yup.number()
    .typeError('Guests must be a number')
    .min(1, 'At least 1 guest required')
    .max(100000, 'Too many guests')
    .required('Guest count is required'),
  budget:      Yup.number()
    .typeError('Budget must be a number')
    .min(1, 'Budget must be positive')
    .required('Budget is required'),
  fullName:    Yup.string().min(2, 'Name too short').required('Full name is required'),
  email:       Yup.string().email('Invalid email address').required('Email is required'),
  phone:       Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Phone must be 10 digits starting with 6–9')
    .required('Phone number is required'),
  location:    Yup.string().min(2, 'Location too short').required('Location is required'),
  description: Yup.string(),
});

type FormData = {
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  eventType: '', eventDate: '', guestCount: '', budget: '',
  fullName: '', email: '', phone: '', location: '', description: '',
};

const eventTypes = [
  'Wedding', 'Corporate Event', 'Birthday Party', 'Conference',
  'Product Launch', 'Concert', 'Festival', 'Other',
];

const todayStr = new Date().toISOString().split('T')[0];

const Err: React.FC<{ msg?: string }> = ({ msg }) =>
  msg ? (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-400 text-xs mt-1"
    >
      {msg}
    </motion.p>
  ) : null;

const BookEvent: React.FC = () => {
  const [formData, setFormData]   = useState<FormData>(EMPTY);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [touched, setTouched]     = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const validateField = async (name: keyof FormData, value: string) => {
    try {
      await Yup.reach(bookingSchema, name).validate(
        name === 'guestCount' || name === 'budget' ? Number(value) : value
      );
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        setErrors(prev => ({ ...prev, [name]: err.message }));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    if (key === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: digits }));
      if (touched.phone) validateField('phone', digits);
      return;
    }

    if (key === 'guestCount' || key === 'budget') {
      const stripped = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [key]: stripped }));
      if (touched[key]) validateField(key, stripped);
      return;
    }

    setFormData(prev => ({ ...prev, [key]: value }));
    if (touched[key]) validateField(key, value);
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const handleSelectType = (type: string) => {
    setFormData(prev => ({ ...prev, eventType: type }));
    setDropdownOpen(false);
    setTouched(prev => ({ ...prev, eventType: true }));
    validateField('eventType', type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = Object.keys(EMPTY).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormData, boolean>
    );
    setTouched(allTouched);

    try {
      await bookingSchema.validate(
        { ...formData, guestCount: Number(formData.guestCount), budget: Number(formData.budget) },
        { abortEarly: false }
      );
      setErrors({});
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData(EMPTY);
        setTouched({});
      }, 3000);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errs: FormErrors = {};
        err.inner.forEach(e => {
          if (e.path) errs[e.path as keyof FormData] = e.message;
        });
        setErrors(errs);
      }
    }
  };

  const inputCls = (name: keyof FormData) =>
    `w-full bg-transparent border-b py-4 outline-none transition-colors ${
      errors[name] && touched[name]
        ? 'border-red-400 text-white'
        : 'border-white/20 focus:border-accent text-white'
    }`;

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
          <h1 className="mb-6">
            Book Your <br /> <span className="text-accent">Perfect Event</span>
          </h1>
          {/* p global base style: Inter, 1.7 line-height, muted color */}
          <p className="max-w-2xl">
            Let's bring your vision to life. Fill out the form below and our team will get back to you within 24 hours with a customized proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Benefits Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* h3 global base style: Montserrat, uppercase, 600 weight */}
              <h3 className="mb-8">Why Choose Us</h3>

              <div className="space-y-6">
                {[
                  { icon: <Package size={32} />,    title: 'Full Service',         desc: 'End-to-end event management' },
                  { icon: <Users size={32} />,      title: 'Expert Team',          desc: '500+ successful events' },
                  { icon: <Calendar size={32} />,   title: 'Flexible Dates',       desc: 'Available 7 days a week' },
                  { icon: <DollarSign size={32} />, title: 'Transparent Pricing',  desc: 'No hidden charges' },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-accent flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      {/* h4 global base style */}
                      <h4 className="mb-1">{benefit.title}</h4>
                      {/* p global base style — muted color already set */}
                      <p>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/10 space-y-6">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: companyContact.email },
                  { icon: <Phone size={18} />, label: 'Phone', value: companyContact.phoneCombined },
                  { icon: <MapPin size={18} />, label: 'Address', value: companyContact.addressMultiline },
                  { icon: <Globe size={18} />, label: 'Website', value: companyContact.website },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                      {icon}
                    </div>
                    <div>
                      {/* section-label: accent color, uppercase, tracking — inline so mb-0 */}
                      <span className="section-label mb-0">{label}</span>
                      <p className={`text-white ${label === 'Address' ? 'whitespace-pre-line' : ''}`}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ rotateY: -5, rotateX: 2, z: 30, boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-md"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-accent mb-6"
                >
                  <CheckCircle2 size={80} />
                </motion.div>
                {/* h3 global base style */}
                <h3 className="mb-4">Thank You!</h3>
                <p className="mb-2">Your booking request has been received.</p>
                <p className="text-accent font-semibold">We'll contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" style={{ transform: 'translateZ(20px)' }}>

                {/* Row 1 — Event Type & Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Custom Dropdown */}
                  <div className="space-y-2">
                    {/* section-label inline — mb-0 to override default margin */}
                    <label className="section-label mb-0">Event Type *</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(prev => !prev)}
                        onBlur={() => { setDropdownOpen(false); handleBlur('eventType'); }}
                        className={`w-full h-12 bg-black/40 border rounded-lg px-4 flex items-center justify-between transition-all outline-none text-left font-medium ${
                          errors.eventType && touched.eventType
                            ? 'border-red-400'
                            : dropdownOpen ? 'border-accent' : 'border-white/20 hover:border-white/50'
                        }`}
                      >
                        <span className={formData.eventType ? 'text-white' : 'text-white/40'}>
                          {formData.eventType || 'Select event type'}
                        </span>
                        <motion.span
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-accent"
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 top-[calc(100%+6px)] left-0 w-full bg-[#111] border border-white/20 rounded-xl overflow-hidden shadow-2xl"
                            style={{ transformOrigin: 'top' }}
                          >
                            {eventTypes.map(type => (
                              <li
                                key={type}
                                onMouseDown={() => handleSelectType(type)}
                                className={`px-4 py-3 cursor-pointer text-sm transition-colors hover:bg-accent/20 hover:text-accent ${
                                  formData.eventType === type ? 'text-accent bg-accent/10' : 'text-white'
                                }`}
                              >
                                {type}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                    <Err msg={touched.eventType ? errors.eventType : undefined} />
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="section-label mb-0">Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      min={todayStr}
                      onChange={handleChange}
                      onBlur={() => handleBlur('eventDate')}
                      className={`w-full bg-transparent border-b py-4 outline-none transition-colors cursor-pointer ${
                        errors.eventDate && touched.eventDate ? 'border-red-400' : 'border-white/20 focus:border-accent'
                      } text-white [color-scheme:dark]`}
                    />
                    <Err msg={touched.eventDate ? errors.eventDate : undefined} />
                  </div>
                </div>

                {/* Row 2 — Guest Count & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="section-label mb-0">Expected Guests *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      onBlur={() => handleBlur('guestCount')}
                      placeholder="e.g., 200"
                      className={inputCls('guestCount')}
                    />
                    <Err msg={touched.guestCount ? errors.guestCount : undefined} />
                  </div>
                  <div className="space-y-2">
                    <label className="section-label mb-0">Budget (USD) *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onBlur={() => handleBlur('budget')}
                      placeholder="e.g., 50000"
                      className={inputCls('budget')}
                    />
                    <Err msg={touched.budget ? errors.budget : undefined} />
                  </div>
                </div>

                {/* Row 3 — Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="section-label mb-0">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="John Doe"
                      className={inputCls('fullName')}
                    />
                    <Err msg={touched.fullName ? errors.fullName : undefined} />
                  </div>
                  <div className="space-y-2">
                    <label className="section-label mb-0">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="john@example.com"
                      className={inputCls('email')}
                    />
                    <Err msg={touched.email ? errors.email : undefined} />
                  </div>
                </div>

                {/* Row 4 — Phone & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="section-label mb-0">Phone Number *</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      placeholder="9876543210"
                      maxLength={10}
                      className={inputCls('phone')}
                    />
                    <Err msg={touched.phone ? errors.phone : undefined} />
                  </div>
                  <div className="space-y-2">
                    <label className="section-label mb-0">Event Location *</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={() => handleBlur('location')}
                      placeholder="City or venue"
                      className={inputCls('location')}
                    />
                    <Err msg={touched.location ? errors.location : undefined} />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="section-label mb-0">Event Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={() => handleBlur('description')}
                    placeholder="Tell us about your event vision, special requirements, or any other details..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none transition-colors resize-none text-white"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="heading w-full bg-accent text-white py-6 rounded-2xl font-bold flex items-center justify-center gap-3 mt-10"
                >
                  Book Event <Send size={20} />
                </motion.button>

                {/* p global base style — muted color */}
                <p className="text-center">
                  We'll review your request and send you a personalized proposal.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookEvent;
