import type { AccesoExterno } from "@/data/types";

/**
 * Accesos destacados a fuentes oficiales de novedades y recursos pedagógicos de
 * la DGCyE. Deliberadamente breve: esta página es una puerta de acceso, no un
 * espejo de las noticias de ABC. Fuentes y fecha de verificación en
 * docs/fuentes-calendario-novedades.md.
 */
export const recursosEducativos: AccesoExterno[] = [
  {
    titulo: "Noticias de la DGCyE",
    href: "https://abc.gob.ar/mas-noticias",
    descripcion: "Novedades oficiales del Portal ABC, actualizadas de forma continua.",
  },
  {
    titulo: "Continuemos Estudiando",
    href: "https://continuemosestudiando.abc.gob.ar/",
    descripcion: "Propuestas de enseñanza, recursos y efemérides para todos los niveles y modalidades.",
  },
  {
    titulo: "Recursos Didácticos y Tecnológicos para la Enseñanza",
    href: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-planeamiento/recursos-didacticos-y-tecnologicos-para-la-ensenanza/recursos",
    descripcion: "Materiales y asistencia técnica de la Dirección de Recursos Didácticos y Tecnológicos.",
  },
];
