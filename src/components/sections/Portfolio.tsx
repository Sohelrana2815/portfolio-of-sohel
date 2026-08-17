import ProjectCard from "./Portfolio/ProjectCard";
import { projects } from "@/lib/data/projects.data";

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
            <span className="text-[#FFB400]">Portfolio</span>
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
