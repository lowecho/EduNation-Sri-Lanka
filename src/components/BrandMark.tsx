import logo from "@/assets/breathing-letters-logo.png";
import { NavLink } from "@/components/NavLink";

type Props = {
  label: string;
  compactLabel?: string;
  size?: "sm" | "md";
};

export default function BrandMark({ label, compactLabel = "BL", size = "md" }: Props) {
  const imgSize = size === "sm" ? "h-9" : "h-10";

  return (
    <NavLink
      to="/"
      className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={logo}
        alt={`${label} logo`}
        className={`${imgSize} w-auto object-contain`}
        loading="eager"
        draggable={false}
      />
      <span className="hidden font-semibold tracking-tight sm:inline">{label}</span>
      <span className="font-semibold tracking-tight sm:hidden">{compactLabel}</span>
    </NavLink>
  );
}
