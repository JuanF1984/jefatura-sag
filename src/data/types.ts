/** Tipos compartidos por los archivos de contenido en src/data/. */

export type Documento = {
  titulo: string;
  href: string;
  /** Sólo si el dato existe en el MHT original; no inventar. */
  categoria?: string;
  descripcion?: string;
  fecha?: string;
  /** Se infiere de la extensión del nombre de archivo (ver src/lib/documentos.ts). */
  tipo?: "pdf" | "doc" | "xls" | "otro";
  /**
   * Identificador técnico oficial (GDEBA) del documento. Es dato de trazabilidad:
   * se muestra en segundo plano, nunca dentro de `descripcion` ni como título.
   */
  identificador?: string;
  /** Marca contenido cuyo título original era ambiguo o requiere revisión manual. */
  revisar?: boolean;
  /**
   * Enlace secundario opcional hacia la normativa/fuente relacionada (p. ej. la
   * resolución de la que este formulario es un anexo). No reemplaza `href`.
   */
  enlaceRelacionado?: { titulo: string; href: string };
};

export type SeccionDocumentos = {
  /** Identificador único y estable de la sección (no depende del título, que puede repetirse). */
  id: string;
  titulo: string;
  descripcion?: string;
  documentos: Documento[];
};

/**
 * Estado de vigencia tal como se muestra al público. Es una unión cerrada a
 * propósito: los estados internos de auditoría (`NO_VERIFICADA`, `REVISAR`,
 * `PENDIENTE`) no deben poder llegar a la página — viven en
 * `docs/auditoria-vigencia-normativa-2026.md`.
 */
export type EstadoVigencia = "Vigente" | "Vigente con modificaciones";

/**
 * Un Régimen Académico vigente de un nivel/modalidad, con su norma principal
 * separada de la normativa complementaria y de los materiales de implementación
 * (distinta jerarquía jurídica). Se usa en `/regimen-academico`.
 *
 * La tarjeta muestra sin desplegar sólo lo que el visitante necesita para
 * ubicarse (nivel, resolución, año, estado, descripción y enlace a la norma); el
 * resto —precisiones normativas, anexos, complementaria e implementación— va al
 * desplegable.
 */
export type RegimenAcademico = {
  /** Identificador único y estable del bloque. */
  id: string;
  /** Nivel o modalidad (encabezado del bloque). P. ej. "Educación Secundaria". */
  nivel: string;
  /** Número de la resolución principal, legible. P. ej. "Resolución Conjunta 1650/2024". */
  resolucion: string;
  /** Año de la resolución principal. */
  anio: string;
  /** Identificador técnico oficial (GDEBA), en segundo plano — nunca como título. */
  identificador?: string;
  /** Estado de vigencia. */
  estado: EstadoVigencia;
  /** Descripción funcional breve de qué regula (dos o tres líneas, visible siempre). */
  descripcion: string;
  /**
   * Precisiones normativas que no entran en la descripción breve (alcance,
   * derogaciones, norma que lo modifica). Se muestra dentro del desplegable.
   */
  detalle?: string;
  /** Enlace a la fuente oficial vigente (normas.gba.gob.ar o abc.gob.ar). */
  fuenteOficial: { titulo: string; href: string };
  /**
   * Texto del `<summary>` del desplegable en estado cerrado. Por defecto, "Ver
   * anexos y normativa complementaria"; se cambia cuando el contenido es de otra
   * naturaleza (p. ej. "Ver modificaciones y documentación relacionada" en
   * Primaria). Debe empezar con "Ver " — el texto en estado abierto se deriva
   * reemplazando ese prefijo por "Ocultar " (ver `RegimenAcademicoBlock`).
   */
  resumenDetalle?: string;
  /** Anexos de la resolución principal (lista compacta). */
  anexos?: Documento[];
  /** Título de la lista de `anexos`, si "Anexos" no la describe bien. */
  tituloAnexos?: string;
  /** Normativa complementaria posterior — no reemplaza a la norma principal. */
  complementaria?: Documento[];
  /** Materiales de implementación (documentos de apoyo, guías, cartas): no son norma. */
  implementacion?: Documento[];
};

export type Institucion = {
  nombre: string;
  nivel?: string;
  modalidad?: string;
  localidad?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  href?: string;
  observaciones?: string;
  /**
   * Clave Única de Establecimiento (formato `0605344-00`). Identificador público del
   * establecimiento; lo emite `scripts/generar-instituciones.js` a partir de la planilla.
   * Es la clave con la que se relaciona la institución con su coordenada en
   * `src/data/instituciones-geo.ts` (relación por CUE, nunca por nombre).
   */
  cue?: string;
};

export type Inspector = {
  nombre: string;
  nivelModalidad: string;
  observaciones?: string;
};

export type Formulario = {
  nombre: string;
  proposito?: string;
  destinatarios?: string;
  href: string;
  aclaraciones?: string;
};

/** Acceso a un portal, servicio o trámite externo (no un archivo descargable). */
export type AccesoExterno = {
  titulo: string;
  href: string;
  descripcion?: string;
  /** Etiqueta corta que distingue el tipo de acceso (p. ej. "Portal oficial", "Trámite online", "Instructivo"). */
  badge?: string;
};
