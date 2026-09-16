"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { Institucion } from "@/data/types";
import { InstitutionCard } from "@/components/ui/InstitutionCard";
import { SearchIcon } from "@/components/ui/icons";
import { ubicacionesVerificadasDeInstitucion } from "@/data/instituciones-geo";
import type { PuntoMapa } from "@/components/ui/InstitucionesMapa";

// Leaflet usa `window`: el mapa se carga sólo en el cliente y sólo al abrir el modal.
const InstitucionesMapa = dynamic(() => import("@/components/ui/InstitucionesMapa"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-surface-muted" aria-hidden="true" />,
});

const TODOS = "Todos";
const TODAS = "Todas";

function normalizar(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function opcionesUnicas(valores: Array<string | undefined>) {
  const vistos = new Set<string>();
  const resultado: string[] = [];
  for (const v of valores) {
    if (!v || vistos.has(v)) continue;
    vistos.add(v);
    resultado.push(v);
  }
  return resultado;
}

const selectClass =
  "min-h-11 rounded-control border border-border bg-surface px-3 text-sm text-ink focus-visible:outline-none";

export function InstitutionsExplorer({ instituciones }: { instituciones: Institucion[] }) {
  const [busqueda, setBusqueda] = useState("");
  const [nivel, setNivel] = useState(TODOS);
  const [modalidad, setModalidad] = useState(TODAS);
  // Institución mostrada en el modal del mapa. `nonce` permite reabrir con la misma card.
  const [modal, setModal] = useState<{ punto: PuntoMapa; nonce: number } | null>(null);
  const [anuncio, setAnuncio] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Botón que abrió el modal, para devolverle el foco al cerrarlo por botón/fondo.
  const disparadorRef = useRef<HTMLElement | null>(null);

  const niveles = useMemo(() => opcionesUnicas(instituciones.map((i) => i.nivel)), [instituciones]);
  const modalidades = useMemo(() => opcionesUnicas(instituciones.map((i) => i.modalidad)), [instituciones]);

  // Instituciones con al menos una ubicación verificada. El cruce es por CUE (nunca por nombre).
  // Una institución puede aportar 1..N sedes; se llevan todas al mismo `PuntoMapa`.
  const puntos = useMemo<PuntoMapa[]>(
    () =>
      instituciones.flatMap((i) => {
        const ubicaciones = ubicacionesVerificadasDeInstitucion(i);
        if (ubicaciones.length === 0 || !i.cue) return [];
        return [
          {
            cue: i.cue,
            nombre: i.nombre,
            direccion: i.direccion,
            localidad: i.localidad,
            ubicaciones: ubicaciones.map((u) => ({
              lat: u.lat,
              lng: u.lng,
              sede: u.sede,
              direccion: u.direccion,
            })),
          },
        ];
      }),
    [instituciones],
  );
  const puntosPorCue = useMemo(() => new Map(puntos.map((p) => [p.cue, p])), [puntos]);

  function verEnElMapa(institucion: Institucion, disparador: HTMLElement | null) {
    const punto = institucion.cue ? puntosPorCue.get(institucion.cue) : undefined;
    if (!punto) return;
    disparadorRef.current = disparador;
    setModal((prev) => ({ punto, nonce: (prev?.nonce ?? 0) + 1 }));
    setAnuncio(
      punto.ubicaciones.length > 1
        ? `Mostrando ${institucion.nombre} en el mapa (${punto.ubicaciones.length} sedes)`
        : `Mostrando ${institucion.nombre} en el mapa`,
    );
  }

  // El estado `modal` manda: se sincroniza el <dialog> nativo con él.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (modal && !d.open) {
      d.showModal();
    } else if (!modal && d.open) {
      d.close();
      // Al cerrar por programa el <dialog> no restaura el foco (sí lo hace con Escape).
      disparadorRef.current?.focus();
      disparadorRef.current = null;
    }
  }, [modal]);

  // Cierre por Escape (evento nativo del <dialog>): limpiar el estado → desmonta el mapa.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const alCerrar = () => setModal(null);
    d.addEventListener("cancel", alCerrar);
    d.addEventListener("close", alCerrar);
    return () => {
      d.removeEventListener("cancel", alCerrar);
      d.removeEventListener("close", alCerrar);
    };
  }, []);

  const filtradas = useMemo(() => {
    const q = normalizar(busqueda.trim());
    return instituciones.filter((i) => {
      if (nivel !== TODOS && i.nivel !== nivel) return false;
      if (modalidad !== TODAS && i.modalidad !== modalidad) return false;
      if (q && !normalizar(i.nombre).includes(q)) return false;
      return true;
    });
  }, [instituciones, busqueda, nivel, modalidad]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Buscar institución por nombre</span>
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre…"
            className="min-h-11 w-full rounded-control border border-border bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-ink-muted focus-visible:outline-none"
          />
        </label>
        {niveles.length > 1 ? (
          <label className="sm:w-48">
            <span className="sr-only">Filtrar por nivel</span>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)} className={`w-full ${selectClass}`}>
              <option value={TODOS}>Todos los niveles</option>
              {niveles.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {modalidades.length > 1 ? (
          <label className="sm:w-52">
            <span className="sr-only">Filtrar por modalidad</span>
            <select value={modalidad} onChange={(e) => setModalidad(e.target.value)} className={`w-full ${selectClass}`}>
              <option value={TODAS}>Todas las modalidades</option>
              {modalidades.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>

      <p className="mt-4 text-sm text-ink-muted" aria-live="polite">
        {filtradas.length === instituciones.length
          ? `${instituciones.length} establecimientos`
          : `${filtradas.length} de ${instituciones.length} establecimientos`}
      </p>

      <p className="sr-only" aria-live="polite">
        {anuncio}
      </p>

      {filtradas.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((i) => (
            <InstitutionCard
              key={i.nombre}
              institucion={i}
              puedeVerseEnMapa={Boolean(i.cue && puntosPorCue.has(i.cue))}
              onVerEnElMapa={(disparador) => verEnElMapa(i, disparador)}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-6 rounded-card border border-border bg-surface-muted px-4 py-6 text-center text-sm text-ink-muted">
          No se encontraron establecimientos con ese criterio de búsqueda.
        </p>
      )}

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) setModal(null);
        }}
        aria-modal="true"
        aria-labelledby="mapa-modal-titulo"
        className="m-auto w-[min(92vw,900px)] max-w-none overflow-hidden rounded-card border border-border p-0 shadow-soft-hover backdrop:bg-black/40"
      >
        {modal ? (
          <div className="flex max-h-[85vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <h2 id="mapa-modal-titulo" className="truncate text-base font-semibold text-ink">
                  {modal.punto.nombre}
                </h2>
                {modal.punto.ubicaciones.length > 1 ? (
                  <p className="mt-0.5 text-sm text-ink-muted">Esta institución funciona en varias sedes.</p>
                ) : [modal.punto.direccion, modal.punto.localidad].filter(Boolean).length > 0 ? (
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {[modal.punto.direccion, modal.punto.localidad].filter(Boolean).join(", ")}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Cerrar mapa"
                className="-mr-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="h-[60vh] min-h-[300px] w-full">
              <InstitucionesMapa key={modal.punto.cue} punto={modal.punto} />
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
