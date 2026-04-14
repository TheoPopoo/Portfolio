export interface PersonalInfo {
  name: string;
  title: string;
  status: string;
  objective: string;
  description: string;
  avatar: string;
}

export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Degree {
  degree: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degrees: Degree[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface Hobby {
  id: number;
  name: string;
  type: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  details?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  education: Education[];
  experience: Experience[];
  contact: Contact;
  skills: string[];
  skillCategories: SkillCategory[];
  hobbies?: Hobby[];
  languages?: Language[];
  certifications?: Certification[];
}