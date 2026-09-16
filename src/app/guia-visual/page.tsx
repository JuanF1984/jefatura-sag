import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AccessCard } from "@/components/ui/AccessCard";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { InstitutionCard } from "@/components/ui/InstitutionCard";
import { PersonCard } from "@/components/ui/PersonCard";
import { Notice } from "@/components/ui/Notice";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PendingContent } from "@/components/ui/PendingContent";
import { SchoolIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Guía visual",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "brand-teal", var: "--color-brand-teal", hex: "#009AAE" },
  { name: "brand-teal-dark", var: "--color-brand-teal-dark", hex: "#0A5773" },
  { name: "brand-teal-darker", var: "--color-brand-teal-darker", hex: "#073E51" },
  { name: "brand-teal-light", var: "--color-brand-teal-light", hex: "#CDE7EB" },
  { name: "brand-teal-tint", var: "--color-brand-teal-tint", hex: "#EEF7F8" },
  { name: "ink", var: "--color-ink", hex: "#262626" },
  { name: "ink-muted", var: "--color-ink-muted", hex: "#5B5B5D" },
  { name: "surface-muted", var: "--color-surface-muted", hex: "#F2F2F2" },
  { name: "border", var: "--color-border", hex: "#E2E2E2" },
  { name: "notice", var: "--color-notice", hex: "#92400E" },
  { name: "danger", var: "--color-danger", hex: "#B42318" },
  { name: "success", var: "--color-success", hex: "#15803D" },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

export default function GuiaVisualPage() {
  return (
    <Container className="py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal-dark">
          Uso interno — no listada en la navegación pública
        </p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Guía visual</h1>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Referencia viva del sistema de diseño del sitio. Ver también{" "}
          <code className="rounded bg-surface-muted px-1 py-0.5 text-sm">
            docs/referencia-visual-abc.md
          </code>{" "}
          y los tokens en{" "}
          <code className="rounded bg-surface-muted px-1 py-0.5 text-sm">src/app/globals.css</code>.
        </p>
      </div>

      <Block title="Paleta de colores">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-card border border-border">
              <div className="h-16" style={{ backgroundColor: `var(${s.var})` }} />
              <div className="p-2 text-xs">
                <p className="font-semibold text-ink">{s.name}</p>
                <p className="text-ink-muted">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Títulos y párrafos">
        <h1 className="text-4xl font-bold text-ink">Título H1 — 4xl / bold</h1>
        <h2 className="text-3xl font-bold text-ink">Título H2 — 3xl / bold</h2>
        <h3 className="text-xl font-semibold text-ink">Subtítulo H3 — xl / semibold</h3>
        <p className="max-w-2xl text-ink">
          Párrafo de cuerpo estándar, color <code>ink</code>. Se usa para el contenido principal de las
          páginas, con buen contraste sobre fondo blanco.
        </p>
        <p className="max-w-2xl text-ink-muted">
          Párrafo secundario, color <code>ink-muted</code>. Se usa para descripciones, metadatos y texto
          de apoyo.
        </p>
      </Block>

      <Block title="Enlaces">
        <p className="space-x-4">
          <a href="#" className="font-medium text-brand-teal-dark underline underline-offset-2 hover:no-underline">
            Enlace interno de texto
          </a>
          <ExternalLink href="https://abc.gob.ar">Enlace externo con indicador</ExternalLink>
        </p>
      </Block>

      <Block title="Botones">
        <div className="flex flex-wrap items-center gap-3">
          <Button href="#">Botón primario</Button>
          <Button href="#" variant="secondary">
            Botón secundario
          </Button>
          <Button href="#" external variant="secondary">
            Enlace externo como botón
          </Button>
          <button type="button" disabled className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-border px-5 py-2.5 text-sm font-semibold text-ink-muted opacity-70">
            Deshabilitado
          </button>
        </div>
      </Block>

      <Block title="Tarjetas de acceso">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AccessCard
            href="#"
            title="Instituciones educativas"
            description="Mapa interactivo y listado de escuelas."
            icon={<SchoolIcon className="size-5" />}
          />
        </div>
      </Block>

      <Block title="Tarjetas de documentos">
        <ul className="grid gap-3 sm:grid-cols-2">
          <DocumentCard
            documento={{ titulo: "Calendario Escolar 2025.pdf", href: "#", categoria: "Calendario" }}
          />
          <DocumentCard
            documento={{
              titulo: "Planilla de inscripción — modelo",
              href: "#",
              tipo: "xls",
              revisar: true,
            }}
          />
        </ul>
      </Block>

      <Block title="Tarjetas de instituciones y personas">
        <ul className="grid gap-3 sm:grid-cols-2">
          <InstitutionCard
            institucion={{
              nombre: "EP N°1",
              nivel: "Primaria",
              modalidad: "Jornada completa",
              localidad: "San Andrés de Giles",
            }}
          />
          <PersonCard persona={{ nombre: "Nombre Apellido", nivelModalidad: "Educación Inicial" }} />
        </ul>
      </Block>

      <Block title="Avisos y alertas">
        <div className="space-y-3">
          <Notice title="Contenido pendiente de actualización">
            Aviso neutro (ámbar) — se usa para contenido recuperado pero desactualizado o incompleto.
          </Notice>
          <Notice tone="danger" title="Enlace roto o dudoso">
            Aviso de error — se usa para enlaces que requieren revisión manual.
          </Notice>
          <Notice tone="success" title="Trámite disponible">
            Aviso de confirmación — uso puntual.
          </Notice>
          <PendingContent>
            Ejemplo del mensaje estándar de contenido pendiente, reutilizado en varias páginas.
          </PendingContent>
        </div>
      </Block>

      <Block title="Etiquetas">
        <div className="flex flex-wrap gap-2">
          <Tag>PDF</Tag>
          <Tag>Primaria</Tag>
          <Tag>Jornada completa</Tag>
        </div>
      </Block>

      <Block title="Fondos y separadores">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-card border border-border bg-surface p-4 text-sm">surface (blanco)</div>
          <div className="rounded-card border border-border bg-surface-muted p-4 text-sm">surface-muted</div>
          <div className="rounded-card border border-border bg-brand-teal-tint p-4 text-sm">brand-teal-tint</div>
        </div>
        <hr className="border-border" />
      </Block>

      <Block title="Estados de foco y hover">
        <p className="text-sm text-ink-muted">
          Probar navegación por teclado (Tab) sobre los elementos de esta página: el foco debe verse
          siempre como un contorno teal de 3px. Pasar el mouse sobre tarjetas y botones para ver los
          estados hover.
        </p>
      </Block>
    </Container>
  );
}
