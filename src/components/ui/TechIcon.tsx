import type { TechId } from "@/lib/data/projects.data";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiStripe,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

/**
 * SVG icons for each technology in the stack.
 * Uses recognisable brand marks so non-technical clients
 * can quickly identify technologies at a glance.
 */

const ICON_SIZE = 24;

type IconEntry = { Icon: IconType; color: string; bg: string };

const icons: Record<TechId, IconEntry> = {
  nextjs: { Icon: SiNextdotjs, color: "#fff", bg: "#000000" },
  react: { Icon: SiReact, color: "#61DAFB", bg: "#20232A" },
  typescript: { Icon: SiTypescript, color: "#fff", bg: "#3178C6" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4", bg: "#0F172A" },
  mongodb: { Icon: SiMongodb, color: "#47A248", bg: "#1C2D23" },
  nodejs: { Icon: SiNodedotjs, color: "#339933", bg: "#1A2E1A" },
  express: { Icon: SiExpress, color: "#fff", bg: "#333333" },
  firebase: { Icon: SiFirebase, color: "#FFCA28", bg: "#1A1A2E" },
  redux: { Icon: SiRedux, color: "#764ABC", bg: "#1A1A2E" },
  stripe: { Icon: SiStripe, color: "#635BFF", bg: "#1A1A3E" },
  html: { Icon: SiHtml5, color: "#E34F26", bg: "#1C1C1C" },
  css: { Icon: SiCss, color: "#1572B6", bg: "#1C1C1C" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", bg: "#1C1C1C" },
};

interface TechIconProps {
  techId: TechId;
  size?: "sm" | "md";
}

export default function TechIcon({ techId, size = "md" }: TechIconProps) {
  const icon = icons[techId];
  if (!icon) return null;

  const px = size === "sm" ? "p-1.5" : "p-2";
  const Icon = icon.Icon;
  const iconSize = size === "sm" ? 16 : ICON_SIZE;

  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg ${px}`}
      style={{ backgroundColor: icon.bg, color: icon.color }}
      title={techId}
    >
      <Icon size={iconSize} color={icon.color} />
    </div>
  );
}
