import type { Documento } from "@/data/types";
import { tipoDeArchivo } from "@/lib/documentos";

/**
 * Formularios y autorizaciones trasladados desde "Documentos para
 * inspectores/as" (ver docs/auditoria-documentos-inspectores.md, movimientos de
 * alta confianza). Son documentos que un/a docente, familia o estudiante debe
 * completar, firmar o presentar — no texto reglamentario, que permanece en
 * src/data/normativa-secciones.ts. Los anexos de la Resolución 3871/24 (Salidas
 * educativas) se movieron a src/data/anexos-resolucion-3871-24.ts, fuente
 * compartida con Normativa.
 */

/**
 * Antes existía aquí una referencia cruzada a "Resolución 44921855/24 y anexos —
 * Actividades acuáticas" (un enlace a un documento de Drive). La auditoría de
 * vigencia normativa del 2026-08-19 determinó que esa denominación era incorrecta
 * (ver docs/auditoria-vigencia-normativa-2026.md): los anexos que se le habían
 * asociado en Régimen académico y normativa corresponden en realidad a la
 * Resolución Conjunta 5356/2024 (PEAT), no a actividades acuáticas, y no se pudo
 * confirmar qué es realmente ese documento de Drive. Se retiró la referencia
 * cruzada hasta identificar con certeza la normativa vigente sobre actividades
 * acuáticas — no se afirma que no exista, solo que todavía no está identificada.
 */

/**
 * Retirado de la vista pública el 2026-08-18: no hay una explicación completa y
 * verificable del circuito de toma de posesión, por lo que mostrar estos recursos
 * aislados podía confundir al usuario. Se conservan aquí por trazabilidad (no se
 * borraron los archivos ni las referencias) pero no se renderizan en ninguna
 * página. Ver docs/auditoria-documentos-inspectores.md, sección "Estado de
 * aplicación", para el detalle de esta decisión. No reintroducir en otra página
 * sin resolver antes esa falta de contexto.
 */
export const actasTomaDePosesion: Documento[] = [
  {
    titulo: "ACTA TOMA DE POSESION INICIAL.docx",
    href: "https://drive.google.com/open?authuser=0&id=1DRjvX8boCHCV61fb0z0XUtSPCGzrdQYa",
    descripcion: "Acta de toma de posesión de cargo para designaciones en Nivel Inicial.",
    tipo: tipoDeArchivo("ACTA TOMA DE POSESION INICIAL.docx"),
  },
  {
    titulo: "ACTA DE TOMA DE POSESION PRIMARIA.docx",
    href: "https://drive.google.com/open?authuser=0&id=1BLL6cgdxTF-hQt0kD8333OqNfMPLo-vD",
    descripcion: "Acta de toma de posesión de cargo para designaciones en Nivel Primario.",
    tipo: tipoDeArchivo("ACTA DE TOMA DE POSESION PRIMARIA.docx"),
  },
];

/**
 * Retirado de la vista pública el 2026-08-18 junto con `actasTomaDePosesion` (ver
 * nota arriba): mismo motivo, mismo criterio de conservación por trazabilidad.
 */
export const formularioTomaDePosesion = {
  contexto:
    "Paso 3 del circuito de toma de posesión: rellenar el formulario (se debe ingresar con dirección de correo @abc).",
  href: "https://docs.google.com/forms/d/e/1FAIpQLScnlYGBuc7fe-BYLTpwQ9nBLpql6uCVs4cf7DBnnaEv-Sr4uw/viewform",
};

/** Autorización/consentimiento específica para actividades acuáticas en salidas educativas. */
export const autorizacionActividadesAcuaticas: Documento = {
  titulo: "Autorización actividaes acuáticas en Salidas Educativas.docx",
  href: "https://drive.google.com/open?authuser=0&id=1QZcMDY7ZwwS0LL4klooswQP6n2gIItNg",
  descripcion: "Autorización/consentimiento para actividades acuáticas en salidas educativas.",
  tipo: tipoDeArchivo("Autorización actividaes acuáticas en Salidas Educativas.docx"),
};
