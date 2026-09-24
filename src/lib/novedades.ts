import { novedades as publicaciones } from "@/data/novedades";
import type { Novedad } from "@/data/types";

/**
 * Lógica de la sección Novedades: valida las publicaciones cargadas a mano en
 * src/data/novedades.ts, las ordena y ofrece los helpers de presentación.
 */

/** Dimensiones declaradas de las imágenes (proporción 3:2). Evitan el salto de layout. */
export const IMAGEN_NOVEDAD = { width: 1200, height: 800 } as const;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FECHA = /^\d{4}-\d{2}-\d{2}$/;

function fechaEsValida(fecha: string): boolean {
  if (!FECHA.test(fecha)) return false;
  // Se compara el ida y vuelta para rechazar fechas que no existen (2026-02-31).
  const fechaUtc = new Date(`${fecha}T00:00:00Z`);
  return !Number.isNaN(fechaUtc.getTime()) && fechaUtc.toISOString().slice(0, 10) === fecha;
}

/**
 * Falla al compilar (no en producción) si una publicación tiene datos que
 * romperían el sitio: mejor un error claro que una página rota.
 */
function validar(lista: Novedad[]): void {
  const vistos = new Set<string>();
  for (const n of lista) {
    const error = (msg: string) => new Error(`Novedad "${n.slug}": ${msg} (src/data/novedades.ts)`);
    if (!SLUG.test(n.slug)) throw error("el slug sólo admite minúsculas, números y guiones");
    if (vistos.has(n.slug)) throw error("el slug está repetido");
    vistos.add(n.slug);
    if (!fechaEsValida(n.fecha)) throw error(`la fecha "${n.fecha}" debe ser AAAA-MM-DD y existir`);
    if (!n.titulo.trim() || !n.resumen.trim() || !n.contenido.trim()) {
      throw error("título, resumen y contenido no pueden estar vacíos");
    }
    if (n.imagen !== undefined) {
      if (!n.imagen.startsWith("/novedades/")) throw error('la imagen debe estar en "/novedades/..."');
      if (!n.imagenAlt.trim()) throw error("la imagen necesita texto alternativo");
    }
    if (n.enlace && !/^https?:\/\//.test(n.enlace.url)) {
      throw error("el enlace debe empezar con http:// o https://");
    }
  }
}

validar(publicaciones);

/** Todas las publicaciones, de la más reciente a la más antigua (a igual fecha, se respeta el orden de carga). */
export const novedadesOrdenadas: Novedad[] = [...publicaciones].sort((a, b) =>
  b.fecha.localeCompare(a.fecha),
);

export function novedadesRecientes(cantidad: number): Novedad[] {
  return novedadesOrdenadas.slice(0, cantidad);
}

export function obtenerNovedad(slug: string): Novedad | undefined {
  return novedadesOrdenadas.find((n) => n.slug === slug);
}

/**
 * "2026-09-24" → "24 de septiembre de 2026". La fecha es editorial (sin hora),
 * así que se formatea en UTC: el resultado no depende de la zona horaria del
 * servidor ni del navegador.
 */
export function formatearFecha(fecha: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${fecha}T00:00:00Z`));
}

/** Divide el contenido en párrafos (separados por una línea en blanco). */
export function parrafosDeContenido(contenido: string): string[] {
  return contenido
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}
