import type { Documento, RegimenAcademico, SeccionDocumentos } from "@/data/types";
import {
  resolucion3871_24,
  anexosResolucion3871_24,
} from "@/data/anexos-resolucion-3871-24";
import {
  resolucion5356_24,
  anexosResolucion5356_24,
  guiaImplementacionPeat,
} from "@/data/practicas-educativas-ambientes-trabajo";
import {
  guiaOrientacionSituacionesConflicto,
  glosarioRelevamientoSituacionesConflicto,
  cambiosRelevamiento2025,
} from "@/data/situaciones-conflicto";

/**
 * Contenido de `/regimen-academico`. Reorganizado el 2026-09-09 (ver
 * docs/auditoria-vigencia-normativa-2026.md, sección "Revisión y reorganización").
 * La página prioriza, desde arriba, los Regímenes Académicos vigentes por
 * nivel/modalidad (`regimenesAcademicos`); después la normativa complementaria y
 * las temáticas específicas (`seccionesComplementarias`); y al final la
 * documentación histórica (`seccionesHistoricas`). No se ordena por año ni por
 * nombre de archivo, sino por utilidad para quien consulta.
 */

// ---------------------------------------------------------------------------
// 1. Regímenes Académicos vigentes (bloque principal)
// ---------------------------------------------------------------------------

const anexosResolucion1650_24: Documento[] = [
  {
    titulo: "Anexo 1 — Principios y Definiciones Generales",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%201%20-%20Principios%20y%20Definiciones%20Generales%20-%20IF-2024-19879499-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19879499-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 2 — Organización Pedagógica Institucional",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%202%20-%20Organizaci%C3%B3n%20Pedag%C3%B3gica%20Institucional%20-%20IF-2024-19669661-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19669661-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 3 — Ingreso y Matriculación en la escuela secundaria",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%203%20-%20Ingreso%20y%20Matriculaci%C3%B3n%20en%20la%20escuela%20secundaria%20-%20IF-2024-19669880-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19669880-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 4 — Asistencia",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%204%20-%20Asistencia%20-%20IF-2024-19739873-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19739873-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 5 — Evaluación y Acreditación",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%205%20-%20Evaluaci%C3%B3n%20y%20Acreditaci%C3%B3n%20-%20IF-2024-19739952-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19739952-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 6 — Convivencia Escolar",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%206%20-%20Convivencia%20Escolar%20-%20IF-2024-19740158-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19740158-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 7 — Marco Específico para la Educación Secundaria Especializada en Arte",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%207%20-%20Marco%20Espec%C3%ADfico%20para%20la%20Educaci%C3%B3n%20Secundaria%20Especializada%20en%20Arte%20-%20IF-2024-19670967-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19670967-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
  {
    titulo: "Anexo 8 — Marco Específico para la Educación Secundaria Técnica y Agraria",
    href: "https://abc.gob.ar/secretarias/sites/default/files/2024-06/Anexo%208%20-%20Marco%20Espec%C3%ADfico%20para%20la%20Educaci%C3%B3n%20Secundaria%20T%C3%A9cnica%20y%20Agraria%20-%20IF-2024-19671275-GDEBA-DPESECDGCYE.pdf",
    identificador: "IF-2024-19671275-GDEBA-DPESECDGCYE",
    tipo: "pdf",
  },
];

const complementariaResolucion1650_24: Documento[] = [
  {
    titulo:
      "Resolución Conjunta 4232/2024 — Módulos Presenciales de Fortalecimiento de las Trayectorias Educativas (FORTE)",
    href: "https://normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/4232/471900",
    descripcion:
      "Asigna los Módulos Presenciales FORTE en escuelas secundarias orientadas, técnicas, agrarias y de arte de gestión estatal.",
    tipo: "otro",
  },
  {
    titulo:
      "Resolución Conjunta 1884/2025 — Coordinador/a Institucional de Trayectorias Educativas (CITE)",
    href: "https://normas.gba.gob.ar/ar-b/resolucion-conjunta/2025/1884/513842",
    descripcion: "Crea la figura de Coordinador/a Institucional de Trayectorias Educativas.",
    tipo: "otro",
  },
];

const implementacionResolucion1650_24: Documento[] = [
  {
    titulo: "Documento de Apoyo N° 7 — Actualización de Estados Administrativos",
    href: "https://drive.google.com/open?authuser=0&id=1Uqy9MKcmNhln0KGXwbyFdvWYmjyUj7m9",
    tipo: "pdf",
  },
  {
    titulo: "Documento de Apoyo N° 9 — Actualización de Estados Administrativos (segunda parte)",
    href: "https://drive.google.com/open?authuser=0&id=1uD9p9IQvcyLa4GHAP65ezV-krJasGaUD",
    tipo: "pdf",
  },
  {
    titulo: "RITE 2025 — Registro Institucional de Trayectorias Educativas",
    href: "https://drive.google.com/open?authuser=0&id=1VqZskiV8nG4dNmYnQsPoRkUjK_ZycUqy",
    tipo: "pdf",
  },
  {
    titulo: "Registro de Asistencia de Estudiantes",
    href: "https://drive.google.com/open?authuser=0&id=1PXd7MJ5gnKceNCv7hdZ1i6SUiSu9j9D9",
    tipo: "pdf",
  },
  {
    titulo: "Parte diario",
    href: "https://drive.google.com/open?authuser=0&id=1pMKnn-t4wq4OvP7IJSrcseV462BR-zBV",
    tipo: "pdf",
  },
  {
    titulo: "Parte diario general",
    href: "https://drive.google.com/open?authuser=0&id=1W7ridmzUfRCO7brRo-9VmDmdRLApW932",
    tipo: "pdf",
  },
  {
    titulo: "Parte diario — período de intensificación",
    href: "https://drive.google.com/open?authuser=0&id=1KG9X5qo-rPCcWM03x_eSjQw7Xzldf2xI",
    tipo: "pdf",
  },
  {
    titulo: "Resumen de asistencia por materia — preceptor/a (optativo)",
    href: "https://drive.google.com/open?authuser=0&id=1Wt42smJ13_KOlYOekBTVWYAMlkoJWdun",
    tipo: "pdf",
  },
  {
    titulo: "Registro de asistencia por materia — profesor/a",
    href: "https://drive.google.com/open?authuser=0&id=15oU2wARWCL_3A8lEBl8teM9PpBGidwIK",
    tipo: "pdf",
  },
  {
    titulo: "Planilla de calificaciones",
    href: "https://drive.google.com/open?authuser=0&id=1xdsC8_NLnxUBVYIV-1uLqK01NHYumDkO",
    tipo: "pdf",
  },
  {
    titulo: "Planilla de calificaciones — período de intensificación",
    href: "https://drive.google.com/open?authuser=0&id=1qhck1Y1ijjRO46RO60KLw_yrOQgyXF2n",
    tipo: "pdf",
  },
  {
    titulo: "Parte de intensificación — diciembre y febrero",
    href: "https://drive.google.com/open?authuser=0&id=1IAfZKoGF5T08fDCkPvbJa0S6u2LcSASC",
    tipo: "pdf",
  },
  {
    titulo: "Carta a docentes sobre el Régimen Académico",
    href: "https://drive.google.com/open?authuser=0&id=1OGa12i5_wQJQHosx_iiRtCeP7Q3GTUFk",
    tipo: "pdf",
  },
];

export const regimenesAcademicos: RegimenAcademico[] = [
  {
    id: "secundaria",
    nivel: "Educación Secundaria",
    resolucion: "Resolución Conjunta 1650/2024",
    anio: "2024",
    identificador: "RSC-2024-20025654-GDEBA-DGCYE",
    estado: "Vigente",
    descripcion:
      "Régimen Académico de la Educación Secundaria obligatoria, de gestión estatal y privada. " +
      "Organiza el ingreso y la matriculación, la asistencia, la evaluación y la acreditación, la " +
      "convivencia y el acompañamiento de las trayectorias educativas.",
    detalle:
      "Deroga los regímenes anteriores: Resoluciones 587/11 y 1480/11 y Resoluciones Conjuntas " +
      "1235/2023 y 1236/2023.",
    fuenteOficial: {
      titulo: "Ver resolución (normas.gba.gob.ar)",
      href: "https://normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/1650/440121",
    },
    anexos: anexosResolucion1650_24,
    complementaria: complementariaResolucion1650_24,
    implementacion: implementacionResolucion1650_24,
  },
  {
    id: "secundaria-jovenes-adultos",
    nivel: "Educación Secundaria de Jóvenes, Adultos y Adultos Mayores",
    resolucion: "Resolución 4984/2024",
    anio: "2024",
    identificador: "RSC-2024-43189065-GDEBA-DGCYE",
    estado: "Vigente",
    descripcion:
      "Régimen Académico del Nivel Secundario de la modalidad de Educación de Jóvenes, Adultos y " +
      "Adultos Mayores. Contempla los principios del régimen, la organización pedagógica " +
      "institucional y las trayectorias educativas de las personas jóvenes y adultas.",
    detalle:
      "Aprobado por el Consejo General de Cultura y Educación el 28 de noviembre de 2024, a " +
      "propuesta de la Dirección de Educación de Jóvenes, Adultos y Adultos Mayores.",
    fuenteOficial: {
      titulo: "Ver resolución (texto completo)",
      href: "https://drive.google.com/open?authuser=0&id=1ZDhRF-nrNvyxlnAoJpgIgHtM5JeV0z1S",
    },
    anexos: [
      {
        titulo: "Anexo — Régimen Académico del Nivel Secundario de JAyAM",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2025-04/IF-2024-42815149-GDEBA-DEJAYAMDGCYE%20(2).pdf",
        identificador: "IF-2024-42815149-GDEBA-DEJAYAMDGCYE",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "superior",
    nivel: "Educación Superior",
    resolucion: "Resolución Conjunta 4196/2024",
    anio: "2024",
    identificador: "RESOC-2024-4196-GDEBA-DGCYE",
    estado: "Vigente",
    descripcion:
      "Régimen Académico Marco Jurisdiccional (RAM) para los Institutos de Educación Superior de " +
      "gestión estatal y privada. En vigencia desde el ciclo lectivo 2025.",
    detalle:
      "Deroga las Resoluciones 4043/09 y 1639/17 y las Disposiciones 107/10 y 123/15.",
    fuenteOficial: {
      titulo: "Ver resolución (normas.gba.gob.ar)",
      href: "https://normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/4196/471235",
    },
    anexos: [
      {
        titulo: "Anexo 1 — Principios y Disposiciones Generales",
        href: "https://drive.google.com/open?authuser=0&id=1kNHfmJqsR8ZwOp8Xk0bYzETjodAlQcdc",
        identificador: "IF-2024-38567372-GDEBA-SDIFDIDGCYE",
        tipo: "pdf",
      },
      {
        titulo: "Anexo 2 — Estudiante Itinerante",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2026-07/RAM%204196_Anexo%202_Estudiante%20Itinerante_IF-2024-37932840-GDEBA-DPESUPDGCYE.pdf",
        identificador: "IF-2024-37932840-GDEBA-DPESUPDGCYE",
        tipo: "pdf",
      },
      {
        titulo: "Anexo 3 — Propuestas Pedagógicas Combinadas (PPC)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2026-07/RAM%204196_Anexo%203_Propuestas%20Pedag%C3%B3gicas%20Combinadas_IF-2024-37932766-GDEBA-DPESUPDGCYE%20%281%29.pdf",
        identificador: "IF-2024-37932766-GDEBA-DPESUPDGCYE",
        tipo: "pdf",
      },
    ],
    complementaria: [
      {
        titulo:
          "Resolución 1215/2025 — Sistema de Evaluación y Mejora Continua de la Formación Superior (SEMC)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2026-07/RSC%201215-%202025%20%20GDEBA%20DGCYE%20%20Sistema%20de%20Evaluaci%C3%B3n%20y%20Mejora%20Continua%20de%20la%20Formaci%C3%B3n%20Superior.pdf",
        descripcion:
          "Aprueba la experiencia para construir el Sistema de Evaluación y Mejora Continua de la Formación Superior.",
        tipo: "pdf",
      },
    ],
    implementacion: [
      {
        titulo: "Documento de trabajo para la implementación del nuevo RAM (diciembre de 2024)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2026-07/51_Documento%20de%20trabajo%20para%20la%20implementaci%C3%B3n%20del%20nuevo%20RAM%2C%20Dic%202024.pdf",
        tipo: "pdf",
      },
      {
        titulo: "Carta a las familias sobre el Régimen Académico del Nivel Superior",
        href: "https://drive.google.com/open?authuser=0&id=1qSpdc0karMIOWrkOej8i2OhX3rb9s-1b",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "primaria",
    nivel: "Educación Primaria",
    resolucion: "Resolución 1057/2014",
    anio: "2014",
    estado: "Vigente con modificaciones",
    descripcion:
      "Régimen Académico del Nivel Primario (RAP). Regula el acompañamiento de las trayectorias, la " +
      "evaluación, la calificación y la promoción en la escuela primaria.",
    detalle:
      "Modificado por la Resolución 197/2016 (Capítulo VI — escala de calificación) y rectificado " +
      "por la Resolución 372/2018. La Dirección Provincial de Educación Primaria mantiene el " +
      "régimen publicado como normativa vigente del nivel.",
    fuenteOficial: {
      titulo: "Ver normativa de Educación Primaria (abc.gob.ar)",
      href: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-primaria/educacion-primaria/normativas-primaria",
    },
    resumenDetalle: "Ver modificaciones y documentación relacionada",
    tituloAnexos: "Texto de la norma",
    anexos: [
      {
        titulo: "Resolución 1057/2014 — Régimen Académico del Nivel Primario",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2024-12/Resoluci%C3%B3n%201057_2014.pdf",
        descripcion: "Texto de la resolución que aprueba el RAP.",
        tipo: "pdf",
      },
    ],
    complementaria: [
      {
        titulo: "Resolución 197/2016 — modificación del Capítulo VI (escala de calificación)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2024-12/Resoluci%C3%B3n%20197_2016.pdf",
        descripcion: "Modifica el régimen de calificación del RAP.",
        tipo: "pdf",
      },
    ],
    implementacion: [
      {
        titulo: "Documento de implementación del RAP (Resoluciones 1057/14 y 197/16)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2021-04/resoluciones_ndeg_1057_14_y_ndeg_197_16_documento-implementacion-rap-2016.pdf",
        tipo: "pdf",
      },
    ],
  },
];

/*
 * Nivel Inicial — nota interna, no se publica.
 *
 * A septiembre de 2026, la búsqueda en fuentes oficiales (normas.gba.gob.ar,
 * abc.gob.ar) no identificó una resolución de Régimen Académico propia del Nivel
 * Inicial equivalente a las de Primaria, Secundaria o Superior. El nivel se
 * organiza por su Diseño Curricular y por los documentos de la Dirección
 * Provincial de Educación Inicial.
 *
 * Mientras no haya una norma vigente confirmada que mostrar, la página no dice
 * nada sobre el nivel: no se publican notas de "no se encontró" ni "pendiente de
 * confirmar", ni se crea una tarjeta vacía. El pendiente se sigue en
 * docs/auditoria-vigencia-normativa-2026.md (sección "Casos que siguen
 * pendientes de verificación").
 */

// ---------------------------------------------------------------------------
// 2. Normativa complementaria y temáticas específicas
// ---------------------------------------------------------------------------

export const seccionesComplementarias: SeccionDocumentos[] = [
  {
    id: "salidas-educativas-resolucion-3871-24",
    titulo: "Salidas educativas — Resolución 3871/24",
    descripcion:
      "Requisitos generales para las salidas educativas y de representación institucional, de todos " +
      "los niveles y modalidades (octubre de 2024). Deroga la Resolución 378/17. Vigente, sin " +
      "modificaciones posteriores verificadas.",
    documentos: [
      {
        titulo: "Resolución 3871/24 — texto completo",
        href: resolucion3871_24.href,
        descripcion: "Identificador oficial: RSC-2024-35942004-GDEBA-DGCYE.",
        categoria: "Resolución 3871/24 — Salidas educativas",
        tipo: "pdf",
      },
      ...anexosResolucion3871_24,
      {
        titulo: "Comunicación sobre salidas educativas y seguro (2024)",
        href: "https://drive.google.com/open?authuser=0&id=1JvYln1YA8YL_WdTH22nimFPUZGYO7sF5",
        descripcion: "Comunicación de octubre de 2024.",
        categoria: "Comunicación 2024",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "practicas-educativas-ambientes-trabajo-resolucion-5356-24",
    titulo: "Prácticas Educativas en Ambientes de Trabajo (PEAT) — Resolución Conjunta 5356/2024",
    descripcion:
      "Marco normativo general del Sistema de Prácticas Educativas en Ambientes de Trabajo (PEAT), " +
      "diciembre de 2024. Comprende cinco modalidades: Prácticas Profesionalizantes (obligatorias) y " +
      "Pasantías Educativas, Aproximación al Mundo del Trabajo, Prácticas de Formación Aplicada y " +
      "Prácticas Socio-Comunitarias (optativas). Se acompaña de sus 13 anexos y de la guía oficial " +
      "de implementación.",
    documentos: [
      {
        titulo: "Resolución Conjunta 5356/2024 — texto completo",
        href: resolucion5356_24.href,
        descripcion: "Identificador oficial: RESOC-2024-5356-GDEBA-DGCYE. Copia oficial en abc.gob.ar.",
        categoria: "Resolución Conjunta 5356/2024 (PEAT)",
        tipo: "pdf",
      },
      guiaImplementacionPeat,
      ...anexosResolucion5356_24,
    ],
  },
  {
    id: "practicas-profesionalizantes",
    titulo: "Prácticas profesionalizantes — Lineamientos 2025",
    descripcion:
      "Lineamientos 2025 para las prácticas profesionalizantes en escuelas técnicas y agrarias. Las " +
      "prácticas profesionalizantes son una de las cinco modalidades del Sistema PEAT (Resolución " +
      "Conjunta 5356/2024). El contenido puntual de estos lineamientos no pudo verificarse todavía " +
      "contra un texto oficial.",
    documentos: [
      {
        titulo: "Prácticas Profesionalizantes — Lineamientos 2025",
        href: "https://drive.google.com/open?authuser=0&id=14aaLduGR401unJGqAyziVXE551wuuuQr",
        descripcion:
          "Orientaciones para las prácticas profesionalizantes en escuelas técnicas y agrarias.",
        categoria: "Lineamientos 2025",
        tipo: "pdf",
        enlaceRelacionado: resolucion5356_24,
      },
    ],
  },
  {
    id: "inscripcion-de-estudiantes",
    titulo: "Inscripción de estudiantes — planillas y pautas",
    descripcion:
      "Modelos de planillas y pautas para la inscripción de estudiantes en Inicial, Primaria, " +
      "Secundaria, Educación Especial y Centros de Educación Física. Son formularios operativos: " +
      "antes de cada ciclo lectivo debe verificarse la comunicación de inscripción vigente de la " +
      "DGCyE.",
    documentos: [
      {
        titulo: "Pautas para completar la solicitud de inscripción escolar",
        href: "https://drive.google.com/open?authuser=0&id=1DHf9azNYIv_eZzCoGjJ5QBUOnIncLuo6",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Nivel Inicial",
        href: "https://drive.google.com/open?authuser=0&id=1SVKwEmWj6MMbkkV7Pd7HPAhoHdCnkaDK",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Nivel Primario",
        href: "https://drive.google.com/open?authuser=0&id=1hcJyh_r98g1W7ot7fsywtaV-LYlZbZBg",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Nivel Secundario",
        href: "https://drive.google.com/open?authuser=0&id=1rVOKrHsC7d2cLeOn124ErPBDkD4WYZgB",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Educación Especial (niveles o modalidades)",
        href: "https://drive.google.com/open?authuser=0&id=171hYqmRvNO7SK97RoqXdAAUa_UEo7gwH",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Educación Especial (inscripción en sede)",
        href: "https://drive.google.com/open?authuser=0&id=1ADSnlQzKBuSQY7G8_n2bLGnoixG4BLSO",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Educación Especial (hospitalario / domiciliario)",
        href: "https://drive.google.com/open?authuser=0&id=16K0F1CM3GzxJ2dJrnaYpRR1M-EPQSgJT",
        tipo: "pdf",
      },
      {
        titulo: "Planilla de inscripción — Centro de Educación Física",
        href: "https://drive.google.com/open?authuser=0&id=1Yy2UTxMTxp7ULzV9RdO8Sp1isVH84SCe",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "situaciones-de-conflicto-y-vulneracion-de-derechos",
    titulo: "Situaciones de conflicto y vulneración de derechos",
    descripcion:
      "Orientaciones y materiales de referencia para la intervención institucional y el " +
      "relevamiento de situaciones de conflicto y vulneración de derechos en el ámbito escolar.",
    documentos: [
      guiaOrientacionSituacionesConflicto,
      glosarioRelevamientoSituacionesConflicto,
      cambiosRelevamiento2025,
    ],
  },
];

/**
 * Retirado de la vista pública de `/regimen-academico` el 2026-09-14 (2): es
 * un circuito operativo/administrativo específico (tramitación de oficios
 * judiciales), no un Régimen Académico ni normativa educativa, y el texto
 * completo hacía excesivamente largo el bloque "Normativa complementaria y
 * temáticas específicas". Historial: trasladado a esta fuente desde
 * "Documentos para inspectores/as" el 2026-09-14 (1), al retirarse esa página
 * pública (ver docs/auditoria-documentos-inspectores.md). Se conserva acá,
 * sin renderizar en ninguna página, por si corresponde reubicarlo más
 * adelante en una sección más apropiada — no reintroducir en
 * `seccionesComplementarias` sin decidir antes esa ubicación.
 */
export const oficiosJudicialesInstructivo: SeccionDocumentos = {
  id: "oficios-judiciales-instructivo",
  titulo: "Oficios judiciales — instructivo de tramitación",
  descripcion:
    "A los efectos de imprimir mayor celeridad y eficacia en la tramitación de Oficios Judiciales, " +
    "esta Jefatura Distrital, en concordancia con la Jefatura de Región 10, la Dirección de " +
    "Inspección General y con los lineamientos de trabajo de la Dirección de Coordinación de " +
    "Actuaciones Judiciales, pone en su conocimiento, el circuito de trámite a implementar a partir " +
    "de la presente. Los Oficios Judiciales pueden ser recibidos en las instituciones educativas de " +
    "dos formas: directamente en la institución o a través de la vía jerárquica, ya sea por correo " +
    "electrónico o en formato papel. 1. Si se recibe directamente en la institución educativa: a. Si " +
    "se recibe en formato papel, puede ser entregado por un agente notificador tanto de un juzgado, " +
    "policía, por correo postal o bien que una familiar o persona cercana lo acerque. Se debe recibir " +
    "en la institución y se le debe dar respuesta a la manda judicial al organismo que lo emite. b. " +
    "Los Oficios Judiciales tienen un formato predeterminado y un código QR. Si el Equipo Directivo " +
    "tiene dudas sobre la veracidad del Oficio, puede escanear el código y verificarlo. c. En la " +
    "manda judicial siempre se especifica lo que se le requiere a la escuela. Una vez recabados los " +
    "datos y/o realizado lo pedido, se procederá a realizar un informe y nota de eleve. d. El " +
    "documento a presentar debe tener un encabezado donde conste: ● Institución y distrito ● " +
    "Dirección postal ● Teléfono ● Correo electrónico institucional e. Debe colocarse lugar y fecha " +
    "(San Andrés de Giles, xx de xxxxxx de 20xx). f. Debe estar dirigido el organismo del que emana " +
    "la manda judicial (Juzgado, UFIJ, etc.). g. En el primer párrafo debe consignarse la carátula y " +
    "el número de causa; como así también especificar lo que fuera solicitado en el oficio. Por " +
    "ejemplo: Tratan los presentes actuados sobre lo solicitado en el oficio judicial, librado en el " +
    "marco de los autos caratulados “XXXX XXXXX S/GUARDA DE PERSONAS” Número de causa: LP-1234-2022, " +
    "en trámite por ante el Juzgado de Familia N°X del Departamento Judicial de La Plata. La Escuela " +
    "----- N°X eleva informe respecto al niñx de acuerdo a lo solicitado en la manda judicial. – h. " +
    "Luego se escribirá el informe con todo lo solicitado. i. Al pie firmarán: ● Director/a con sello " +
    "aclaratorio ● Equipo de Orientación (si corresponde) con aclaración ● Se colocará sello oval de " +
    "la escuela j. Si se solicita documentación, se colocará a continuación del informe. k. Todo se " +
    "guardará en formato PDF. El documento debe tener: ● El oficio judicial con la manda ● El informe " +
    "● La documentación si es que fuera solicitada l. El nombre del archivo deberá tener el siguiente " +
    "formato: R10 GE SAG – ESCUELA – CARATULA. Por ejemplo: “R10 GE SAG – EP N°1 – Informe X.X.”. " +
    "Siempre colocar iniciales de los/as menores en el nombre del archivo. m. El oficio se elevará de " +
    "la siguiente manera: ● Se remite al organismo que lo solicita por correo electrónico. Los mismos " +
    "constan en la página web https://www.mpba.gov.ar/mapa se encuentran las direcciones de correo de " +
    "todos los organismos judiciales. ● Ese mismo correo, se debe remitir con copia al o a la " +
    "Inspectora y esta Jefatura Distrital ● El asunto debe ser: R10 SAG – ESCUELA – CARATULA – CAUSA " +
    "n. Una vez recibido en esta instancia, se elevará por la plataforma GDEBA a Inspección General " +
    "para su tratamiento. 2. Si se recibe a través de la vía jerárquica: a. La Institución Educativa " +
    "recibirá un correo electrónico directamente desde esta Jefatura Distrital, con copia al o a la " +
    "IE. Deberá dar acuse de recibo del mismo. b. En ese correo estará adjunta la manda judicial. En " +
    "esta siempre se especifica lo que se le requiere a la escuela. Una vez recabados los datos y/o " +
    "realizado lo pedido, se procederá a realizar un informe y nota de eleve. c. El documento a " +
    "presentar debe tener un encabezado donde conste: ● Institución y distrito ● Dirección postal ● " +
    "Teléfono ● Correo electrónico institucional d. Debe colocarse lugar y fecha (SAG, xx de xxxxxx " +
    "de 20xx). e. Debe estar dirigido el organismo del que emana la manda judicial (Juzgado, UFIJ, " +
    "etc.). f. En el primer párrafo debe consignarse la carátula y el número de causa; como así " +
    "también especificar lo que fuera solicitado en el oficio. Por ejemplo: Tratan los presentes " +
    "actuados sobre lo solicitado en el oficio judicial, librado en el marco de los autos caratulados " +
    "“XXXX XXXXX S/GUARDA DE PERSONAS” Número de causa: LP-1234-2022, en trámite por ante el Juzgado " +
    "de Familia N°X del Departamento Judicial de La Plata. La Escuela ----- N°X eleva informe " +
    "respecto al niñx de acuerdo a lo solicitado en la manda judicial. – g. Luego se escribirá el " +
    "informe con todo lo solicitado. h. Al pie firmarán: ● Director/a con sello aclaratorio ● Equipo " +
    "de Orientación (si corresponde) con aclaración ● Se colocará sello oval de la escuela i. Si se " +
    "solicita documentación, se colocará a continuación del informe. j. Todo se guardará en formato " +
    "PDF. El documento debe tener: ● El oficio judicial con la manda ● El informe ● La documentación " +
    "si es que fuera solicitada k. El nombre del archivo deberá tener el siguiente formato: R10 GE " +
    "SAG – ESCUELA – CARATULA. Por ejemplo: “R10 GE SAG – EP N°1 – Informe X.X.”. Siempre colocar " +
    "iniciales de los/as menores en el nombre del archivo. l. El oficio se elevará de la siguiente " +
    "manera: ● Se remite al organismo que lo solicita por correo electrónico. Los mismos constan en " +
    "la página web https://www.mpba.gov.ar/mapa se encuentran las direcciones de correo de todos los " +
    "organismos judiciales. ● Ese mismo correo, se debe remitir con copia al o a la Inspectora y esta " +
    "Jefatura Distrital ● El asunto debe ser: R10 SAG – ESCUELA – CARATULA – CAUSA m. Una vez " +
    "recibido en esta instancia, se elevará por la plataforma GDEBA a Inspección General para su " +
    "tratamiento. Cabe aclarar nuevamente que todos los Oficios Judiciales deben ser elevados siempre " +
    "al organismo que lo solicita con copia a esta Jefatura Distrital en un único PDF . En el mismo " +
    "deberá colocarse en primera instancia el oficio recibido (carátula) donde consta lo solicitado, " +
    "luego el informe realizado por la institución con las firmas y sellos correspondientes. Este " +
    "correo debe ser remitido al IE con copia a jd093@abc.gob.ar Por otra parte, en aquellos casos " +
    "donde la temática implique un abordaje sensible, se solicita tratar de preservar cuidadosamente " +
    "la seguridad e integridad de los agentes involucrados (sea docentes y/o menores), debiendo " +
    "utilizar expresiones adecuadas y acordes a la problemática de que se trate. En todos los casos " +
    "se recuerda que debe trabajarse con la premura que amerita el procedimiento, teniendo en cuenta " +
    "que se trata de casos judicializados y que la demora puede acarrear perjuicios para el interés " +
    "fiscal. Asimismo, cabe recordar que el incumplimiento injustificado de los términos o plazos " +
    "previstos para el despacho de los asuntos administrativos, genera responsabilidad, imputable a " +
    "los agentes directamente a cargo del trámite o diligencia y a los superiores jerárquicos " +
    "obligados a su dirección y fiscalización. Según el caso, la gravedad o reiteración de la " +
    "anomalía, serán aplicables las sanciones previstas en los respectivos estatutos del personal de " +
    "la Administración Pública (art. 80 DL 7647/70). Ello, sin perjuicio de las sanciones " +
    "conminatorias que pueda aplicar el Juez del trámite. Entendemos que esta metodología y " +
    "unificación de criterios de trabajo permite un ordenamiento y registro de los casos vinculados " +
    "con temas de índole judicial y en consecuencia un mejor tratamiento tanto en las instancias " +
    "territoriales como en la Administración Central.",
  documentos: [],
};

// ---------------------------------------------------------------------------
// 3. Antecedentes / documentación histórica
// ---------------------------------------------------------------------------

/**
 * Documentación de referencia histórica: ya no es la norma principal vigente
 * sobre su tema, pero se conserva por trazabilidad (no se borran archivos ni
 * referencias). Se renderiza en un bloque aparte al final de `/regimen-academico`.
 * Ver docs/auditoria-vigencia-normativa-2026.md.
 */
export const seccionesHistoricas: SeccionDocumentos[] = [
  {
    id: "comunicacion-conjunta-1-23",
    titulo: "Comunicación Conjunta 1/23 — Inscripción 2024",
    descripcion:
      "Pautas para la inscripción del ciclo lectivo 2024. Corresponde a un ciclo ya cerrado; se " +
      "conserva como antecedente. Para la inscripción vigente debe consultarse la comunicación del " +
      "ciclo en curso.",
    documentos: [
      {
        titulo: "Comunicación Conjunta 1/23 — Inscripción 2024",
        href: "https://drive.google.com/open?authuser=0&id=1YYQVKJOfiwn8tl7S8z4F5bBJstFNFS77",
        categoria: "Antecedente — ciclo 2024",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "disposicion-firma-conjunta-3-2024",
    titulo:
      "Disposición de Firma Conjunta N° 3/2024 — Pautas de Evaluación y Calificación (ciclo 2024)",
    descripcion:
      "Pautas de evaluación y calificación para el ciclo lectivo 2024, en el marco de la Resolución " +
      "1650/24. Ciclo cerrado; para 2025 y 2026 rigen los documentos de apoyo posteriores de la " +
      "Dirección Provincial de Educación Secundaria.",
    documentos: [
      {
        titulo: "Disposición de Firma Conjunta N° 3/2024",
        href: "https://drive.google.com/open?authuser=0&id=1KSjvKJ2SN9_RJ09QthOUx_NjOmmKmv1y",
        descripcion: "Identificador oficial: DI-2024-20488158-GDEBA-DPESECDGCYE.",
        categoria: "Antecedente — ciclo 2024",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "transporte-en-salidas-educativas-aclaraciones",
    titulo: "Transporte en salidas educativas — antecedente histórico (2018)",
    descripcion:
      "Memorándum aclaratorio de 2018 sobre transporte en salidas educativas. Su tema quedó cubierto " +
      "por el Anexo 8 — Informe de transporte de la Resolución 3871/24 (2024), vigente (ver la " +
      "sección «Salidas educativas» más arriba). Se conserva como antecedente, no como referencia " +
      "principal.",
    documentos: [
      {
        titulo: "Memorándum aclaratorio sobre transporte (2018)",
        href: "https://drive.google.com/open?authuser=0&id=13kUO2yRX_m-0Am0ZXHTIOwX7xWkqwrlD",
        descripcion: "Identificador oficial: ME-2018-23210727-GDEBA-DPCEDGCYE.",
        categoria: "Antecedente histórico (2018)",
        tipo: "pdf",
        enlaceRelacionado: resolucion3871_24,
      },
    ],
  },
];
