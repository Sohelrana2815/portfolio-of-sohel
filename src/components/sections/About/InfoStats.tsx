"use client";

import { Download } from "lucide-react";
import { personalInfo, stats } from "@/lib/data/aboutData";
import type { StatItem } from "@/types/about";

/* ─── Stat Card ─── */
function StatCard({ item }: { item: StatItem }) {
    return (
        <div className="border border-zinc-700 dark:border-zinc-700 rounded-lg p-6 flex flex-col items-start gap-2 bg-zinc-800/40 dark:bg-zinc-800/40 light:bg-white/80">
            <span className="text-4xl font-extrabold text-[#FFB400]">
                <strong>{item.value}</strong>
                <sup className="text-lg align-super">+</sup>
            </span>

            <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-zinc-500" />
                <p
                    className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-400 whitespace-pre-line leading-snug"
                    role="status"
                >
                    {item.label}
                </p>
            </div>
        </div>
    );
}

/* ─── Info Row ─── */
function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
    return (
        <p className="text-sm text-zinc-300 dark:text-zinc-300">
            <span className="text-zinc-500 dark:text-zinc-500">{label}: </span>
            {href ? (
                <a
                    href={href}
                    className="font-semibold text-white dark:text-white hover:text-[#FFB400] transition-colors"
                    aria-label={`${label}: ${value}`}
                >
                    {value}
                </a>
            ) : (
                <span className="font-semibold text-white dark:text-white">{value}</span>
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
                <h3 className="text-xl font-bold uppercase text-white dark:text-white">
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
                        label="Phone"
                        value={info.phone}
                        href={`tel:${info.phone}`}
                    />
                    <InfoRow
                        label="Email"
                        value={info.email}
                        href={`mailto:${info.email}`}
                    />
                    <InfoRow label="Skype" value={info.skype} />
                    <InfoRow label="Languages" value={info.languages} />
                </div>

                {/* Download CV */}
                <a
                    href={info.cvUrl}
                    download
                    aria-label="Download CV"
                    className="inline-flex items-center gap-3 mt-4 px-7 py-3 border-2 border-[#FFB400] rounded-full font-bold uppercase text-sm tracking-wider text-white dark:text-white hover:bg-[#FFB400] hover:text-black transition-all duration-300 group"
                >
                    Download CV
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB400] text-black group-hover:bg-black group-hover:text-[#FFB400] transition-colors duration-300">
                        <Download size={18} />
                    </span>
                </a>
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
