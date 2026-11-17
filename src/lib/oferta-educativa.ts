import { cicloOferta, gruposOferta, ofertaEducativa } from "@/data/oferta-educativa";
import { instituciones } from "@/data/instituciones";
import type { GrupoOferta, Oferta, OfertaInstitucion } from "@/data/types";
import { anclaCue } from "@/lib/utils";

/**
 * Lógica de /oferta-educativa: valida el dataset de src/data/oferta-educativa.ts,
 * lo cruza por CUE con src/data/instituciones.ts y lo agrupa para la página.
 */

const CUE = /^\d{7}-\d{2}$/;

/** Institución de la oferta, ya resuelta para mostrar. */
export type InstitucionConOferta = {
  /** `id` HTML de la tarjeta (destino de "Ver oferta educativa"). */
  ancla: string;
  nombre: string;
  localidad?: string;
  /** Sólo cuando existe en /instituciones. */
  cue?: string;
  ofertas: Oferta[];
};

/**
 * Falla al compilar (no en producción) si el dataset tiene datos que romperían
 * la página o el vínculo con /instituciones: mejor un error claro.
 */
function validar(lista: OfertaInstitucion[]): void {
  const cuesConocidos = new Set(instituciones.map((i) => i.cue).filter(Boolean));
  const grupos = new Set(gruposOferta.map((g) => g.id));
  const vistos = new Set<string>();
  for (const item of lista) {
    const clave = item.cue ?? item.nombre;
    const error = (msg: string) => new Error(`Oferta "${clave}": ${msg} (src/data/oferta-educativa.ts)`);
    if (item.cue !== undefined) {
      if (!CUE.test(item.cue)) throw error('el CUE debe tener el formato "0000000-00"');
      if (!cuesConocidos.has(item.cue)) throw error("el CUE no existe en src/data/instituciones.ts");
    } else if (!item.nombre.trim()) {
      throw error("sin CUE, la denominación propia es obligatoria");
    }
    if (vistos.has(clave)) throw error("la institución está repetida");
    vistos.add(clave);
    if (!grupos.has(item.grupo)) throw error(`el grupo "${item.grupo}" no está en gruposOferta`);
    if (item.ofertas.length === 0) throw error("no se publican instituciones sin ofertas");
    const denominaciones = new Set<string>();
    for (const oferta of item.ofertas) {
      if (!oferta.denominacion.trim()) throw error("hay una oferta sin denominación");
      if (denominaciones.has(oferta.denominacion)) {
        throw error(`la oferta "${oferta.denominacion}" está repetida`);
      }
      denominaciones.add(oferta.denominacion);
    }
  }
}

validar(ofertaEducativa);

function slug(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function resolver(item: OfertaInstitucion): InstitucionConOferta {
  if (item.cue === undefined) {
    return { ancla: slug(item.nombre), nombre: item.nombre, ofertas: item.ofertas };
  }
  // La validación ya garantizó que el CUE existe.
  const institucion = instituciones.find((i) => i.cue === item.cue)!;
  return {
    ancla: anclaCue(item.cue),
    nombre: institucion.nombre,
    localidad: institucion.localidad,
    cue: item.cue,
    ofertas: item.ofertas,
  };
}

/** Grupos con al menos una institución, en el orden de `gruposOferta`. */
export const ofertaPorGrupo: {
  id: GrupoOferta;
  titulo: string;
  descripcion: string;
  instituciones: InstitucionConOferta[];
}[] = gruposOferta
  .map((grupo) => ({
    ...grupo,
    instituciones: ofertaEducativa.filter((item) => item.grupo === grupo.id).map(resolver),
  }))
  .filter((grupo) => grupo.instituciones.length > 0);

/** CUE de las instituciones con oferta publicada (para el enlace desde /instituciones). */
export const cuesConOferta: string[] = ofertaEducativa.flatMap((item) => (item.cue ? [item.cue] : []));

/**
 * Agrupa las ofertas por `familia`, respetando el orden de aparición. Si
 * ninguna tiene familia devuelve un único grupo sin título.
 */
export function agruparPorFamilia(ofertas: Oferta[]): { familia?: string; ofertas: Oferta[] }[] {
  const grupos: { familia?: string; ofertas: Oferta[] }[] = [];
  for (const oferta of ofertas) {
    const existente = grupos.find((g) => g.familia === oferta.familia);
    if (existente) existente.ofertas.push(oferta);
    else grupos.push({ familia: oferta.familia, ofertas: [oferta] });
  }
  return grupos;
}

export { cicloOferta };
