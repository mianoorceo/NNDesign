"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, partLabels } from "@/content/nav";
import { useProgress } from "@/lib/progress";
import { toFa } from "@/lib/format";

function linkClass(active: boolean) {
  const base =
    "flex items-center gap-[.6rem] no-underline py-[.4rem] px-[.9rem] text-[.88rem] border-s-2 -ms-px rounded-e-lg transition-colors duration-150";
  if (active) {
    return `${base} text-ink border-accent bg-[linear-gradient(to_left,transparent,var(--accent-soft))] font-bold`;
  }
  return `${base} text-ink-soft border-transparent hover:text-ink hover:bg-[color-mix(in_srgb,var(--bg-elev)_60%,transparent)]`;
}

const parts = [1, 2, 3, 4, 5];

export default function Sidebar() {
  const pathname = usePathname();
  const { state } = useProgress();
  const doneCount = navItems.filter((item) => state[item.slug]).length;
  const pct = Math.round((doneCount / navItems.length) * 100);

  return (
    <aside className="hidden md:block w-65 shrink-0 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto py-8 scrollbar-thin">
      <div className="mb-5">
        <div className="flex items-center justify-between text-[.72rem] text-ink-faint mb-[.4rem]">
          <span className="font-math uppercase tracking-[.08em]">progress</span>
          <span className="font-math tabular-nums">{pct}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <ul className="border-s border-rule">
        <li>
          <Link href="/" className={linkClass(pathname === "/")}>
            خانه
          </Link>
        </li>
      </ul>

      {parts.map((part) => (
        <div key={part} className="mt-5">
          <h2 className="font-math text-[.68rem] uppercase tracking-[.08em] text-ink-faint mb-2 px-[.9rem]">
            {partLabels[part]}
          </h2>
          <ul className="border-s border-rule">
            {navItems
              .filter((item) => item.part === part)
              .map((item) => {
                const href = `/chapters/${item.slug}`;
                const active = pathname === href;
                const done = !!state[item.slug];
                return (
                  <li key={item.slug}>
                    <Link href={href} className={linkClass(active)}>
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
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
            {part === 4 && (
              <li>
                <Link href="/summary" className={linkClass(pathname === "/summary")}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-rule-strong" />
                  <span className="font-math text-[.78rem] min-w-[1.4em] text-ink-faint">
                    ＋
                  </span>
                  جمع‌بندی نهایی
                </Link>
              </li>
            )}
          </ul>
        </div>
      ))}

      <p className="text-[.8rem] text-ink-faint leading-[1.7] ps-1 mt-6">
        {toFa(doneCount)} از {toFa(navItems.length)} بخش خوانده‌ای — پیشرفتت
        این‌جا و کنار عنوان هر فصل ذخیره می‌شود (در همین مرورگر).
      </p>
    </aside>
  );
}
