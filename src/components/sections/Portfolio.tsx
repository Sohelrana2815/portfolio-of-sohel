import ProjectCard, { type Project } from "./Portfolio/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "End-to-End Delivery Management System",
    description:
      "A complete solution for businesses to manage logistics, from automated parcel booking to real-time tracking, designed to increase operational efficiency and customer trust.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project2_fdq93a.webp",
    liveUrl: "https://l2-b5-a6-courier-pro-api-frontend.vercel.app",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "Smart Tour Booking & Guide Marketplace",
    description:
      "A comprehensive travel ecosystem connecting adventurous tourists with verified local guides. Features include secure automated payments, real-time booking management, and data-driven dashboards for service providers to track their growth.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763201/project1_luwbtm.webp",
    liveUrl: "https://root-guide-frontend.vercel.app",
    repoUrl: "#",
    detailsUrl: "#",
  },

  {
    id: 3,
    title: "Wholesale-to-Retail E-commerce Ecosystem",
    description:
      "A robust digital storefront designed to transition traditional wholesale businesses into the global online market. This solution features a high-speed product discovery engine, integrated secure payment gateways, and a comprehensive back-office dashboard for real-time inventory tracking and sales analytics.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project5_wywzm8.webp",
    liveUrl: "https://glow-mart-bd.web.app/",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "Professional Freelance & Job Marketplace",
    description:
      "A dynamic ecosystem designed to bridge the gap between businesses and talent. It features a sophisticated bidding engine, secure offer management, and categorized job listings to ensure the right experts find the right projects efficiently.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project4_h18djr.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 5,
    title: "Premium Digital Media & Subscription Platform",
    description:
      "A high-traffic news aggregation portal featuring a sophisticated monetization engine. It includes automated subscription management, AI-driven trending content algorithms (based on user engagement), and a data-driven admin suite for content moderation and real-time audience insights.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project3_sdp58y.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 6,
    title: "Interactive Learning Management & Grading System",
    description:
      "A comprehensive educational ecosystem designed for seamless academic workflow. It features a dual-interface dashboard for students and educators, supporting real-time assignment tracking, automated grading triggers, and a structured feedback loop to enhance remote learning efficiency.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project6_zxkjhu.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 7,
    title: "Culinary Resource & Kitchen Workflow Tracker",
    description:
      "A high-performance interface designed for kitchen operations. This solution utilizes a dynamic state-management system to track ingredients, prep times, and nutritional data in real-time, helping chefs organize workflows from Planned to In-Progress with zero friction.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763202/project9_cyeqdq.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 8,
    title: "Global Destination Discovery & Tourism CMS",
    description:
      "A scalable travel directory and content management system for regional tourism boards. The platform enables automated submission of new locations, categorized destination filtering, and immersive detail pages designed to drive user engagement and travel bookings across North and South America.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763203/project8_uaagw8.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 9,
    title: "Public Sector Asset & Government Property Portal",
    description:
      "A secure, high-integrity real estate platform specifically engineered for government and public sector assets. It features a strict authentication-guarded detail system, social identity integration, and a sophisticated search architecture for managing high-value civic infrastructure and community centers.",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772763203/project7_kndxh9.webp",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative mb-14 text-center">
          {/* Background watermark */}
          <span
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-6xl font-extrabold uppercase text-zinc-800/40 sm:text-7xl md:text-8xl"
            aria-hidden="true"
          >
            Works
          </span>

          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase text-white">
            My <span className="text-[#FFB400]">Portfolio</span>
          </h2>

          {/* Small dot accent */}
          <span
            className="mx-auto mt-3 block h-1.5 w-1.5 rounded-full bg-[#FFB400]"
            aria-hidden="true"
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
