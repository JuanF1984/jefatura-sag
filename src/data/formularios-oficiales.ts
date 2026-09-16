import type { AccesoExterno } from "@/data/types";

/**
 * Accesos oficiales de ABC/DGCyE para formularios, planillas y trámites docentes.
 * Se prioriza el trámite online vigente por sobre una copia estática cuando ambos
 * existen (ver docs/fuentes-formularios.md). No incluye documentación propia de la
 * Jefatura Distrital: eso vive en src/data/formularios-jefatura.ts.
 */

export const ingresoDocenciaYListados: AccesoExterno[] = [
  {
    titulo: "Ingreso a la Docencia — Listado Oficial",
    href: "https://abc.gob.ar/secretarias/noticias/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/ingreso",
    descripcion:
      "Inscripción, carga de antecedentes, reclamos y rectificación/inclusión, y exhibición de los listados oficiales. Dirección de Tribunales de Clasificación.",
    badge: "Portal oficial",
  },
  {
    titulo: "Listado Oficial (Servado)",
    href: "https://servado.abc.gob.ar/lof",
    descripcion: "Consulta del listado oficial docente por especialidad y distrito.",
    badge: "Trámite online",
  },
  {
    titulo: "Servado — Autogestión docente",
    href: "https://servado.abc.gob.ar/",
    descripcion:
      "Inscripciones y acciones estatutarias (declaraciones juradas oficiales incluidas) con usuario y contraseña de ABC.",
    badge: "Trámite online",
  },
];

export const puntajeYCarreraDocente: AccesoExterno[] = [
  {
    titulo: "Movimiento Anual Docente y Acrecentamiento (MAD)",
    href: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/mad",
    descripcion: "Normativa, formularios y cronograma vigente de MAD y Acrecentamiento.",
    badge: "Portal oficial",
  },
  {
    titulo: "Puntaje Anual Docente (PAD)",
    href: "https://servado.abc.gob.ar/pad",
    descripcion: "Consulta y reclamo del Puntaje Anual Docente con usuario y contraseña de ABC.",
    badge: "Trámite online",
  },
];

export const licenciasTramiteOnline: AccesoExterno = {
  titulo: "Mis Licencias",
  href: "https://menu.abc.gob.ar/api/services/link/Mis%20Licencias",
  descripcion:
    "Sistema para solicitar y consultar licencias médicas y administrativas con usuario y contraseña de ABC.",
  badge: "Trámite online",
};

export const licenciasFormularioSad: AccesoExterno = {
  titulo: "Solicitud de licencias — Art. 114 y 115 (SAD San Andrés de Giles)",
  href: "https://abc.gob.ar/sad/sites/default/files/2023-06/Formulario%20solicitud%20de%20licencias%20114%20y%20115%20%281%29.pdf",
  descripcion:
    "Formulario oficial de la Secretaría de Asuntos Docentes del distrito para solicitar licencias de los artículos 114 y 115.",
  badge: "Formulario",
};

export const licenciasNormativa: AccesoExterno = {
  titulo: "Ley 10579 — Estatuto del Docente (texto actualizado)",
  href: "https://abc.gob.ar/secretarias/sites/default/files/2021-06/LEY_10579_0%20ESTATUTO%20DEL%20DOCENTE.pdf",
  descripcion: "Texto vigente de la ley, con el régimen completo de licencias (artículos 114 a 119).",
  badge: "Normativa",
};

/**
 * Resumen breve de hechos ya presentes en la fuente oficial (plazos, correo, autoridad
 * competente). No reemplaza ni reinterpreta la normativa: el texto original recuperado
 * del sitio anterior se conserva íntegro en docs/inventario-sitio-original-anexo.md
 * (sección 11, "LICENCIA 114 H") y el detalle completo del trámite está en la fuente
 * oficial enlazada abajo.
 */
export const licenciaProfilaxis114H = {
  titulo: "Licencia por profilaxis — Artículo 114 inciso h",
  resumen:
    "Apartamiento preventivo por presunción de enfermedad. Lo solicita la autoridad escolar ante la Dirección de Calidad Laboral y Medio Ambiente del Trabajo (CLyMAT), dentro de las 72 hs de intervenida la escuela.",
  correo: "clymat_gestion@abc.gob.ar",
  href: "https://abc2.abc.gob.ar/rrhh/direcci%C3%B3n-de-calidad-laboral-y-medio-ambiente-del-trabajo",
  badge: "Portal oficial",
};

/**
 * SUNA (https://suna.abc.gob.ar/) se retiró de esta lista: es una herramienta para
 * equipos de conducción y gestión institucional, no para la página general de
 * Formularios docentes. No se eliminó ninguna referencia interna a SUNA en el resto
 * del proyecto porque no existía otra: esta era la única.
 */
export const otrosFormularios: AccesoExterno[] = [
  {
    titulo: "Formularios — SAD San Andrés de Giles",
    href: "https://abc.gob.ar/sad/san-andres-de-giles/formularios",
    descripcion:
      "Declaraciones juradas, representación en actos públicos y listados de emergencia/InFine de la Secretaría de Asuntos Docentes del distrito.",
    badge: "Portal oficial",
  },
];
