import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import {
  IMAGEN_NOVEDAD,
  formatearFecha,
  novedadesOrdenadas,
  obtenerNovedad,
  parrafosDeContenido,
} from "@/lib/novedades";

// Sólo existen las páginas de las publicaciones cargadas; cualquier otro slug es 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return novedadesOrdenadas.map((novedad) => ({ slug: novedad.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const novedad = obtenerNovedad(slug);
  if (!novedad) return {};
  return { title: novedad.titulo, description: novedad.resumen };
}

export default async function NovedadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const novedad = obtenerNovedad(slug);
  if (!novedad) notFound();

  return (
    <>
      <section className="border-b border-border bg-brand-teal-tint">
        <Container className="max-w-3xl py-10">
          <Breadcrumbs
            items={[{ href: "/novedades", label: "Novedades distritales" }, { label: novedad.titulo }]}
          />
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-ink-muted">
            <time dateTime={novedad.fecha}>{formatearFecha(novedad.fecha)}</time>
            {novedad.categoria ? <Tag className="bg-surface">{novedad.categoria}</Tag> : null}
          </div>
          <h1 className="mt-2 text-3xl font-bold text-brand-teal-darker sm:text-4xl">{novedad.titulo}</h1>
        </Container>
      </section>

      <Container className="max-w-3xl py-10">
        <article>
          {novedad.imagen ? (
            <div className="aspect-3/2 w-full overflow-hidden rounded-card border border-border bg-surface-muted">
              <Image
                src={novedad.imagen}
                alt={novedad.imagenAlt}
                width={IMAGEN_NOVEDAD.width}
                height={IMAGEN_NOVEDAD.height}
                sizes="(min-width: 768px) 720px, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div className={novedad.imagen ? "mt-8 space-y-4" : "space-y-4"}>
            {parrafosDeContenido(novedad.contenido).map((parrafo, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink">
                {parrafo}
              </p>
            ))}
          </div>

          {novedad.enlace ? (
            <div className="mt-8">
              <Button href={novedad.enlace.url} external>
                {novedad.enlace.texto}
              </Button>
            </div>
          ) : null}
        </article>

        <div className="mt-12 border-t border-border pt-6">
          <Button href="/novedades" variant="secondary">
            ← Volver a Novedades distritales
          </Button>
        </div>
      </Container>
    </>
  );
}
