import { cn } from "@/lib/utils";

export function SectionHeading({
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
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal-dark">{eyebrow}</p>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {description ? <p className="mt-2 text-ink-muted">{description}</p> : null}
    </div>
  );
}
