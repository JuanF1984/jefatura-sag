import type { Documento } from "@/data/types";
import { tipoDeArchivo } from "@/lib/documentos";

/**
 * Documentación propia de la Jefatura Distrital (no trámites de ABC/DGCyE): modelos y
 * constancias que la Jefatura pone a disposición, recuperados del sitio original. Se
 * distinguen de los accesos oficiales de src/data/formularios-oficiales.ts. Fuentes y
 * fecha de verificación en docs/fuentes-formularios.md.
 */
export const documentosJefaturaDistrital: Documento[] = [
  {
    titulo: "Declaración Jurada de Horarios (modelo)",
    href: "https://drive.google.com/open?authuser=0&id=1qg2ciQHdmKIu_Ewf1DpRvZ9pl7KwTRjA",
    descripcion:
      "Planilla modelo para declarar cargos, módulos, horas cátedra y horarios en establecimientos públicos y privados.",
    tipo: tipoDeArchivo("Declaracion Jurada MODELO.xls"),
  },
  {
    titulo: "Constancia de inscripción — título en trámite",
    href: "https://drive.google.com/open?authuser=0&id=1x_cdxnDV8vsUXDetpMCgjeq8CTpIL3iT",
    descripcion:
      "Modelo de constancia para acreditar título en trámite al inscribirse en Ingreso a la Docencia, cuando el título definitivo todavía no fue expedido.",
    tipo: tipoDeArchivo("CONSTANCIA-PARA-INGRESO-A-LA-DOCENCIA-TITULO-EN-TRÁMITE.pdf"),
  },
];
