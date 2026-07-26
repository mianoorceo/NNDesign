"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "nnd-progress-v3";
const EVENT = "nnd-progress-changed";

function readAll(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

export function useProgress() {
  const [state, setState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Reads localStorage after mount, intentionally re-rendering once past
    // the server-matched initial paint (localStorage isn't available during SSR).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(readAll());
    const onChange = () => setState(readAll());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const toggle = useCallback((slug: string) => {
    const all = readAll();
    all[slug] = !all[slug];
    localStorage.setItem(KEY, JSON.stringify(all));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { state, toggle };
}
