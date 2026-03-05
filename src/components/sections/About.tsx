import InfoStats from "./About/InfoStats";
import Skills from "./About/Skills";
import Resume from "./About/Resume";

export default function About() {
  return (
    <div className=" py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Title */}
        <div className="relative text-center">
          {/* Background watermark text */}
          <span
            className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl md:text-8xl font-extrabold uppercase text-zinc-800/40 dark:text-zinc-800/40 select-none pointer-events-none"
            aria-hidden="true"
          >
            Resume
          </span>

          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase text-white dark:text-white">
            About <span className="text-[#FFB400]">Me</span>
          </h2>
        </div>

        {/* Children */}
        <InfoStats />
        <Skills />
        <Resume />
      </div>
    </div>
  );
}
