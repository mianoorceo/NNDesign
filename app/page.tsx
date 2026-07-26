import Link from "next/link";
import { navItems } from "@/content/nav";

export default function Home() {
  return (
    <section className="py-12 pb-6 border-b border-rule">
      <span className="inline-block text-xs text-thesis border border-thesis rounded-full mb-4 py-[.2rem] px-3 tracking-[.02em]">
        خلاصه و ترجمه‌ی فارسی · کامل، ۲۷ فصل
      </span>
      <h1 className="text-[2rem] leading-[1.4] mt-[.2rem] mb-[.8rem] text-balance">
        خلاصه‌ی فصل‌به‌فصلِ ساده و فشرده‌ی کتاب Neural Network Design
      </h1>
      <p className="text-ink-soft text-[1.05rem] max-w-[60ch]">
        یک پروژه‌ی خلاصه‌نویسی و ترجمه‌ی فارسیِ کامل کتاب Neural Network Design
        (نوشته‌ی Hagan، Demuth، Beale و De Jesús، ۲۷ فصل). هر فصل: مفهوم به
        زبان ساده، فرمول‌های اصلی با نماد‌گذاری خودِ کتاب، یک مثال عددی
        حل‌شده (برگرفته از خودِ کتاب)، و چند تمرین با پاسخ کامل برای تثبیت
        مطلب — از مدل پایه‌ی نورون تا پنج مطالعه‌ی موردیِ واقعی.
      </p>

      <div className="grid grid-cols-3 gap-px bg-rule border border-rule rounded-[10px] overflow-hidden mt-7">
        <div className="bg-bg-elev py-4 px-[1.1rem]">
          <b className="block text-[1.3rem] tabular-nums">۲۷</b>
          <span className="text-[.8rem] text-ink-soft">
            فصل، از مقدمه تا مطالعات موردی
          </span>
        </div>
        <div className="bg-bg-elev py-4 px-[1.1rem]">
          <b className="block text-[1.3rem] tabular-nums">۱۰۱۲</b>
          <span className="text-[.8rem] text-ink-soft">صفحه‌ی کتاب اصلی</span>
        </div>
        <div className="bg-bg-elev py-4 px-[1.1rem]">
          <b className="block text-[1.3rem] tabular-nums">۴۹</b>
          <span className="text-[.8rem] text-ink-soft">تمرین با پاسخ کامل</span>
        </div>
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

      <h2 className="text-[1.1rem] mt-10 mb-4">فهرست فصل‌ها</h2>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none p-0">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/chapters/${item.slug}`}
              className="flex items-center gap-3 no-underline border border-rule rounded-lg py-2 px-3 text-[.9rem] text-ink hover:border-accent"
            >
              <span className="font-math text-[.8rem] text-ink-faint ltr min-w-[1.6em]">
                {item.num}
              </span>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/summary"
            className="flex items-center gap-3 no-underline border border-thesis rounded-lg py-2 px-3 text-[.9rem] text-thesis"
          >
            <span className="font-math text-[.8rem] ltr min-w-[1.6em]">＋</span>
            جمع‌بندی نهایی
          </Link>
        </li>
      </ol>
    </section>
  );
}
