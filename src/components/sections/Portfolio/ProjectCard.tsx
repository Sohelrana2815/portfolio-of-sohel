"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to close the overlay
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div
      ref={cardRef}
      onClick={toggleActive}
      className="group relative overflow-hidden rounded-xl bg-zinc-800 cursor-pointer"
    >
      {/* 1. Image Container */}
      <div className="relative aspect-4/3 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 
            ${isActive ? "scale-110" : "group-hover:scale-110"}`}
        />
      </div>

      {/* 2. Card Footer */}
      <div className="p-4">
        <h3 className="text-sm font-bold uppercase text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-400">
          {project.description.slice(0, 100)}...
        </p>
      </div>

      {/* 3. NEW OVERLAY POSITION: Direct child of the main container */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-4
          bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-20
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      >
        <div
          className={`flex items-center gap-3 transition-transform duration-300 
          ${isActive ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"}`}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="p-3 border border-white/30 rounded-full hover:border-[#FFB400] text-white"
          >
            <ExternalLink size={20} />
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="p-3 border border-white/30 rounded-full hover:border-[#FFB400] text-white"
          >
            <Github size={20} />
          </a>

          <a
            href={project.detailsUrl}
            onClick={(e) => e.stopPropagation()}
            className="px-5 py-2.5 flex items-center gap-2 border border-white/30 rounded-full text-xs font-bold uppercase text-white hover:border-[#FFB400]"
          >
            <Eye size={20} />
            DETAILS
          </a>
        </div>
      </div>
    </div>
  );
}
