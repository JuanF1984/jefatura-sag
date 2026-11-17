/**
 * Script de migración de la Oferta Educativa (uso manual, no forma parte del build del sitio).
 *
 *   pnpm run migrar:oferta -- <ruta.xlsx>              → sólo revisa la planilla e informa
 *   pnpm run migrar:oferta -- <ruta.xlsx> --escribir   → además reemplaza el bloque generado
 *                                                        de src/data/oferta-educativa.ts
 *
 * Es deliberadamente conservador: nunca publica una fila dudosa. Por defecto sólo informa; con
 * `--escribir` se niega a escribir si encuentra problemas de estructura (encabezados faltantes,
 * subencabezados intermedios, escuelas desconocidas). Las filas dudosas (anotaciones entre
 * paréntesis, duplicadas, sin perfil) se informan y quedan afuera: hay que corregirlas en la
 * planilla, no en el sitio.
 *
 * Planilla esperada (una fila por oferta, una sola fila de encabezados):
 *   Escuela | Orientación (o Trayecto) | Familia (opcional) | Perfil del ingresante | Perfil del egresado
 * Columnas adicionales (p. ej. "Nombre") se ignoran. La institución se identifica por su código
 * ("EES 2", "CFP 401") y se relaciona con src/data/instituciones.ts a través de la tabla ESCUELAS
 * (código → CUE), nunca por nombre.
 *
 * La planilla 2027 (material-original/oferta-educativa-2027/, V1 y V2) NO cumple este formato: el CFP 401
 * tiene un subencabezado intermedio y sus perfiles del egresado están en la columna del ingresante.
 * Por eso el dataset 2027 se curó a mano (ver docs/oferta-educativa-2027.md).
 */
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const DESTINO = path.join(__dirname, "..", "src", "data", "oferta-educativa.ts");
const INSTITUCIONES = path.join(__dirname, "..", "src", "data", "instituciones.ts");
const MARCA_INICIO = "// ---OFERTA-GENERADA-INICIO---";
const MARCA_FIN = "// ---OFERTA-GENERADA-FIN---";

/**
 * Código de escuela normalizado (ver `claveEscuela`) → institución. Es una tabla explícita a
 * propósito: una escuela que no figure acá se informa como desconocida y no se publica.
 */
const ESCUELAS = {
  EES1: { cue: "0609036-00", grupo: "secundaria" },
  EES2: { cue: "0609034-00", grupo: "secundaria" },
  EES3: { cue: "0620100-00", grupo: "secundaria" },
  EES4: { cue: "0622086-00", grupo: "secundaria" },
  EES5: { cue: "0620454-00", grupo: "secundaria" },
  EES6: { cue: "0622087-00", grupo: "secundaria" },
  EES7: { cue: "0620443-00", grupo: "secundaria" },
  EES8: { cue: "0619818-00", grupo: "secundaria" },
  EES9: { cue: "0619819-00", grupo: "secundaria" },
  EES10: { cue: "0624530-00", grupo: "secundaria" },
  EEST1: { cue: "0605343-00", grupo: "tecnica-agraria" },
  CEPT2: { cue: "0609037-00", grupo: "tecnica-agraria" },
  CENS451: { cue: "0623755-00", grupo: "jovenes-adultos" },
  PLANFINES: { nombre: "Plan FinEs", grupo: "jovenes-adultos" },
  EEPA702: { cue: "0604332-00", grupo: "jovenes-adultos" },
  ISFD142: { cue: "0604335-00", grupo: "superior" },
  CFP401: { cue: "0617001-00", grupo: "formacion-profesional" },
};

/** Variantes de escritura observadas en planillas anteriores (planilla 2027: "EEST T N 1"). */
const ALIAS_ESCUELA = { EESTT1: "EEST1" };

const ORDEN_GRUPOS = ["secundaria", "tecnica-agraria", "jovenes-adultos", "superior", "formacion-profesional"];

function fold(s) {
  return (s || "")
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** "EES T N 1" → "EEST1"; "CEPT N° 2" → "CEPT2"; "Plan FinEs" → "PLANFINES". */
function claveEscuela(raw) {
  const clave = fold(raw)
    .replace(/[^A-Z0-9]/g, "")
    .replace(/N(?=\d)/g, "");
  return ALIAS_ESCUELA[clave] || clave;
}

/**
 * Texto de un perfil: unifica saltos de línea, une las líneas cortadas a mano dentro de un mismo
 * párrafo y separa párrafos con una línea en blanco (formato que espera la página). Quita la
 * línea "Perfil Profesional: ..." inicial, que repite la denominación.
 */
function limpiarPerfil(raw) {
  const texto = (raw || "").toString().replace(/\r\n?/g, "\n").trim();
  if (!texto) return undefined;
  const parrafos = texto
    .split(/\n\s*\n/)
    .map((p) =>
      p
        .split("\n")
        .map((l) => l.trim())
        .join(" ")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean);
  if (parrafos.length > 1 && /^perfil profesional:/i.test(parrafos[0])) parrafos.shift();
  return parrafos.join("\n\n") || undefined;
}

function limpiar(raw) {
  return (raw || "").toString().replace(/\s+/g, " ").trim();
}

/** Busca la fila de encabezados y la posición de cada columna conocida. */
function leerEncabezados(rows) {
  for (let i = 0; i < Math.min(rows.length, 10); i++) {
    const celdas = rows[i].map(fold);
    const col = (pred) => celdas.findIndex(pred);
    const escuela = col((c) => c === "ESCUELA" || c === "CODIGO");
    const oferta = col((c) => c.startsWith("ORIENTACION") || c.startsWith("TRAYECTO") || c.startsWith("CARRERA"));
    const ingresante = col((c) => c.includes("INGRESANTE"));
    const egresado = col((c) => c.includes("EGRESADO"));
    const familia = col((c) => c.startsWith("FAMILIA"));
    if (escuela !== -1 && oferta !== -1) {
      return { fila: i, escuela, oferta, ingresante, egresado, familia };
    }
  }
  return null;
}

function main() {
  const args = process.argv.slice(2);
  const escribir = args.includes("--escribir");
  const origen = args.find((a) => !a.startsWith("--"));
  if (!origen) {
    console.error("Uso: pnpm run migrar:oferta -- <ruta.xlsx> [--escribir]");
    process.exit(1);
  }

  const wb = XLSX.readFile(origen);
  const hoja = wb.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[hoja], { header: 1, defval: "" });

  const bloqueantes = [];
  const descartadas = [];
  const avisos = [];

  if (wb.SheetNames.length > 1) avisos.push(`La planilla tiene ${wb.SheetNames.length} hojas; sólo se lee "${hoja}".`);

  const enc = leerEncabezados(rows);
  if (!enc) {
    console.error('No se encontró la fila de encabezados ("Escuela" y "Orientación"/"Trayecto").');
    process.exit(1);
  }
  if (enc.egresado === -1) bloqueantes.push('Falta la columna "Perfil del egresado".');
  if (enc.ingresante === -1) avisos.push('No hay columna "Perfil del ingresante" (es opcional).');

  // CUE presentes en el dataset de instituciones: la tabla ESCUELAS no puede apuntar a otro.
  const cuesInstituciones = new Set(
    [...fs.readFileSync(INSTITUCIONES, "utf8").matchAll(/cue: "(\d{7}-\d{2})"/g)].map((m) => m[1]),
  );
  for (const [clave, esc] of Object.entries(ESCUELAS)) {
    if (esc.cue && !cuesInstituciones.has(esc.cue)) {
      bloqueantes.push(`La tabla ESCUELAS asigna a ${clave} el CUE ${esc.cue}, que no está en instituciones.ts.`);
    }
  }

  const porClave = new Map();
  const vistas = new Set();

  for (let i = enc.fila + 1; i < rows.length; i++) {
    const r = rows[i];
    const fila = i + 1;
    if (!r.some((c) => limpiar(c))) continue;

    const codigo = limpiar(r[enc.escuela]);
    const denominacion = limpiar(r[enc.oferta]);
    const ingresante = enc.ingresante !== -1 ? limpiarPerfil(r[enc.ingresante]) : undefined;
    const egresado = enc.egresado !== -1 ? limpiarPerfil(r[enc.egresado]) : undefined;
    const familia = enc.familia !== -1 ? limpiar(r[enc.familia]) || undefined : undefined;

    // Subencabezado intermedio (planilla 2027, fila 30): señal de que las columnas cambian de
    // significado a partir de ahí. No se puede leer de forma segura.
    const celdas = r.map(fold);
    if (celdas.some((c) => /^(TRAYECTO|ORIENTACION|PERFIL DEL (INGRESANTE|EGRESADO))$/.test(c))) {
      bloqueantes.push(`Fila ${fila}: subencabezado intermedio (${codigo || "sin código"}); la estructura cambia dentro de la hoja.`);
      continue;
    }
    if (!codigo) {
      descartadas.push(`Fila ${fila}: sin código de escuela (contenido suelto: "${limpiar(r.join(" ")).slice(0, 60)}").`);
      continue;
    }
    const clave = claveEscuela(codigo);
    const escuela = ESCUELAS[clave];
    if (!escuela) {
      bloqueantes.push(`Fila ${fila}: escuela desconocida "${codigo}" (agregarla a la tabla ESCUELAS).`);
      continue;
    }
    if (!denominacion) {
      descartadas.push(`Fila ${fila}: ${codigo} sin orientación/trayecto (fila vacía).`);
      continue;
    }
    if (/[()]/.test(denominacion)) {
      descartadas.push(`Fila ${fila}: ${codigo} "${denominacion}" tiene una anotación entre paréntesis; revisar.`);
      continue;
    }
    const id = `${clave}|${fold(denominacion)}`;
    if (vistas.has(id)) {
      descartadas.push(`Fila ${fila}: ${codigo} "${denominacion}" está duplicada.`);
      continue;
    }
    vistas.add(id);
    if (!egresado) {
      descartadas.push(`Fila ${fila}: ${codigo} "${denominacion}" sin perfil del egresado.`);
      continue;
    }

    if (!porClave.has(clave)) porClave.set(clave, { ...escuela, ofertas: [] });
    porClave.get(clave).ofertas.push({ denominacion, perfilIngresante: ingresante, perfilEgresado: egresado, familia });
  }

  const sinOferta = Object.keys(ESCUELAS).filter((c) => !porClave.has(c));
  const publicables = [...porClave.values()].sort(
    (a, b) => ORDEN_GRUPOS.indexOf(a.grupo) - ORDEN_GRUPOS.indexOf(b.grupo),
  );
  const totalOfertas = publicables.reduce((n, inst) => n + inst.ofertas.length, 0);

  console.log(`Planilla: ${origen} (hoja "${hoja}")`);
  console.log(`Instituciones con oferta publicable: ${publicables.length}`);
  console.log(`Ofertas publicables: ${totalOfertas}`);
  console.log(`Instituciones de la tabla sin oferta en la planilla: ${sinOferta.join(", ") || "ninguna"}`);
  for (const [titulo, lista] of [
    ["Problemas de estructura (impiden escribir)", bloqueantes],
    ["Filas descartadas", descartadas],
    ["Avisos", avisos],
  ]) {
    console.log(`\n${titulo}: ${lista.length}`);
    for (const linea of lista) console.log(`  - ${linea}`);
  }

  if (!escribir) {
    console.log("\nSólo revisión: no se modificó ningún archivo (usar --escribir para generar).");
    return;
  }
  if (bloqueantes.length > 0) {
    console.error("\nNo se escribió src/data/oferta-educativa.ts: corregir primero los problemas de estructura.");
    process.exit(1);
  }

  const str = (s) => JSON.stringify(s);
  const body = publicables
    .map((inst) => {
      const ofertas = inst.ofertas
        .map((o) => {
          const campos = [`        denominacion: ${str(o.denominacion)},`];
          if (o.familia) campos.push(`        familia: ${str(o.familia)},`);
          if (o.perfilIngresante) campos.push(`        perfilIngresante:\n          ${str(o.perfilIngresante)},`);
          if (o.perfilEgresado) campos.push(`        perfilEgresado:\n          ${str(o.perfilEgresado)},`);
          return `      {\n${campos.join("\n")}\n      },`;
        })
        .join("\n");
      const id = inst.cue ? `    cue: ${str(inst.cue)},` : `    nombre: ${str(inst.nombre)},`;
      return `  {\n${id}\n    grupo: ${str(inst.grupo)},\n    ofertas: [\n${ofertas}\n    ],\n  },`;
    })
    .join("\n");

  const bloque = `${MARCA_INICIO}\n/**\n * Generado por \`pnpm run migrar:oferta\` a partir de\n * \`${path.relative(path.join(__dirname, ".."), origen).replace(/\\/g, "/")}\` (hoja "${hoja}").\n * No editar a mano: corregir la planilla y volver a correr el script.\n */\nexport const ofertaEducativa: OfertaInstitucion[] = [\n${body}\n];\n${MARCA_FIN}`;

  const existente = fs.readFileSync(DESTINO, "utf8");
  if (!existente.includes(MARCA_INICIO) || !existente.includes(MARCA_FIN)) {
    console.error(`No se encontraron las marcas ${MARCA_INICIO} / ${MARCA_FIN} en ${DESTINO}.`);
    process.exit(1);
  }
  const antes = existente.slice(0, existente.indexOf(MARCA_INICIO));
  const despues = existente.slice(existente.indexOf(MARCA_FIN) + MARCA_FIN.length);
  fs.writeFileSync(DESTINO, antes + bloque + despues, "utf8");
  console.log(`\nEscrito ${DESTINO}. Recordar actualizar \`cicloOferta\` si cambió el ciclo lectivo.`);
}

main();
