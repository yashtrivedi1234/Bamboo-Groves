import {
  Camera,
  Hammer,
  Megaphone,
  MonitorPlay,
  Printer,
  ShieldCheck,
  Star,
  Theater,
  Trophy,
  Volume2,
} from 'lucide-react';
import aboutEventImage from '../../assets/events/about.webp';
import corporateEventImage from '../../assets/events/corporate.webp';
import socialEventImage from '../../assets/events/social.webp';
import type { CompanyEventGroup, ProcessStep, ServiceItem } from './types';

export const serviceItems: ServiceItem[] = [
  { icon: Theater, title: 'Stage & Set Design', description: 'Creative stage concepts with custom decor.' },
  {
    icon: Hammer,
    title: 'Exhibition & Stall Fabrication',
    description: 'Booth design, technical layouts, and seamless installation.',
  },
  { icon: Volume2, title: 'Lighting & Sound Systems', description: 'Professional AV systems for all event scales.' },
  { icon: MonitorPlay, title: 'LED Video Walls & Screens', description: 'Crisp visual displays for brand and entertainment.' },
  { icon: Camera, title: 'Photography & Videography', description: 'Complete event media coverage and post-editing.' },
  { icon: Printer, title: 'Printing Solutions', description: 'Banners, backdrops, and in-house fabrication output.' },
  { icon: Trophy, title: 'Awards & Gifting Solutions', description: 'Customized trophies, mementos, and corporate gifts.' },
  { icon: Star, title: 'Celebrity & Artist Management', description: 'Talent booking and entertainment curation support.' },
  { icon: ShieldCheck, title: 'Security & Event Staffing', description: 'Trained teams for safe and smooth event operations.' },
  { icon: Megaphone, title: 'Outdoor Publicity', description: 'Hoardings, kiosks, glow signs, banners, and festival arches.' },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Venue',
    description: 'We source venue options that match audience size, logistics, and experience goals.',
  },
  {
    number: '02',
    title: 'General Concept',
    description: 'We define the thematic direction, visual language, and show narrative.',
  },
  {
    number: '03',
    title: 'Booths Design & Fabrication',
    description: 'We produce technical drawings and fabricate structures for exhibition impact.',
  },
  {
    number: '04',
    title: 'Stage & Decorations',
    description: 'We design and build stage environments and decor with in-house execution.',
  },
  {
    number: '05',
    title: 'AV Equipment',
    description: 'We deploy turnkey lighting, sound, LED, and control systems.',
  },
  {
    number: '06',
    title: 'Video Content',
    description: 'We create 2D and 3D motion assets for screens, intros, and brand storytelling.',
  },
  {
    number: '07',
    title: 'Awards & Gift Items',
    description: 'Custom made awards and gift items from Bamboo Groves Pvt. Ltd available now',
  },
];

export const inHouseCapabilities = [
  'In-house Set & Decor',
  'Video LED Wall',
  'Photographer & Videographer',
  'Printing & In-house Fabrication',
  'In-house Technical Sound & Light',
  'Celebrity Engagement',
  'Anchors / Entertainers',
  'Security Services',
  'Administrative & Other Mandatory Approvals',
  'Outdoor Publicity (Hoardings / Glow Signs / Kiosks / Banners / In-shop Board / Festival Arch Gate)',
];

export const accordionSections = {
  pre: {
    title: 'Pre-Event Planning',
    items: [
      'Budget creation and management',
      'Detailed critical path and timeline planning',
      'Venue booking and contract negotiation',
      'Event management, design, and marketing',
      'Online registration setup and management',
      'Floor plan layout and decor planning',
      'Menu creation specific to your event',
      'Execution mapping for every event detail',
    ],
  },
  onsite: {
    title: 'Onsite Management & Post Event',
    items: [
      'Volunteer and support crew management',
      'Onsite setup and day-of event control',
      'Detailed timelines, show flow, and MC script support',
      'Friendly, trained, and accountable staff',
      'Stage management and run-of-show coordination',
    ],
  },
};

export const clientCompanies = [
  'Tata Group',
  'Reliance Industries',
  'Infosys',
  'HDFC Bank',
  'Wipro',
  'ITC',
  'Mahindra & Mahindra',
  'Bajaj Auto',
];

export const workEventGroups: CompanyEventGroup[] = [
  {
    companyName: 'Tata Group',
    events: [
      {
        id: 'tata-mumbai-annual-meet',
        location: 'Mumbai',
        image: corporateEventImage,
        alt: 'Tata Group annual corporate event in Mumbai',
      },
      {
        id: 'tata-pune-awards-night',
        location: 'Pune',
        image: aboutEventImage,
        alt: 'Tata Group awards night in Pune',
      },
      {
        id: 'tata-ahmedabad-leadership-summit',
        location: 'Ahmedabad',
        image: socialEventImage,
        alt: 'Tata Group leadership summit in Ahmedabad',
      },
    ],
  },
  {
    companyName: 'Infosys',
    events: [
      {
        id: 'infosys-bengaluru-townhall',
        location: 'Bengaluru',
        image: socialEventImage,
        alt: 'Infosys townhall event in Bengaluru',
      },
      {
        id: 'infosys-hyderabad-product-launch',
        location: 'Hyderabad',
        image: corporateEventImage,
        alt: 'Infosys product launch event in Hyderabad',
      },
    ],
  },
  {
    companyName: 'Reliance Industries',
    events: [
      {
        id: 'reliance-delhi-brand-showcase',
        location: 'New Delhi',
        image: aboutEventImage,
        alt: 'Reliance Industries brand showcase in New Delhi',
      },
      {
        id: 'reliance-mumbai-sales-conclave',
        location: 'Mumbai',
        image: corporateEventImage,
        alt: 'Reliance Industries sales conclave in Mumbai',
      },
      {
        id: 'reliance-jaipur-partner-meet',
        location: 'Jaipur',
        image: socialEventImage,
        alt: 'Reliance Industries partner meet in Jaipur',
      },
    ],
  },
  {
    companyName: 'Mahindra & Mahindra',
    events: [
      {
        id: 'mahindra-nagpur-dealer-event',
        location: 'Nagpur',
        image: corporateEventImage,
        alt: 'Mahindra and Mahindra dealer event in Nagpur',
      },
      {
        id: 'mahindra-indore-recognition-night',
        location: 'Indore',
        image: aboutEventImage,
        alt: 'Mahindra and Mahindra recognition night in Indore',
      },
    ],
  },
];
