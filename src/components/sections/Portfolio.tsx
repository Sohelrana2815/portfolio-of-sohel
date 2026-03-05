import ProjectCard, { type Project } from "./Portfolio/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-1.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-2.jpg",
    liveUrl: "https://root-guide-frontend.vercel.app",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 3,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-3.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-4.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 5,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-5.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 6,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-6.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 7,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-7.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 8,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-8.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 9,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image: "/projects/project-9.jpg",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-zinc-950 py-16 md:py-24">
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

          <h2 className="relative text-3xl font-extrabold uppercase text-white sm:text-4xl">
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
