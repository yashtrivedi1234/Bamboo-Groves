import React from 'react';
import AboutSection from './corporate-profile/components/AboutSection';
import ClienteleSection from './corporate-profile/components/ClienteleSection';
import HeroSection from './corporate-profile/components/HeroSection';
import HowWeDoSection from './corporate-profile/components/HowWeDoSection';
import ServicesSection from './corporate-profile/components/ServicesSection';
import WhatWeDoSection from './corporate-profile/components/WhatWeDoSection';
import WorksSection from './corporate-profile/components/WorksSection';

const CorporateProfile: React.FC = () => {
  return (
    <main className="relative z-10 overflow-hidden bg-[#0a0a0a] text-[#f5f5f5]">
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <HowWeDoSection />
      <ServicesSection />
      <ClienteleSection />
      <WorksSection />
    </main>
  );
};

export default CorporateProfile;
