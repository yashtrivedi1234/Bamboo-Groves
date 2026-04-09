import React from 'react';

type SectionHeadingProps = {
  label?: string;
  title: string;
  centered?: boolean;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, centered = false }) => (
  <div className={centered ? 'text-center' : ''}>
    {label && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#88ab32]">
        {label}
      </p>
    )}
    <h2 className="normal-case text-3xl font-bold tracking-[0.03em] text-[#f5f5f5] sm:text-4xl">
      {title}
    </h2>
    <div className={`mt-4 h-[2px] w-24 bg-[#88ab32] ${centered ? 'mx-auto' : ''}`} />
  </div>
);

export default SectionHeading;
