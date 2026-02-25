import type {
    PersonalInfo,
    StatItem,
    SkillItem,
    TimelineItem,
} from "@/types/about";

export const personalInfo: PersonalInfo = {
    firstName: "Steve",
    lastName: "Milner",
    age: "27 Years",
    nationality: "Tunisian",
    freelance: "Available",
    address: "Tunis",
    phone: "+21621184010",
    email: "you@mail.com",
    skype: "steve.milner",
    languages: "French, English",
    cvUrl: "/resume.pdf",
};

export const stats: StatItem[] = [
    { id: 1, value: "12", label: "YEARS OF\nEXPERIENCE" },
    { id: 2, value: "97", label: "COMPLETED\nPROJECTS" },
    { id: 3, value: "81", label: "HAPPY\nCUSTOMERS" },
    { id: 4, value: "53", label: "AWARDS\nWON" },
];

export const skills: SkillItem[] = [
    { id: 1, label: "HTML", value: 25 },
    { id: 2, label: "JAVASCRIPT", value: 89 },
    { id: 3, label: "CSS", value: 70 },
    { id: 4, label: "PHP", value: 66 },
    { id: 5, label: "WORDPRESS", value: 95 },
    { id: 6, label: "JQUERY", value: 50 },
    { id: 7, label: "ANGULAR", value: 65 },
    { id: 8, label: "REACT", value: 45 },
];

export const timeline: TimelineItem[] = [
    {
        id: 1,
        type: "experience",
        startYear: "2018",
        endYear: "Present",
        title: "WEB DEVELOPER",
        org: "ENVATO",
        description:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
        id: 2,
        type: "experience",
        startYear: "2013",
        endYear: "2018",
        title: "UI/UX DESIGNER",
        org: "THEMEFOREST",
        description:
            "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.",
    },
    {
        id: 3,
        type: "experience",
        startYear: "2005",
        endYear: "2013",
        title: "CONSULTANT",
        org: "VIDEOHIVE",
        description:
            "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur, sed do eiusmod tempor duntt.",
    },
    {
        id: 4,
        type: "education",
        startYear: "2015",
        endYear: "2015",
        title: "ENGINEERING DEGREE",
        org: "OXFORD UNIVERSITY",
        description:
            "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.",
    },
    {
        id: 5,
        type: "education",
        startYear: "2012",
        endYear: "2012",
        title: "MASTER DEGREE",
        org: "KIEV UNIVERSITY",
        description:
            "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.",
    },
    {
        id: 6,
        type: "education",
        startYear: "2009",
        endYear: "2009",
        title: "BACHELOR DEGREE",
        org: "TUNIS HIGH SCHOOL",
        description:
            "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur, sed do eiusmod tempor duntt.",
    },
];
