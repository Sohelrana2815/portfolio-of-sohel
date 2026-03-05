import Image from "next/image";
import { ExternalLink, Github, Eye } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  detailsUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-800">
      {/* Project Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {/* Action Buttons Row */}
          <div className="flex translate-y-4 items-center gap-3 transition-transform duration-300 group-hover:translate-y-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-[#FFB400] hover:text-[#FFB400]"
            >
              <ExternalLink size={20} />
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-[#FFB400] hover:text-[#FFB400]"
            >
              <Github size={20} />
            </a>

            <a
              href={project.detailsUrl}
              aria-label={`View details of ${project.title}`}
              className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:border-[#FFB400] hover:text-[#FFB400]"
            >
              <Eye size={20} />
              View Details
            </a>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="text-sm font-bold uppercase text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-400">{project.description}</p>
      </div>
    </div>
  );
}
