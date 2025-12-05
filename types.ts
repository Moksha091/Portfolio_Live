
export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}