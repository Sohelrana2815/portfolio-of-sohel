import ProjectCard, { type Project } from "./Portfolio/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717255/Screenshot_2026-03-05_192015_fhpm0d.png",
    liveUrl: "https://l2-b5-a6-courier-pro-api-frontend.vercel.app",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 2,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717259/Screenshot_2026-03-05_191942_sgfpj3.png",
    liveUrl: "https://root-guide-frontend.vercel.app",
    repoUrl: "#",
    detailsUrl: "#",
  },

  {
    id: 3,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      " https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717255/Screenshot_2026-03-05_192355_eyrgsn.png",
    liveUrl: "https://glow-mart-bd.web.app/",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 4,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717254/Screenshot_2026-03-05_192340_ppabtn.png",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 5,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717254/Screenshot_2026-03-05_192128_lhlc6s.png",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 6,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772717254/Screenshot_2026-03-05_192405_atvapz.png",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 7,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772719544/Screenshot_2026-03-05_200517_fgtq4f.png",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 8,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772719353/Screenshot_2026-03-05_200206_bcm7ky.png",
    liveUrl: "#",
    repoUrl: "#",
    detailsUrl: "#",
  },
  {
    id: 9,
    title: "Project Title",
    description: "Project based brief description/projection fix",
    image:
      "https://res.cloudinary.com/djmhyrvxd/image/upload/v1772719310/Screenshot_2026-03-05_200116_ujyggm.png",
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
