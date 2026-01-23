import type { NavLink, SocialLink, Skill, Service, Project, Testimonial } from '../types';

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anafuwe-caleb-ifeanyi-27a868269',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Anafuwecal',
    icon: 'github',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/caleb_techbytes',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/calebdev2026',
    icon: 'instagram',
  },
];

// Skills Data
export const SKILLS: Skill[] = [
  { name: 'OpenAI API / LLMs', percentage: 80, category: 'ai' },
  { name: 'Typescript', percentage: 82, category: 'ai' },
  { name: 'Python', percentage: 52, category: 'ai' },
  { name: 'Natural Language Processing (NLP)', percentage: 50, category: 'ai' },
  { name: 'Canva', percentage: 80, category: 'graphics' },
  { name: 'Adobe Photoshop', percentage: 62, category: 'graphics' },
  { name: 'CorelDRAW', percentage: 50, category: 'graphics' },
  { name: 'React.js', percentage: 75, category: 'fullstack' },
  { name: 'Vue.js', percentage: 95, category: 'fullstack' },
  { name: 'Next.js', percentage: 60, category: 'fullstack' },
  { name: 'Express.js', percentage: 90, category: 'fullstack' },
  { name: 'JavaScript', percentage: 95, category: 'fullstack' },
  { name: 'MongoDB', percentage: 88, category: 'fullstack' },
  { name: 'PostgreSQL', percentage: 85, category: 'fullstack' },
  { name: 'Firebase', percentage: 87, category: 'fullstack' },
  { name: 'Tailwind CSS', percentage: 92, category: 'fullstack' },
  { name: 'REST APIs', percentage: 90, category: 'fullstack' },
  { name: 'Git & GitHub', percentage: 90, category: 'fullstack' },
  { name: 'Node.js', percentage: 95, category: 'fullstack' },
  { name: 'TypeScript', percentage: 88, category: 'fullstack' },
  { name: 'Database Management', percentage: 70, category: 'fullstack' },
  { name: 'Cloud Services', percentage: 70, category: 'fullstack' },
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'AI Solutions',
    description: 'Custom AI solutions to automate processes, gain insights, and drive innovation in your business.',
    icon: 'brain',
    features: [
      'Natural Language Processing',
      'Automations',
    //  'Computer Vision',
    //  'Predictive Analytics',
      'AI Chatbots/Agents',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern technologies and best practices for scalable solutions.',
    icon: 'code',
    features: [
      'React.js & Next.js',
      'Node.js & Express',
      'Database Design',
      'API Development',
      'Cloud Deployment',
    ],
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creative visual solutions that communicate your brand message effectively and leave lasting impressions.',
    icon: 'palette',
    features: [
    //  'Brand Identity',
    //  'Logo Design',
      'Marketing Materials',
      'Social Media Graphics',
      'Thumbnail design',
    ],
  },
  /*{
    id: 5,
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications that deliver native-like performance and user experience.',
    icon: 'smartphone',
    features: [
      'React Native',
      'Flutter',
      'iOS & Android',
      'App Store Optimization',
      'Push Notifications',
    ],
  },*/
  {
    id: 6,
    title: 'Consulting',
    description: 'Strategic technology consulting to help you make informed decisions and achieve your business goals.',
    icon: 'users',
    features: [
      'Technical Architecture',
      'Code Review',
      'Team Training',
      'Process Optimization',
      'Tech Stack Selection',
    ],
  },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Real-time Chatbot',
    description: 'A full-stack friendly AI assistant chatbot application',
    image: '/assets/images/Ron assistant.png',
    stacks: ['Vue', 'Node.js', 'Javascript', 'Firebase', 'Render'],
    githubUrl: 'https://github.com/Anafuwecal/-ron-assistant',
    liveUrl: 'https://ron-assistant-1.vercel.app/auth',
    category: 'ai',
  },
/*  {
    id: 2,
    title: 'Smart Document Analyzer',
    description: 'NLP-based document analysis tool that extracts insights, summarizes content, and categorizes documents automatically.',
    image: '/assets/images/projects/document-analyzer.jpg',
    stacks: ['Python', 'FastAPI', 'Hugging Face', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/caleb-anafuwe/doc-analyzer',
    liveUrl: 'https://doc-analyzer-demo.vercel.app',
    category: 'ai',
  },*/
  {
    id: 3,
    title: 'Advert Flyer Design',
    description: 'Complete brand identity design for a Fast-food including logo, color palette, typography, and marketing materials.',
    image: '/assets/images/portfolio/Megafrost.png',
    stacks: ['Canva', 'Adobe Photoshop'],
    githubUrl: '',
    liveUrl: '',
    category: 'design',
  },
  {
    id: 4,
    title: 'Currency Exchange App',
    description: 'AI-feautured Cross-border currency Exchange platform, That supports up to five Countries  .',
    image: '/assets/images/portfolio/Currency-Fuse.png',
    stacks: ['Vue', 'Typescript', 'Node.js', 'Prisma', 'Supabase', ''],
    githubUrl: 'https://github.com/',
    liveUrl: '',
    category: 'web',
  },
  /*{
    id: 5,
    title: 'AI Image Generator',
    description: 'Creative AI tool that generates unique images from text descriptions using advanced diffusion models.',
    image: '/assets/images/projects/image-generator.jpg',
    stacks: ['Python', 'Stable Diffusion', 'FastAPI', 'React', 'Docker'],
    githubUrl: 'https://github.com/caleb-anafuwe/ai-image-gen',
    liveUrl: 'https://ai-image-gen-demo.vercel.app',
    category: 'ai',
  },*/
  {
    id: 6,
    title: 'Portfolio Template Collection',
    description: 'Collection of modern, responsive portfolio templates for Manager and designers with customization options.',
    image: '/assets/images/portfolio/ngozi.port.png',
    stacks: ['Vue', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    githubUrl: 'https://github.com/Anafuwecal/ngozi-portfolio',
    liveUrl: 'https://ngozi-portfolio.vercel.app/',
    category: 'web',
  },
  {
    id: 7,
    title: 'Web Portfolio Template',
    description: 'Modern, Software Engineer responsive portfolio templates.',
    image: '/assets/images/portfolio/Web port.png',
    stacks: ['React', 'Tailwind CSS', 'Firebase', 'TypeScript'],
    githubUrl: 'https://github.com/Anafuwecal/Caleb-dev',
    liveUrl: 'https://calebana.vercel.app/about',
    category: 'web',
  },
];

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  /*{
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    quote: 'Caleb delivered an exceptional AI solution that transformed our customer service. His expertise and professionalism are unmatched.',
    logo: '/assets/images/logos/techstart.png',
    avatar: '/assets/images/avatars/sarah.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'InnovateLab',
    quote: 'Working with Caleb was a game-changer for our product. His full-stack skills and attention to detail resulted in a flawless application.',
    logo: '/assets/images/logos/innovatelab.png',
    avatar: '/assets/images/avatars/michael.jpg',
  },*/
  {
    id: 3,
    name: 'Divine Azubuike',
    position: 'Founder',
    company: 'Megafrost Foods',
    quote: 'The brand identity Caleb created for us perfectly captured our vision. Creative, professional, and delivered on time!',
    logo: '/assets/images/logo/Mega.png',
    avatar: '/assets/images/logo/Mega.png',
  },
 /* {
    id: 4,
    name: 'David Okonkwo',
    position: 'CTO',
    company: 'DataFlow Systems',
    quote: 'Caleb\'s AI expertise helped us build a predictive analytics platform that exceeded our expectations. Highly recommended!',
    logo: '/assets/images/logos/dataflow.png',
    avatar: '/assets/images/avatars/david.jpg',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    position: 'Founder',
    company: 'CreativeHub',
    quote: 'From design to development, Caleb handled everything with excellence. Our platform looks amazing and performs flawlessly.',
    logo: '/assets/images/logos/creativehub.png',
    avatar: '/assets/images/avatars/lisa.jpg',
  },*/
];

// Contact Info
export const CONTACT_INFO = {
  email: 'anafuwecalebifeanyi@gmail.com',
  phone: '+2348132825644',
  location: 'Nigeria',
  serviceFormUrl: 'https://service-request-form-alpha.vercel.app/',
};

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
};