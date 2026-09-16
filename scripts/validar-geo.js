/**
 * Validación de integridad del dataset geográfico. Uso manual y apto para CI:
 *
 *     pnpm run validar:geo
 *
 * Modelo: cada CUE de `instituciones-geo.ts` tiene `ubicaciones: [1..N]` puntos. La mayoría
 * tiene uno; los servicios de adultos multi-sede tienen varios. La validación NO debe fallar
 * sólo porque un CUE tenga varias sedes.
 *
 * Comprueba, y falla (exit 1) si algo no se cumple:
 *   - todo `cue` de geo existe en `instituciones.ts`;
 *   - no hay CUE repetidos como registros separados en geo;
 *   - cada CUE tiene entre 1 y N ubicaciones (nunca 0);
 *   - cada ubicación tiene lat/lng numéricos, dentro de rangos válidos para el partido y sin
 *     lat/lng invertidas;
 *   - ninguna ubicación en `0,0`;
 *   - toda ubicación está marcada `verificado: true` (las dudosas no se publican);
 *   - no hay dos CUE distintos en la MISMA coordenada exacta (una card nunca puede recibir
 *     la coordenada de otra institución). Varias sedes del MISMO CUE sí pueden estar cerca.
 *
 * Además imprime un pequeño reporte de cobertura.
 *
 * Lee los `.ts` como texto (formato generado, estable) para no depender de un loader de TS.
 */
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const INST_PATH = path.join(RAIZ, "src", "data", "instituciones.ts");
const GEO_PATH = path.join(RAIZ, "src", "data", "instituciones-geo.ts");

const PARTIDO = { latMin: -34.75, latMax: -34.2, lngMin: -59.9, lngMax: -59.1 };

function leerCuesInstituciones() {
  const txt = fs.readFileSync(INST_PATH, "utf8");
  return [...txt.matchAll(/^\s*cue:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

function leerGeo() {
  const txt = fs.readFileSync(GEO_PATH, "utf8");
  const bloque = txt.slice(
    txt.indexOf("// ---GEO-GENERADA-INICIO---"),
    txt.indexOf("// ---GEO-GENERADA-FIN---"),
  );
  const entradas = [];
  // Cada institución: `cue: "…",` seguido de `ubicaciones: [ … ]`. El cierre del array es
  // `    ],` (4 espacios); los cierres internos de cada punto son `      },` (6 espacios).
  const re = /cue:\s*"([^"]+)",\s*\n\s*ubicaciones:\s*\[([\s\S]*?)\n {4}\],/g;
  for (const m of bloque.matchAll(re)) {
    const cue = m[1];
    const ubicaciones = [];
    for (const u of m[2].matchAll(/\{([\s\S]*?)\}/g)) {
      const c = u[1];
      ubicaciones.push({
        lat: Number((c.match(/lat:\s*(-?[\d.]+)/) || [])[1]),
        lng: Number((c.match(/lng:\s*(-?[\d.]+)/) || [])[1]),
        verificado: /verificado:\s*true/.test(c),
        sede: (c.match(/sede:\s*"([^"]+)"/) || [])[1],
      });
    }
    entradas.push({ cue, ubicaciones });
  }
  return entradas;
}

function main() {
  const errores = [];
  const cuesInst = leerCuesInstituciones();
  const setInst = new Set(cuesInst);
  const geo = leerGeo();

  if (cuesInst.length !== setInst.size) {
    errores.push(`instituciones.ts: hay CUE duplicados (${cuesInst.length} entradas, ${setInst.size} únicos)`);
  }

  const vistos = new Set();
  const porCoord = new Map();
  let totalUbicaciones = 0;
  let multisede = 0;

  for (const g of geo) {
    if (!setInst.has(g.cue)) errores.push(`geo: CUE ${g.cue} no existe en instituciones.ts`);
    if (vistos.has(g.cue)) errores.push(`geo: CUE ${g.cue} aparece como registro separado más de una vez`);
    vistos.add(g.cue);

    if (!Array.isArray(g.ubicaciones) || g.ubicaciones.length === 0) {
      errores.push(`geo: CUE ${g.cue} no tiene ninguna ubicación`);
      continue;
    }
    if (g.ubicaciones.length > 1) multisede++;

    g.ubicaciones.forEach((u, i) => {
      totalUbicaciones++;
      const donde = g.ubicaciones.length > 1 ? `${g.cue} (sede ${u.sede || i + 1})` : `${g.cue}`;

      if (!Number.isFinite(u.lat) || !Number.isFinite(u.lng)) {
        errores.push(`geo: ${donde} tiene lat/lng no numérico (${u.lat}, ${u.lng})`);
        return;
      }
      if (u.lat === 0 && u.lng === 0) errores.push(`geo: ${donde} en 0,0`);
      // lat/lng invertidas: la latitud del partido está en [-35,-34] y la longitud en [-60,-59].
      const latOk = u.lat >= -35 && u.lat <= -34;
      const lngOk = u.lng >= -60 && u.lng <= -59;
      if (!latOk || !lngOk) {
        if (u.lng >= -35 && u.lng <= -34 && u.lat >= -60 && u.lat <= -59) {
          errores.push(`geo: ${donde} parece tener lat/lng invertidas (${u.lat}, ${u.lng})`);
        } else {
          errores.push(`geo: ${donde} fuera del rango lat[-35,-34] / lng[-60,-59] (${u.lat}, ${u.lng})`);
        }
      }
      if (u.lat < PARTIDO.latMin || u.lat > PARTIDO.latMax || u.lng < PARTIDO.lngMin || u.lng > PARTIDO.lngMax) {
        errores.push(`geo: ${donde} fuera de la caja del partido (${u.lat}, ${u.lng})`);
      }
      if (!u.verificado) errores.push(`geo: ${donde} no está verificada (no debería publicarse)`);

      const k = `${u.lat.toFixed(6)},${u.lng.toFixed(6)}`;
      if (!porCoord.has(k)) porCoord.set(k, new Set());
      porCoord.get(k).add(g.cue);
    });
  }

  for (const [k, cues] of porCoord) {
    if (cues.size > 1) errores.push(`geo: coordenada ${k} compartida por varios CUE: ${[...cues].join(", ")}`);
  }

  const conGeo = geo.filter((g) => g.ubicaciones.some((u) => u.verificado)).length;
  console.log("Instituciones en el dataset:        ", cuesInst.length);
  console.log("Instituciones con geo verificada:   ", conGeo);
  console.log("  · con varias sedes:               ", multisede);
  console.log("Ubicaciones verificadas (total):    ", totalUbicaciones);
  console.log("Instituciones sin geo:              ", cuesInst.length - geo.length);
  console.log("");

  if (errores.length) {
    console.error("VALIDACIÓN FALLIDA:");
    for (const e of errores) console.error("  -", e);
    process.exit(1);
  }
  console.log("Validación OK: dataset geográfico íntegro.");
}

main();
