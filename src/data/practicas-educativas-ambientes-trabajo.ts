import type { Documento } from "@/data/types";

/**
 * Fuente única de los 13 anexos de la Resolución Conjunta 5356/2024 (PEAT —
 * Sistema de Prácticas Educativas en Ambientes de Trabajo), usada por
 * src/data/normativa-secciones.ts.
 *
 * Estos 13 documentos figuraban antes en el sitio bajo el rótulo "Actividades
 * acuáticas — Resolución 44921855/24". La auditoría de vigencia normativa del
 * 2026-08-19 (ver docs/auditoria-vigencia-normativa-2026.md) verificó, anexo por
 * anexo, los 13 identificadores IF contra el texto oficial de la Resolución
 * 5356/24 (RESOC-2024-5356-GDEBA-DGCYE, alojado en abc.gob.ar) y confirmó que
 * coinciden exactamente con los Anexos I a XIII de esa resolución — un sistema de
 * prácticas/pasantías en ambientes de trabajo, sin relación con actividades
 * acuáticas. Los `href` de Google Drive no cambiaron respecto de su versión
 * anterior en normativa-secciones.ts.
 *
 * 2026-09-09: los títulos pasaron a ser funcionales y legibles; el identificador
 * técnico GDEBA (IF-...) quedó como dato de trazabilidad en la descripción, no
 * como título.
 */

export const resolucion5356_24 = {
  titulo:
    "Resolución Conjunta 5356/2024 — Sistema de Prácticas Educativas en Ambientes de Trabajo (PEAT)",
  href: "https://abc.gob.ar/secretarias/sites/default/files/2025-04/RESOLUCI%C3%93N%205356-2024%20PEAT%20-%20Sistema%20de%20Pr%C3%A1cticas%20Educativas%20en%20Ambientes%20de%20Trabajo.pdf",
};

/** Guía oficial de implementación del sistema PEAT (cuadernillo, mayo 2025). */
export const guiaImplementacionPeat: Documento = {
  titulo: "Guía de implementación del sistema PEAT (cuadernillo)",
  href: "https://abc.gob.ar/secretarias/sites/default/files/2025-05/CUADERNILLO-Gui%CC%81a%20de%20Implementacio%CC%81n.pdf",
  descripcion: "Material de apoyo para la puesta en marcha de las prácticas (mayo de 2025). No es norma.",
  categoria: "Material de implementación",
  tipo: "pdf",
};

const categoria = "Resolución Conjunta 5356/2024 (PEAT)";

export const peatAnexo1Conceptualizacion: Documento = {
  titulo: "Anexo I — Conceptualización, objeto e implementación del sistema",
  href: "https://drive.google.com/open?authuser=0&id=1sJ4XeZJdqpf5eMFppmUpD2FnYQiGzdsm",
  descripcion: "Identificador oficial: IF-2024-44407482-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo2PracticasProfesionalizantes: Documento = {
  titulo: "Anexo II — Criterios para las Prácticas Profesionalizantes",
  href: "https://drive.google.com/open?authuser=0&id=1KaajB1DjtYTa9_Q9mVi_XY6GO6M3aS0H",
  descripcion: "Identificador oficial: IF-2024-44217366-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo3PasantiasYAproximacion: Documento = {
  titulo: "Anexo III — Criterios para las Pasantías Educativas y la Aproximación al Mundo del Trabajo",
  href: "https://drive.google.com/open?authuser=0&id=1Nqh2y-pcM3_ZwLFpO13iZDwyol4QsTPE",
  descripcion: "Identificador oficial: IF-2024-44217292-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo4CriteriosGenerales: Documento = {
  titulo: "Anexo IV — Criterios aplicables a los distintos tipos de prácticas",
  href: "https://drive.google.com/open?authuser=0&id=1KK0spkHuz9eudgyWJv7VMFiA5twZ1IXY",
  descripcion: "Identificador oficial: IF-2024-44217254-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo5FormacionAplicadaYSocioComunitarias: Documento = {
  titulo: "Anexo V — Criterios para las Prácticas de Formación Aplicada y las Prácticas Socio-Comunitarias",
  href: "https://drive.google.com/open?authuser=0&id=1MS98J5YBd6K42getM-XKIk8AtCyWhHSr",
  descripcion: "Identificador oficial: IF-2024-44217187-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo6EducacionJovenesAdultos: Documento = {
  titulo: "Anexo VI — Criterios para la Educación de Jóvenes, Adultos y Adultos Mayores",
  href: "https://drive.google.com/open?authuser=0&id=1WbPbZrArI7CcLVfC51I-ws5b31OeqLNE",
  descripcion: "Identificador oficial: IF-2024-44406983-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo7SolicitudExcepcion: Documento = {
  titulo: "Anexo VII — Formulario de solicitud de excepción (Artículo 10)",
  href: "https://drive.google.com/open?authuser=0&id=1b5VE-88fUHGcdCY959ZQaXO5U-0ePIrC",
  descripcion: "Identificador oficial: IF-2024-44216720-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo8CertificadoPracticasProfesionalizantes: Documento = {
  titulo: "Anexo VIII — Certificado oficial de Prácticas Profesionalizantes",
  href: "https://drive.google.com/open?authuser=0&id=1COrp6PZHq3ljkM7L7LNHKPOuIZOgFp9m",
  descripcion: "Identificador oficial: IF-2024-44216064-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo9CertificadoPasantias: Documento = {
  titulo: "Anexo IX — Certificado oficial de Pasantías Educativas",
  href: "https://drive.google.com/open?authuser=0&id=1haz8hytpDIRH7AJiSVDm4swIYPA85eI4",
  descripcion: "Identificador oficial: IF-2024-44215992-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo10CertificadoAproximacion: Documento = {
  titulo: "Anexo X — Certificado oficial de Aproximación al Mundo del Trabajo",
  href: "https://drive.google.com/open?authuser=0&id=1cIhfuQSGVJRax28H3pJW5atN2n9EDijd",
  descripcion: "Identificador oficial: IF-2024-44215930-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo11CertificadoFormacionAplicada: Documento = {
  titulo: "Anexo XI — Certificado oficial de Prácticas de Formación Aplicada",
  href: "https://drive.google.com/open?authuser=0&id=1oVi6Uu_NCYHkZv-pkDh0eyyV2NVS_pY_",
  descripcion: "Identificador oficial: IF-2024-44215878-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo12CertificadoSocioComunitarias: Documento = {
  titulo: "Anexo XII — Certificado oficial de Prácticas Socio-Comunitarias",
  href: "https://drive.google.com/open?authuser=0&id=1UFYhZ7AtJ3cEvKOWPkkQSqssirYGMAWl",
  descripcion: "Identificador oficial: IF-2024-44215836-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const peatAnexo13CertificadoInstitucionesOferentes: Documento = {
  titulo: "Anexo XIII — Certificado oficial para instituciones oferentes",
  href: "https://drive.google.com/open?authuser=0&id=1j7NcFDfRyuooMCHs6wZs4w2J5NVdr9mD",
  descripcion: "Identificador oficial: IF-2024-44215709-GDEBA-SSEDGCYE.",
  categoria,
  tipo: "pdf",
};

/** Los 13 anexos, en orden numérico (I a XIII). */
export const anexosResolucion5356_24: Documento[] = [
  peatAnexo1Conceptualizacion,
  peatAnexo2PracticasProfesionalizantes,
  peatAnexo3PasantiasYAproximacion,
  peatAnexo4CriteriosGenerales,
  peatAnexo5FormacionAplicadaYSocioComunitarias,
  peatAnexo6EducacionJovenesAdultos,
  peatAnexo7SolicitudExcepcion,
  peatAnexo8CertificadoPracticasProfesionalizantes,
  peatAnexo9CertificadoPasantias,
  peatAnexo10CertificadoAproximacion,
  peatAnexo11CertificadoFormacionAplicada,
  peatAnexo12CertificadoSocioComunitarias,
  peatAnexo13CertificadoInstitucionesOferentes,
];
