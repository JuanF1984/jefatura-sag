/**
 * Script de migración (uso manual, no forma parte del build del sitio).
 *
 * Lee `material-original/093 Datos 2026 RESUMEN.xlsx` (fuente interna, con datos personales de
 * directivos) y genera `src/data/instituciones.ts` conteniendo ÚNICAMENTE los campos públicos
 * definidos por la política de lista blanca (ver AGENTS.md / docs/mapa-instituciones.md):
 * CUE, nombre, nivel, modalidad, localidad, dirección, correo institucional, teléfono institucional.
 * El CUE es un identificador público del establecimiento (no es dato personal) y es la clave con
 * la que `src/data/instituciones-geo.ts` enlaza la coordenada de cada institución.
 *
 * No se importa el Excel en tiempo de ejecución del sitio: este script se corre una sola vez
 * (o cuando cambien los datos de origen) con `pnpm run migrar:instituciones` y su salida (el
 * dataset ya filtrado) es lo único que queda versionado.
 *
 * Nunca imprimir ni escribir en disco (fuera de este resumen en consola) columnas excluidas:
 * directores/as, vicedirectores/as, secretarios/as, celulares, CUIL, DNI u observaciones internas.
 */
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const ORIGEN = path.join(__dirname, "..", "material-original", "093 Datos 2026 RESUMEN.xlsx");
const DESTINO = path.join(__dirname, "..", "src", "data", "instituciones.ts");
const HOJA = "ESTABLEC  DIRECTIVOS";

// Columnas (0-index) leídas de la hoja. Sólo se leen columnas públicas; las columnas de
// directivos (nombre, celular, mail personal, CUIL) NUNCA se leen ni se asignan a variables.
const COL = {
  SERVICIO: 0, // código/denominación del servicio educativo (ej. "EP N°1")
  CUE: 4, // Clave Única de Establecimiento, formato "0605344-00" (encabezado "CUE")
  TE_FIJO: 5, // teléfono institucional (bajo el encabezado "INSTITUCIONAL")
  MAIL: 6, // correo institucional (bajo el encabezado "INSTITUCIONAL")
  NOMBRE: 28, // nombre propio del establecimiento (ej. "José M. Estrada")
  DOMICILIO: 29,
  LOCALIDAD: 30,
};

// El CUE es un identificador público del establecimiento (no es dato personal). Se emite tal
// cual figura en la planilla, conservando el formato completo con guion y sufijo ("0605344-00").
// Es la clave con la que `src/data/instituciones-geo.ts` enlaza la coordenada de cada institución.
const CUE_RE = /^\d{7}-\d{2}$/;

function normalizarCue(raw) {
  const s = limpiarEspacios(raw);
  if (!s) return undefined;
  return CUE_RE.test(s) ? s : undefined;
}

const SECCIONES = {
  "NIVEL: INICIAL": { nivel: "Inicial" },
  "NIVEL: PRIMARIA": { nivel: "Primaria" },
  "NIVEL: SECUNDARIA": { nivel: "Secundaria" },
  "NIVEL: SECUNDARIA TECNICA": { nivel: "Secundaria", modalidad: "Técnica" },
  "NIVEL: SECUNDARIA AGRARIA": { nivel: "Secundaria", modalidad: "Agraria" },
  "NIVEL: MODALIDAD ESPECIAL": { modalidad: "Educación especial" },
  "NIVEL: ADULTOS PRIMARIA": { nivel: "Primaria", modalidad: "Adultos" },
  "NIVEL: MODALIDAD:ADULTOS SECUNDARIA": { nivel: "Secundaria", modalidad: "Adultos" },
  "NIVEL: MODALIDAD: EDUCACION FISICA": { modalidad: "Educación física" },
  "NIVEL: MODALIDAD: PSICOLOGIA": { modalidad: "Psicología" },
  "NIVEL: SUPERIOR": { nivel: "Superior" },
  "NIVEL: MODALIDAD:FORMACION PROFESIONAL": { modalidad: "Formación profesional" },
  "NIVEL: MODALIDAD: ARTISTICA - ESTETICA": { modalidad: "Artística - estética" },
};

// "la"/"los"/"las" quedan afuera a propósito: en topónimos de la zona ("La Florida", "La Amalia",
// "Los Manueles") el artículo forma parte del nombre propio y debe conservarse en mayúscula.
// "a" también queda afuera: en nombres de persona una letra suelta ("JORGE A MACIEL") es casi
// siempre una inicial, no la preposición "a".
const CONECTORES = new Set(["de", "del", "y", "e", "en"]);

function normKey(s) {
  return s.toUpperCase().replace(/\s+/g, " ").trim();
}

function limpiarEspacios(s) {
  return (s || "").toString().replace(/\s+/g, " ").trim();
}

function esLetraMayusValida(letras) {
  return letras.length > 1 && letras === letras.toUpperCase() && letras !== letras.toLowerCase();
}

/** Separa el núcleo alfabético de la puntuación pegada (paréntesis, comillas, punto final). */
function partirPalabra(w) {
  const m = w.match(/^([^A-Za-zÀ-ÿ]*)([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ.'-]*[A-Za-zÀ-ÿ]|[A-Za-zÀ-ÿ])([^A-Za-zÀ-ÿ]*)$/);
  if (!m) return null;
  return { pre: m[1], core: m[2], post: m[3] };
}

/**
 * Título de un nombre propio de institución: capitaliza cada palabra (salvo conectores, que
 * quedan en minúscula), sin agregar tildes ni caracteres que no estén en el original.
 */
function tituloNombrePropio(raw) {
  let s = limpiarEspacios(raw);
  s = s.replace(/^["'“]+|["'”]+$/g, "");
  s = s.replace(/\.(?=[A-Za-zÀ-ÿ])/g, ". "); // "M.ESQUIÚ" → "M. ESQUIÚ"
  s = limpiarEspacios(s);
  if (!s) return s;
  return s
    .split(" ")
    .map((w, i) => {
      if (/\d/.test(w)) return w;
      const partes = partirPalabra(w);
      if (!partes) return w;
      const { pre, core, post } = partes;
      const letras = core.replace(/[^A-Za-zÀ-ÿ]/g, "");
      if (i > 0 && CONECTORES.has(letras.toLowerCase()) && letras.toLowerCase() === core.toLowerCase()) {
        return pre + core.toLowerCase() + post;
      }
      const nuevoCore = esLetraMayusValida(letras)
        ? core.charAt(0).toUpperCase() + core.slice(1).toLowerCase()
        : core.charAt(0).toUpperCase() + core.slice(1);
      return pre + nuevoCore + post;
    })
    .join(" ");
}

/**
 * Normalización conservadora para localidades: sólo capitaliza palabras que en el original están
 * TODAS en mayúscula (evidente inconsistencia de formato); las que ya vienen en minúscula o en
 * mayúscula/minúscula mixta se dejan intactas (pueden ser aclaraciones como "camino Azcuénaga").
 */
function tituloParcialLocalidad(raw) {
  const s = limpiarEspacios(raw);
  if (!s) return s;
  return s
    .split(" ")
    .map((w, i) => {
      if (/\d/.test(w)) return w;
      const partes = partirPalabra(w);
      if (!partes) return w;
      const { pre, core, post } = partes;
      const letras = core.replace(/[^A-Za-zÀ-ÿ]/g, "");
      if (!esLetraMayusValida(letras)) return w; // no tocar minúscula / mixta ya existente
      if (i > 0 && CONECTORES.has(letras.toLowerCase())) return pre + core.toLowerCase() + post;
      return pre + core.charAt(0).toUpperCase() + core.slice(1).toLowerCase() + post;
    })
    .join(" ");
}

/** Inserta espacios que el Excel omitió entre letras y números (p. ej. "JIN°911" → "JI N° 911"). */
function normalizarCodigo(raw) {
  let s = limpiarEspacios(raw);
  s = s.replace(/([A-Za-zÀ-ÿ])(N[ºo°])/g, "$1 $2");
  s = s.replace(/(N[ºo°])(\d)/g, "$1 $2");
  s = s.replace(/([A-Za-zÀ-ÿ])(\d)/g, "$1 $2");
  return limpiarEspacios(s);
}

const TOWN_CANON = "San Andrés de Giles";
const TOWN_VARIANTS = new Set(["S A DE GILES", "SA DE GILES", "SAN A DE GILES", "SAN ANDRES DE GILES"]);
const ZONE_TAGS = new Set(["URBANA", "URBANO", "RURAL", "RURALES"]);

function fold(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/\./g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Alias puntuales para unificar duplicados que difieren SÓLO en mayúscula/minúscula de una
// palabra ya presente en el propio Excel (no se agrega texto nuevo). Ver informe de importación.
const ALIAS_LOCALIDAD = [
  [/^La florida$/, "La Florida"],
  [/\(campo Tejo\)/, "(Campo Tejo)"],
];

/** Unifica las ~10 variantes de escritura de "San Andrés de Giles" a una sola forma canónica
 *  (el nombre del distrito ya está establecido en src/data/site.ts, no se busca información externa).
 *  Para localidades compuestas ("Cucullu - SA DE GILES") conserva sólo el paraje. */
function normalizarLocalidad(raw) {
  const s = limpiarEspacios(raw);
  if (!s) return undefined;
  const partes = s
    .split(/\s*-\s*/)
    .map((p) => p.trim())
    .filter(Boolean);
  const restantes = partes.filter((p) => {
    const key = fold(p);
    return !TOWN_VARIANTS.has(key) && !ZONE_TAGS.has(key);
  });
  if (restantes.length === 0) return TOWN_CANON;
  let resultado = restantes.map((p) => tituloParcialLocalidad(p)).join(" - ");
  for (const [patron, reemplazo] of ALIAS_LOCALIDAD) resultado = resultado.replace(patron, reemplazo);
  return resultado;
}

function esNombreInvalido(s) {
  if (!s) return true;
  const low = s.toLowerCase();
  if (/no tiene|no posee|sin nombre/.test(low)) return true;
  if (/duda/.test(low)) return true; // nota interna ("La res y fecha de creación están en duda")
  return false;
}

function esTelefonoInvalido(s) {
  if (!s) return true;
  const low = s.toLowerCase();
  return /no tiene|no posee|^-+$/.test(low);
}

/**
 * Normaliza uno o varios teléfonos institucionales en la misma celda.
 * Algunas celdas tienen dos números pegados (p. ej. "444066 2325594133" o
 * "442356          02325 442192"): un espacio simple es el separador normal dentro de UN
 * número (característica + abonado), así que sólo se corta en dos cuando el resultado son dos
 * grupos que cada uno ya parece un número completo por sí solo (evita partir "2323 499133",
 * que es un único número). Dos o más espacios seguidos en la celda original son en sí mismos
 * una señal fuerte de "esto son dos números distintos" (así se tipearon en el Excel).
 */
function normalizarTelefono(raw) {
  const original = (raw || "").toString();
  if (esTelefonoInvalido(limpiarEspacios(original))) return undefined;

  const bloques = original
    .split(/\s{2,}/)
    .map((b) => limpiarEspacios(b))
    .filter(Boolean);

  const partes = [];
  for (const bloque of bloques) {
    const dosNumeros = bloque.match(/^(\d{5,6})\s+(0?\d{9,11})$/);
    if (dosNumeros) {
      partes.push(dosNumeros[1], dosNumeros[2]);
    } else {
      partes.push(bloque);
    }
  }

  const numeros = partes.filter((p) => /\d{5,}/.test(p));
  if (numeros.length === 0) return undefined;
  return numeros.join(" / ");
}

function normalizarCorreo(raw) {
  const s = limpiarEspacios(raw).toLowerCase();
  if (!s) return undefined;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return undefined;
  return s;
}

function clavePrefijo(codigo) {
  const m = codigo.match(/^[A-Za-zÀ-ÿ.]+/);
  return m ? m[0].toUpperCase().replace(/[.\s]/g, "") : codigo.toUpperCase();
}

function claveNumero(codigo) {
  const m = codigo.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

function main() {
  const wb = XLSX.readFile(ORIGEN);
  const ws = wb.Sheets[HOJA];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

  let seccionActual = null;
  const instituciones = [];
  const stats = {
    filasServicio: 0,
    seccionesDesconocidas: [],
    sinDireccion: 0,
    sinLocalidad: 0,
    sinTelefono: 0,
    sinCorreo: 0,
    sinNombrePropio: 0,
    sinCue: 0,
    telefonosConDosNumeros: 0,
    correosDescartadosPorFormato: 0,
  };

  for (let i = 4; i < rows.length; i++) {
    const servicioRaw = (rows[i][COL.SERVICIO] || "").toString().trim();
    if (!servicioRaw) continue;
    if (servicioRaw.toUpperCase().startsWith("NIVEL")) {
      const key = normKey(servicioRaw);
      seccionActual = SECCIONES[key];
      if (!seccionActual) stats.seccionesDesconocidas.push(servicioRaw);
      continue;
    }

    stats.filasServicio++;
    const r = rows[i];
    const codigo = normalizarCodigo(servicioRaw);

    const cue = normalizarCue(r[COL.CUE]);
    if (!cue) stats.sinCue++;
    const nombrePropioRaw = (r[COL.NOMBRE] || "").toString().trim();
    const nombrePropio = esNombreInvalido(nombrePropioRaw) ? null : tituloNombrePropio(nombrePropioRaw);
    if (!nombrePropio) stats.sinNombrePropio++;

    const direccion = limpiarEspacios(r[COL.DOMICILIO]) || undefined;
    if (!direccion) stats.sinDireccion++;

    const localidad = normalizarLocalidad(r[COL.LOCALIDAD]);
    if (!localidad) stats.sinLocalidad++;

    const telefonoRaw = (r[COL.TE_FIJO] || "").toString();
    const telefono = normalizarTelefono(telefonoRaw);
    if (!telefono) stats.sinTelefono++;
    if (telefono && telefono.includes(" / ")) stats.telefonosConDosNumeros++;

    const correoRaw = (r[COL.MAIL] || "").toString();
    const correo = normalizarCorreo(correoRaw);
    if (!correo) {
      stats.sinCorreo++;
      if (limpiarEspacios(correoRaw)) stats.correosDescartadosPorFormato++;
    }

    instituciones.push({
      codigo,
      cue,
      nombre: nombrePropio ? `${codigo} — ${nombrePropio}` : codigo,
      nivel: seccionActual ? seccionActual.nivel : undefined,
      modalidad: seccionActual ? seccionActual.modalidad : undefined,
      localidad,
      direccion,
      telefono,
      correo,
    });
  }

  // Orden: por nivel/modalidad (siguiendo el orden pedagógico habitual); dentro de cada grupo,
  // por familia de código (JI, EP, EES, ...) y luego por número de establecimiento.
  const ORDEN_NIVEL = ["Inicial", "Primaria", "Secundaria", "Superior"];
  const ORDEN_MODALIDAD = [
    undefined,
    "Técnica",
    "Agraria",
    "Adultos",
    "Educación especial",
    "Educación física",
    "Psicología",
    "Formación profesional",
    "Artística - estética",
  ];
  instituciones.sort((a, b) => {
    const an = ORDEN_NIVEL.indexOf(a.nivel);
    const bn = ORDEN_NIVEL.indexOf(b.nivel);
    if (an !== bn) return (an === -1 ? 99 : an) - (bn === -1 ? 99 : bn);
    const am = ORDEN_MODALIDAD.indexOf(a.modalidad);
    const bm = ORDEN_MODALIDAD.indexOf(b.modalidad);
    if (am !== bm) return (am === -1 ? 99 : am) - (bm === -1 ? 99 : bm);
    const ap = clavePrefijo(a.codigo);
    const bp = clavePrefijo(b.codigo);
    if (ap !== bp) return ap.localeCompare(bp, "es");
    return claveNumero(a.codigo) - claveNumero(b.codigo);
  });

  const dup = {};
  for (const inst of instituciones) dup[inst.nombre] = (dup[inst.nombre] || 0) + 1;
  const duplicados = Object.entries(dup).filter(([, c]) => c > 1);

  const dupCue = {};
  for (const inst of instituciones) if (inst.cue) dupCue[inst.cue] = (dupCue[inst.cue] || 0) + 1;
  const cuesDuplicados = Object.entries(dupCue).filter(([, c]) => c > 1);

  const body = instituciones
    .map((inst) => {
      const campos = [`    nombre: ${JSON.stringify(inst.nombre)},`];
      if (inst.cue) campos.push(`    cue: ${JSON.stringify(inst.cue)},`);
      if (inst.nivel) campos.push(`    nivel: ${JSON.stringify(inst.nivel)},`);
      if (inst.modalidad) campos.push(`    modalidad: ${JSON.stringify(inst.modalidad)},`);
      if (inst.localidad) campos.push(`    localidad: ${JSON.stringify(inst.localidad)},`);
      if (inst.direccion) campos.push(`    direccion: ${JSON.stringify(inst.direccion)},`);
      if (inst.telefono) campos.push(`    telefono: ${JSON.stringify(inst.telefono)},`);
      if (inst.correo) campos.push(`    correo: ${JSON.stringify(inst.correo)},`);
      return `  {\n${campos.join("\n")}\n  },`;
    })
    .join("\n");

  const existente = fs.readFileSync(DESTINO, "utf8");
  const marcaInicio = "// ---INSTITUCIONES-GENERADAS-INICIO---";
  const marcaFin = "// ---INSTITUCIONES-GENERADAS-FIN---";
  const bloque = `${marcaInicio}\n/**\n * Generado por \`pnpm run migrar:instituciones\` a partir de\n * \`material-original/093 Datos 2026 RESUMEN.xlsx\` (hoja "${HOJA}").\n * Contiene únicamente los campos públicos autorizados (ver docs/mapa-instituciones.md).\n * No editar a mano: volver a correr el script si cambian los datos de origen.\n */\nexport const instituciones: Institucion[] = [\n${body}\n];\n${marcaFin}`;

  let nuevo;
  if (existente.includes(marcaInicio) && existente.includes(marcaFin)) {
    const antes = existente.slice(0, existente.indexOf(marcaInicio));
    const despues = existente.slice(existente.indexOf(marcaFin) + marcaFin.length);
    nuevo = antes + bloque + despues;
  } else {
    nuevo = existente.trimEnd() + "\n\n" + bloque + "\n";
  }
  fs.writeFileSync(DESTINO, nuevo, "utf8");

  console.log("Establecimientos encontrados (filas SERVICIO):", stats.filasServicio);
  console.log("Establecimientos publicados:", instituciones.length);
  console.log("Secciones de nivel/modalidad no reconocidas:", stats.seccionesDesconocidas);
  console.log("Sin nombre propio (sólo código):", stats.sinNombrePropio);
  console.log("Sin CUE válido (formato 0000000-00):", stats.sinCue);
  console.log("CUE duplicados entre establecimientos:", cuesDuplicados);
  console.log("Sin dirección:", stats.sinDireccion);
  console.log("Sin localidad:", stats.sinLocalidad);
  console.log("Sin teléfono institucional publicable:", stats.sinTelefono);
  console.log("Sin correo institucional publicable:", stats.sinCorreo);
  console.log("Correos descartados por formato dudoso (no vacíos pero inválidos):", stats.correosDescartadosPorFormato);
  console.log("Celdas de teléfono con dos números detectados:", stats.telefonosConDosNumeros);
  console.log("Nombres de tarjeta duplicados:", duplicados);
  console.log("Escrito en:", DESTINO);
}

main();
