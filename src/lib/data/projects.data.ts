// ------------------------------------------------------------------ //
//  Tech-stack icon identifiers                                        //
//  We use lucide-react icons + custom SVG for brand marks.            //
// ------------------------------------------------------------------ //

export type TechId =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "mongodb"
  | "nodejs"
  | "express"
  | "firebase"
  | "redux"
  // | "stripe"
  | "html"
  | "css"
  | "javascript";

export interface TechItem {
  id: TechId;
  label: string;
  color: string; // badge bg color
}

/** Shared tech catalogue — keeps labels & colors in one place. */
export const TECH_CATALOG: Record<TechId, TechItem> = {
  nextjs: { id: "nextjs", label: "Next.js", color: "#000000" },
  react: { id: "react", label: "React", color: "#61DAFB" },
  typescript: { id: "typescript", label: "TypeScript", color: "#3178C6" },
  tailwind: { id: "tailwind", label: "Tailwind CSS", color: "#06B6D4" },
  mongodb: { id: "mongodb", label: "MongoDB", color: "#47A248" },
  nodejs: { id: "nodejs", label: "Node.js", color: "#339933" },
  express: { id: "express", label: "Express", color: "#444444" },
  firebase: { id: "firebase", label: "Firebase", color: "#FFCA28" },
  redux: { id: "redux", label: "Redux", color: "#764ABC" },
  // stripe: { id: "stripe", label: "Stripe", color: "#635BFF" },
  html: { id: "html", label: "HTML5", color: "#E34F26" },
  css: { id: "css", label: "CSS3", color: "#1572B6" },
  javascript: { id: "javascript", label: "JavaScript", color: "#F7DF1E" },
};

// ------------------------------------------------------------------ //
//  Project type                                                       //
// ------------------------------------------------------------------ //

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  techStack: TechId[];
  role: string;
  features: string[];
  longDescription: string; // markdown
}

// ------------------------------------------------------------------ //
//  Data                                                                //
// ------------------------------------------------------------------ //

const projects: Project[] = [
  {
    id: 1,
    title: "Malware Removal & Cybersecurity Service Website",
    slug: "malware-removal-website",
    description:
      "A professional service website built for MalwareRemoval.us to help businesses and website owners understand cybersecurity threats, explore malware removal services, and get expert assistance. The website focuses on a clean user experience, clear service presentation, trust-building content, and conversion-focused design.",
    image:
      "https://res.cloudinary.com/dt683zwm2/image/upload/v1786987098/Client-Project_fxnjh2.png",
    liveUrl: "https://www.malwareremoval.us/",
    repoUrl: "",
    techStack: ["react", "tailwind", "javascript"],
    role: "Full-Stack Developer",
    features: [
      "Professional cybersecurity and malware removal service presentation",
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Service-focused pages designed to clearly communicate solutions",
      "Conversion-focused layouts with clear calls to action",
      "SEO-friendly page structure and content presentation",
      "Clean and modern UI focused on building customer trust",
    ],
    longDescription: `## Project Overview

MalwareRemoval.us is a professional cybersecurity service website created for a client that provides malware removal and website security solutions.

## The Challenge

The client needed a professional online presence that could clearly communicate their malware removal and cybersecurity services while building trust with potential customers. The website also needed to make it easy for visitors to understand the services and take the next step toward getting help.

## The Solution

I designed and developed a modern, responsive website focused on presenting the client's cybersecurity services in a clear and professional way.

The website provides visitors with:

1. **Clear service information** — visitors can quickly understand the malware removal and website security services offered.
2. **Trust-focused presentation** — professional layouts and structured content help establish credibility with potential clients.
3. **Responsive experience** — the website is optimized for different screen sizes and devices.
4. **Conversion-focused design** — strategically placed calls to action make it easier for visitors to contact the business and request assistance.

## My Contribution

I was responsible for designing and developing the website, implementing reusable UI components, creating responsive layouts, structuring the service pages, and optimizing the overall user experience.

## Technical Highlights

- **React** for building reusable and maintainable UI components
- **Tailwind CSS** for responsive and modern styling
- Responsive layouts optimized for desktop, tablet, and mobile
- SEO-friendly page structure
- Conversion-focused service presentation
- Clean component-driven frontend architecture`,
  },
  {
    id: 2,
    title: "End-to-End Delivery Management System",
    slug: "delivery-management-system",
    description:
      "A complete solution for businesses to manage logistics, from automated parcel booking to real-time tracking, designed to increase operational efficiency and customer trust.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project2_fdq93a.webp",
    liveUrl: "https://l2-b5-a6-courier-pro-api-frontend.vercel.app",
    repoUrl: "https://github.com/Sohelrana2815/courier-pro-frontend",
    techStack: [
      "nextjs",
      "typescript",
      "tailwind",
      "mongodb",
      "nodejs",
      "express",
    ],
    role: "Full-Stack Developer",
    features: [
      "Automated parcel booking with real-time status tracking",
      "Role-based dashboards for admins, riders, and customers",
      "Integrated payment gateway for COD and prepaid orders",
      "Analytics dashboard with delivery performance metrics",
      "Responsive design optimized for mobile field operations",
    ],
    longDescription: `## Project Overview

This delivery management platform was built to solve a critical pain point for local logistics businesses — managing parcels end-to-end without relying on expensive third-party software.

## The Problem

Small courier businesses in Bangladesh were tracking orders via phone calls and spreadsheets. This caused lost parcels, delayed notifications, and zero visibility for end customers.

## The Solution

I designed and built a full-stack platform that covers the entire delivery lifecycle:

1. **Parcel booking** — merchants can create shipment requests with auto-generated tracking IDs.
2. **Real-time tracking** — customers receive status updates as parcels move through hub, dispatch, and delivery stages.
3. **Admin control panel** — a data-driven dashboard for assigning riders, monitoring KPIs, and managing hubs.
4. **Rider app interface** — mobile-optimized views for riders to scan, update, and complete deliveries on the go.

## Technical Highlights

- Server-side rendering with **Next.js** for blazing-fast page loads
- **MongoDB** with optimized indexes for high-volume parcel queries
- RESTful API built with **Express.js** and JWT-based authentication
- Responsive UI with **Tailwind CSS** — works flawlessly on phones and desktops`,
  },
  {
    id: 3,
    title: "Smart Tour Booking & Guide Marketplace",
    slug: "smart-tour-booking",
    description:
      "A comprehensive travel ecosystem connecting adventurous tourists with verified local guides. Features include secure automated payments, real-time booking management, and data-driven dashboards for service providers to track their growth.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763201/project1_luwbtm.webp",
    liveUrl: "https://root-guide-frontend.vercel.app",
    repoUrl: "https://github.com/Sohelrana2815/root-guide-frontend",
    techStack: ["react", "tailwind", "mongodb", "nodejs", "express"],
    role: "Full-Stack Developer",
    features: [
      "Guide verification and profile management system",
      "Secure Stripe-powered payment processing",
      "Real-time booking calendar with availability management",
      "Review and rating system for quality assurance",
      "Admin dashboard with revenue analytics and user management",
    ],
    longDescription: `## Project Overview

Root Guide connects tourists with verified local guides, creating a trusted marketplace for authentic travel experiences.

## The Problem

Tourists struggle to find reliable local guides, and independent guides lack a professional platform to showcase their services and manage bookings efficiently.

## The Solution

I built a two-sided marketplace that serves both tourists and guides:

1. **For tourists** — browse verified guides by location, read reviews, check availability, and book instantly with secure sslcommerz payments.
2. **For guides** — create professional profiles, manage their calendar, track earnings, and build reputation through reviews.
3. **For admins** — verify guide applications, monitor transactions, and access analytics dashboards.

## Technical Highlights

- **React** frontend with component-driven architecture for reusability
- **Stripe integration** for secure, PCI-compliant payment processing
- **MongoDB** with aggregation pipelines for analytics dashboards
- Role-based access control (Tourist / Guide / Admin) with JWT authentication`,
  },
];

export { projects };
