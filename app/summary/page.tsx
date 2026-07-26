import { synthesisTitle, synthesisBodyHtml } from "@/content/synthesis";

export const metadata = {
  title: `جمع‌بندی نهایی · Neural Network Design`,
};

export default function SummaryPage() {
  return (
    <section className="py-10">
      <div className="flex items-center gap-[.7rem] mb-[.6rem]">
        <span className="font-math text-[.95rem] text-bg-elev bg-accent rounded-md font-bold ltr py-[.15rem] px-[.55rem]">
          ＋
        </span>
        <span className="text-[.78rem] text-ink-faint">جمع‌بندی نهایی</span>
      </div>
      <h1 className="text-[1.55rem] mt-[.2rem] mb-[1.1rem] text-balance">
        {synthesisTitle}
      </h1>

      <div
        className="chapter-body"
        dangerouslySetInnerHTML={{ __html: synthesisBodyHtml }}
      />
    </section>
  );
}
