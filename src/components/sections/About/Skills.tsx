"use client";

import { skills } from "@/lib/data/aboutData";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiCss,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  JAVASCRIPT: <SiJavascript className="w-12 h-12 text-[#F7DF1E]" />,
  REACT: <SiReact className="w-12 h-12 text-[#61DAFB]" />,
  "NEXT.JS": <SiNextdotjs className="w-12 h-12 text-black dark:text-white" />,
  REDUX: <SiRedux className="w-12 h-12 text-[#764ABC]" />,
  POSTGRESQL: <SiPostgresql className="w-12 h-12 text-[#4169E1]" />,
  MongoDB: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
  "NODE.JS": <SiNodedotjs className="w-12 h-12 text-[#339933]" />,
  CSS: <SiCss className="w-12 h-12 text-[#1572B6]" />,
  EXPRESS: <SiExpress className="w-12 h-12 text-black dark:text-white" />,
  TAILWIND: <SiTailwindcss className="w-12 h-12 text-[#38B2AC]" />,
  PRISMA: <SiPrisma className="w-12 h-12 text-black dark:text-white" />,
  TYPESCRIPT: <SiTypescript className="w-12 h-12 text-blue-500" />,
};

/* ─── Skill Icon Item ─── */
function SkillIcon({ label }: { label: string }) {
  const Icon = iconMap[label] || (
    <div className="w-12 h-12 bg-gray-500 rounded-full" />
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-zinc-800/20 hover:bg-zinc-800/60 transition-colors border border-zinc-700/50 rounded-2xl w-full min-h-[140px] group cursor-default cursor-pointer">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800 shadow-inner group-hover:scale-110 transition-transform duration-300 ease-out ">
        {Icon}
      </div>
      <span className="text-sm font-semibold tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase">
        {label}
      </span>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Skills() {
  return (
    <div className="space-y-10">
      <h3 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase text-center text-white dark:text-white tracking-wide">
       Skill
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <SkillIcon key={skill.id} label={skill.label} />
        ))}
      </div>
    </div>
  );
}
