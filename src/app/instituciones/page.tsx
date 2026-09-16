import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { InstitutionsExplorer } from "@/components/ui/InstitutionsExplorer";
import { mapasInstituciones, instituciones } from "@/data/instituciones";

export const metadata: Metadata = {
  title: "Instituciones educativas",
  description: "Listado de instituciones educativas del distrito de San Andrés de Giles.",
};

export default function InstitucionesPage() {
  return (
    <>
      <PageHeader
        title="Instituciones educativas"
        crumb="Instituciones educativas"
        description="Instituciones rurales y urbanas del distrito de San Andrés de Giles."
      />
      <Container className="py-12">
        <section>
          <h2 className="text-lg font-bold text-ink">Listado de establecimientos</h2>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Datos institucionales públicos: nombre, nivel, modalidad, dirección, localidad, correo y
            teléfono institucional. No se publican datos de directivos ni celulares personales.
          </p>
          <p className="mt-2 max-w-2xl text-ink-muted">
            En los establecimientos con ubicación cargada, el botón «Ver en el mapa» abre la escuela
            en un mapa.
          </p>
          <div className="mt-6">
            <InstitutionsExplorer instituciones={instituciones} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-bold text-ink">Mapas de referencia (zona rural y urbana)</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {mapasInstituciones.map((mapa) => (
              <figure key={mapa.titulo} className="overflow-hidden rounded-card border border-border shadow-soft">
                <Image
                  src={mapa.archivo}
                  alt={`Mapa de instituciones educativas — ${mapa.titulo}`}
                  width={720}
                  height={480}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-border bg-surface-muted px-3 py-2 text-sm text-ink-muted">
                  {mapa.titulo}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
