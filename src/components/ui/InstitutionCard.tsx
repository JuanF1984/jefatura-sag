import type { Institucion } from "@/data/types";
import { MailIcon, PhoneIcon, PinIcon, SchoolIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/Tag";

export function InstitutionCard({
  institucion,
  puedeVerseEnMapa = false,
  onVerEnElMapa,
}: {
  institucion: Institucion;
  /** true sólo cuando la institución tiene una coordenada verificada en `instituciones-geo.ts`. */
  puedeVerseEnMapa?: boolean;
  onVerEnElMapa?: (disparador: HTMLElement) => void;
}) {
  return (
    <li className="list-none rounded-card border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-teal-tint text-brand-teal-dark">
          <SchoolIcon className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold text-ink">{institucion.nombre}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {institucion.nivel ? <Tag>{institucion.nivel}</Tag> : null}
            {institucion.modalidad ? <Tag>{institucion.modalidad}</Tag> : null}
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-sm text-ink-muted">
        {institucion.direccion || institucion.localidad ? (
          <div className="flex items-start gap-2">
            <PinIcon className="mt-0.5 size-4 shrink-0 text-brand-teal-dark" />
            <span>{[institucion.direccion, institucion.localidad].filter(Boolean).join(", ")}</span>
          </div>
        ) : null}
        {institucion.telefono ? (
          <div className="flex items-center gap-2">
            <PhoneIcon className="size-4 shrink-0 text-brand-teal-dark" />
            <span>
              {institucion.telefono.split(" / ").map((numero, i, arr) => (
                <span key={numero}>
                  <a href={`tel:${numero.replace(/[^\d+]/g, "")}`} className="hover:text-brand-teal-dark hover:underline">
                    {numero}
                  </a>
                  {i < arr.length - 1 ? " / " : ""}
                </span>
              ))}
            </span>
          </div>
        ) : null}
        {institucion.correo ? (
          <div className="flex items-center gap-2">
            <MailIcon className="size-4 shrink-0 text-brand-teal-dark" />
            <a href={`mailto:${institucion.correo}`} className="hover:text-brand-teal-dark hover:underline">
              {institucion.correo}
            </a>
          </div>
        ) : null}
      </div>
      {institucion.observaciones ? (
        <p className="mt-3 text-xs text-ink-muted">{institucion.observaciones}</p>
      ) : null}
      {puedeVerseEnMapa && onVerEnElMapa ? (
        <button
          type="button"
          onClick={(e) => onVerEnElMapa(e.currentTarget)}
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-brand-teal-dark px-4 py-2 text-sm font-semibold text-brand-teal-dark transition-colors hover:bg-brand-teal-tint"
        >
          <PinIcon className="size-4 shrink-0" />
          Ver en el mapa
        </button>
      ) : null}
    </li>
  );
}
