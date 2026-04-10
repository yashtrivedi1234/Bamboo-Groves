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

export type CompanyEvent = {
  id: string;
  location: string;
  image: string;
  alt?: string;
};

export type CompanyEventGroup = {
  companyName: string;
  events: CompanyEvent[];
};
