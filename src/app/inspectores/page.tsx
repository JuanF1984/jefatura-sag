import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PersonCard } from "@/components/ui/PersonCard";
import { site } from "@/data/site";
import { inspectores } from "@/data/inspectores";

export const metadata: Metadata = {
  title: "Inspectores",
  description: "Inspectores/as de la Jefatura Distrital de San Andrés de Giles, por nivel y modalidad.",
};

export default function InspectoresPage() {
  return (
    <>
      <PageHeader
        title="Inspectores"
        crumb="Inspectores"
        description={`Inspector Jefe Distrital: ${site.inspectorJefeDistrital}. Secretaria de Jefatura: ${site.secretariaDeJefatura}.`}
      />
      <Container className="py-12">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {inspectores.map((inspector) => (
            <PersonCard key={`${inspector.nombre}-${inspector.nivelModalidad}`} persona={inspector} />
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          Para consultas dirigidas a un/a inspector/a en particular, comunicarse por los datos de
          contacto generales de la Jefatura Distrital en{" "}
          <a href="/contacto" className="text-brand-teal-dark underline">
            Contacto y ubicación
          </a>
          .
        </p>
      </Container>
    </>
  );
}
