import logo from "@/assets/breathing-letters-logo.png";
import { NavLink } from "@/components/NavLink";

type Props = {
  label: string;
  compactLabel?: string;
  size?: "sm" | "md" | "lg";
};

export default function BrandMark({ label, compactLabel = "BL", size = "md" }: Props) {
  const imgSize = size === "sm" ? "h-9" : size === "lg" ? "h-14" : "h-10";
  const labelClass =
    size === "lg"
      ? "text-base font-semibold tracking-tight sm:text-lg"
      : "text-sm font-semibold tracking-tight sm:text-base";

  return (
    <NavLink
      to="/"
      className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={logo}
        alt={`${label} logo`}
        className={`${imgSize} w-auto object-contain drop-shadow-sm`}
        loading="eager"
        draggable={false}
      />
      <span className={`hidden sm:inline ${labelClass}`}>{label}</span>
      <span className={`sm:hidden ${labelClass}`}>{compactLabel}</span>
    </NavLink>
  );
}
