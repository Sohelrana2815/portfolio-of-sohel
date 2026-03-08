import { timeline } from "@/lib/data/aboutData";
import type { TimelineItem } from "@/types/about";

/* ─── Single Timeline Entry ─── */
function TimelineEntry({ item }: { item: TimelineItem }) {
  const yearDisplay =
    item.startYear === item.endYear
      ? item.startYear
      : `${item.startYear} – ${item.endYear}`;

  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      {/* Vertical line */}
      <span className="absolute left-[7px] top-3 bottom-0 w-0.5 bg-zinc-700 dark:bg-zinc-700 group-last:hidden" />

      {/* Circular marker */}
      <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#FFB400] border-2 border-zinc-900 dark:border-zinc-900 z-10" />

      {/* Content */}
      <div className="space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-800 dark:bg-zinc-800 text-[#FFB400] rounded-md">
          {yearDisplay}
        </span>

        <h4 className="text-sm font-bold uppercase text-white dark:text-white">
          {item.title}
          <span className="font-normal text-zinc-400 dark:text-zinc-400">
            {" "}
            — {item.org}
          </span>
        </h4>

        <p className="text-sm leading-relaxed text-zinc-400 dark:text-zinc-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Timeline Column ─── */
function TimelineColumn({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div className="space-y-6">
      <h3 className="sr-only">{title}</h3>
      {items.map((item) => (
        <TimelineEntry key={item.id} item={item} />
      ))}
    </div>
  );
}

/* ─── Main Component ─── */
export default function Resume() {
  const experience = timeline.filter((t) => t.type === "experience");
  const education = timeline.filter((t) => t.type === "education");

  return (
    <div className="space-y-10">
      <h3 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase text-center text-white dark:text-white">
        Experience &amp; Education
      </h3>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <TimelineColumn title="Experience" items={experience} />
        <TimelineColumn title="Education" items={education} />
      </div>
    </div>
  );
}
