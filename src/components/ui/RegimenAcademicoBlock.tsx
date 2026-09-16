import type { Documento, RegimenAcademico } from "@/data/types";
import { Tag } from "@/components/ui/Tag";
import { ExternalIcon } from "@/components/ui/ExternalLink";
import { ChevronDownIcon } from "@/components/ui/icons";

const RESUMEN_DETALLE_POR_DEFECTO = "Ver anexos y normativa complementaria";

/**
 * A partir de dos documentos el desplegable gana: con uno solo agrega un clic
 * sin acortar la tarjeta, así que se muestra directamente.
 */
const MINIMO_PARA_DESPLEGAR = 2;

function ListaCompacta({ documentos }: { documentos: Documento[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {documentos.map((doc) => (
        <li key={doc.href} className="text-sm leading-relaxed">
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline font-medium text-brand-teal-dark underline decoration-brand-teal-dark/40 underline-offset-2 hover:decoration-brand-teal-dark"
          >
            {doc.titulo}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>{" "}
          <ExternalIcon className="inline size-3 shrink-0 align-baseline text-brand-teal-dark" />
          {doc.descripcion ? <span className="text-ink-muted"> — {doc.descripcion}</span> : null}
          {doc.identificador ? (
            <span className="mt-0.5 block break-words text-xs text-ink-muted">
              {doc.identificador}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function Subseccion({
  titulo,
  nota,
  documentos,
}: {
  titulo: string;
  nota?: string;
  documentos: Documento[];
}) {
  if (documentos.length === 0) return null;
  return (
    <div className="mt-5 first:mt-0">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{titulo}</h4>
      {nota ? <p className="mt-1 text-sm text-ink-muted">{nota}</p> : null}
      <ListaCompacta documentos={documentos} />
    </div>
  );
}

export function RegimenAcademicoBlock({ regimen }: { regimen: RegimenAcademico }) {
  const headingId = `regimen-${regimen.id}`;
  const anexos = regimen.anexos ?? [];
  const complementaria = regimen.complementaria ?? [];
  const implementacion = regimen.implementacion ?? [];
  const totalDocumentos = anexos.length + complementaria.length + implementacion.length;
  const usaDesplegable = totalDocumentos >= MINIMO_PARA_DESPLEGAR;
  const tieneDetalle = totalDocumentos > 0 || Boolean(regimen.detalle ?? regimen.identificador);

  const textoCerrado = regimen.resumenDetalle ?? RESUMEN_DETALLE_POR_DEFECTO;
  // El texto en estado abierto se deriva del cerrado ("Ver X" → "Ocultar X") para
  // no duplicar la redacción en cada entrada de datos ni arriesgar que se
  // desincronicen. Todos los `resumenDetalle` empiezan con "Ver ".
  const textoAbierto = textoCerrado.replace(/^Ver /, "Ocultar ");

  const detalle = (
    <>
      {regimen.detalle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-ink-muted">{regimen.detalle}</p>
      ) : null}
      {regimen.identificador ? (
        <p className="mt-2 break-words text-xs text-ink-muted">
          Identificador oficial: {regimen.identificador}
        </p>
      ) : null}
      <Subseccion titulo={regimen.tituloAnexos ?? "Anexos"} documentos={anexos} />
      <Subseccion
        titulo="Normativa complementaria"
        nota="Complementa la norma principal — no la reemplaza."
        documentos={complementaria}
      />
      <Subseccion
        titulo="Materiales de implementación"
        nota="Documentos de apoyo y guías de aplicación. No son norma."
        documentos={implementacion}
      />
    </>
  );

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-card border border-border bg-surface shadow-soft"
    >
      <div className="p-5 sm:p-6">
        <h3 id={headingId} className="text-xl font-bold text-ink">
          {regimen.nivel}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
          <span className="font-semibold text-ink">{regimen.resolucion}</span>
          <span aria-hidden="true">·</span>
          <span>{regimen.anio}</span>
          <Tag className="ml-1">{regimen.estado}</Tag>
        </div>

        <p className="mt-3 max-w-3xl text-ink">{regimen.descripcion}</p>

        <p className="mt-3 text-sm">
          <a
            href={regimen.fuenteOficial.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-brand-teal-dark underline decoration-brand-teal-dark/40 underline-offset-2 hover:decoration-brand-teal-dark"
          >
            <span>{regimen.fuenteOficial.titulo}</span>
            <ExternalIcon />
            <span className="sr-only">(se abre en una pestaña nueva)</span>
          </a>
        </p>

        {/* Con poco contenido no hay nada que plegar: va dentro de la misma tarjeta. */}
        {!usaDesplegable && tieneDetalle ? <div className="mt-5">{detalle}</div> : null}
      </div>

      {/*
       * Desplegable nativo: funciona sin JavaScript, es accesible por teclado y el
       * navegador expone el estado expandido/contraído. El indicador visual es el
       * chevron (el marcador propio del navegador se oculta porque lo reemplaza).
       */}
      {usaDesplegable ? (
        <details className="group border-t border-border">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-sm font-semibold text-brand-teal-dark hover:underline sm:px-6 [&::-webkit-details-marker]:hidden">
            {/*
             * Dos textos superpuestos, alternados por CSS según el estado nativo
             * de <details> (mismo recurso que ya usa el sitio en
             * calendario-y-novedades y en el menú móvil del Header): sin
             * JavaScript, y el foco no se pierde al abrir/cerrar porque el
             * <summary> nunca se desmonta.
             */}
            <span>
              <span className="group-open:hidden">{textoCerrado}</span>
              <span className="hidden group-open:inline">{textoAbierto}</span>
            </span>
            <ChevronDownIcon className="size-4 shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">{detalle}</div>
        </details>
      ) : null}
    </section>
  );
}
