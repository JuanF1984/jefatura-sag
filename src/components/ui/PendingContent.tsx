import { Notice } from "@/components/ui/Notice";

export function PendingContent({ children }: { children: React.ReactNode }) {
  return (
    <Notice tone="notice" title="Contenido pendiente">
      {children}
    </Notice>
  );
}
