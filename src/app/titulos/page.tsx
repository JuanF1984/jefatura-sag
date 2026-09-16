import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { DocumentSectionList } from "@/components/ui/DocumentSectionList";
import { seccionesTitulos, seccionesHistoricasTitulos } from "@/data/titulos-secciones";

export const metadata: Metadata = {
  title: "Títulos y certificaciones",
  description:
    "Emisión, anulación, rectificación y duplicados de títulos, certificados analíticos y equivalencias vigentes en el sistema de títulos digitales de la Provincia de Buenos Aires.",
};

export default function TitulosPage() {
  return (
    <>
      <PageHeader
        title="Títulos y certificaciones"
        crumb="Títulos y certificaciones"
        description="Trámites y normativa vigente del Sistema Provincial de Títulos: emisión, anulación, rectificación, duplicados, certificados analíticos y equivalencias."
      />
      <Container className="py-12">
        <DocumentSectionList secciones={seccionesTitulos} />

        {seccionesHistoricasTitulos.length > 0 ? (
          <section aria-labelledby="documentacion-historica" className="mt-16 border-t border-border pt-10">
            <h2 id="documentacion-historica" className="text-2xl font-bold text-ink sm:text-3xl">
              Documentación histórica
            </h2>
            <p className="mt-2 max-w-3xl text-ink-muted">
              Documentación de referencia ya reemplazada por normativa vigente, indicada en cada caso.
            </p>
            <div className="mt-6">
              <DocumentSectionList secciones={seccionesHistoricasTitulos} headingLevel="h3" />
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}
