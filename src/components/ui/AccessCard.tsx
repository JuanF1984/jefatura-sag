import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalIcon } from "@/components/ui/ExternalLink";
import { Tag } from "@/components/ui/Tag";

export function AccessCard({
  href,
  title,
  description,
  icon,
  className,
  external,
  badge,
}: {
  href: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  className?: string;
  /** Marca el acceso como externo: abre en pestaña nueva y muestra el ícono de enlace externo. */
  external?: boolean;
  /** Etiqueta corta que distingue el tipo de acceso (p. ej. "Portal oficial", "Trámite"). */
  badge?: string;
}) {
  const classes = cn(
    "group flex flex-col gap-3 rounded-card border border-border bg-surface p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-hover",
    className,
  );

  const content = (
    <>
      <span className="flex items-start justify-between gap-2">
        <span className="flex size-11 items-center justify-center rounded-full bg-brand-teal-tint text-brand-teal-dark">
          {icon}
        </span>
        {badge ? <Tag>{badge}</Tag> : null}
      </span>
      <span className="inline-flex items-center gap-1.5 font-semibold text-ink group-hover:text-brand-teal-dark">
        {title}
        {external ? <ExternalIcon className="size-3.5 shrink-0" /> : null}
      </span>
      {description ? <span className="text-sm text-ink-muted">{description}</span> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
        <span className="sr-only">(se abre en una pestaña nueva)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
