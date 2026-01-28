import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("space-y-2", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      {description ? <p className="max-w-3xl text-muted-foreground">{description}</p> : null}
    </header>
  );
}
