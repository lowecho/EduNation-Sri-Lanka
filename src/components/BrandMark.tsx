import logo from "@/assets/breathing-letters-logo.png";
import { NavLink } from "@/components/NavLink";

type Props = {
  label: string;
  compactLabel?: string;
  size?: "sm" | "md" | "lg";
};

export default function BrandMark({ label, compactLabel = "BL", size = "md" }: Props) {
  const imgSize = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-12 w-12" : "h-11 w-11";
  const labelClass =
    size === "lg"
      ? "text-lg font-bold tracking-tight sm:text-xl"
      : size === "sm"
        ? "text-base font-bold tracking-tight"
        : "text-base font-bold tracking-tight sm:text-lg";

  return (
    <NavLink
      to="/"
      className="group inline-flex items-center gap-3 rounded-lg px-2 py-1.5 transition-all duration-300 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Logo with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <img
          src={logo}
          alt={`${label} logo`}
          className={`${imgSize} relative rounded-lg object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}
          loading="eager"
          draggable={false}
        />
      </div>

      {/* Text with gradient effect */}
      <div className="flex flex-col">
        <span
          className={`hidden bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text sm:inline ${labelClass} transition-all duration-300 group-hover:from-primary group-hover:to-foreground`}
        >
          {label}
        </span>
        <span
          className={`bg-gradient-to-r from-foreground to-primary bg-clip-text sm:hidden ${labelClass}`}
        >
          {compactLabel}
        </span>
      </div>
    </NavLink>
  );
}
