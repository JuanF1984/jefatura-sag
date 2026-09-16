import type { Inspector } from "@/data/types";

/**
 * Tabla completa recuperada de material-original/Acerca de.mht, sección
 * "Sede de Inspectores/as". No hay datos de contacto individuales (teléfono o
 * correo) en la fuente para cada inspector/a: sólo el contacto general de la
 * Jefatura Distrital (ver src/data/site.ts). No se inventan.
 */
export const inspectores: Inspector[] = [
  { nombre: "Borsetti, Mariela", nivelModalidad: "Educación Inicial" },
  { nombre: "Pizzi, Verónica", nivelModalidad: "Educación Inicial" },
  { nombre: "Botana, Valeria", nivelModalidad: "Educación Primaria" },
  { nombre: "Luna, Diana", nivelModalidad: "Educación Secundaria" },
  { nombre: "Torres, Soledad", nivelModalidad: "Educación Técnica" },
  { nombre: "Guiot, Angélica", nivelModalidad: "Educación Agraria" },
  { nombre: "Lossino, Paula", nivelModalidad: "Educación Agraria" },
  { nombre: "Simondi, Verónica", nivelModalidad: "Educación de Adultos" },
  { nombre: "Baldachi, Silvia", nivelModalidad: "ETP" },
  { nombre: "D'albo, M. de la Paz", nivelModalidad: "EFP - CFP" },
  { nombre: "Scardamaglia Ferrer, Cecilia", nivelModalidad: "Educación Física" },
  { nombre: "Duarte, Jorge", nivelModalidad: "Educación Especial", observaciones: "Suplente de Costurié Mónica" },
  { nombre: "Chertudi, Natalia", nivelModalidad: "Educación Artística" },
  {nombre: "Agostino, Juan Facundo", nivelModalidad: "Educación Superior" },
];
