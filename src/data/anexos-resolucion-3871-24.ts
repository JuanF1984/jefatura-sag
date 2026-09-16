import type { Documento } from "@/data/types";

/**
 * Fuente única de los 9 anexos de la Resolución 3871/24 (salidas educativas),
 * usada por Normativa (`normativa-secciones.ts`, que además mantiene el texto
 * completo de la resolución). Ya no se muestra en Formularios (retirado el
 * 2026-08-19, ver docs/auditoria-documentos-inspectores.md). No duplicar estos
 * registros: importar desde aquí.
 *
 * 2026-09-09: los títulos de los anexos pasaron a ser funcionales y legibles; el
 * identificador técnico GDEBA (IF-...) quedó como dato de trazabilidad en la
 * descripción, no como título. Los títulos funcionales de los Anexos 4, 5, 7 y 9
 * ya se habían corregido el 2026-08-19 a partir de la verificación directa del
 * texto oficial de la resolución — ver docs/auditoria-vigencia-normativa-2026.md.
 *
 * 2026-09-14: se eliminó `documentos-inspectores-secciones.ts` (retiro de la
 * página pública "Documentos para inspectores/as", ver
 * docs/auditoria-documentos-inspectores.md) — ese archivo reutilizaba el Anexo 5
 * como referencia cruzada; ahora este es el único lugar que lo expone.
 */

const categoria = "Resolución 3871/24 — Salidas educativas";

export const resolucion3871_24 = {
  titulo: "Resolución 3871/24 y anexos — Salidas educativas",
  href: "https://drive.google.com/open?authuser=0&id=1aKytfhKaNnuXwAiP-w5RL-eTfapho9Ww",
};

export const anexo1Requisitos: Documento = {
  titulo: "Anexo 1 — Requisitos generales",
  href: "https://drive.google.com/open?authuser=0&id=1vTaecDcXmp3XoVfoEYM5F5AzyWKTMmM2",
  descripcion: "Requisitos generales para las salidas educativas. Identificador oficial: IF-2024-35027702-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo2Tiempos: Documento = {
  titulo: "Anexo 2 — Plazos de presentación",
  href: "https://drive.google.com/open?authuser=0&id=1f0bzx9x6atq32NWD_jWvddPQpDyI4B2n",
  descripcion: "Plazos y tiempos de presentación de la documentación. Identificador oficial: IF-2024-35028005-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo3AutorizacionRadioEscuela: Documento = {
  titulo: "Anexo 3 — Autorización de salidas en el radio de la escuela",
  href: "https://drive.google.com/open?authuser=0&id=1Zj43wQNLbTLXGAT8dXqwu0_GlcqZ043F",
  descripcion: "Planilla de autorización para salidas dentro del radio de la escuela. Identificador oficial: IF-2024-35029272-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo4SalidasEducativas: Documento = {
  titulo: "Anexo 4 — Formulario de itinerario",
  href: "https://drive.google.com/open?authuser=0&id=1Y3Q9ct_RXq7gZ_j274jcytGPeFeR9vbG",
  descripcion: "Formulario de itinerario de la salida educativa. Identificador oficial: IF-2024-35029395-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

/**
 * Clasificación resuelta el 2026-08-19: la auditoría de vigencia normativa
 * verificó directamente contra el texto oficial de la Resolución 3871/24 que este
 * anexo (Anexo V) es una planilla operativa ("Planilla de estudiantes"), no un
 * anexo reglamentario. Ver docs/auditoria-vigencia-normativa-2026.md.
 */
export const anexo5EstudiantesYAcompanantes: Documento = {
  titulo: "Anexo 5 — Planilla de estudiantes",
  href: "https://drive.google.com/open?authuser=0&id=1hP6sFSkCUE8uffdBxAMhwIzbz3xFLZmi",
  descripcion: "Planilla de estudiantes participantes. Identificador oficial: IF-2024-35029666-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo6AutorizacionMenores: Documento = {
  titulo: "Anexo 6 — Autorización para estudiantes menores de 18 años",
  href: "https://drive.google.com/open?authuser=0&id=1KZwMt-jHV9kwo6EYKpTOOVcUBYTT8uag",
  descripcion: "Autorización firmada por madre, padre o tutor/a. Identificador oficial: IF-2024-35030478-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo7AutorizacionMayores: Documento = {
  titulo: "Anexo 7 — Declaración jurada del estudiante mayor de 18 años",
  href: "https://drive.google.com/open?authuser=0&id=1vlROf0FX6VjiTgc1ens5XSsAdkvENEIu",
  descripcion: "Declaración jurada del estudiante mayor de 18 años. Identificador oficial: IF-2024-35030927-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo8Transporte: Documento = {
  titulo: "Anexo 8 — Informe de transporte",
  href: "https://drive.google.com/open?authuser=0&id=1RuBmyyIV7smtF7kxZyhcm5k9wWwK6ObW",
  descripcion: "Informe de transporte contratado para la salida. Identificador oficial: IF-2024-35031394-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

export const anexo9Ddjj: Documento = {
  titulo: "Anexo 9 — Declaración jurada de directivos",
  href: "https://drive.google.com/open?authuser=0&id=18xIEheTZFK629RCly8yFbtKKTJQY22NV",
  descripcion: "Declaración jurada del equipo directivo. Identificador oficial: IF-2024-35031909-GDEBA-CGCYEDGCYE.",
  categoria,
  tipo: "pdf",
};

/** Los 9 anexos, en orden numérico. */
export const anexosResolucion3871_24: Documento[] = [
  anexo1Requisitos,
  anexo2Tiempos,
  anexo3AutorizacionRadioEscuela,
  anexo4SalidasEducativas,
  anexo5EstudiantesYAcompanantes,
  anexo6AutorizacionMenores,
  anexo7AutorizacionMayores,
  anexo8Transporte,
  anexo9Ddjj,
];
