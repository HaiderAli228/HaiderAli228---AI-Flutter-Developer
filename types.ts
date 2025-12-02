import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  stats?: string[];
  challenge: string;
  solution: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  ACHIEVEMENTS = 'achievements',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  GOALS = 'goals',
  CONTACT = 'contact'
}