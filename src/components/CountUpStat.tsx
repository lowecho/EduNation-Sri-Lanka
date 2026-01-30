import { useEffect, useMemo, useState } from "react";
import { TrendingUp, BookOpen, School, Users } from "lucide-react";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

// Map labels to icons and colors
const statConfig: Record<string, { icon: typeof TrendingUp; color: string; gradient: string }> = {
  pledged: { icon: BookOpen, color: "text-primary", gradient: "from-primary to-accent-cyan" },
  collected: { icon: TrendingUp, color: "text-accent-emerald", gradient: "from-accent-emerald to-accent-teal" },
  schools: { icon: School, color: "text-accent-purple", gradient: "from-accent-purple to-accent-coral" },
  volunteers: { icon: Users, color: "text-accent-gold", gradient: "from-accent-gold to-accent-coral" },
};

function getConfigForLabel(label: string) {
  const lowerLabel = label.toLowerCase();
  for (const key of Object.keys(statConfig)) {
    if (lowerLabel.includes(key)) {
      return statConfig[key];
    }
  }
  return statConfig.pledged; // default
}

export default function CountUpStat({
  value,
  label,
  suffix,
  durationMs = 1200,
}: {
  value: number;
  label: string;
  suffix?: string;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches : true),
    [],
  );

  const config = getConfigForLabel(label);
  const Icon = config.icon;

  useEffect(() => {
    // Small delay for stagger effect
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = clamp01((now - start) / durationMs);
      // easeOutExpo for more dramatic effect
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, prefersReduced, value]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-soft transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
    >
      {/* Background gradient on hover */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

      {/* Top accent line */}
      <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${config.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          {/* Number with gradient text */}
          <div className={`text-4xl font-bold tracking-tight ${config.color}`}>
            {display.toLocaleString()}
            {suffix && <span className="text-2xl">{suffix}</span>}
          </div>

          {/* Label */}
          <div className="text-sm font-medium text-muted-foreground">
            {label}
          </div>
        </div>

        {/* Icon with gradient background */}
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${config.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
    </div>
  );
}
