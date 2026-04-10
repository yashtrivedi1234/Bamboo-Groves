import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type RevealSectionProps = {
  id?: string;
  className?: string;
  observerOptions?: IntersectionObserverInit;
  children: React.ReactNode;
};

const RevealSection: React.FC<RevealSectionProps> = ({
  id,
  className = '',
  observerOptions,
  children,
}) => {
  const { targetRef, isVisible } = useIntersectionObserver<HTMLElement>(observerOptions);

  return (
    <section
      id={id}
      ref={targetRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default RevealSection;
