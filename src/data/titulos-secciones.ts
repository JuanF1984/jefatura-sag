import type { SeccionDocumentos } from "@/data/types";

/**
 * Fuente de `/titulos`. Reorganizada por utilidad (emisión, anulación,
 * rectificación/duplicados, certificados analíticos, otros trámites) el
 * 2026-09-15, tras una auditoría de vigencia normativa — ver
 * docs/auditoria-titulos-certificaciones-2026.md para el detalle de cada
 * hallazgo, la fuente consultada y el nivel de confianza.
 */

const sisFeT = {
  titulo: "Sistema Federal de Títulos Digital (SisFeT)",
  href: "https://www.argentina.gob.ar/educacion/direccion-de-validez-nacional-de-titulos-y-estudios/sistema-federal-de-titulos-digital",
};

export const seccionesTitulos: SeccionDocumentos[] = [
  {
    id: "emision-y-registro",
    titulo: "Emisión y registro de títulos",
    descripcion:
      "Desde el 1° de noviembre de 2023 (Resolución CFE 440/23, con ajustes de la Resolución CFE " +
      "479/24), los títulos y certificados de estudios completos de Nivel Secundario y Superior se " +
      "emiten únicamente en formato digital, dentro del Sistema Federal de Títulos. La Provincia de " +
      "Buenos Aires implementa ese sistema como Sistema Provincial de Títulos.",
    documentos: [
      {
        titulo: "Instructivo del Sistema Provincial de Títulos",
        href: "https://drive.google.com/open?authuser=0&id=1f6KyvIuH1QVOKCxKUFT6ykCUtJLVPp4C",
        descripcion: "Instructivo general de carga y emisión de títulos en el Sistema Provincial de Títulos.",
        tipo: "pdf",
      },
      {
        titulo: "Cambios operativos del título digital (septiembre de 2024)",
        href: "https://drive.google.com/open?authuser=0&id=1oX5ePvVwyz_gZ1LF4Ej545J-sPrzIpTA",
        descripcion:
          "Comunicado del Área de Títulos de la Subsecretaría de Educación sobre la operatoria del " +
          "título digital en el Sistema Provincial de Títulos.",
        categoria: "Comunicado 2024",
        tipo: "pdf",
        enlaceRelacionado: sisFeT,
      },
      {
        titulo: "Instructivo para la carga de títulos en el Sistema Provincial de Títulos — DEJAyAM",
        href: "/documentos/titulos/titulos-dejayam-2022.pdf",
        descripcion:
          "Pautas de la Dirección de Educación de Jóvenes, Adultas/os y Adultas/os Mayores, de 2022, " +
          "para la confección y carga de analíticos completos de CENS y Fines en el Sistema " +
          "Provincial de Títulos.",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        fecha: "2022",
        tipo: "pdf",
      },
      {
        titulo: "Validez nacional de los títulos secundarios (vigente hasta 2029)",
        href: "https://drive.google.com/open?authuser=0&id=1aJMZjNKphNZJmVCckzO2BldquoXJ13jB",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "anulacion-de-titulos",
    titulo: "Anulación de títulos",
    descripcion:
      "Coexisten dos circuitos según el formato del título. Título en papel o de sistemas " +
      "anteriores (emitido antes de la digitalización obligatoria de noviembre de 2023): se rige " +
      "por la Comunicación N° 36/2022 del Área de Títulos, que trae el instructivo y la " +
      "declaración jurada (Anexo Único) para pedir la anulación del Certificado Analítico " +
      "Completo. Se presenta por duplicado en la Jefatura Distrital (vía Inspector de Enseñanza), " +
      "acompañada según la causa: el título original completo si es por error de carga o por " +
      "adecuación documental derivada de la autopercepción, o la denuncia (exposición civil, " +
      "presencial o en línea ante el Registro de las Personas) con la serie y el número de " +
      "formulario si es por extravío. Título digital (vigente desde noviembre de 2023): el error " +
      "se informa por nota a la Subsecretaría de Educación — Área de Títulos, indicando si " +
      "corresponde reimprimir como ORIGINAL (error detectado antes de la entrega) o como " +
      "DUPLICADO (título ya entregado), en el marco de la Resolución CFE 440/23 y la Resolución " +
      "CFE 479/24 (Sistema Federal/Provincial de Títulos Digitales).",
    documentos: [
      {
        titulo: "Comunicación N° 36/2022 — Solicitud de anulación de títulos",
        href: "/documentos/titulos/comunicacion-36-2022-anulacion-titulos.pdf",
        descripcion:
          "Instructivo y declaración jurada para la anulación de certificados analíticos " +
          "completos emitidos en soporte papel o sistemas anteriores.",
        categoria: "Título en papel / sistemas anteriores",
        fecha: "Agosto de 2022",
        tipo: "pdf",
      },
      {
        titulo: "Comunicado del módulo de anulación (título digital)",
        href: "https://drive.google.com/open?authuser=0&id=1jXEhPZHpi93MZRhNphf0wH9lsZc1N3X8",
        categoria: "Título digital — Comunicado 2024",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "rectificacion-correccion-duplicados",
    titulo: "Rectificación, corrección y duplicados",
    descripcion:
      "Los procedimientos varían según el motivo de la nueva emisión y el sistema en el que fue " +
      "confeccionado el título. Para errores de carga, extravío, robo, pérdida, destrucción u otras " +
      "situaciones que requieran una nueva emisión, consultar los instructivos correspondientes " +
      "disponibles en esta página.",
    documentos: [],
  },
  {
    id: "certificados-analiticos",
    titulo: "Certificados analíticos",
    descripcion:
      "El analítico completo se emite desde el Área de Títulos con firma digitalizada de la máxima " +
      "autoridad de la DGCyE desde octubre de 2019. Cuando la trayectoria todavía no está completa, se " +
      "emite un analítico incompleto o parcial, según estos instructivos y modelos.",
    documentos: [
      {
        titulo: "Instructivo de certificaciones de estudios de Nivel Secundario",
        href: "https://drive.google.com/open?authuser=0&id=12BWLO1SLIbnw3an4d8VG-mUR-Rtbopgx",
        tipo: "pdf",
      },
      {
        titulo: "Instructivo para analíticos incompletos",
        href: "https://drive.google.com/open?authuser=0&id=1foU7uAw3j1MevhZTY2N7HPrfD5sXuAtN",
        tipo: "pdf",
      },
      {
        titulo: "Guía de confección de analíticos incompletos y parciales (DPESEC)",
        href: "https://drive.google.com/open?authuser=0&id=1F9d78fU8cpnT8OXdCfA7ITI5yZdO-7Fj",
        tipo: "pdf",
      },
      {
        titulo: "Modelo de analítico incompleto",
        href: "https://drive.google.com/open?authuser=0&id=1IbP1UwozV912E5Pz2rRIkKdgD-qsRfXf",
        tipo: "xls",
      },
      {
        titulo: "Modelo de analítico incompleto — Educación Técnica",
        href: "https://drive.google.com/open?authuser=0&id=17HZMiHsLiZJgSja64t1XD9OcR_qrYpql",
        tipo: "xls",
      },
    ],
  },
  {
    id: "titulacion-estudiantes-con-ppi",
    titulo: "Titulación de estudiantes con Proyecto Pedagógico Individual (PPI)",
    descripcion:
      "Pautas y certificación para la titulación de estudiantes con Proyecto Pedagógico Individual " +
      "(PPI) en el Nivel Secundario.",
    documentos: [
      {
        titulo: "Resolución 4891/18 — Titulación en el Nivel Secundario",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2022-05/2018-%20Resoluci%C3%B3n%204891-%20Titulaci%C3%B3n%20en%20el%20Nivel%20Secundario.pdf",
        tipo: "pdf",
      },
      {
        titulo: "Anexo I — Resolución 3898/19 (titulación PPI)",
        href: "https://drive.google.com/open?authuser=0&id=1SimEMlNuvhnm6_EF_mPCSMdB3KFA9Nnb",
        tipo: "pdf",
      },
    ],
  },
  {
    id: "correspondencias-y-equivalencias",
    titulo: "Correspondencias y equivalencias entre planes de estudio",
    descripcion:
      "Para Educación Secundaria común, la Dirección Provincial de Educación Secundaria (DPESEC) " +
      "aprobó en noviembre de 2025 la Disposición N° 7/2025 sobre dictámenes de equivalencias. Los " +
      "recursos de correspondencia y equivalencias de la Educación de Jóvenes, Adultos y Adultos " +
      "Mayores (DEJAyAM) que siguen abajo corresponden a esa modalidad (2015 y 2021).",
    documentos: [
      {
        titulo: "Disposición N° 7/2025 — Dictámenes de equivalencias (Educación Secundaria)",
        href: "https://abc.gob.ar/secretarias/sites/default/files/2025-11/DI-2025-37270294-GDEBA-DPESECDGCYE%20Disposici%C3%B3n%20sobre%20dict%C3%A1menes%20de%20Equivalencias.pdf",
        identificador: "DI-2025-37270294-GDEBA-DPESECDGCYE",
        categoria: "DPESEC — Educación Secundaria",
        fecha: "Noviembre de 2025",
        tipo: "pdf",
      },
      {
        titulo: "Correspondencia Secundaria — CENS",
        href: "https://drive.google.com/open?authuser=0&id=1qCYRxvTQ3eWboN4-jB6kbhARnTnnKwtd",
        identificador: "DI-2022-05763106-GDEBA-DEJAYAMDGCYE",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        tipo: "pdf",
      },
      {
        titulo: "Anexo I — Correspondencias entre planes (2021)",
        href: "https://drive.google.com/open?authuser=0&id=1Ja7GBP6CEpzEHJUKLOAo1YzNTr6JXxQA",
        identificador: "IF-2021-32367760-GDEBA-DEJAYAMDGCYE",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        tipo: "pdf",
      },
      {
        titulo: "Anexo II — Correspondencias entre planes (2021)",
        href: "https://drive.google.com/open?authuser=0&id=1H4sr0uUaWTb1ATo27pbmhCn5YdBgITXW",
        identificador: "IF-2021-32368078-GDEBA-DEJAYAMDGCYE",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        tipo: "pdf",
      },
      {
        titulo: "Anexo III — Correspondencias entre planes (2021)",
        href: "https://drive.google.com/open?authuser=0&id=1fKc1KPzUhtIgWbJPkTr4HXx6ZRlx044n",
        identificador: "IF-2021-32368441-GDEBA-DEJAYAMDGCYE",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        tipo: "pdf",
      },
      {
        titulo: "Actualización de tablas de equivalencias y correspondencias (2015)",
        href: "https://drive.google.com/open?authuser=0&id=1DHGXp9YmEPmkZkI6mDyLSOcJ22hF5pJM",
        categoria: "DEJAyAM — Jóvenes y Adultos",
        fecha: "2015",
        tipo: "pdf",
      },
    ],
  },
];

/**
 * Documentación de referencia histórica: reemplazada por normativa vigente
 * que se muestra en `seccionesTitulos`. No se elimina porque sigue siendo
 * útil para egresados de ese período.
 */
export const seccionesHistoricasTitulos: SeccionDocumentos[] = [
  {
    id: "validez-nacional-hasta-2019",
    titulo: "Validez nacional de los títulos secundarios (hasta 2019)",
    descripcion:
      "Reemplazada por la tabla de validez nacional vigente hasta 2029 (ver Emisión y registro). Se " +
      "conserva como antecedente para egresados de ese período.",
    documentos: [
      {
        titulo: "Validez nacional de los títulos secundarios (hasta 2019)",
        href: "https://drive.google.com/open?authuser=0&id=1dpPE83zXUjN3U74vJktEoQY3IWd7IBMa",
        categoria: "Antecedente",
        tipo: "pdf",
      },
    ],
  },
];
