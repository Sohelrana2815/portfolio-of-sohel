export interface PersonalInfo {
  firstName: string;
  lastName: string;
  age: string;
  nationality: string;
  freelance: string;
  address: string;
  phone: string;
  email: string;
  skype: string;
  languages: string;
  cvUrl: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface SkillItem {
  id: number;
  label: string;
  value: number;
}

export interface TimelineItem {
  id: number;
  type: "experience" | "education";
  startYear: string;
  endYear: string;
  title: string;
  org: string;
  description: string;
}
