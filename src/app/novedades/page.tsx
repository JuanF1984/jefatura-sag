import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { NovedadCard } from "@/components/ui/NovedadCard";
import { novedadesOrdenadas } from "@/lib/novedades";

export const metadata: Metadata = {
  title: "Novedades distritales",
  description: "Comunicados y novedades de la Jefatura Distrital de San Andrés de Giles.",
};

export default function NovedadesPage() {
  return (
    <>
      <PageHeader
        title="Novedades distritales"
        crumb="Novedades distritales"
        description="Comunicados y novedades de la Jefatura Distrital de San Andrés de Giles."
      />
      <Container className="py-12">
        {novedadesOrdenadas.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {novedadesOrdenadas.map((novedad) => (
              <li key={novedad.slug}>
                <NovedadCard novedad={novedad} headingLevel="h2" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-ink-muted">Por el momento no hay novedades publicadas.</p>
        )}
      </Container>
    </>
  );
}
