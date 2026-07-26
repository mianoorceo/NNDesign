"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/nav";
import { useProgress } from "@/lib/progress";

function linkClass(active: boolean) {
  const base =
    "flex items-center gap-[.6rem] no-underline py-[.4rem] px-[.9rem] text-[.88rem] border-s-2 -ms-px";
  if (active) {
    return `${base} text-ink border-accent bg-[linear-gradient(to_left,transparent,var(--accent-soft))]`;
  }
  return `${base} text-ink-soft border-transparent`;
}

export default function Sidebar() {
  const pathname = usePathname();
  const { state } = useProgress();

  return (
    <aside className="hidden md:block w-65 shrink-0 sticky top-0 self-start h-screen overflow-y-auto py-8 scrollbar-thin">
      <h2 className="font-math text-xs uppercase tracking-[.08em] text-ink-faint mb-3">
        chapters
      </h2>
      <ul className="border-s border-rule">
        <li>
          <Link href="/" className={linkClass(pathname === "/")}>
            خانه
          </Link>
        </li>
        {navItems.map((item) => {
          const href = `/chapters/${item.slug}`;
          const active = pathname === href;
          const done = !!state[item.slug];
          return (
            <li key={item.slug}>
              <Link href={href} className={linkClass(active)}>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    done ? "bg-thesis" : "bg-rule-strong"
                  }`}
                />
                <span
                  className={`font-math text-[.78rem] min-w-[1.4em] ${
                    active ? "text-accent-ink" : "text-ink-faint"
                  }`}
                >
                  {item.num}
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/summary" className={linkClass(pathname === "/summary")}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-rule-strong" />
            <span className="font-math text-[.78rem] min-w-[1.4em] text-ink-faint">
              ＋
            </span>
            جمع‌بندی نهایی
          </Link>
        </li>
      </ul>
      <p className="text-[.8rem] text-ink-faint leading-[1.7] ps-1 mt-6">
        پیشرفتت این‌جا و کنار عنوان هر فصل ذخیره می‌شود (در همین مرورگر).
      </p>
    </aside>
  );
}
