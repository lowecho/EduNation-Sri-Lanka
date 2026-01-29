import logo from "@/assets/breathing-letters-logo.png";
import { NavLink } from "@/components/NavLink";

type Props = {
  label: string;
  compactLabel?: string;
  size?: "sm" | "md";
};

export default function BrandMark({ label, compactLabel = "BL", size = "md" }: Props) {
  const imgSize = size === "sm" ? "h-8 w-8" : "h-9 w-9";

  return (
    <NavLink
      to="/"
      className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className="relative inline-flex items-center justify-center rounded-full border border-border bg-card shadow-soft"
        aria-hidden="true"
      >
        <img
          src={logo}
          alt=""
          className={`${imgSize} rounded-full object-contain p-1`}
          loading="eager"
          draggable={false}
        />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-foreground/5" />
      </span>
      <span className="hidden font-semibold tracking-tight sm:inline">{label}</span>
      <span className="font-semibold tracking-tight sm:hidden">{compactLabel}</span>
    </NavLink>
  );
}
