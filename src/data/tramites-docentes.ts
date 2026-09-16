import type { AccesoExterno } from "@/data/types";

/**
 * Servicios y trámites docentes vigentes en ABC/Servado. No se copian fechas ni
 * cronogramas acá: cada portal mantiene los suyos actualizados. Fuentes y fecha
 * de verificación en docs/fuentes-calendario-novedades.md.
 */
export const tramitesDocentes: AccesoExterno[] = [
  {
    titulo: "Calendario de Actividades Docentes 2026",
    href: "https://abc.gob.ar/calendario-docente",
    descripcion:
      "Cronograma mensual de acciones estatutarias para todas las direcciones técnico-docentes de la DGCyE.",
  },
  {
    titulo: "Ingreso a la Docencia — Listado Oficial",
    href: "https://abc.gob.ar/secretarias/noticias/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/ingreso",
    descripcion:
      "Inscripción, carga de antecedentes y exhibición de listados de la Dirección de Tribunales de Clasificación.",
  },
  {
    titulo: "Movimiento Anual Docente y Acrecentamiento (MAD)",
    href: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/mad",
    descripcion: "Normativa, formularios y cronograma vigente de MAD y Acrecentamiento.",
  },
  {
    titulo: "Listado Oficial (Servado)",
    href: "https://servado.abc.gob.ar/lof",
    descripcion: "Consulta del listado oficial docente por especialidad y distrito.",
  },
  {
    titulo: "Servado — Autogestión docente",
    href: "https://servado.abc.gob.ar/",
    descripcion:
      "Inscripciones y acciones estatutarias (MAD, Acrecentamiento y otros trámites) con usuario y contraseña de ABC.",
  },
];
