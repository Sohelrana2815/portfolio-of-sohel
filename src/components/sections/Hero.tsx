"use client";
import { ArrowRight } from "lucide-react"; // Assuming you use lucide-react
// import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 overflow-hidden">
      {/* --- NEW DYNAMIC YELLOW BACKGROUND --- */}
      <div className="w-full max-w-450 mx-auto px-4 grid grid-cols-1 xl:grid-cols-14 gap-12 items-start xl:items-center mb-16 md:mb-0">
        {/* LEFT SIDE: PROFILE PICTURE (Takes ~5 columns) */}
        {/* The Yellow Background Shape */}
        <div
          className="absolute top-0 -left-25 h-full w-[35%] bg-[#FFB400] -z-10 hidden xl:block"
          style={{
            // 45% top-right creates the narrow top, 100% bottom-right creates the wide base
            clipPath: "polygon(0 0, 45% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div className="relative xl:col-span-7 xl:h-[90vh] xl:max-w-160 group flex justify-center xl:block">
          {/* Main Image Container */}
          <div className="relative h-60 w-60 xl:h-full xl:w-full rounded-full xl:rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800">
            <Image
              src="/profile.webp"
              alt="Sohel Rana"
              fill
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT (Takes ~7 columns) */}
        <div className="xl:col-span-7 flex flex-col space-y-6 text-center xl:text-left xl:justify-center">
          <div className="flex items-center gap-4 justify-center xl:justify-start">
            <span className="w-12 h-0.5 bg-[#FFB400] hidden xl:block"></span>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase text-foreground leading-tight text-center xl:text-left">
              I&apos;m Sohel Rana <br />
              <span className="text-[#FFB400]">Full Stack Developer</span>
            </h1>
          </div>

          <p className="text-[#D3D3D3] text-base xl:text-lg leading-relaxed max-w-lg mx-auto xl:mx-0 text-center xl:text-left">
            I help professionals build a powerful online presence with modern
            portfolio websites that increase trust, authority, and client
            opportunities.
          </p>

          <a
            href="https://www.fiverr.com/s/KeQdxvY"
            target="_blank"
            className="group relative inline-flex items-center gap-4 w-fit xl:pl-7 xl:pr-18 pl-7 pr-16 py-4 border xl:border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 cursor-pointer mx-auto xl:mx-0"
          >
            {/* 1) The filling layer — scales from right -> left */}
            <span
              className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0
  group-hover:scale-x-100
  group-active:scale-x-100
  active:scale-x-100
  transition-transform duration-300 ease-out"
              style={{ backgroundColor: "oklch(79.5% 0.184 86.047)" }}
            />
            {/* 2) The label (above the filler) */}

            <span className="relative z-10 font-bold uppercase tracking-wide text-foreground group-hover:text-black transition-colors text-sm xl:text-base ">
              {" "}
             Let’s Work Together{" "}
            </span>
            {/* 3) The circular arrow (on top) */}
            <span className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center transform transition-transform duration-300 font-bold hover:bg-none">
              <ArrowRight className="text-white font-bold" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
