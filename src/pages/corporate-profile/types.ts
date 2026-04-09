import React from 'react';

export type ServiceItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type WorkItem = {
  title: string;
  category: string;
  gradient: string;
};
