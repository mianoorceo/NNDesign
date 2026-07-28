import Link from "next/link";
import NeuralGraphic from "@/components/NeuralGraphic";
import ChapterGrid from "@/components/ChapterGrid";

const stats = [
  {
    value: "۲۷",
    label: "فصل، از مقدمه تا مطالعات موردی",
    icon: (
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H17a1 1 0 0 1 1 1v15.5a.5.5 0 0 1-.7.46L12 17.8l-5.3 2.16a.5.5 0 0 1-.7-.46V4.5Z" />
    ),
  },
  {
    value: "۱۰۱۲",
    label: "صفحه‌ی کتاب اصلی",
    icon: (
      <>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
        <path d="M13 4h5.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H13V4Z" />
      </>
    ),
  },
  {
    value: "۵۹",
    label: "تمرین با پاسخ کامل",
    icon: (
      <path d="m9 12 2 2 4-4M5 4.5A1.5 1.5 0 0 1 6.5 3H16l4 4v13.5a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 5 20.5v-16Z" />
    ),
  },
];

export default function Home() {
  return (
    <section className="pt-14 pb-6">
      <div className="relative overflow-hidden rounded-2xl border border-rule bg-bg-elev px-6 sm:px-9 py-9 sm:py-12">
        <NeuralGraphic className="pointer-events-none absolute h-auto top-1/2 -translate-y-1/2 -inset-e-14 sm:-inset-e-6 w-60 sm:w-90 opacity-30 sm:opacity-60" />

        <div className="relative max-w-[58ch]">
          <span className="eyebrow mb-4">
            خلاصه و ترجمه‌ی فارسی · کامل، ۲۷ فصل
          </span>
          <h1 className="text-[2.1rem] sm:text-[2.5rem] font-extrabold leading-[1.35] mt-[.2rem] mb-[.9rem] text-balance">
            خلاصه‌ی فصل‌به‌فصلِ ساده و فشرده‌ی کتاب{" "}
            <span style={{ color: "var(--thesis)" }}>Neural Network Design</span>
          </h1>
          <p className="text-ink-soft text-[1.05rem]">
            یک پروژه‌ی خلاصه‌نویسی و ترجمه‌ی فارسیِ کامل کتاب Neural Network
            Design (نوشته‌ی Hagan، Demuth، Beale و De Jesús، ۲۷ فصل). هر فصل:
            مفهوم به زبان ساده، فرمول‌های اصلی با نماد‌گذاری خودِ کتاب، یک
            مثال عددی حل‌شده (برگرفته از خودِ کتاب)، و چند تمرین با پاسخ کامل
            برای تثبیت مطلب — از مدل پایه‌ی نورون تا پنج مطالعه‌ی موردیِ
            واقعی.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href="/chapters/1" className="btn-primary">
              شروع مطالعه از فصل ۱
              <span className="font-math ltr">→</span>
            </Link>
            <Link href="#chapters" className="btn-ghost">
              فهرست کامل فصل‌ها
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-hover flex items-center gap-3.5 border border-rule rounded-[10px] bg-bg-elev py-4 px-[1.1rem]"
          >
            <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent-soft text-accent-ink">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                {s.icon}
              </svg>
            </span>
            <div>
              <b className="block text-[1.3rem] tabular-nums leading-tight">
                {s.value}
              </b>
              <span className="text-[.8rem] text-ink-soft">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="box intuition mt-7">
        <span className="box-label">چطور بخونی</span>
        فصل‌های ۱ تا ۳ زمینه و شهودند — می‌شود تندتر خواندشان. فصل‌های ۴ تا ۱۴
        یک خط داستانیِ پیوسته‌اند (پرسپترون ← فضای برداری ← بهینه‌سازی ← LMS
        ← بک‌پروپاگیشن)؛ بهتر است بدون پرش خوانده شوند. فصل‌های ۱۵ تا ۲۱
        مسیر دیگری را دنبال می‌کنند (یادگیری تداعی/رقابتی تا هاپفیلد) و تا
        حدی مستقل از خط اول‌اند. فصل‌های ۲۲ تا ۲۷ همه‌چیز را در قالب یک
        چک‌لیست عملی و پنج مسئله‌ی واقعی جمع می‌کنند — خواندنشان بعد از
        بقیه‌ی کتاب بیشترین حس‌وحال را می‌دهد.
      </div>

      <h2 id="chapters" className="text-[1.15rem] font-bold mt-10 mb-1 scroll-mt-20">
        فهرست فصل‌ها
      </h2>
      <ChapterGrid />
    </section>
  );
}
