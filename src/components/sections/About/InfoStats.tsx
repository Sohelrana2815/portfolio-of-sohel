"use client";

import { Download } from "lucide-react";
import { personalInfo, stats } from "@/lib/data/aboutData";
import type { StatItem } from "@/types/about";
import Link from "next/link";

/* ─── Stat Card ─── */
function StatCard({ item }: { item: StatItem }) {
  return (
    <div className="border border-muted  rounded-lg p-6 flex flex-col items-start gap-2">
      <span className="text-4xl lg:text-5xl font-extrabold text-[#FFB400]">
        <strong>{item.value}</strong>
        <sup className="text-lg align-super">+</sup>
      </span>

      <div className="flex items-center gap-2">
        <span className="w-8 h-0.5 bg-muted-foreground" />
        <p
          className="text-xs sm:text-base uppercase text-foreground tracking-wider  whitespace-pre-line leading-snug"
          role="status"
        >
          {item.label}
        </p>
      </div>
    </div>
  );
}

/* ─── Info Row ─── */
function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <p className="text-sm text-zinc-300 dark:text-zinc-300">
      <span className="text-muted-foreground text-base">{label}: </span>
      {href ? (
        <a
          href={href}
          className="font-semibold text-white dark:text-white hover:text-[#FFB400] transition-colors"
          aria-label={`${label}: ${value}`}
        >
          {value}
        </a>
      ) : (
        <span className="font-semibold text-foreground text-base">{value}</span>
      )}
    </p>
  );
}

/* ─── Main Component ─── */
export default function InfoStats() {
  const info = personalInfo;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* LEFT – Personal Info */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-foreground">
          Personal Infos
        </h3>

        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <InfoRow label="First Name" value={info.firstName} />
          <InfoRow label="Last Name" value={info.lastName} />
          <InfoRow label="Age" value={info.age} />
          <InfoRow label="Nationality" value={info.nationality} />
          <InfoRow label="Freelance" value={info.freelance} />
          <InfoRow label="Address" value={info.address} />
          <InfoRow
            label="Whatsapp"
            value={info.Whatsapp}
            href={`tel:${info.Whatsapp}`}
          />
          <InfoRow
            label="Email"
            value={info.email}
            href={`mailto:${info.email}`}
          />
          <InfoRow label="Twitter" value={info.Twitter} />
          <InfoRow label="Languages" value={info.languages} />
        </div>

        {/* Download CV */}
        <Link href="/Sohel Rana Resume.pdf" download>
          <button className="group relative inline-flex items-center gap-4 w-fit xl:pl-7 xl:pr-18 pl-7 pr-16 py-4 border xl:border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 cursor-pointer mx-auto xl:mx-0">
            {/* 1) The filling layer — scales from right -> left */}
            <span
              className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0   group-hover:scale-x-100
  group-active:scale-x-100
  active:scale-x-100
  transition-transform  ease-out"
              style={{ backgroundColor: "oklch(79.5% 0.184 86.047)" }} // bg-yellow-500
            />

            {/* 2) The label (above the filler) */}
            <span className="relative z-10 font-bold uppercase tracking-wide text-foreground group-hover:text-black transition-colors text-sm xl:text-base ">
              Download CV
            </span>

            {/* 3) The circular arrow (on top) */}
            <span className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center transform transition-transform duration-300 font-bold">
              <Download className="text-white font-bold" />
            </span>
          </button>
        </Link>
      </div>

      {/* RIGHT – Stat Cards 2×2 */}
      <div className="grid grid-cols-2 gap-4 content-start">
        {stats.map((stat) => (
          <StatCard key={stat.id} item={stat} />
        ))}
      </div>
    </div>
  );
}
