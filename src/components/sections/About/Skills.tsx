"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data/aboutData";

/* ─── Circular Skill Ring ─── */
function SkillRing({ label, value }: { label: string; value: number }) {
    const circleRef = useRef<SVGCircleElement>(null);

    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeOffset = circumference - (value / 100) * circumference;

    useEffect(() => {
        const el = circleRef.current;
        if (!el) return;

        // Start fully hidden then animate to target offset
        el.style.strokeDasharray = `${circumference}`;
        el.style.strokeDashoffset = `${circumference}`;

        // Trigger reflow then animate
        requestAnimationFrame(() => {
            el.style.transition = "stroke-dashoffset 1.2s ease-out";
            el.style.strokeDashoffset = `${strokeOffset}`;
        });
    }, [circumference, strokeOffset]);

    return (
        <div className="flex flex-col items-center gap-3">
            <div
                className="relative w-28 h-28 sm:w-32 sm:h-32"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${label}: ${value}%`}
            >
                <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full -rotate-90"
                >
                    {/* Background circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-zinc-700 dark:text-zinc-700"
                    />
                    {/* Progress arc */}
                    <circle
                        ref={circleRef}
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#FFB400"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                    />
                </svg>

                {/* Percentage label */}
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white dark:text-white">
                    {value}%
                </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-400">
                {label}
            </span>
        </div>
    );
}

/* ─── Main Component ─── */
export default function Skills() {
    return (
        <div className="space-y-10">
            <h3 className="text-xl font-bold uppercase text-center text-white dark:text-white">
                My Skills
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
                {skills.map((skill) => (
                    <SkillRing key={skill.id} label={skill.label} value={skill.value} />
                ))}
            </div>
        </div>
    );
}
