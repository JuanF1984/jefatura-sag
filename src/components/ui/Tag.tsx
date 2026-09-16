import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-teal-tint px-2.5 py-1 text-xs font-semibold text-brand-teal-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
