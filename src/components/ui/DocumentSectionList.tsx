import type { SeccionDocumentos } from "@/data/types";
import { DocumentCard } from "@/components/ui/DocumentCard";

export function DocumentSectionList({
  secciones,
  headingLevel = "h2",
}: {
  secciones: SeccionDocumentos[];
  /** Nivel de encabezado de cada sección, para respetar la jerarquía de la página. */
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <div className="space-y-10">
      {secciones.map((seccion) => (
        <section key={seccion.id}>
          <Heading className="text-lg font-bold text-ink">{seccion.titulo}</Heading>
          {seccion.descripcion ? (
            <p className="mt-2 max-w-3xl text-sm text-ink-muted">{seccion.descripcion}</p>
          ) : null}
          {seccion.documentos.length > 0 ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {seccion.documentos.map((doc) => (
                <DocumentCard key={doc.href} documento={doc} />
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
