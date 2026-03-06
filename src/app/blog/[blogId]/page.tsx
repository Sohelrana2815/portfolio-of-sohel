import { blogItem } from "@/lib/data/blog.data";
import { notFound } from "next/navigation";
import FallbackImage from "@/components/ui/FallbackImage";
import Link from "next/link";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import type { Metadata } from "next";

/* ------------------------------------------------------------------ */
/*  SSG — pre-render every blog post at build time                     */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return blogItem.map((item) => ({ blogId: item.slug }));
}

/* ------------------------------------------------------------------ */
/*  SEO — per-post metadata                                            */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  const blog = blogItem.find((item) => item.slug === blogId);

  if (!blog) return { title: "Blog not found" };

  return {
    title: `${blog.title} | Sohel Rana`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: "article",
      publishedTime: blog.date,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = blogItem.find((item) => item.slug === blogId);

  if (!blog) {
    notFound();
  }

  const { title, description, image, date, readTime, keywords, content } = blog;

  return (
    <div className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-0">
      <article className="max-w-3xl mx-auto">
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
          <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm mb-6 uppercase tracking-widest font-medium">
            <span>{date}</span>
            <span className="w-1 h-1 bg-yellow-500 rounded-full" />
            <span>{readTime}</span>
            <span className="w-1 h-1 bg-yellow-500 rounded-full" />
            <span>Article</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight text-yellow-500/90">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed border-l-4 border-yellow-500 pl-5 py-1 italic">
            {description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[480px] w-full rounded-2xl overflow-hidden mb-16 border border-zinc-800 shadow-2xl">
          <FallbackImage
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Markdown Content */}
        <div className="mb-16">
          <MarkdownRenderer content={content} />
        </div>

        {/* Keywords / Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-500/30 text-yellow-500/80 bg-yellow-500/5"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Footer */}
        <footer className="pt-10 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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

          {/* CTA */}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-black text-sm font-bold uppercase tracking-wider rounded-full hover:bg-yellow-400 transition-colors"
          >
            Let&apos;s Work Together
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </footer>
      </article>
    </div>
  );
}
