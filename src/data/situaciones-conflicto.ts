import type { Documento } from "@/data/types";

/**
 * Fuente única de los documentos públicos sobre situaciones de conflicto y
 * vulneración de derechos en el ámbito escolar, usada por
 * `src/data/normativa-secciones.ts` (sección "Situaciones de conflicto y
 * vulneración de derechos" en `/regimen-academico`). No duplicar estos
 * registros: importar desde aquí.
 *
 * 2026-09-14: movidos/reutilizados desde "Documentos para inspectores/as" — ver
 * docs/auditoria-documentos-inspectores.md (candidatos QDH-4, QDH-5 y QDH-6). Se
 * excluyó deliberadamente QDH-3 ("PLANILLA Situacion Conflicto en blanco.docx"):
 * es un instrumento de relevamiento que Inspección gestiona y consolida, no
 * documentación de referencia para el público general. Títulos limpiados de
 * extensión de archivo y de sufijos técnicos (`.pdf`, `.docx`, `(1)`); el
 * enlace y el contenido no cambiaron.
 *
 * 2026-09-14 (2): al retirarse la página pública "Documentos para
 * inspectores/as" (`/documentos-inspectores`), se eliminó
 * `documentos-inspectores-secciones.ts`, que importaba estos mismos tres
 * documentos como referencia compartida — ver
 * docs/auditoria-documentos-inspectores.md. La Planilla (QDH-3), que nunca se
 * incorporó a esta fuente, dejó de estar disponible desde cualquier página
 * pública del sitio junto con esa página; el archivo de Drive no se tocó.
 */

export const guiaOrientacionSituacionesConflicto: Documento = {
  titulo:
    "Guía de Orientación para la Intervención en situaciones conflictivas y vulneración de derechos",
  href: "https://drive.google.com/open?authuser=0&id=1pOorBQ4Q5g2lTrDsX3Ve3CrpIetMgSwf",
  descripcion:
    "Orientaciones para la intervención institucional ante situaciones de conflicto y vulneración " +
    "de derechos en el ámbito escolar, dirigidas a equipos directivos, equipos de orientación " +
    "escolar (EOE) y docentes.",
  categoria: "Guía principal",
  tipo: "pdf",
};

export const glosarioRelevamientoSituacionesConflicto: Documento = {
  titulo:
    "Glosario del Relevamiento de situaciones conflictivas y de vulneración de derechos en el " +
    "escenario escolar",
  href: "https://drive.google.com/open?authuser=0&id=1yo5XFiDG9ZPcDYKkVEQ5boJw8vU0AIvr",
  descripcion: "Definiciones de referencia para completar el relevamiento de situaciones conflictivas.",
  categoria: "Material de apoyo",
  tipo: "pdf",
};

export const cambiosRelevamiento2025: Documento = {
  titulo: "Cambios en el relevamiento de situaciones conflictivas — 2025",
  href: "https://drive.google.com/open?authuser=0&id=1x-ukTT7MQQgBu_ihNNlW5C95BhgryWt5",
  descripcion:
    "Actualización sobre los cambios metodológicos del relevamiento de situaciones conflictivas, " +
    "vigentes desde 2025. Documento de apoyo: no es normativa ni reemplaza a la guía de orientación.",
  categoria: "Material de apoyo",
  tipo: "pdf",
};
