import type { Metadata } from "next";
import { jsonLdOferta, metadataPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { OfertaInstitucionCard } from "@/components/ui/OfertaInstitucionCard";
import { cicloOferta, ofertaPorGrupo } from "@/lib/oferta-educativa";
import { cn } from "@/lib/utils";

export const metadata: Metadata = metadataPagina({
  titulo: `Oferta educativa ${cicloOferta}`,
  descripcion:
    `Oferta educativa ${cicloOferta} de San Andrés de Giles: orientaciones de secundaria, tecnicaturas, profesorados y trayectos de formación profesional, con el perfil del egresado.`,
  ruta: "/oferta-educativa",
});

export default function OfertaEducativaPage() {
  return (
    <>
      <JsonLd data={jsonLdOferta(cicloOferta, ofertaPorGrupo.flatMap((grupo) => grupo.instituciones))} />
      <PageHeader
        title={`Oferta Educativa ${cicloOferta}`}
        crumb="Oferta educativa"
        description={`Conocé las propuestas educativas disponibles en el distrito de San Andrés de Giles para el ciclo lectivo ${cicloOferta}.`}
      />
      <Container className="py-12">
        {/* Índice con anclas normales: sin JavaScript, envuelve en varias líneas en mobile. */}
        <nav aria-label="Secciones de la oferta educativa">
          <ul className="flex flex-wrap gap-2">
            {ofertaPorGrupo.map((grupo) => (
              <li key={grupo.id}>
                <a
                  href={`#${grupo.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-teal-dark transition-colors hover:border-brand-teal-dark hover:bg-brand-teal-tint"
                >
                  {grupo.titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {ofertaPorGrupo.map((grupo) => {
          // Formación Profesional reúne muchas propuestas en una sola institución: su
          // tarjeta usa todo el ancho y reparte los trayectos en dos columnas.
          const anchoCompleto = grupo.id === "formacion-profesional";
          return (
            <section
              key={grupo.id}
              id={grupo.id}
              aria-labelledby={`${grupo.id}-titulo`}
              className="mt-12 scroll-mt-6"
            >
              <h2 id={`${grupo.id}-titulo`} className="text-2xl font-bold text-ink sm:text-3xl">
                {grupo.titulo}
              </h2>
              <p className="mt-2 max-w-3xl text-ink-muted">{grupo.descripcion}</p>
              <div className={cn("mt-6 grid items-start gap-6", !anchoCompleto && "lg:grid-cols-2")}>
                {grupo.instituciones.map((institucion) => (
                  <OfertaInstitucionCard key={institucion.ancla} institucion={institucion} />
                ))}
              </div>
            </section>
          );
        })}

        <p className="mt-12 max-w-3xl text-sm text-ink-muted">
          Para consultar inscripción y cursada, comunicate con cada institución. Sus datos de contacto
          están en{" "}
          <Link
            href="/instituciones"
            className="font-medium text-brand-teal-dark underline decoration-brand-teal-dark/40 underline-offset-2 hover:decoration-brand-teal-dark"
          >
            Instituciones educativas
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
