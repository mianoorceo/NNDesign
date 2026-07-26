"use client";

import { useProgress } from "@/lib/progress";

export default function MarkDone({ slug }: { slug: string }) {
  const { state, toggle } = useProgress();
  const done = !!state[slug];

  return (
    <label
      className={`inline-flex items-center gap-2 text-[.82rem] border rounded-full cursor-pointer select-none bg-bg-elev mt-[1.6rem] py-[.35rem] px-[.9rem] ${
        done ? "text-thesis border-thesis" : "text-ink-soft border-rule-strong"
      }`}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggle(slug)}
        className="accent-thesis"
      />
      این فصل رو خوندم
    </label>
  );
}
