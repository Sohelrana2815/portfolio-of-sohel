import { blogItem } from "@/lib/data/blog.data";
import Link from "next/link";
import Image from "next/image";

export default function Blogs() {
  return (
    <section
      className="py-20 bg-[#121212] text-white overflow-hidden relative"
      id="blog"
    >
      {/* Background text decoration */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex justify-center items-center select-none pointer-events-none opacity-5">
        <h1 className="text-[10rem] font-bold tracking-tighter leading-none">
          POSTS
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight uppercase">
            MY <span className="text-yellow-500">BLOG</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogItem.map(({ id, title, description, image, date, url }) => (
            <div
              key={id}
              className="bg-[#1e1e1e] rounded-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-2 border border-zinc-800"
            >
              {/* Image Header */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Accent Bar */}
              <div className="h-1 w-full bg-yellow-500"></div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-zinc-500 text-sm mb-2">{date}</span>
                <h3 className="text-xl font-bold mb-4 line-clamp-2 text-yellow-500/90 group-hover:text-yellow-500 transition-colors">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={url}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-yellow-500 transition-colors"
                  >
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
