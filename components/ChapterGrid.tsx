"use client";

import Link from "next/link";
import { navItems, partLabels } from "@/content/nav";
import { useProgress } from "@/lib/progress";

const parts = [1, 2, 3, 4, 5];

export default function ChapterGrid() {
  const { state } = useProgress();

  return (
    <div className="mt-10 space-y-8">
      {parts.map((part) => (
        <div key={part}>
          <h2 className="font-math text-[.72rem] uppercase tracking-[.08em] text-ink-faint mb-3">
            {partLabels[part]}
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0">
            {navItems
              .filter((item) => item.part === part)
              .map((item) => {
                const done = !!state[item.slug];
                return (
                  <li key={item.slug}>
                    <Link
                      href={`/chapters/${item.slug}`}
                      className="card-hover flex items-center gap-3 no-underline border border-rule rounded-lg bg-bg-elev py-2.5 px-3.5 text-[.9rem] text-ink"
                    >
                      <span className="font-math text-[.8rem] text-ink-faint ltr min-w-[1.6em]">
                        {item.num}
                      </span>
                      <span className="flex-1">{item.label}</span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                          done ? "bg-thesis" : "bg-rule-strong"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            {part === 4 && (
              <li>
                <Link
                  href="/summary"
                  className="card-hover flex items-center gap-3 no-underline border border-thesis rounded-lg bg-bg-elev py-2.5 px-3.5 text-[.9rem] text-thesis"
                >
                  <span className="font-math text-[.8rem] ltr min-w-[1.6em]">＋</span>
                  <span className="flex-1">جمع‌بندی نهایی</span>
                </Link>
              </li>
            )}
          </ol>
        </div>
      ))}
    </div>
  );
}
