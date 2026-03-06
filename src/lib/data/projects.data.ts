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
  | "stripe"
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
  stripe: { id: "stripe", label: "Stripe", color: "#635BFF" },
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
    id: 2,
    title: "Smart Tour Booking & Guide Marketplace",
    slug: "smart-tour-booking",
    description:
      "A comprehensive travel ecosystem connecting adventurous tourists with verified local guides. Features include secure automated payments, real-time booking management, and data-driven dashboards for service providers to track their growth.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763201/project1_luwbtm.webp",
    liveUrl: "https://root-guide-frontend.vercel.app",
    repoUrl: "https://github.com/Sohelrana2815/root-guide-frontend",
    techStack: ["react", "tailwind", "mongodb", "nodejs", "express", "stripe"],
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

1. **For tourists** — browse verified guides by location, read reviews, check availability, and book instantly with secure Stripe payments.
2. **For guides** — create professional profiles, manage their calendar, track earnings, and build reputation through reviews.
3. **For admins** — verify guide applications, monitor transactions, and access analytics dashboards.

## Technical Highlights

- **React** frontend with component-driven architecture for reusability
- **Stripe integration** for secure, PCI-compliant payment processing
- **MongoDB** with aggregation pipelines for analytics dashboards
- Role-based access control (Tourist / Guide / Admin) with JWT authentication`,
  },
  {
    id: 3,
    title: "Wholesale-to-Retail E-commerce Ecosystem",
    slug: "ecommerce-ecosystem",
    description:
      "A robust digital storefront designed to transition traditional wholesale businesses into the global online market. This solution features a high-speed product discovery engine, integrated secure payment gateways, and a comprehensive back-office dashboard for real-time inventory tracking and sales analytics.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project5_wywzm8.webp",
    liveUrl: "https://glow-mart-bd.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/glow-mart-bd-client",
    techStack: [
      "react",
      "tailwind",
      "firebase",
      "mongodb",
      "nodejs",
      "express",
    ],
    role: "Full-Stack Developer",
    features: [
      "Product catalog with advanced search and filter functionality",
      "Shopping cart with persistent state management",
      "Firebase authentication with social login options",
      "Admin inventory management with real-time stock updates",
      "Order processing pipeline with status tracking",
    ],
    longDescription: `## Project Overview

GlowMart BD bridges the gap between traditional wholesale beauty businesses and the modern e-commerce landscape.

## The Problem

Local wholesale beauty product suppliers relied on walk-in customers and phone orders. They had no online presence and were losing market share to larger e-commerce platforms.

## The Solution

I created a complete e-commerce ecosystem with:

1. **Product discovery** — fast search, category filters, and sorting to help customers find products instantly.
2. **Seamless checkout** — add to cart, manage quantities, and complete purchases with secure payment integration.
3. **Inventory management** — back-office dashboard for suppliers to track stock levels, add products, and manage orders.
4. **Customer accounts** — Firebase-powered authentication with order history and wishlist features.

## Technical Highlights

- **React** with dynamic routing for a single-page application experience
- **Firebase** for authentication and real-time data synchronization
- **MongoDB** backend with **Express.js** REST API
- **Tailwind CSS** for a polished, responsive design across all devices`,
  },
  {
    id: 4,
    title: "Professional Freelance & Job Marketplace",
    slug: "freelance-marketplace",
    description:
      "A dynamic ecosystem designed to bridge the gap between businesses and talent. It features a sophisticated bidding engine, secure offer management, and categorized job listings to ensure the right experts find the right projects efficiently.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project4_h18djr.webp",
    liveUrl: "https://easy-hire-e14d3.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/easy-hire-front-end",
    techStack: [
      "react",
      "tailwind",
      "firebase",
      "mongodb",
      "nodejs",
      "express",
    ],
    role: "Full-Stack Developer",
    features: [
      "Job posting with category-based organization",
      "Bidding system for freelancers to submit proposals",
      "Secure offer management and acceptance workflow",
      "User profiles with portfolio and skill showcase",
      "Real-time notifications for bid updates and messages",
    ],
    longDescription: `## Project Overview

EasyHire is a freelance marketplace that connects businesses with skilled professionals through a structured bidding process.

## The Problem

Small businesses struggle to find affordable, quality freelancers. Existing platforms charge high fees and bury new freelancers under established competition.

## The Solution

1. **For employers** — post jobs with clear requirements, receive bids from qualified freelancers, and manage the entire hiring process in one place.
2. **For freelancers** — browse categorized listings, submit competitive bids, and build a professional profile with completed project showcases.
3. **Smart matching** — category-based organization ensures relevant job-freelancer pairing.

## Technical Highlights

- **React** with context API for efficient global state management
- **Firebase** authentication with email and Google sign-in
- **MongoDB** with optimized queries for fast job search and filtering
- RESTful API architecture with **Express.js** and proper error handling`,
  },
  {
    id: 5,
    title: "Premium Digital Media & Subscription Platform",
    slug: "digital-media-platform",
    description:
      "A high-traffic news aggregation portal featuring a sophisticated monetization engine. It includes automated subscription management, AI-driven trending content algorithms (based on user engagement), and a data-driven admin suite for content moderation and real-time audience insights.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772775068/project3_tyqbyr.webp",
    liveUrl: "https://daily-lens-90dd8.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/daily-lens-front-end",
    techStack: [
      "react",
      "tailwind",
      "firebase",
      "mongodb",
      "nodejs",
      "express",
    ],
    role: "Full-Stack Developer",
    features: [
      "Article publishing with rich text editor",
      "Subscription-based premium content access",
      "Trending articles algorithm based on engagement metrics",
      "Admin dashboard for content moderation and analytics",
      "Responsive reading experience optimized for all devices",
    ],
    longDescription: `## Project Overview

Daily Lens is a premium news platform that combines free and subscription content with data-driven content curation.

## The Problem

Independent news publishers need a way to monetize quality content while maintaining reader engagement and growing their audience.

## The Solution

1. **Content management** — journalists can publish, edit, and categorize articles with a rich text editor.
2. **Subscription engine** — readers can access free articles or subscribe for premium content with automated billing.
3. **Engagement analytics** — trending algorithm surfaces popular articles based on views, shares, and read time.
4. **Admin suite** — moderators manage content quality, user reports, and audience insights.

## Technical Highlights

- **React** frontend with optimized rendering for content-heavy pages
- **Firebase** for user authentication and subscription state management
- **MongoDB** aggregation pipelines for trending content calculations
- Responsive typography and reading experience with **Tailwind CSS**`,
  },
  {
    id: 6,
    title: "Interactive Learning Management & Grading System",
    slug: "learning-management-system",
    description:
      "A comprehensive educational ecosystem designed for seamless academic workflow. It features a dual-interface dashboard for students and educators, supporting real-time assignment tracking, automated grading triggers, and a structured feedback loop to enhance remote learning efficiency.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project6_zxkjhu.webp",
    liveUrl: "https://stydy-flow.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/study-flow-client",
    techStack: [
      "react",
      "tailwind",
      "firebase",
      "mongodb",
      "nodejs",
      "express",
    ],
    role: "Full-Stack Developer",
    features: [
      "Dual dashboards for students and educators",
      "Assignment creation, submission, and tracking system",
      "Automated grading with instructor feedback loop",
      "Course enrollment and progress monitoring",
      "Real-time notifications for deadlines and grade updates",
    ],
    longDescription: `## Project Overview

StudyFlow is a learning management system that streamlines academic workflows for both students and educators.

## The Problem

Remote learning requires a centralized platform where educators can distribute assignments, track submissions, and provide timely feedback — without juggling emails and spreadsheets.

## The Solution

1. **For students** — enroll in courses, view assignments with deadlines, submit work, and track grades in a clean dashboard.
2. **For educators** — create courses, publish assignments, review submissions, and provide structured feedback with grading.
3. **Progress tracking** — visual progress indicators for course completion and assignment status.

## Technical Highlights

- **React** with role-based routing for student and educator experiences
- **Firebase** authentication with protected route middleware
- **MongoDB** for flexible document storage of assignments and submissions
- Fully responsive with **Tailwind CSS** for mobile and desktop learning`,
  },
  {
    id: 7,
    title: "Culinary Resource & Kitchen Workflow Tracker",
    slug: "culinary-workflow-tracker",
    description:
      "A high-performance interface designed for kitchen operations. This solution utilizes a dynamic state-management system to track ingredients, prep times, and nutritional data in real-time, helping chefs organize workflows from Planned to In-Progress with zero friction.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project9_cyeqdq.webp",
    liveUrl: "https://present-jam.surge.sh/",
    repoUrl: "https://github.com/Sohelrana2815/food-corner",
    techStack: ["react", "javascript", "css", "firebase"],
    role: "Frontend Developer",
    features: [
      "Recipe catalog with ingredient lists and prep times",
      "Kitchen workflow board (Planned → In-Progress → Done)",
      "Nutritional data display per recipe",
      "Dynamic state management for real-time updates",
      "Clean, distraction-free cooking interface",
    ],
    longDescription: `## Project Overview

Food Corner is a kitchen workflow organizer that helps chefs and home cooks manage recipes and cooking tasks efficiently.

## The Problem

Home cooks and small kitchen teams often lose track of prep steps when managing multiple dishes simultaneously. Paper lists and generic note apps don't provide the structured workflow kitchen operations require.

## The Solution

1. **Recipe library** — browse and search through recipes with detailed ingredient lists, prep times, and nutritional information.
2. **Workflow board** — Kanban-style task management to move cooking tasks through Planned, In-Progress, and Done stages.
3. **Real-time state** — dynamic UI updates ensure the workflow board always reflects the current kitchen status.

## Technical Highlights

- **React** with efficient state management for real-time workflow updates
- **Firebase** for authentication and data persistence
- Custom **CSS** styling for a clean, focused cooking interface
- Responsive design for tablet use in kitchen environments`,
  },
  {
    id: 8,
    title: "Global Destination Discovery & Tourism CMS",
    slug: "destination-discovery-cms",
    description:
      "A scalable travel directory and content management system for regional tourism boards. The platform enables automated submission of new locations, categorized destination filtering, and immersive detail pages designed to drive user engagement and travel bookings across North and South America.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763203/project8_uaagw8.webp",
    liveUrl: "https://wonders-of-america.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/wonders-of-america",
    techStack: ["react", "tailwind", "firebase", "mongodb", "nodejs"],
    role: "Full-Stack Developer",
    features: [
      "Destination catalog with country and category filtering",
      "Community-driven location submissions with admin approval",
      "Immersive destination detail pages with image galleries",
      "Visitor engagement tracking and popular destination ranking",
      "Responsive design for mobile travel planning",
    ],
    longDescription: `## Project Overview

Wonders of America is a travel discovery platform that showcases destinations across North and South America with community-driven content.

## The Problem

Tourism boards needed a modern, scalable platform to showcase regional destinations. Static brochure websites failed to engage modern travelers who expect interactive, filterable content.

## The Solution

1. **Destination catalog** — browse destinations by country, category (nature, urban, historical), with rich image galleries and detailed descriptions.
2. **Community submissions** — verified users can submit new destinations for admin review and approval.
3. **Engagement tracking** — popular destinations are ranked based on views and user interactions.

## Technical Highlights

- **React** with dynamic routing for seamless destination navigation
- **Firebase** for user authentication and community features
- **MongoDB** with **Node.js** backend for content management
- **Tailwind CSS** for immersive, responsive destination pages`,
  },
  {
    id: 9,
    title: "Public Sector Asset & Government Property Portal",
    slug: "government-property-portal",
    description:
      "A secure, high-integrity real estate platform specifically engineered for government and public sector assets. It features a strict authentication-guarded detail system, social identity integration, and a sophisticated search architecture for managing high-value civic infrastructure and community centers.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763203/project7_kndxh9.webp",
    liveUrl: "https://gov-real-estate.web.app/",
    repoUrl: "https://github.com/Sohelrana2815/Gov-Real-Estate",
    techStack: ["react", "css", "firebase", "javascript"],
    role: "Frontend Developer",
    features: [
      "Property listings with advanced search and filtering",
      "Authentication-guarded property detail pages",
      "Social identity integration (Google, GitHub login)",
      "Government property categorization system",
      "Responsive design for field inspections on mobile",
    ],
    longDescription: `## Project Overview

Gov Real Estate is a secure property management portal designed for government and public sector organizations to manage civic infrastructure assets.

## The Problem

Government agencies need a secure, auditable platform to catalog and manage public properties. Existing general-purpose real estate platforms lack the authentication rigor and categorization needed for civic assets.

## The Solution

1. **Property catalog** — browse government properties with advanced search by type, location, and purpose.
2. **Secure access** — authentication-guarded detail pages ensure only authorized personnel can access sensitive property information.
3. **Social login** — Firebase-powered authentication with Google and GitHub integration for easy government employee access.

## Technical Highlights

- **React** with protected routes for authentication-guarded content
- **Firebase** for secure authentication with multiple social providers
- Custom **CSS** for a professional, government-appropriate visual style
- Responsive design for field inspections on tablets and mobile devices`,
  },
];

export { projects };
