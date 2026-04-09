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
import type { ProcessStep, ServiceItem, WorkItem } from './types';

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

export const workItems: WorkItem[] = [
  {
    title: 'Annual Corporate Gala',
    category: 'Corporate Events',
    gradient: 'from-[#1e2b12] via-[#151f0d] to-[#0b1008]',
  },
  {
    title: 'Product Launch 2024',
    category: 'Product Launch',
    gradient: 'from-[#243314] via-[#1b260f] to-[#0d1208]',
  },
  {
    title: 'Exhibition Stall - TechExpo',
    category: 'Exhibition',
    gradient: 'from-[#20301a] via-[#131d10] to-[#0a1009]',
  },
  {
    title: 'LED Stage Production',
    category: 'Stage Design',
    gradient: 'from-[#23301d] via-[#182114] to-[#0d130b]',
  },
  {
    title: 'Award Night Ceremony',
    category: 'Awards',
    gradient: 'from-[#2d3f1a] via-[#1f2c12] to-[#101708]',
  },
  {
    title: 'Outdoor Hoarding Campaign',
    category: 'Outdoor Publicity',
    gradient: 'from-[#223224] via-[#17231a] to-[#0d150e]',
  },
];
