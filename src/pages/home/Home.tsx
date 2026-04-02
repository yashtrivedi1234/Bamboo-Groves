import React from "react";
import { motion } from "motion/react";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import OurPresenceSection from "./components/OurPresenceSection";
import FeaturesSection from "./components/FeaturesSection";
import GrowWithUsSection from "./components/GrowWithUsSection";
import VisionSection from "./components/VisionSection";

// Reusable reveal wrapper — har section ke liye
const SectionReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}> = ({ children, delay = 0, direction = "up" }) => {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 50 : 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    scale: 0.97,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero — apna animation khud handle karta hai */}
      <HeroSection />

      {/* AboutUs — right se slide in */}
      <SectionReveal direction="right">
        <AboutUsSection />
      </SectionReveal>

      {/* GrowWith — bottom se fade up */}
      {/* <SectionReveal direction="up" delay={0.05}>
        <GrowWithUsSection />
      </SectionReveal> */}

      {/* Features — left se slide in */}
      <SectionReveal direction="left">
        <FeaturesSection />
      </SectionReveal>

      {/* OurPresence — scale + fade */}
      <SectionReveal direction="up" delay={0.08}>
        <OurPresenceSection />
      </SectionReveal>

      {/* Vision — up with slight delay */}
      <SectionReveal direction="up" delay={0.1}>
        <VisionSection />
      </SectionReveal>
    </div>
  );
};

export default Home;