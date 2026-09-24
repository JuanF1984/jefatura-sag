import Image from "next/image";
import Link from "next/link";
import type { Novedad } from "@/data/types";
import { IMAGEN_NOVEDAD, formatearFecha } from "@/lib/novedades";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

const SIZES_TARJETA = "(min-width: 1024px) 368px, (min-width: 640px) 50vw, 100vw";
const SIZES_DESTACADA = "(min-width: 1024px) 598px, 100vw";

/**
 * Tarjeta de una novedad. Tiene un único enlace (el título) extendido a toda la
 * tarjeta con un pseudo-elemento, así toda el área es clickeable sin anidar
 * enlaces. `headingLevel` permite respetar la jerarquía según dónde se use
 * (h2 en /novedades, h3 dentro de una sección de la portada).
 *
 * `destacada` es la variante de ancho completo: en pantallas grandes pone la
 * foto a la izquierda y el texto a la derecha, con título más grande. Es la
 * misma tarjeta, sólo cambia la composición. `sizes` permite ajustar la
 * resolución pedida a next/image cuando el contenedor no es el habitual.
 */
export function NovedadCard({
  novedad,
  headingLevel = "h3",
  destacada = false,
  sizes,
}: {
  novedad: Novedad;
  headingLevel?: "h2" | "h3";
  destacada?: boolean;
  sizes?: string;
}) {
  const Heading = headingLevel;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-hover",
        destacada && "lg:flex-row",
      )}
    >
      {novedad.imagen ? (
        <div
          className={cn(
            "aspect-3/2 w-full overflow-hidden bg-surface-muted",
            destacada && "lg:aspect-auto lg:w-[55%] lg:shrink-0",
          )}
        >
          <Image
            src={novedad.imagen}
            alt={novedad.imagenAlt}
            width={IMAGEN_NOVEDAD.width}
            height={IMAGEN_NOVEDAD.height}
            sizes={sizes ?? (destacada ? SIZES_DESTACADA : SIZES_TARJETA)}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div
        className={cn(
          "flex flex-1 flex-col gap-2 p-5",
          destacada && "lg:justify-center lg:gap-3 lg:p-8",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-muted">
          <time dateTime={novedad.fecha}>{formatearFecha(novedad.fecha)}</time>
          {novedad.categoria ? <Tag>{novedad.categoria}</Tag> : null}
        </div>
        <Heading
          className={cn(
            "text-lg font-bold leading-snug text-ink group-hover:text-brand-teal-dark",
            destacada && "text-xl lg:text-2xl",
          )}
        >
          <Link href={`/novedades/${novedad.slug}`} className="after:absolute after:inset-0">
            {novedad.titulo}
          </Link>
        </Heading>
        <p className={cn("text-ink-muted", destacada ? "line-clamp-5 lg:line-clamp-6" : "line-clamp-4")}>
          {novedad.resumen}
        </p>
        <span
          aria-hidden="true"
          className={cn("pt-2 text-sm font-semibold text-brand-teal-dark", !destacada && "mt-auto")}
        >
          Leer más →
        </span>
      </div>
    </article>
  );
}
