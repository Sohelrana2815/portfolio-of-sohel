import { blogItem } from "@/lib/data/blog.data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = blogItem.find((item) => item.id === parseInt(blogId));

  if (!blog) {
    notFound();
  }

  const { title, description, image, date } = blog;

  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-0">
      <article className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-12">
          <Link
            href="/#blog"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-500 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blogs
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-zinc-500 text-sm mb-6 uppercase tracking-widest font-medium">
            <span>{date}</span>
            <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
            <span>Article</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-yellow-500/90">
            {title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden mb-16 border border-zinc-800 shadow-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-yellow max-w-none">
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light mb-8 italic border-l-4 border-yellow-500 pl-6 py-2">
            {description}
          </p>
          <div className="text-zinc-400 leading-loose space-y-6 text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xl">
              S
            </div>
            <div>
              <div className="text-white font-bold">Sohel Rana</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                Author
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Social Share Placeholders */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 cursor-pointer transition-colors"
              >
                <div className="w-4 h-4 bg-zinc-600 rounded-sm"></div>
              </div>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
