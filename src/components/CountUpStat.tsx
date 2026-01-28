import { useEffect, useMemo, useState } from "react";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export default function CountUpStat({
  value,
  label,
  suffix,
  durationMs = 900,
}: {
  value: number;
  label: string;
  suffix?: string;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(0);
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches : true),
    [],
  );

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = clamp01((now - start) / durationMs);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, prefersReduced, value]);

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <div className="text-3xl font-semibold tracking-tight">
        {display.toLocaleString()}
        {suffix ?? ""}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
