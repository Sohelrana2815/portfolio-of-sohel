import type {
  PersonalInfo,
  StatItem,
  SkillItem,
  TimelineItem,
} from "@/types/about";

export const personalInfo: PersonalInfo = {
  firstName: "MD. Sohel Rana",
  lastName: "Rana",
  address: "Dhaka, Bangladesh",
  Whatsapp: "+8801998838992",
  email: "sohelranamoon.dev@gmail.com",
  language: "English",
  focus: "Full Stack Web Development",
  interests: "Debugging, Problem Solving",
  availability: "Open to opportunities",
  cvUrl: "/resume.pdf",
};
export const stats: StatItem[] = [
  { id: 1, value: "3+", label: "CLIENT PROJECTS\nCOMPLETED" },
  { id: 2, value: "1+", label: "YEARS OF\nExperience" },
  // { id: 3, value: "10", label: "HAPPY\nCLIENTS" },
  // { id: 3, value: "", label: "Full Stack \nSOLVED" },
];

export const skills: SkillItem[] = [
  { id: 1, label: "JAVASCRIPT", value: 87 },
  { id: 12, label: "TYPESCRIPT", value: 93 },
  { id: 2, label: "REACT", value: 90 },
  { id: 3, label: "NEXT.JS", value: 82 },
  { id: 4, label: "REDUX", value: 80 },
  { id: 5, label: "POSTGRESQL", value: 85 },
  { id: 6, label: "MongoDB", value: 83 },
  { id: 11, label: "PRISMA", value: 93 },
  { id: 7, label: "NODE.JS", value: 90 },
  { id: 8, label: "EXPRESS", value: 85 }, // ADDED EXPRESS
  { id: 9, label: "CSS", value: 93 },
  { id: 10, label: "TAILWIND", value: 93 },
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    type: "experience",
    startYear: "May 2025",
    endYear: "July 2025",
    title: "Commercial Software Development – JavaScript",
    org: "Itransition",
    description:
      "Completed a remote Commercial Software Development program focused on JavaScript, where I worked on practical projects and gained hands-on experience in real-world software development. Successfully completed the program and received a certificate from Itransition.",
  },

  {
    id: 2,
    type: "experience",
    startYear: "November 2025",
    endYear: "December 2025",
    title: "Make Portfolio Website for Company",
    org: "Freelance Client",
    description:
      "Designed and developed a professional personal portfolio website for a company CEO to showcase his professional profile, company, achievements, and services through a modern and user-friendly web experience.",
  },
];
