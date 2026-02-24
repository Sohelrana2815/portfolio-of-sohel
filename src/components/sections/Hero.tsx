import { ArrowRight } from "lucide-react"; // Assuming you use lucide-react
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 ">
      {/* THE "RED BORDER" CONTAINER */}
      <div className="w-full max-w-450 mx-auto px-4 grid grid-cols-1 lg:grid-cols-14 gap-12 items-center">
        {/* LEFT SIDE: PROFILE PICTURE (Takes ~5 columns) */}
        <div className="relative lg:col-span-7 h-[80vh] lg:h-[90vh] max-w-160 group">
          {/* The Yellow Background Shape */}
          {/* <div className="absolute -top-4 -left-4 w-32 h-32 bg-yellow-500 rounded-2xl -z-10" /> */}

          {/* Main Image Container */}
          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-zinc-800">
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
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-0.5 bg-[#FFB400]"></span>
            <h1 className="text-3xl lg:text-5xl font-extrabold uppercase text-[#FFFFFF] leading-tight">
              I&apos;m Steve-Milner <br />
              <span className="text-[#FFB400]">Web Designer</span>
            </h1>
          </div>

          <p className="text-[#FFFFFF] leading-relaxed max-w-lg text-lg">
            I&apos;m a Tunisian based web designer & front end developer focused
            on crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <button className="group relative inline-flex items-center gap-4 w-fit pl-8 pr-20 py-4 border-2 border-[#FFB400] rounded-full overflow-hidden transition-all duration-300 cursor-pointer">
            {/* 1) The filling layer — scales from right -> left */}
            <span
              className="absolute inset-0 z-0 rounded-full origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ backgroundColor: "oklch(79.5% 0.184 86.047)" }} // bg-yellow-500
            />

            {/* 2) The label (above the filler) */}
            <span className="relative z-10 font-bold uppercase tracking-wider text-[#FFFFFF] group-hover:text-black transition-colors">
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
