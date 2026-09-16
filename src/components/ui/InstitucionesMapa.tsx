"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/**
 * Mapa propio (Leaflet).
 *
 * - Client Component cargado con `next/dynamic` + `ssr: false` desde
 *   `InstitutionsExplorer` (Leaflet usa `window`, no debe renderizarse en el server).
 * - Se muestra dentro de un modal, con la institución en la que se hizo click.
 * - Una institución puede tener **una o varias** ubicaciones (`punto.ubicaciones`):
 *   - una sola  → un marcador, centrado con zoom de detalle (comportamiento histórico);
 *   - varias    → un marcador por sede, con `fitBounds()` para que se vean todas.
 * - Cada marcador tiene su propio popup y su propio «Cómo llegar» (con las coordenadas de
 *   ESA sede, nunca una coordenada común).
 * - Tiles: OpenStreetMap estándar (sin API key). PENDIENTE de producción: la Tile Usage
 *   Policy de OSM no cubre un uso sostenido de sitio público; para producción hay que
 *   pasar a un proveedor con términos claros para bajo volumen institucional (MapTiler con
 *   key gratuita, CARTO basemaps, o tiles propios). Detalle en docs/mapa-instituciones.md
 *   (sección "Tiles"). El cambio se hace acá, en `TILE_URL` / `TILE_ATTRIB`.
 */

/** Una sede concreta de la institución. */
export type SedeMapa = {
  lat: number;
  lng: number;
  /** Nombre de la sede si la institución funciona en varias. */
  sede?: string;
  /** Dirección puntual de esta sede, si puede asociarse específicamente a este punto. */
  direccion?: string;
  /** Localidad puntual de esta sede, si puede asociarse específicamente a este punto. */
  localidad?: string;
};

export type PuntoMapa = {
  cue: string;
  nombre: string;
  /** Dirección general (de `instituciones.ts`); se usa como respaldo si hay una sola sede. */
  direccion?: string;
  /** Localidad general (de `instituciones.ts`); se usa como respaldo si hay una sola sede. */
  localidad?: string;
  /** 1..N ubicaciones. Con una, comportamiento de detalle; con varias, se encuadran todas. */
  ubicaciones: SedeMapa[];
};

type Props = {
  punto: PuntoMapa;
  /** Zoom al centrar una institución de una sola ubicación. */
  zoomDetalle?: number;
};

const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIB =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function escaparHtml(s: string) {
  const mapa: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return s.replace(/[&<>"']/g, (c) => mapa[c]);
}

/** Pin simple (sin personalización excesiva); crece y se oscurece al estar activo. */
function iconoPin(activo: boolean) {
  const size = activo ? 40 : 30;
  const fill = activo ? "#073E51" : "#0A5773"; // brand-teal-darker / brand-teal-dark
  return L.divIcon({
    className: "",
    html:
      `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
      `<path d="M12 22s7-6.2 7-12A7 7 0 0 0 5 10c0 5.8 7 12 7 12Z" fill="${fill}" stroke="#ffffff" stroke-width="1.5"/>` +
      `<circle cx="12" cy="10" r="2.6" fill="#ffffff"/></svg>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size + 4],
  });
}

/** Popup de una sede: nombre de la institución, sede, dirección/localidad puntual y «Cómo llegar». */
function popupHtml(nombre: string, sede: SedeMapa, unaSola: boolean, general: Pick<PuntoMapa, "direccion" | "localidad">) {
  const destino = `${sede.lat},${sede.lng}`;
  // La dirección/localidad general sólo se usan de respaldo cuando hay una sola sede: en
  // multi-sede, sólo se muestra lo que puede asociarse específicamente a ese punto.
  const direccion = sede.direccion ?? (unaSola ? general.direccion : undefined);
  const localidad = sede.localidad ?? (unaSola ? general.localidad : undefined);
  const dir = [direccion, localidad]
    .filter((v): v is string => Boolean(v))
    .map(escaparHtml)
    .join(", ");
  return (
    `<div class="im-popup">` +
    `<strong class="im-popup__nombre">${escaparHtml(nombre)}</strong>` +
    (sede.sede ? `<span class="im-popup__sede">${escaparHtml(sede.sede)}</span>` : "") +
    (dir ? `<span class="im-popup__dir">${dir}</span>` : "") +
    `<a class="im-popup__ruta" href="https://www.google.com/maps/dir/?api=1&destination=${destino}"` +
    ` target="_blank" rel="noopener noreferrer">Cómo llegar</a>` +
    `</div>`
  );
}

export default function InstitucionesMapa({ punto, zoomDetalle = 16 }: Props) {
  const nodoRef = useRef<HTMLDivElement>(null);
  const mapaRef = useRef<L.Map | null>(null);
  const marcadoresRef = useRef<L.Marker[]>([]);

  /**
   * Encuadra el mapa. Siempre sin animación: el mapa se monta dentro de un modal y,
   * hasta que el <dialog> no está visible, el contenedor mide 0×0 (una animación
   * `flyTo` en ese estado rompe con "Invalid LatLng (NaN, NaN)").
   */
  const encuadrar = useRef<() => void>(() => {});

  // Inicialización del mapa (una sola vez por montaje). `key={punto.cue}` en el padre fuerza
  // el remontaje al cambiar de institución, así que acá siempre se parte de cero.
  useEffect(() => {
    const ubicaciones = punto.ubicaciones;
    if (mapaRef.current || !nodoRef.current || ubicaciones.length === 0) return;

    const unaSola = ubicaciones.length === 1;
    const mapa = L.map(nodoRef.current, {
      scrollWheelZoom: false, // no capturar el scroll de la página
      zoomControl: true,
    });
    mapaRef.current = mapa;

    L.tileLayer(TILE_URL, {
      attribution: TILE_ATTRIB,
      maxZoom: 19,
    }).addTo(mapa);

    const marcadores: L.Marker[] = [];
    const coords: L.LatLngExpression[] = [];
    for (const sede of ubicaciones) {
      const marcador = L.marker([sede.lat, sede.lng], {
        icon: iconoPin(unaSola),
        title: sede.sede ? `${punto.nombre} — ${sede.sede}` : punto.nombre,
        keyboard: true,
      })
        .addTo(mapa)
        .bindPopup(popupHtml(punto.nombre, sede, unaSola, punto), { autoPan: false });
      marcadores.push(marcador);
      coords.push([sede.lat, sede.lng]);
    }
    marcadoresRef.current = marcadores;

    encuadrar.current = () => {
      const m = mapaRef.current;
      if (!m) return;
      m.invalidateSize();
      if (unaSola) {
        m.setView(coords[0], zoomDetalle, { animate: false });
        marcadores[0].openPopup();
      } else {
        // Vista inicial donde se ven todas las sedes.
        m.fitBounds(L.latLngBounds(coords).pad(0.2), { animate: false });
      }
    };
    encuadrar.current();

    // Re-encuadrar cuando el contenedor pasa a tener tamaño real (al abrirse el modal).
    const ro = new ResizeObserver((entradas) => {
      const r = entradas[0]?.contentRect;
      if (r && r.width > 0 && r.height > 0) encuadrar.current();
    });
    ro.observe(nodoRef.current);
    const t = window.setTimeout(() => encuadrar.current(), 200);

    return () => {
      ro.disconnect();
      window.clearTimeout(t);
      mapa.remove();
      mapaRef.current = null;
      marcadoresRef.current = [];
    };
  }, [punto, zoomDetalle]);

  return (
    <>
      <style>{`
        .im-mapa.leaflet-container { font: inherit; background: var(--color-surface-muted); }
        .im-mapa .leaflet-control-zoom a { color: var(--color-ink); }
        .im-popup { display: grid; gap: 2px; min-width: 150px; }
        .im-popup__nombre { color: var(--color-ink); font-size: 0.875rem; line-height: 1.3; }
        .im-popup__sede { color: var(--color-ink); font-size: 0.8125rem; font-weight: 600; }
        .im-popup__dir { color: var(--color-ink-muted); font-size: 0.8125rem; }
        .im-popup__ruta {
          margin-top: 4px; font-size: 0.8125rem; font-weight: 600;
          color: var(--color-brand-teal-dark); text-decoration: underline;
        }
      `}</style>
      <div
        ref={nodoRef}
        className="im-mapa h-full w-full"
        role="region"
        aria-label={
          punto.ubicaciones.length > 1
            ? `Mapa: sedes de ${punto.nombre}`
            : `Mapa: ubicación de ${punto.nombre}`
        }
      />
    </>
  );
}
