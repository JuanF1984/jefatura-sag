import { cn } from "@/lib/utils";

type NoticeTone = "notice" | "danger" | "success";

const toneStyles: Record<NoticeTone, string> = {
  notice: "bg-notice-bg border-notice-border text-notice",
  danger: "bg-danger-bg border-danger-border text-danger",
  success: "bg-success-bg border-success/30 text-success",
};

export function Notice({
  tone = "notice",
  title,
  children,
  className,
}: {
  tone?: NoticeTone;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      className={cn("rounded-card border px-4 py-3 text-sm", toneStyles[tone], className)}
    >
      <p className="font-semibold">{title}</p>
      {children ? <div className="mt-1 text-current/90">{children}</div> : null}
    </div>
  );
}
