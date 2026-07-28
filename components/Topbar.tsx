"use client";

import Link from "next/link";
import { navItems } from "@/content/nav";
import { useProgress } from "@/lib/progress";
import { toFa } from "@/lib/format";

export default function Topbar() {
  const { state } = useProgress();
  const done = navItems.filter((item) => state[item.slug]).length;
  const pct = Math.round((done / navItems.length) * 100);

  return (
    <div className="sticky top-0 z-20 h-16 backdrop-blur bg-bg/90 border-b border-rule">
      <div className="h-full px-6 flex items-center justify-between gap-4 max-w-310 mx-auto">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 font-math font-bold text-[.8rem] text-white transition-transform duration-200 group-hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--thesis))",
            }}
          >
            NN
          </span>
          <span className="font-extrabold text-[1.02rem] tracking-[.01em] text-ink">
            راهنمای مطالعه Neural Network Design
            <span className="font-math font-medium text-ink-soft text-[.78rem] ltr ms-2 hidden sm:inline">
              · Hagan / Demuth / Beale / De Jesús
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block w-24 progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="text-[.8rem] text-ink-soft border border-rule-strong rounded-full tabular-nums py-[.3rem] px-[.8rem] whitespace-nowrap">
            {toFa(done)} از {toFa(navItems.length)} بخش
          </div>
        </div>
      </div>
    </div>
  );
}
