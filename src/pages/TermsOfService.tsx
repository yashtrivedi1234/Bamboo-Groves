import React from 'react';
import { motion } from 'motion/react';
import { companyContact } from '@/src/lib/companyContact';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Bamboo Groves Events website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Bamboo Groves Events website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transferring the materials to another person or "mirroring" the materials on any other server.'
    },
    {
      title: '3. Disclaimer',
      content: 'The materials on Bamboo Groves Events website are provided on an "as is" basis. Bamboo Groves Events makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: '4. Limitations',
      content: 'In no event shall Bamboo Groves Events or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Bamboo Groves Events website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on Bamboo Groves Events website could include technical, typographical, or photographic errors. Bamboo Groves Events does not warrant that any of the materials on our website are accurate, complete, or current. Bamboo Groves Events may make changes to the materials contained on our website at any time without notice.'
    },
    {
      title: '6. Materials and Links',
      content: 'Bamboo Groves Events has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bamboo Groves Events of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: '7. Modifications',
      content: 'Bamboo Groves Events may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of California, USA, and you irrevocably submit to the exclusive jurisdiction of the courts that are located in California.'
    },
    {
      title: '9. Service Booking and Payment',
      subsections: [
        {
          subtitle: '9.1 Event Booking',
          text: 'By booking an event through our website, you agree to provide accurate and complete information. A deposit is required to secure the booking date.'
        },
        {
          subtitle: '9.2 Cancellation Policy',
          text: 'Cancellations must be made in writing. Cancellations made more than 90 days before the event date will receive a refund minus a 10% administrative fee. Cancellations made within 90 days are non-refundable.'
        },
        {
          subtitle: '9.3 Payment Terms',
          text: 'Full payment is due 30 days before the event date. Late payments may result in event postponement. We accept major credit cards, bank transfers, and checks.'
        }
      ]
    },
    {
      title: '10. Intellectual Property Rights',
      content: 'All materials on Bamboo Groves Events website, including but not limited to text, graphics, logos, images, audio clips, and software (unless otherwise indicated) are the property of Bamboo Groves Events or its content suppliers and protected by international copyright laws.'
    },
    {
      title: '11. User-Generated Content',
      content: 'If you submit, post, or display content on our website or services, you grant Bamboo Groves Events a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, translate, distribute, and publicly display such content in relation to our services.'
    },
    {
      title: '12. Limitation of Liability',
      content: 'Bamboo Groves Events shall not be liable for any special, indirect, incidental, punitive, or consequential damages arising out of or related to these terms or your use of the website, even if Bamboo Groves Events has been advised of the possibility of such damages.'
    },
    {
      title: '13. Entire Agreement',
      content: 'These terms and conditions constitute the entire agreement between you and Bamboo Groves Events regarding your use of this website and supersede all prior or contemporary communications and proposals, whether electronic, oral, or written.'
    },
    {
      title: '14. Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us at: ${companyContact.email} | ${companyContact.phoneCombined} | ${companyContact.addressInline} | ${companyContact.website}`
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
            Terms of <span className="text-accent">Service</span>
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
              These Terms of Service are subject to change at any time without notice. We encourage you to review this agreement periodically for updates. Your continued use of our services and website constitutes your acceptance of any changes made to these Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
