import logo from "@/assets/breathing-letters-logo.png";
import { NavLink } from "@/components/NavLink";

type Props = {
  label: string;
  compactLabel?: string;
  size?: "sm" | "md" | "lg";
};

export default function BrandMark({ label, compactLabel = "BL", size = "md" }: Props) {
  const imgSize = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const labelClass =
    size === "lg"
      ? "text-xl font-bold tracking-tight sm:text-2xl"
      : size === "sm"
        ? "text-base font-bold tracking-tight"
        : "text-lg font-bold tracking-tight sm:text-xl";

  return (
    <NavLink
      to="/"
      className="group inline-flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Logo container with glow effect */}
      <div className="relative">
        {/* Animated glow ring */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary via-accent-emerald to-accent-cyan opacity-0 blur-md transition-all duration-500 group-hover:opacity-50 group-hover:blur-lg" />

        {/* Logo image */}
        <img
          src={logo}
          alt={`${label} logo`}
          className={`${imgSize} relative rounded-xl object-contain shadow-lg ring-2 ring-border/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:ring-primary/30`}
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Text with gradient effect */}
      <div className="flex flex-col">
        {/* Full label for larger screens */}
        <span
          className={`hidden bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent sm:inline ${labelClass} bg-[length:200%_100%] transition-all duration-500 group-hover:bg-right`}
          style={{ backgroundSize: '200% 100%' }}
        >
          {label}
        </span>

        {/* Compact label for mobile */}
        <span
          className={`bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent sm:hidden ${labelClass}`}
        >
          {compactLabel}
        </span>

        {/* Tagline - only show in large size */}
        {size === "lg" && (
          <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
            Building libraries, opening doors
          </span>
        )}
      </div>
    </NavLink>
  );
}
