import type { AccesoExterno, Documento } from "@/data/types";

/**
 * Comunicados y recursos propios de la Jefatura Distrital de San Andrés de
 * Giles — no confundir con las novedades provinciales de la DGCyE, que se
 * enlazan desde src/data/recursos-educativos.ts. Instrucciones para cargar
 * contenido nuevo: ver README.md, sección "Cómo cargar comunicados
 * distritales" (no duplicar esas instrucciones en la página pública).
 */

/** Comunicados vigentes de la Jefatura Distrital. Vacío = sin publicar todavía. */
export const comunicadosDistritales: Documento[] = [];

/** Recursos distritales mantenidos por inspectores/as de la Jefatura (no son portales de la DGCyE). */
export const recursosDistritales: AccesoExterno[] = [
  {
    titulo: "Padlet DEJAYAM (Educación de Adultos) — Instituciones EJAyAM Suipacha / San Andrés de Giles",
    href: "https://padlet.com/vsimondi/instituciones-ejayam-suipacha-san-andr-s-de-giles-ac3xggmy23flsdvh",
    descripcion:
      "Repositorio de materiales para equipos directivos, mantenido por la Inspección de Educación de Adultos.",
  },
];
