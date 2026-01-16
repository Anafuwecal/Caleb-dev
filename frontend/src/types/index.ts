// Navigation Types
export interface NavLink {
  name: string;
  path: string;
}

// Social Links Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Skill Types
export interface Skill {
  name: string;
  percentage: number;
  category: 'ai' | 'graphics' | 'fullstack';
}

// Service Types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  stacks: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'ai' | 'design';
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  logo: string;
  avatar: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  country: string;
  message: string;
}

// Newsletter Types
export interface NewsletterData {
  email: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

