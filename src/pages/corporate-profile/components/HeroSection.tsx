import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-[#88ab32]/15 bg-[#0a0a0a] px-5 pt-20 sm:px-10">

      {/* ── Background Image ── */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* ── Dark overlay for readability ── */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/72" />

      {/* ── Grid + glow overlays ── */}
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(136,171,50,0.08)_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(136,171,50,0.15),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.1),transparent_38%)]" />
      </div>

      {/* ── Main Content ── */}
      <div
        className={`relative z-10 mx-auto max-w-5xl text-center transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#88ab32] sm:text-sm">
          India&apos;s Premier Event Solutions
        </p>
        <h1 className="normal-case text-2xl leading-tight text-[#f5f5f5] sm:text-3xl lg:text-4xl">
          We Create Experiences That Last Forever
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          From concept to execution, Bamboo Groves delivers stages, exhibitions, AV, media,
          publicity, and end-to-end event experiences across India.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#works"
            className="w-full rounded-full border border-[#88ab32] bg-[#88ab32] px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0a] transition hover:bg-[#a4c34f] sm:w-auto"
          >
            Explore Our Work
          </a>
          <Link
            to="/contact"
            className="w-full rounded-full border border-[#88ab32]/70 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5] transition hover:border-[#a4c34f] hover:text-[#a4c34f] sm:w-auto"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center text-[10px] uppercase tracking-[0.22em] text-white/55 transition hover:text-[#a4c34f]"
      >
        Scroll
        <ChevronDown className="mt-1 h-4 w-4" />
      </a>
    </section>
  );
};

export default HeroSection;