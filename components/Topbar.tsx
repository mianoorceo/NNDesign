"use client";

import { navItems } from "@/content/nav";
import { useProgress } from "@/lib/progress";
import { toFa } from "@/lib/format";

export default function Topbar() {
  const { state } = useProgress();
  const done = navItems.filter((item) => state[item.slug]).length;

  return (
    <div className="border-b border-rule px-6 flex items-baseline justify-between gap-4 max-w-[1240px] mx-auto py-[1.1rem]">
      <div className="font-extrabold text-[1.05rem] tracking-[.02em]">
        راهنمای مطالعه Neural Network Design
        <span className="font-math font-medium text-ink-soft text-[.8rem] ltr ms-2">
          · Hagan / Demuth / Beale / De Jesús
        </span>
      </div>
      <div className="text-[.8rem] text-ink-soft border border-rule-strong rounded-full tabular-nums py-[.3rem] px-[.8rem]">
        {toFa(done)} از {toFa(navItems.length)} بخش
      </div>
    </div>
  );
}
