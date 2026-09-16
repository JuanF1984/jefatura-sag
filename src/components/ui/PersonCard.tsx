import type { Inspector } from "@/data/types";
import { PeopleIcon } from "@/components/ui/icons";

export function PersonCard({ persona }: { persona: Inspector }) {
  return (
    <li className="flex list-none items-center gap-3 rounded-card border border-border bg-surface p-4 shadow-soft">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-teal-tint text-brand-teal-dark">
        <PeopleIcon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="font-semibold text-ink">{persona.nombre}</p>
        <p className="text-sm text-ink-muted">{persona.nivelModalidad}</p>
        {persona.observaciones ? (
          <p className="mt-0.5 text-xs text-ink-muted">{persona.observaciones}</p>
        ) : null}
      </div>
    </li>
  );
}
