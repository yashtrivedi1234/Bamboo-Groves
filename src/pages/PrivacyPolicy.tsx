import React from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Bamboo Groves Events ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website, use our services, or interact with us in any manner.'
    },
    {
      title: '2. Information We Collect',
      subsections: [
        {
          subtitle: '2.1 Personal Information',
          text: 'We collect information that you voluntarily provide, including but not limited to: name, email address, phone number, mailing address, event details, preferences, and payment information when you book events or contact us.'
        },
        {
          subtitle: '2.2 Automatically Collected Information',
          text: 'When you visit our website, we automatically collect certain information about your device including IP address, browser type, operating system, referring URLs, and pages visited. We use cookies and similar tracking technologies to enhance your experience.'
        },
        {
          subtitle: '2.3 Information from Third Parties',
          text: 'We may receive information about you from third-party service providers, payment processors, and analytics providers to improve our services.'
        }
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to: process event bookings and payments; communicate with you about our services; provide customer support; improve our website and services; send marketing communications (with your consent); comply with legal obligations; and prevent fraud or misuse of our services.'
    },
    {
      title: '4. Sharing Your Information',
      content: 'We do not sell your personal information. We may share your information with: service providers who assist us in operating our website and conducting business; payment processors and financial institutions; legal authorities when required by law; and business partners for joint ventures (with your consent).'
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.'
    },
    {
      title: '6. Your Rights and Choices',
      content: 'Depending on your location, you may have rights including: access to your personal information; correction of inaccurate data; deletion of your information; opt-out of marketing communications; data portability; and withdrawal of consent. To exercise these rights, please contact us at privacy@bamboogroves.com.'
    },
    {
      title: '7. Cookies and Tracking Technologies',
      content: 'We use cookies to enhance your browsing experience, remember your preferences, and track website analytics. You can control cookie settings through your browser. Disabling cookies may affect website functionality.'
    },
    {
      title: '8. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any external sites before providing your information.'
    },
    {
      title: '9. Children\'s Privacy',
      content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a minor, we will take steps to delete such information promptly.'
    },
    {
      title: '10. Contact Us',
      content: 'If you have questions about this Privacy Policy or our privacy practices, please contact us at: privacy@bamboogroves.com | +1 (310) 555-0123 | Bamboo Groves Events, Lucknow, Uttar Pradesh'
    }
  ];

  return (
    <div className="pt-32 pb-20">

      {/* Hero */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          {/* h1 global base style: Montserrat, uppercase, 800 weight, clamp size */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="leading-[0.9] mb-8"
          >
            Privacy <span className="text-accent">Policy</span>
          </motion.h1>
          {/* p global base style: Inter, 1.7 line-height, muted color */}
          <p>Last Updated: March 26, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {/* h2 global base style: Montserrat, uppercase, 700 weight */}
              <h2 className="mb-6">{section.title}</h2>

              {section.content && (
                <p className="mb-6">{section.content}</p>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((subsection, j) => (
                    <div key={j}>
                      {/* h3 global base style: Montserrat, uppercase, 600 weight — accent color override */}
                      <h3 className="mb-3 text-accent">{subsection.subtitle}</h3>
                      <p>{subsection.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-white/5 rounded-2xl border border-white/10"
          >
            <p>
              This Privacy Policy is subject to change at any time without notice. We encourage you to review this policy periodically for updates. Your continued use of our services constitutes your acceptance of any changes made to this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
