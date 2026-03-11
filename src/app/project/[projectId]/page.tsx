import { projects, TECH_CATALOG } from "@/lib/data/projects.data";
import { notFound } from "next/navigation";
import FallbackImage from "@/components/ui/FallbackImage";
import Link from "next/link";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import TechIcon from "@/components/ui/TechIcon";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

/* ------------------------------------------------------------------ */
/*  SSG                                                                */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return projects.map((p) => ({ projectId: p.slug }));
}

/* ------------------------------------------------------------------ */
/*  SEO                                                                */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = projects.find((p) => p.slug === projectId);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Sohel Rana`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      images: [{ url: project.image }],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = projects.find((p) => p.slug === projectId);

  if (!project) {
    notFound();
  }

  const {
    title,
    description,
    image,
    liveUrl,
    repoUrl,
    techStack,
    role,
    features,
    longDescription,
  } = project;

  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-0">
      <article className="max-w-4xl mx-auto">
        {/* Back nav */}
        <div className="mb-12">
          <Link
            href="/#portfolio"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-500 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-zinc-500 text-sm mb-5 uppercase tracking-widest font-medium">
            <span>{role}</span>
            <span className="w-1 h-1 bg-yellow-500 rounded-full" />
            <span>Case Study</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-yellow-500/90 mb-5">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed border-l-4 border-yellow-500 pl-5 py-1">
            {description}
          </p>
        </header>

        <div className="relative h-70 sm:h-90 md:h-125 w-full rounded-2xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl">
          <FallbackImage
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-400 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-colors"
          >
            <BsGithub size={16} />
            Source Code
          </a>
        </div>

        {/* Tech Stack with Icons */}
        <div className="mb-12 p-6 rounded-2xl bg-[#1a1a1a] border border-zinc-800">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-5">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => {
              const info = TECH_CATALOG[tech];
              return (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#252525] border border-zinc-700/50 hover:border-yellow-500/40 transition-colors"
                >
                  <TechIcon techId={tech} size="sm" />
                  <span className="text-sm font-semibold text-zinc-200">
                    {info.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12 p-6 rounded-2xl bg-[#1a1a1a] border border-zinc-800">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-5">
            Key Features
          </h2>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500 text-[10px] font-bold">
                  ✓
                </span>
                <span className="text-zinc-300 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Long Description (markdown) */}
        <div className="mb-16">
          <MarkdownRenderer content={longDescription} />
        </div>

        {/* Footer CTA */}
        <footer className="pt-10 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
              S
            </div>
            <div>
              <div className="text-white font-bold">Sohel Rana</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                Developer
              </div>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-400 transition-colors"
          >
            Start a Project
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </footer>
      </article>
    </div>
  );
}
