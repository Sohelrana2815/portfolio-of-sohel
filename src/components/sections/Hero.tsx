import { ArrowRight } from "lucide-react"; // Assuming you use lucide-react
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 ">
      {/* THE "RED BORDER" CONTAINER */}
      <div className="w-full max-w-450 mx-auto px-4 grid grid-cols-1 xl:grid-cols-14 gap-12 items-start xl:items-center mb-16 md:mb-0">
        {/* LEFT SIDE: PROFILE PICTURE (Takes ~5 columns) */}
        <div className="relative xl:col-span-7 xl:h-[90vh] xl:max-w-160 group flex justify-center xl:block">
          {/* The Yellow Background Shape */}
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-500 rounded-2xl -z-10 xl:block hidden" />

          {/* Main Image Container */}
          <div className="relative h-60 w-60 xl:h-full xl:w-full rounded-full xl:rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800">
            <Image
              src="/profile.jpg"
              alt="Steve Milner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT (Takes ~7 columns) */}
        <div className="xl:col-span-7 flex flex-col space-y-6 text-center xl:text-left xl:justify-center">
          <div className="flex items-center gap-4 justify-center xl:justify-start">
            <span className="w-12 h-0.5 bg-[#FFB400] hidden xl:block"></span>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase text-[#FFFFFF] leading-tight text-center xl:text-left">
              I&apos;m Steve-Milner <br />
              <span className="text-[#FFB400]">Web Designer</span>
            </h1>
          </div>

          <p className="text-[#FFFFFF] text-sm leading-relaxed max-w-lg xl:text-lg mx-auto xl:mx-0 text-center xl:text-left">
            I&apos;m a Tunisian based web designer & front end developer focused
            on crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <button className="group relative inline-flex items-center gap-4 w-fit xl:pl-8 xl:pr-20 pl-7 pr-17 py-4 border xl:border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 cursor-pointer mx-auto xl:mx-0">
            {/* 1) The filling layer — scales from right -> left */}
            <span
              className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ backgroundColor: "oklch(79.5% 0.184 86.047)" }} // bg-yellow-500
            />

            {/* 2) The label (above the filler) */}
            <span className="relative z-10 font-bold uppercase tracking-wider text-[#FFFFFF] group-hover:text-black transition-colors text-sm xl:text-base">
              More about me
            </span>

            {/* 3) The circular arrow (on top) */}
            <span className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center transform transition-transform duration-300 ">
              <ArrowRight className="text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
