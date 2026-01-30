import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  gradient = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <header className={cn("space-y-4", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">{eyebrow}</p>
      ) : null}
      <h1
        className={cn(
          "text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          gradient && "text-gradient"
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
