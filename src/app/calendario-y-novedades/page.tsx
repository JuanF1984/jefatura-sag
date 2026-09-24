import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AccessCard } from "@/components/ui/AccessCard";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { Notice } from "@/components/ui/Notice";
import { FormIcon, BookIcon } from "@/components/ui/icons";
import { calendarioEscolarPortal, calendarioEscolarDocumentos } from "@/data/calendario";
import { tramitesDocentes } from "@/data/tramites-docentes";
import { recursosEducativos } from "@/data/recursos-educativos";
import { calendario2025, comunicados2025, flyers2025 } from "@/data/archivo-2025";
import { novedadesOrdenadas } from "@/lib/novedades";

export const metadata: Metadata = {
  title: "Calendario y novedades",
  description:
    "Calendario Escolar 2026, trámites e inscripciones docentes y recursos oficiales de la DGCyE.",
};

export default function CalendarioYNovedadesPage() {
  return (
    <>
      <PageHeader
        title="Calendario y novedades"
        crumb="Calendario y novedades"
        description="Puerta de acceso a las fuentes oficiales vigentes de la Dirección General de Cultura y Educación: no reemplazan a ABC, enlazan directamente a sus portales."
      />
      <Container className="py-12">
        {/* 1. Calendario escolar */}
        <section>
          <SectionHeading eyebrow="Vigente" title="Calendario escolar" />
          <div className="mt-6 rounded-card border border-border bg-brand-teal-tint p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal-dark">
                  Portal oficial
                </p>
                <h3 className="mt-1 text-xl font-bold text-brand-teal-darker">
                  {calendarioEscolarPortal.titulo}
                </h3>
                <p className="mt-2 max-w-xl text-ink-muted">{calendarioEscolarPortal.descripcion}</p>
              </div>
              <Button href={calendarioEscolarPortal.href} external className="shrink-0">
                Ver calendario oficial
              </Button>
            </div>
          </div>

          {calendarioEscolarDocumentos.length > 0 ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {calendarioEscolarDocumentos.map((doc) => (
                <DocumentCard key={doc.href} documento={doc} />
              ))}
            </ul>
          ) : null}
        </section>

        {/* 2. Trámites e inscripciones docentes */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Docentes"
            title="Trámites e inscripciones"
            description="Accesos directos a los servicios de ABC/Servado. Cada uno mantiene su propio cronograma actualizado; no se copian fechas acá."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tramitesDocentes.map((tramite) => (
              <li key={tramite.href}>
                <AccessCard
                  href={tramite.href}
                  title={tramite.titulo}
                  description={tramite.descripcion}
                  icon={<FormIcon className="size-5" />}
                  external
                  badge="Trámite"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Novedades distritales: acceso a /novedades, sólo si hay publicaciones */}
        {novedadesOrdenadas.length > 0 ? (
          <section className="mt-14">
            <SectionHeading
              eyebrow="Jefatura Distrital"
              title="Novedades distritales"
              description="Comunicados y novedades propias de la Jefatura Distrital de San Andrés de Giles."
            />
            <div className="mt-6">
              <Button href="/novedades">Ver novedades distritales</Button>
            </div>
          </section>
        ) : null}

        {/* 4. Novedades y recursos educativos */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Recursos"
            title="Novedades y recursos educativos"
            description="Esta página no reproduce las noticias de ABC: enlaza a sus fuentes oficiales, que se mantienen actualizadas por su cuenta."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recursosEducativos.map((recurso) => (
              <li key={recurso.href}>
                <AccessCard
                  href={recurso.href}
                  title={recurso.titulo}
                  description={recurso.descripcion}
                  icon={<BookIcon className="size-5" />}
                  external
                  badge="Portal oficial"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Archivo 2025 */}
        <section className="mt-14 border-t border-border pt-10">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Archivo</p>
                <h2 className="mt-1 text-xl font-bold text-ink">Contenido del ciclo lectivo 2025</h2>
              </div>
              <span className="shrink-0 text-sm font-semibold text-brand-teal-dark">
                <span className="group-open:hidden">Mostrar</span>
                <span className="hidden group-open:inline">Ocultar</span>
              </span>
            </summary>

            <div className="mt-6 space-y-10">
              <Notice title="Contenido histórico — ciclo lectivo 2025" className="max-w-3xl">
                Se conserva por trazabilidad. No representa el calendario ni las novedades vigentes; ver
                las secciones de arriba para el contenido actual.
              </Notice>

              <div>
                <h3 className="font-semibold text-ink">Calendario escolar 2025</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {calendario2025.map((doc) => (
                    <DocumentCard key={doc.href} documento={doc} />
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ink">Comunicados 2025</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {comunicados2025.map((doc) => (
                    <DocumentCard key={doc.href} documento={doc} />
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ink">Comunicados con imagen (2025)</h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {flyers2025.map((flyer) => (
                    <figure
                      key={flyer.imagen}
                      className="overflow-hidden rounded-card border border-border shadow-soft"
                    >
                      <Image
                        src={flyer.imagen}
                        alt={flyer.titulo}
                        width={600}
                        height={600}
                        className="h-auto w-full"
                      />
                      <figcaption className="border-t border-border bg-surface-muted px-3 py-2">
                        <p className="text-sm font-semibold text-ink">{flyer.titulo}</p>
                        <p className="text-xs text-ink-muted">{flyer.fecha}</p>
                        {flyer.descripcion ? (
                          <p className="mt-1 text-xs text-ink-muted">{flyer.descripcion}</p>
                        ) : null}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </section>
      </Container>
    </>
  );
}
