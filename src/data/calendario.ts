import type { AccesoExterno, Documento } from "@/data/types";

/**
 * Calendario Escolar 2026 — Dirección General de Cultura y Educación (DGCyE),
 * Provincia de Buenos Aires. Fuentes y fecha de verificación en
 * docs/fuentes-calendario-novedades.md. Se prioriza enlazar al portal oficial
 * (siempre actualizado) antes que copiar sus fechas acá.
 */

export const calendarioEscolarPortal: AccesoExterno = {
  titulo: "Calendario Escolar 2026",
  href: "https://abc.gob.ar/calendario_escolar",
  descripcion:
    "Portal oficial de la DGCyE con el cronograma vigente, recesos, feriados y los cinco anexos del Calendario Escolar 2026.",
};

export const calendarioEscolarDocumentos: Documento[] = [
  {
    titulo: "Resolución RESOC-2025-6568-GDEBA-DGCYE — Anexo I (Cronograma)",
    href: "https://abc.gob.ar/sites/default/files/2026-01/RESOC-2025-6568-GDEBA-DGCYE%20ANEXO%201.pdf",
    descripcion: "Resolución que aprueba el Calendario Escolar 2026, con su cronograma general.",
    tipo: "pdf",
  },
  {
    titulo: "Anexo II — Instrucciones generales, recesos y feriados 2026",
    href: "https://abc.gob.ar/sites/default/files/2026-01/RESOC-2025-6568-GDEBA-DGCYE%20ANEXO%202.pdf",
    descripcion: "Pautas generales del calendario escolar y listado de feriados nacionales 2026.",
    tipo: "pdf",
  },
];
