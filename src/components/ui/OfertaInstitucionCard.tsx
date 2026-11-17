import Link from "next/link";
import type { Oferta } from "@/data/types";
import { agruparPorFamilia, type InstitucionConOferta } from "@/lib/oferta-educativa";
import { ChevronDownIcon, PinIcon, SchoolIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/** "Etiqueta: texto" al comienzo de un párrafo (p. ej. "Competencia general: ..."). */
const ETIQUETA = /^([^:.\n]{2,60}):\s+([\s\S]+)$/;

function Perfil({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="mt-4 first:mt-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{titulo}</p>
      <div className="mt-1.5 space-y-2 text-sm leading-relaxed text-ink">
        {texto.split(/\n\s*\n/).map((parrafo, i) => {
          const etiqueta = parrafo.match(ETIQUETA);
          return etiqueta ? (
            <p key={i}>
              <span className="font-semibold">{etiqueta[1]}:</span> {etiqueta[2]}
            </p>
          ) : (
            <p key={i}>{parrafo}</p>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Sólo se publica el perfil del egresado. El del ingresante queda en el dataset
 * (es dato de la planilla) pero no se muestra. Sin perfil del egresado, la
 * oferta aparece sólo con su denominación.
 */
function OfertaItem({ oferta }: { oferta: Oferta }) {
  if (!oferta.perfilEgresado) {
    return <li className="py-3 font-medium text-ink">{oferta.denominacion}</li>;
  }
  return (
    <li>
      {/*
       * Desplegable nativo, mismo recurso que RegimenAcademicoBlock: funciona sin
       * JavaScript y el navegador expone el estado expandido. La denominación
       * queda siempre visible; los perfiles, plegados.
       */}
      <details className="group/oferta">
        <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-3 py-3 [&::-webkit-details-marker]:hidden">
          <span className="font-medium text-ink">{oferta.denominacion}</span>
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-teal-dark group-hover/oferta:underline">
            <span className="group-open/oferta:hidden">Ver perfil</span>
            <span className="hidden group-open/oferta:inline">Ocultar</span>
            <ChevronDownIcon className="size-4 transition-transform group-open/oferta:rotate-180" />
          </span>
        </summary>
        <div className="pb-4">
          <Perfil titulo="Perfil del egresado" texto={oferta.perfilEgresado} />
        </div>
      </details>
    </li>
  );
}

function ListaOfertas({ ofertas }: { ofertas: Oferta[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {ofertas.map((oferta) => (
        <OfertaItem key={oferta.denominacion} oferta={oferta} />
      ))}
    </ul>
  );
}

export function OfertaInstitucionCard({ institucion }: { institucion: InstitucionConOferta }) {
  const familias = agruparPorFamilia(institucion.ofertas);
  const conFamilias = familias.some((f) => f.familia);
  const headingId = `${institucion.ancla}-titulo`;

  return (
    <article
      id={institucion.ancla}
      aria-labelledby={headingId}
      className="scroll-mt-6 rounded-card border border-border bg-surface p-5 shadow-soft target:ring-2 target:ring-brand-teal-dark sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-teal-tint text-brand-teal-dark">
          <SchoolIcon className="size-5" />
        </span>
        <div className="min-w-0">
          <h3 id={headingId} className="font-semibold text-ink">
            {institucion.nombre}
          </h3>
          {institucion.localidad ? (
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <PinIcon className="size-4 shrink-0 text-brand-teal-dark" />
              {institucion.localidad}
            </p>
          ) : null}
        </div>
      </div>

      {conFamilias ? (
        <>
          <p className="mt-4 text-sm text-ink-muted">
            Los trayectos se agrupan por área para facilitar la consulta. Esta agrupación es sólo una
            organización de este sitio, no una denominación oficial.
          </p>
          <div className="mt-4 grid gap-x-8 gap-y-6 md:grid-cols-2">
            {familias.map((grupo) => (
              <div key={grupo.familia ?? "otros"}>
                <h4 className="mb-1 text-sm font-semibold text-brand-teal-darker">
                  {grupo.familia ?? "Otros trayectos"}
                </h4>
                <ListaOfertas ofertas={grupo.ofertas} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-4">
          <ListaOfertas ofertas={institucion.ofertas} />
        </div>
      )}

      {institucion.cue ? (
        <p className={cn("text-sm", conFamilias ? "mt-6" : "mt-4")}>
          <Link
            href={`/instituciones#${institucion.ancla}`}
            className="font-medium text-brand-teal-dark underline decoration-brand-teal-dark/40 underline-offset-2 hover:decoration-brand-teal-dark"
          >
            Ver datos de la institución
            <span className="sr-only">: {institucion.nombre}</span>
          </Link>
        </p>
      ) : null}
    </article>
  );
}
