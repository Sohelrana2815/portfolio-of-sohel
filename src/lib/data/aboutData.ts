import type {
  PersonalInfo,
  StatItem,
  SkillItem,
  TimelineItem,
} from "@/types/about";

export const personalInfo: PersonalInfo = {
  firstName: "Sohel",
  lastName: "Rana",
  age: "24 Years",
  nationality: "Bangladeshi",
  freelance: "Available",
  address: "Savar, Dhaka, Bangladesh",
  Whatsapp: "+8801998838992",
  email: "sohelrana31006@mail.com",
  Twitter: "@SOHELRANA821823",
  languages: "English, Bangla",
  cvUrl: "/resume.pdf",
};

export const stats: StatItem[] = [
  { id: 1, value: "3", label: "YEARS OF\nEXPERIENCE" },
  { id: 2, value: "20", label: "COMPLETED\nPROJECTS" },
  { id: 3, value: "10", label: "HAPPY\nCLIENTS" },
  { id: 4, value: "100", label: "PROBLEMS\nSOLVED" },
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
    startYear: "2020",
    endYear: "Present",
    title: "Policy Tech Developer & Freelance Web Developer",
    org: "Self-Employed / Various Clients",
    description:
      "Developing specialized policy-driven technical solutions and delivering high-quality full-stack websites for a diverse global clientele.",
  },
  {
    id: 2,
    type: "experience", // Added a new type for recognitions
    startYear: "2023",
    endYear: "2023",
    title: "Full-Stack Web Development Certification",
    org: "Programming Hero",
    description:
      "Awarded for successfully completing the intensive full-stack development curriculum and delivering multiple high-fidelity web projects.",
  },
  {
    id: 3,
    type: "experience",
    startYear: "2023",
    endYear: "2024",
    title: "Software Development Intern",
    org: "ITransition",
    description:
      "Transitioned theoretical knowledge into enterprise-level applications during an intensive commercial software development internship.",
  },
  {
    id: 4,
    type: "experience",
    startYear: "2021",
    endYear: "2023",
    title: "Network Professional",
    org: "PS8 Network (India)",
    description:
      "Contributed to the maintenance, scalability, and technical operations of network infrastructure for a prominent firm.",
  },
  {
    id: 5,
    type: "education",
    startYear: "2016",
    endYear: "2020",
    title: "B.A. in Islamic Studies",
    org: "National University",
    description:
      "Comprehensive academic study of Islamic principles, law, and history, fostering strong analytical and research capabilities.",
  },
];
