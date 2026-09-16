import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AccessCard } from "@/components/ui/AccessCard";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { MailIcon, FormIcon, CertificateIcon, FolderIcon } from "@/components/ui/icons";
import { documentosJefaturaDistrital } from "@/data/formularios-jefatura";
import {
  ingresoDocenciaYListados,
  puntajeYCarreraDocente,
  licenciasTramiteOnline,
  licenciasFormularioSad,
  licenciasNormativa,
  licenciaProfilaxis114H,
  otrosFormularios,
} from "@/data/formularios-oficiales";
import { autorizacionActividadesAcuaticas } from "@/data/formularios-inspectores";

export const metadata: Metadata = {
  title: "Formularios",
  description:
    "Formularios, planillas y trámites para docentes y equipos de conducción: declaraciones juradas, Ingreso a la Docencia, puntaje, carrera docente, licencias y otros accesos oficiales, con prioridad en las fuentes oficiales vigentes de ABC/DGCyE.",
};

export default function FormulariosPage() {
  return (
    <>
      <PageHeader
        title="Formularios"
        crumb="Formularios"
        description="Acceso ordenado a formularios, planillas y trámites para docentes y equipos de conducción. Se prioriza el trámite digital vigente de ABC/Servado por sobre una copia estática, cuando ambos existen."
      />
      <Container className="py-12">
        {/* 1. Declaraciones juradas y documentación de Jefatura Distrital */}
        <section>
          <SectionHeading
            eyebrow="Jefatura Distrital"
            title="Declaraciones juradas y documentación habitual"
            description="Modelos y constancias propios de la Jefatura Distrital de San Andrés de Giles, distintos de los trámites oficiales de ABC/DGCyE de las secciones siguientes."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {documentosJefaturaDistrital.map((doc) => (
              <DocumentCard key={doc.href} documento={doc} />
            ))}
          </ul>
        </section>

        {/* 2. Ingreso a la Docencia y Listados */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="ABC / Servado"
            title="Ingreso a la Docencia y Listados"
            description="Inscripción, declaración jurada de antecedentes, reclamos de puntaje y rectificación/inclusión, y consulta del listado oficial. Todo se gestiona en línea con usuario de ABC."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ingresoDocenciaYListados.map((item) => (
              <li key={item.href}>
                <AccessCard
                  href={item.href}
                  title={item.titulo}
                  description={item.descripcion}
                  icon={<FormIcon className="size-5" />}
                  external
                  badge={item.badge}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Puntaje y carrera docente */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="ABC / Servado"
            title="Puntaje y carrera docente"
            description="Accesos oficiales para el Puntaje Anual Docente (PAD) y el Movimiento Anual Docente y Acrecentamiento (MAD)."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {puntajeYCarreraDocente.map((item) => (
              <li key={item.href}>
                <AccessCard
                  href={item.href}
                  title={item.titulo}
                  description={item.descripcion}
                  icon={<CertificateIcon className="size-5" />}
                  external
                  badge={item.badge}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Licencias docentes */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="ABC / Servado"
            title="Licencias docentes"
            description="Reemplaza al bloque extenso de la versión anterior: acceso directo al trámite online, al formulario oficial y a la normativa completa."
          />

          <div className="mt-6 rounded-card border border-border bg-brand-teal-tint p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal-dark">
              Licencias — artículos 114 y 115
            </p>
            <h3 className="mt-1 text-xl font-bold text-brand-teal-darker">Licencias docentes</h3>
            <p className="mt-2 max-w-xl text-ink-muted">
              El formulario oficial y la normativa completa quedan disponibles para consulta directa. El
              trámite en sí (solicitar o consultar una licencia) se gestiona en el servicio de
              autogestión de ABC, con acceso más abajo.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={licenciasFormularioSad.href} external variant="secondary">
                Ver formulario 114/115
              </Button>
              <Button href={licenciasNormativa.href} external variant="secondary">
                Ver normativa (Ley 10579)
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-card border border-dashed border-brand-teal-dark/40 bg-surface px-4 py-3">
              <ExternalLink href={licenciasTramiteOnline.href} className="text-sm">
                Acceder a Mis Licencias (servicio oficial de ABC)
              </ExternalLink>
              <span className="text-sm text-ink-muted">
                Servicio de autogestión de licencias de ABC. Requiere iniciar sesión con cuenta ABC; no
                es una página informativa.
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-card border border-border bg-surface-muted p-5">
            <h4 className="font-semibold text-ink">{licenciaProfilaxis114H.titulo}</h4>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted">{licenciaProfilaxis114H.resumen}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a
                href={`mailto:${licenciaProfilaxis114H.correo}`}
                className="inline-flex items-center gap-1.5 font-medium text-brand-teal-dark hover:underline"
              >
                <MailIcon className="size-4" />
                {licenciaProfilaxis114H.correo}
              </a>
              <ExternalLink href={licenciaProfilaxis114H.href}>
                Dirección de Calidad Laboral y Medio Ambiente del Trabajo
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* 5. Otros formularios */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="ABC"
            title="Otros formularios"
            description="Accesos oficiales para docentes y equipos de conducción que no encajan en las categorías anteriores."
          />
          <ul
            className={`mt-6 grid gap-4 ${
              otrosFormularios.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-sm"
            }`}
          >
            {otrosFormularios.map((item) => (
              <li key={item.href}>
                <AccessCard
                  href={item.href}
                  title={item.titulo}
                  description={item.descripcion}
                  icon={<FolderIcon className="size-5" />}
                  external
                  badge={item.badge}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Actividades acuáticas */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="Salidas educativas"
            title="Actividades acuáticas"
            description="Autorización/consentimiento específica para actividades acuáticas en salidas educativas. La normativa reglamentaria específica todavía no fue identificada con certeza (ver docs/auditoria-vigencia-normativa-2026.md)."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <DocumentCard documento={autorizacionActividadesAcuaticas} />
          </ul>
        </section>
      </Container>
    </>
  );
}
