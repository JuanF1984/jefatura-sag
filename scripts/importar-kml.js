/**
 * Importador OFFLINE del KML del Google My Maps del distrito → `src/data/instituciones-geo.ts`.
 *
 * Uso manual (no forma parte del build del sitio):
 *
 *     pnpm run importar:kml
 *
 * Qué hace:
 *   1. Lee el KML exportado del My Maps institucional
 *      (`material-original/093 My Maps - instituciones.kml`; ver docs/mapa-instituciones.md
 *      para saber cómo se obtiene). KML guarda las coordenadas como `longitud,latitud`.
 *   2. Lee la planilla `material-original/093 Datos 2026 RESUMEN.xlsx` para obtener el CUE,
 *      el código de servicio y la localidad de las 75 instituciones (NO se leen columnas de
 *      directivos ni datos personales).
 *   3. Empareja cada placemark con una institución. Prioridad de matcheo:
 *        a) CUE                       → el KML del My Maps no lo trae
 *        b) código provincial         → el KML del My Maps no lo trae
 *        c) código normalizado        → "EP N° 1", "JI N° 901", "EES Técnica N° 1", … (se usa esto)
 *        d) nombre                    → sólo como apoyo para descartar (no como clave)
 *   4. Un mismo CUE puede quedar asociado a VARIOS placemarks cuando el servicio funciona en
 *      varias sedes reales (Educación de Adultos: EEPA / CEA). En ese caso se agrupan todos los
 *      puntos bajo el CUE como `ubicaciones[]`, conservando el nombre de cada sede (lo que el
 *      placemark trae después de "Sede …") y su dirección puntual si está en la descripción.
 *      Un código con varios placemarks que NO son sedes declaradas sigue reportándose como
 *      «ambiguo» y no se publica.
 *   5. Verifica cada coordenada (dentro del partido, sin 0,0, sin lat/lng invertidas,
 *      sin varios CUE en el mismo punto exacto, urbanas cerca del casco). El chequeo «urbana»
 *      no se aplica a los servicios multi-sede: por definición operan en parajes distintos.
 *   6. Escribe SOLO los matches confiables y verificados en `src/data/instituciones-geo.ts`
 *      (bloque entre marcadores; el resto del archivo —tipos y helpers— no se toca).
 *   7. Escribe un reporte legible en `docs/mapa-instituciones-reporte.md` y un resumen por consola.
 *
 * Nunca inventa coordenadas ni nombres de sede: una institución sin punto confiable queda fuera
 * del dataset geo y la card simplemente no muestra «Ver en el mapa».
 */
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");
const KML_PATH = path.join(RAIZ, "material-original", "093 My Maps - instituciones.kml");
const XLSX_PATH = path.join(RAIZ, "material-original", "093 Datos 2026 RESUMEN.xlsx");
const GEO_PATH = path.join(RAIZ, "src", "data", "instituciones-geo.ts");
const REPORTE_PATH = path.join(RAIZ, "docs", "mapa-instituciones-reporte.md");
const HOJA = "ESTABLEC  DIRECTIVOS";
const COL = { SERVICIO: 0, CUE: 4, NOMBRE: 28, LOCALIDAD: 30 };

const FUENTE = "Google My Maps del distrito (KML público, mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho)";

// Casco urbano de San Andrés de Giles (plaza central) y caja del partido (con margen).
const CASCO = { lat: -34.4436, lng: -59.447 };
const PARTIDO = { latMin: -34.75, latMax: -34.2, lngMin: -59.9, lngMax: -59.1 };
const RADIO_URBANO_KM = 5;

// ---------------------------------------------------------------------------
// Normalización de código institucional a clave "FAMILIA NUMERO" (ej. "EP 1").
// ---------------------------------------------------------------------------
function claveCodigo(raw) {
  let s = (raw || "").toString().toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  s = s.replace(/["'“”]/g, " ");
  s = s.replace(/\./g, ""); // "E.E.S." → "EES", "C.E.C" → "CEC"
  s = s.replace(/\bEES\s*TECNICA\b/g, "EEST");
  s = s.replace(/\bESCUELA DE EDUCACION SECUNDARIA TECNICA\b/g, "EEST");
  s = s.replace(/\bCENTRO DE FORMACION PROFESIONAL\b/g, "CFP");
  s = s.replace(/-/g, " ");
  s = s.replace(/N[º°]/g, " ").replace(/\bNRO\b/g, " ").replace(/\bN\b(?=\s*\d)/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  // El Anexo 3061 es un servicio propio (CUE 0622087-01), distinto de la EES N° 6.
  if (/ANEXO\s*3061/.test(s)) return "ANEXO 3061";
  const m = s.match(/^([A-Z]+)\D*?(\d+)/);
  if (!m) return null;
  const familia = ({ JIRMM: "JIRIMM" })[m[1]] || m[1];
  return `${familia} ${parseInt(m[2], 10)}`;
}

function normNombre(s) {
  return (s || "").toString().toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
}

/** Nombre de la sede: lo que el placemark trae después de "Sede …". `undefined` si no hay. */
function nombreSede(rawNombre) {
  const m = (rawNombre || "").match(/\bsede\b\s*(.+)$/i);
  if (!m) return undefined;
  const s = m[1].replace(/\s+/g, " ").trim();
  return s || undefined;
}

/** Primera línea útil de la descripción del placemark como dirección puntual de la sede. */
function direccionDeDescripcion(descRaw) {
  let s = (descRaw || "").replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "");
  s = s.replace(/<img[^>]*>/gi, " ");
  const primera = s.split(/<br\s*\/?>/i).map((x) => x.trim()).filter(Boolean)[0] || "";
  s = primera.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  // Recortar el ruido de cola: partido (incluida la errata «Abdrés» del KML), correo, CUE, turnos.
  const PARTIDO_RE = "San\\s+A(?:ndr|bdr)[eé]s\\s+de\\s+Giles";
  s = s.split(new RegExp(`,\\s*\\.?\\s*${PARTIDO_RE}`, "i"))[0].trim();
  s = s.split(new RegExp(`\\s+-\\s+\\.?\\s*${PARTIDO_RE}`, "i"))[0].trim();
  s = s.replace(/,?\s*(?:CUE\s*\S+|[\w.+-]+@[\w.-]+|Tel[:.]?\s*\S.*|T[MNTV](?:\s*\/\s*T[MNTV])*(?:\s*\d.*)?)\s*$/i, "").trim();
  s = s.replace(/[;,.\s]+$/, "").trim();
  return s || undefined;
}

/** CUE `0000000-00` mencionado dentro de la descripción, si lo hay. */
function cueEnDescripcion(descRaw) {
  const m = (descRaw || "").match(/CUE\s*(\d{7}-\d{2})/i);
  return m ? m[1] : undefined;
}

function distanciaKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

// ---------------------------------------------------------------------------
// 1) Instituciones desde la planilla (sólo columnas públicas).
// ---------------------------------------------------------------------------
function leerInstituciones() {
  const wb = XLSX.readFile(XLSX_PATH);
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[HOJA], { header: 1, defval: "" });
  const out = [];
  for (let i = 4; i < rows.length; i++) {
    const servicio = (rows[i][COL.SERVICIO] || "").toString().trim();
    if (!servicio || servicio.toUpperCase().startsWith("NIVEL")) continue;
    out.push({
      servicio,
      cue: (rows[i][COL.CUE] || "").toString().trim(),
      nombre: (rows[i][COL.NOMBRE] || "").toString().trim(),
      localidad: (rows[i][COL.LOCALIDAD] || "").toString().trim(),
      clave: claveCodigo(servicio),
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// 2) Placemarks del KML.
// ---------------------------------------------------------------------------
function leerPlacemarks() {
  const kml = fs.readFileSync(KML_PATH, "utf8");
  const bloques = [...kml.matchAll(/<Placemark>([\s\S]*?)<\/Placemark>/g)].map((m) => m[1]);
  const out = [];
  for (const b of bloques) {
    if (!/<Point>/.test(b)) continue; // descartar rutas / líneas ("Indicaciones de …")
    const nombre = (b.match(/<name>([\s\S]*?)<\/name>/) || [])[1] || "";
    const limpio = nombre
      .replace(/^<!\[CDATA\[/, "")
      .replace(/\]\]>$/, "")
      .replace(/&amp;/g, "&")
      .trim();
    const coord = ((b.match(/<coordinates>([\s\S]*?)<\/coordinates>/) || [])[1] || "").trim();
    const [lng, lat] = coord.split(",").map((n) => Number(n.trim())); // KML: longitud,latitud
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
    const descripcion = (b.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || "";
    const ext = {};
    for (const d of b.matchAll(/<Data name="([^"]+)">\s*<value>([\s\S]*?)<\/value>/g)) ext[d[1]] = d[2].trim();
    const esSede = /\bsede\b/i.test(limpio);
    out.push({
      nombre: limpio,
      lat,
      lng,
      ext,
      descripcion,
      esSede,
      sede: esSede ? nombreSede(limpio) : undefined,
      // "Sede …" pertenece a un servicio de adultos con muchas sedes: se ignora para la clave.
      clave: claveCodigo(limpio.replace(/\bSEDE\b.*/i, "")),
    });
  }
  return out;
}

// Colapsa placemarks del MISMO servicio que están casi en el mismo lugar (< 80 m):
// en el My Maps hay marcadores repetidos (p. ej. el de la ruta de "Cómo llegar"). Cuando
// alguno es una sede declarada sólo se colapsa si además coincide el nombre completo, para
// no fusionar dos sedes reales que estén cerca.
function dedupPorClave(puntos) {
  const out = [];
  for (const p of puntos) {
    const gemelo = out.find((q) => {
      if (!q.clave || q.clave !== p.clave || distanciaKm(q, p) >= 0.08) return false;
      if (q.esSede || p.esSede) return normNombre(q.nombre) === normNombre(p.nombre);
      return true;
    });
    if (!gemelo) out.push(p);
  }
  return out;
}

// ---------------------------------------------------------------------------
// 3) Matcheo institución ↔ placemark por código normalizado.
// ---------------------------------------------------------------------------
function emparejar(instituciones, puntos) {
  const puntosLibres = puntos.map((p, idx) => ({ ...p, idx, usado: false }));
  const matches = []; // { inst, puntos: [pm...], metodo, multisede }
  const sinPunto = [];
  const ambiguas = [];

  for (const inst of instituciones) {
    if (!inst.clave) {
      sinPunto.push({ inst, motivo: "no se pudo derivar el código normalizado" });
      continue;
    }
    const cands = puntosLibres.filter((p) => !p.usado && p.clave === inst.clave);
    if (cands.length === 1 && !cands[0].esSede) {
      cands[0].usado = true;
      matches.push({ inst, puntos: [cands[0]], metodo: "código normalizado", multisede: false });
    } else if (cands.length === 0) {
      sinPunto.push({ inst, motivo: "sin placemark con ese código en el KML" });
    } else if (cands.every((c) => c.esSede)) {
      // Varios placemarks "… Sede …" del mismo servicio → sedes reales del mismo CUE.
      cands.forEach((c) => (c.usado = true));
      matches.push({
        inst,
        puntos: cands.slice().sort((a, b) => (a.sede || "").localeCompare(b.sede || "")),
        metodo: "código normalizado (varias sedes)",
        multisede: true,
      });
    } else {
      ambiguas.push({ inst, candidatos: cands.map((c) => c.nombre) });
    }
  }
  const puntosSinInst = puntosLibres.filter((p) => !p.usado);
  return { matches, sinPunto, ambiguas, puntosSinInst };
}

// ---------------------------------------------------------------------------
// 4) Verificación de coordenadas. Se verifica punto por punto; una institución
//    multi-sede se publica con las sedes que pasan el control.
// ---------------------------------------------------------------------------
function verificar(matches) {
  const porCoord = new Map();
  const evaluados = []; // { match, punto, problemas }

  for (const m of matches) {
    for (const punto of m.puntos) {
      const { lat, lng } = punto;
      const problemas = [];

      if (lat === 0 && lng === 0) problemas.push("coordenada 0,0");
      if (!(lat >= -35 && lat <= -34) || !(lng >= -60 && lng <= -59)) {
        if (lng >= -35 && lng <= -34 && lat >= -60 && lat <= -59) problemas.push("lat/lng invertidas");
        else problemas.push("fuera del rango lat[-35,-34] / lng[-60,-59]");
      }
      if (lat < PARTIDO.latMin || lat > PARTIDO.latMax || lng < PARTIDO.lngMin || lng > PARTIDO.lngMax) {
        problemas.push("fuera de la caja del partido");
      }

      // "Urbana" = la localidad es SÓLO el casco. No aplica a servicios multi-sede: por
      // definición funcionan en parajes distintos y no están atados al casco.
      if (!m.multisede) {
        const partesLoc = m.inst.localidad
          .split(/\s*-\s*/)
          .map((p) => p.normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase().replace(/\./g, " ").replace(/\s+/g, " ").trim())
          .filter(Boolean);
        const VARIANTES_PARTIDO = new Set([
          "S A DE GILES", "SA DE GILES", "SAN A DE GILES", "SAN ANDRES DE GILES", "S ANDRES DE GILES",
        ]);
        const ETIQUETAS_ZONA = new Set(["URBANA", "URBANO", "RURAL", "RURALES"]);
        const restantesLoc = partesLoc.filter((p) => !VARIANTES_PARTIDO.has(p) && !ETIQUETAS_ZONA.has(p));
        const esUrbana = partesLoc.length > 0 && restantesLoc.length === 0;
        const distCasco = distanciaKm({ lat, lng }, CASCO);
        if (esUrbana && distCasco > RADIO_URBANO_KM) {
          problemas.push(`localidad urbana pero a ${distCasco.toFixed(1)} km del casco`);
        }
      }

      const clave = `${lat.toFixed(6)},${lng.toFixed(6)}`;
      if (!porCoord.has(clave)) porCoord.set(clave, new Set());
      porCoord.get(clave).add(m.inst.cue);

      evaluados.push({ match: m, punto, problemas, coordKey: clave });
    }
  }

  // Varios CUE distintos en el MISMO punto exacto → error (edificio compartido = puntos cercanos).
  for (const e of evaluados) {
    const cues = porCoord.get(e.coordKey);
    if (cues.size > 1) {
      e.problemas.push(`punto exacto compartido con CUE ${[...cues].filter((c) => c !== e.match.inst.cue).join(", ")}`);
    }
  }

  // Regagrupar por match: ubicaciones verificadas + lista de puntos dudosos.
  const dudosos = [];
  const porMatch = new Map();
  for (const e of evaluados) {
    if (e.problemas.length) {
      dudosos.push({ inst: e.match.inst, punto: e.punto, problemas: e.problemas });
      continue;
    }
    if (!porMatch.has(e.match)) porMatch.set(e.match, []);
    porMatch.get(e.match).push(e.punto);
  }

  const verificados = [];
  for (const [m, puntos] of porMatch) {
    const notas = [];
    const ubicaciones = puntos.map((p) => {
      const cueDesc = cueEnDescripcion(p.descripcion);
      if (m.multisede && cueDesc && cueDesc !== m.inst.cue) {
        notas.push(`la sede «${p.sede || p.nombre}» trae en su descripción CUE ${cueDesc}`);
      }
      const ubi = { lat: p.lat, lng: p.lng };
      if (p.sede) ubi.sede = p.sede;
      const dir = m.multisede ? direccionDeDescripcion(p.descripcion) : undefined;
      if (dir) ubi.direccion = dir;
      return ubi;
    });
    verificados.push({
      inst: m.inst,
      metodo: m.metodo,
      multisede: m.multisede,
      ubicaciones,
      notas,
      // Nombres de placemark, para el reporte.
      placemarks: puntos.map((p) => p.nombre),
    });
  }
  verificados.sort((a, b) => a.inst.cue.localeCompare(b.inst.cue));
  return { verificados, dudosos };
}

// ---------------------------------------------------------------------------
// 5) Escritura del dataset geográfico.
// ---------------------------------------------------------------------------
function escribirGeo(verificados) {
  const filas = verificados
    .slice()
    .sort((a, b) => a.inst.cue.localeCompare(b.inst.cue))
    .map((v) => {
      const ubis = v.ubicaciones
        .map((u) => {
          const campos = [
            `        lat: ${u.lat},`,
            `        lng: ${u.lng},`,
            `        fuente: ${JSON.stringify(FUENTE)},`,
            `        verificado: true,`,
          ];
          if (u.sede) campos.push(`        sede: ${JSON.stringify(u.sede)},`);
          if (u.direccion) campos.push(`        direccion: ${JSON.stringify(u.direccion)},`);
          return `      {\n${campos.join("\n")}\n      },`;
        })
        .join("\n");
      return `  {\n    cue: ${JSON.stringify(v.inst.cue)},\n    ubicaciones: [\n${ubis}\n    ],\n  },`;
    })
    .join("\n");

  const marcaInicio = "// ---GEO-GENERADA-INICIO---";
  const marcaFin = "// ---GEO-GENERADA-FIN---";
  const bloque =
    `${marcaInicio}\n` +
    `/**\n` +
    ` * Generado por \`pnpm run importar:kml\` a partir del KML del Google My Maps del distrito.\n` +
    ` * Sólo información geográfica/técnica: la unión con nombre/dirección/localidad se hace por CUE\n` +
    ` * contra \`src/data/instituciones.ts\`. Un CUE puede tener 1..N \`ubicaciones\` (varias sedes\n` +
    ` * reales, caso Educación de Adultos). No editar a mano: volver a correr el script.\n` +
    ` */\n` +
    `export const institucionesGeo: InstitucionGeo[] = [\n${filas}\n];\n` +
    `${marcaFin}`;

  const actual = fs.readFileSync(GEO_PATH, "utf8");
  if (!actual.includes(marcaInicio) || !actual.includes(marcaFin)) {
    throw new Error(`Faltan los marcadores ${marcaInicio}/${marcaFin} en ${GEO_PATH}`);
  }
  const nuevo =
    actual.slice(0, actual.indexOf(marcaInicio)) +
    bloque +
    actual.slice(actual.indexOf(marcaFin) + marcaFin.length);
  fs.writeFileSync(GEO_PATH, nuevo, "utf8");
}

// ---------------------------------------------------------------------------
// 6) Reporte.
// ---------------------------------------------------------------------------
function escribirReporte({ instituciones, puntos, verificados, dudosos, sinPunto, ambiguas, puntosSinInst }) {
  const simples = verificados.filter((v) => !v.multisede);
  const multi = verificados.filter((v) => v.multisede);
  const totalUbicaciones = verificados.reduce((n, v) => n + v.ubicaciones.length, 0);

  const L = [];
  L.push("# Reporte de importación del KML → coordenadas de instituciones");
  L.push("");
  L.push(`_Generado por \`pnpm run importar:kml\` — ${new Date().toISOString().slice(0, 10)}. No editar a mano._`);
  L.push("");
  L.push("## Resumen");
  L.push("");
  L.push(`| Métrica | Valor |`);
  L.push(`| --- | --- |`);
  L.push(`| Instituciones en el dataset | ${instituciones.length} |`);
  L.push(`| Instituciones con CUE | ${instituciones.filter((i) => i.cue).length} |`);
  L.push(`| Placemarks con punto en el KML | ${puntos.length} |`);
  L.push(`| Instituciones con ubicación verificada | ${verificados.length} |`);
  L.push(`| — de una sola sede | ${simples.length} |`);
  L.push(`| — con varias sedes | ${multi.length} |`);
  L.push(`| Ubicaciones verificadas (total de puntos) | ${totalUbicaciones} |`);
  L.push(`| Puntos con coordenada dudosa (revisión manual) | ${dudosos.length} |`);
  L.push(`| Instituciones sin placemark | ${sinPunto.length} |`);
  L.push(`| Instituciones con placemark ambiguo | ${ambiguas.length} |`);
  L.push(`| Placemarks del KML sin institución | ${puntosSinInst.length} |`);
  L.push("");

  L.push("## Matches verificados de una sola sede (se publican con «Ver en el mapa»)");
  L.push("");
  L.push("| CUE | Servicio | Placemark | Lat | Lng |");
  L.push("| --- | --- | --- | --- | --- |");
  for (const v of simples.slice().sort((a, b) => a.inst.servicio.localeCompare(b.inst.servicio))) {
    const u = v.ubicaciones[0];
    L.push(`| ${v.inst.cue} | ${v.inst.servicio} | ${v.placemarks[0]} | ${u.lat} | ${u.lng} |`);
  }
  L.push("");

  L.push("## Servicios con varias sedes (se publican con todos sus puntos)");
  L.push("");
  if (multi.length) {
    for (const v of multi.slice().sort((a, b) => a.inst.servicio.localeCompare(b.inst.servicio))) {
      L.push(`### ${v.inst.servicio} (CUE ${v.inst.cue}) — ${v.ubicaciones.length} sedes`);
      L.push("");
      L.push("| Sede | Dirección (del KML) | Lat | Lng |");
      L.push("| --- | --- | --- | --- |");
      for (const u of v.ubicaciones) {
        L.push(`| ${u.sede || "_(sin denominación)_"} | ${u.direccion || "—"} | ${u.lat} | ${u.lng} |`);
      }
      L.push("");
      if (v.notas.length) {
        for (const n of v.notas) L.push(`- ⚠️ ${n}`);
        L.push("");
      }
    }
  } else {
    L.push("_(ninguno)_");
    L.push("");
  }

  L.push("## Pendientes de revisión manual");
  L.push("");
  if (dudosos.length) {
    L.push("### Coordenada con observaciones");
    L.push("");
    for (const d of dudosos) L.push(`- **${d.inst.servicio}** (CUE ${d.inst.cue}) — ${d.punto.nombre}: ${d.problemas.join("; ")}`);
    L.push("");
  }
  if (ambiguas.length) {
    L.push("### Placemark ambiguo (varios puntos con el mismo código, sin ser sedes declaradas)");
    L.push("");
    for (const a of ambiguas) L.push(`- **${a.inst.servicio}** (CUE ${a.inst.cue}) → ${a.candidatos.length} candidatos: ${a.candidatos.join(" | ")}`);
    L.push("");
  }
  if (sinPunto.length) {
    L.push("### Instituciones sin punto en el KML");
    L.push("");
    for (const s of sinPunto) L.push(`- **${s.inst.servicio}** (CUE ${s.inst.cue}) — ${s.motivo}`);
    L.push("");
  }

  L.push("## Placemarks del KML sin institución en el dataset");
  L.push("");
  for (const p of puntosSinInst) L.push(`- ${p.nombre} (${p.lat}, ${p.lng})`);
  L.push("");

  fs.writeFileSync(REPORTE_PATH, L.join("\n"), "utf8");
}

// ---------------------------------------------------------------------------
function main() {
  const instituciones = leerInstituciones();
  const placemarksCrudos = leerPlacemarks();
  const puntos = dedupPorClave(placemarksCrudos);

  const { matches, sinPunto, ambiguas, puntosSinInst } = emparejar(instituciones, puntos);
  const { verificados, dudosos } = verificar(matches);

  escribirGeo(verificados);
  escribirReporte({ instituciones, puntos, verificados, dudosos, sinPunto, ambiguas, puntosSinInst });

  const multi = verificados.filter((v) => v.multisede);
  const totalUbicaciones = verificados.reduce((n, v) => n + v.ubicaciones.length, 0);
  console.log("Instituciones en el dataset:            ", instituciones.length);
  console.log("Placemarks con punto (KML):             ", placemarksCrudos.length, `(dedup → ${puntos.length})`);
  console.log("Instituciones con ubicación verificada: ", verificados.length, `(${totalUbicaciones} puntos)`);
  console.log("  · de una sola sede:                   ", verificados.length - multi.length);
  console.log("  · con varias sedes:                   ", multi.length);
  for (const v of multi) console.log("     -", v.inst.servicio, "→", v.ubicaciones.length, "sedes:", v.ubicaciones.map((u) => u.sede || "?").join(" | "));
  console.log("Puntos con coordenada dudosa (revisión):", dudosos.length);
  for (const d of dudosos) console.log("   -", d.inst.servicio, "→", d.problemas.join("; "));
  console.log("Instituciones sin placemark:            ", sinPunto.length);
  for (const s of sinPunto) console.log("   -", s.inst.servicio, `(${s.motivo})`);
  console.log("Instituciones con placemark ambiguo:    ", ambiguas.length);
  for (const a of ambiguas) console.log("   -", a.inst.servicio, `→ ${a.candidatos.length} candidatos`);
  console.log("Placemarks KML sin institución:         ", puntosSinInst.length);
  console.log("Escrito:", path.relative(RAIZ, GEO_PATH), "y", path.relative(RAIZ, REPORTE_PATH));
}

main();
