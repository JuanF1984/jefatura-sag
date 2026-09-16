import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { DocumentSectionList } from "@/components/ui/DocumentSectionList";
import { RegimenAcademicoBlock } from "@/components/ui/RegimenAcademicoBlock";
import {
  regimenesAcademicos,
  seccionesComplementarias,
  seccionesHistoricas,
} from "@/data/normativa-secciones";

export const metadata: Metadata = {
  title: "Régimen académico y normativa",
  description:
    "Regímenes Académicos vigentes de la Provincia de Buenos Aires por nivel y modalidad (secundaria, jóvenes y adultos, superior y primaria), y normativa complementaria: salidas educativas, PEAT y prácticas profesionalizantes.",
};

export default function RegimenAcademicoPage() {
  return (
    <>
      <PageHeader
        title="Régimen académico y normativa"
        crumb="Régimen académico y normativa"
        description="Consulta de regímenes académicos vigentes, normativa complementaria y documentación de referencia para los distintos niveles y modalidades del sistema educativo."
      />
      <Container className="py-12">
        <section aria-labelledby="regimenes-academicos">
          <h2 id="regimenes-academicos" className="text-2xl font-bold text-ink sm:text-3xl">
            Regímenes Académicos
          </h2>
          <p className="mt-2 max-w-3xl text-ink-muted">
            Normativa vigente que regula la organización académica de cada nivel y modalidad, junto
            con sus anexos y disposiciones complementarias.
          </p>
          <div className="mt-6 space-y-6">
            {regimenesAcademicos.map((regimen) => (
              <RegimenAcademicoBlock key={regimen.id} regimen={regimen} />
            ))}
          </div>
        </section>

        <section aria-labelledby="normativa-complementaria" className="mt-16 border-t border-border pt-10">
          <h2
            id="normativa-complementaria"
            className="text-2xl font-bold text-ink sm:text-3xl"
          >
            Normativa complementaria y temáticas específicas
          </h2>
          <p className="mt-2 max-w-3xl text-ink-muted">
            Normativa vigente sobre temas puntuales que acompañan a los Regímenes Académicos.
          </p>
          <div className="mt-6">
            <DocumentSectionList secciones={seccionesComplementarias} headingLevel="h3" />
          </div>
        </section>

        {seccionesHistoricas.length > 0 ? (
          <section
            aria-labelledby="documentacion-historica"
            className="mt-16 border-t border-border pt-10"
          >
            <h2
              id="documentacion-historica"
              className="text-2xl font-bold text-ink sm:text-3xl"
            >
              Antecedentes / documentación histórica
            </h2>
            <p className="mt-2 max-w-3xl text-ink-muted">
              Documentación de referencia histórica, ya no vigente como norma principal sobre su tema.
              No reemplaza a la normativa actual indicada en cada caso.
            </p>
            <div className="mt-6">
              <DocumentSectionList secciones={seccionesHistoricas} headingLevel="h3" />
            </div>
          </section>
        ) : null}
      </Container>
    </>
  );
}
