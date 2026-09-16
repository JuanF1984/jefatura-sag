import { cn } from "@/lib/utils";

/** Ícono discreto que indica que el enlace abre fuera del sitio. */
export function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className ?? "size-3.5 shrink-0"}
      aria-hidden="true"
    >
      <path
        d="M8 4H5.5A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5V12M12 4h4v4M16 4l-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 font-medium text-brand-teal-dark underline decoration-brand-teal-dark/40 underline-offset-2 hover:decoration-brand-teal-dark",
        className,
      )}
    >
      <span>{children}</span>
      <ExternalIcon />
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </a>
  );
}
