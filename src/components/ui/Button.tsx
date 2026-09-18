import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

// El foco visible se define globalmente en globals.css (:focus-visible); no se
// pisa acá para no perder el anillo de foco (bug común: usar focus-visible:outline-none).
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors min-h-11";

// bg-brand-teal-dark (no el teal claro de marca) para que el texto blanco cumpla
// contraste AA (8:1 vs. 3.4:1 con el teal claro) — ver docs/referencia-visual-abc.md.
const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-teal-dark text-white hover:bg-brand-teal-darker",
  secondary:
    "border-2 border-brand-teal-dark text-brand-teal-dark bg-transparent hover:bg-brand-teal-tint",
};

type ButtonLinkProps = {
  href: string;
  external?: boolean;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: ButtonVariant;
};

export function Button(props: ButtonLinkProps | ButtonElementProps) {
  const variant = props.variant ?? "primary";
  const classes = cn(base, variants[variant], props.className);

  if (props.href) {
    const { href, external, children } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = { ...(props as ButtonElementProps) };
  delete buttonProps.variant;
  delete buttonProps.className;

  return (
    <button className={classes} {...buttonProps}>
      {props.children}
    </button>
  );
}
