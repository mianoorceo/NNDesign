import { notFound } from "next/navigation";
import Link from "next/link";
import { chapters, getChapter } from "@/content/chapters";
import { navItems } from "@/content/nav";
import MarkDone from "@/components/MarkDone";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/chapters/[slug]">) {
  const { slug } = await props.params;
  const chapter = getChapter(slug);
  return {
    title: chapter
      ? `فصل ${chapter.num} — ${chapter.title} · Neural Network Design`
      : "فصل یافت نشد",
  };
}

export default async function ChapterPage(props: PageProps<"/chapters/[slug]">) {
  const { slug } = await props.params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const index = navItems.findIndex((n) => n.slug === slug);
  const prev = index > 0 ? navItems[index - 1] : null;
  const next =
    index >= 0 && index < navItems.length - 1 ? navItems[index + 1] : null;

  return (
    <section className="py-10">
      <div className="flex items-center gap-[.7rem] mb-[.6rem]">
        <span className="font-math text-[.95rem] text-bg-elev bg-accent rounded-md font-bold ltr py-[.15rem] px-[.55rem]">
          {chapter.num}
        </span>
        <span className="text-[.78rem] text-ink-faint ltr">{chapter.tag}</span>
      </div>
      <h1 className="text-[1.55rem] mt-[.2rem] mb-[1.1rem] text-balance">
        {chapter.title}
      </h1>

      <div
        className="chapter-body"
        dangerouslySetInnerHTML={{ __html: chapter.bodyHtml }}
      />

      <MarkDone slug={slug} />

      <nav className="flex items-center justify-between gap-4 mt-12 pt-6 border-t border-rule text-[.85rem]">
        {prev ? (
          <Link href={`/chapters/${prev.slug}`} className="text-ink-soft no-underline">
            → فصل {prev.num}: {prev.label}
          </Link>
        ) : (
          <Link href="/" className="text-ink-soft no-underline">
            → خانه
          </Link>
        )}
        {next ? (
          <Link href={`/chapters/${next.slug}`} className="text-ink-soft no-underline">
            فصل {next.num}: {next.label} ←
          </Link>
        ) : (
          <Link href="/summary" className="text-ink-soft no-underline">
            جمع‌بندی نهایی ←
          </Link>
        )}
      </nav>
    </section>
  );
}
