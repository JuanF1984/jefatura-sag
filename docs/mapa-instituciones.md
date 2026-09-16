# Mapa de instituciones — procedencia de coordenadas y flujo de datos

Cómo funciona el botón **«Ver en el mapa»** de `/instituciones`
(`src/app/instituciones/page.tsx` → `src/components/ui/InstitutionsExplorer.tsx` →
`src/components/ui/InstitucionesMapa.tsx`) y de dónde salen los datos.

## Arquitectura de datos

Hay dos datasets separados que se unen **por CUE**, nunca por nombre:

| Archivo | Contenido | Origen |
|---|---|---|
| `src/data/instituciones.ts` | Datos institucionales públicos: nombre, nivel, modalidad, dirección, localidad, teléfono y correo institucional, **CUE**. | `pnpm run migrar:instituciones` a partir de `material-original/093 Datos 2026 RESUMEN.xlsx`. |
| `src/data/instituciones-geo.ts` | Sólo información geográfica/técnica: `cue` + `ubicaciones[]`, donde cada ubicación es `{ lat, lng, fuente, verificado, sede?, direccion? }`. | `pnpm run importar:kml` a partir del KML del Google My Maps del distrito. |

### Una o varias ubicaciones por institución

Cada institución tiene **1..N** ubicaciones en `ubicaciones[]`:

- la mayoría tiene **una sola** — `ubicaciones` con un único elemento sin `sede` ni `direccion`;
- los servicios de **Educación de Adultos** (EEPA / CEA) funcionan en **varias sedes reales** y
  llevan **un punto por sede**, cada una con su `sede` (nombre tal como viene del KML) y, si la
  descripción del placemark lo aporta, su `direccion` puntual.

No hay dos modelos distintos: el caso de una sola sede es simplemente el array con un elemento. No
se fuerza una coordenada «principal» cuando el servicio funciona en varios lugares.

`instituciones-geo.ts` **no** repite nombre, dirección general, localidad general, teléfono ni
correo: esos datos salen siempre de `instituciones.ts`. El modal toma el CUE de la institución
seleccionada, resuelve sus puntos con `ubicacionesVerificadasDeInstitucion()` y arma el título, el
texto y cada enlace «Cómo llegar» (`https://www.google.com/maps/dir/?api=1&destination=LAT,LNG`,
**con las coordenadas de esa sede**) a partir de la institución, no de copias guardadas en el
dataset geo.

### Por qué CUE como clave

El CUE (Clave Única de Establecimiento, formato `0605344-00`) es el identificador estable y único de
cada establecimiento. Los nombres varían entre fuentes («Estrada» / «José M. Estrada» / «José Manuel
Estrada»), los códigos cortos se repiten entre familias y modalidades, y el My Maps no trae ni CUE ni
código provincial. El CUE es lo único que permite cruzar los dos datasets sin ambigüedad y verificar
automáticamente que ninguna card reciba la coordenada de otra institución.

## Procedencia de las coordenadas

Fuente única: el **Google My Maps institucional del distrito**,
`mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho`
(«MAPA INTERACTIVO DE INSTITUCIONES EDUCATIVAS - SA DE GILES»). No se geocodificaron direcciones:
se reutilizan los puntos ya cargados y revisados en ese mapa.

### Cómo obtener/actualizar el KML

El My Maps expone un endpoint KML público y reproducible:

```
https://www.google.com/maps/d/kml?mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho&forcekml=1
```

`&forcekml=1` fuerza KML plano (sin KMZ ni NetworkLinks) con las coordenadas legibles. El archivo
descargado se versiona en `material-original/093 My Maps - instituciones.kml`. Para actualizarlo:

```bash
curl -sSL "https://www.google.com/maps/d/kml?mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho&forcekml=1" \
  -o "material-original/093 My Maps - instituciones.kml"
```

Alternativa manual: en el My Maps, menú ⋮ → «Descargar KML» → «Todo el mapa» / «Mantener KML plano».

> KML almacena cada punto como `<coordinates>longitud,latitud,altura</coordinates>` — **longitud
> primero**. El importador ya invierte el orden al leerlo.

## Flujo completo

```bash
pnpm run migrar:instituciones   # xlsx  -> src/data/instituciones.ts   (incluye CUE)
pnpm run importar:kml           # KML   -> src/data/instituciones-geo.ts + docs/mapa-instituciones-reporte.md
pnpm run validar:geo            # chequeos de integridad (apto para CI)
pnpm lint && pnpm build
```

### `scripts/generar-instituciones.js`

Lee la hoja `ESTABLEC  DIRECTIVOS`. Cambio para esta funcionalidad: además de los campos ya
existentes emite `cue` (columna `CUE`, índice 4), validando el formato `0000000-00` y conservándolo
tal cual figura en la planilla. Reporta por consola «Sin CUE válido» y «CUE duplicados». El CUE se
inserta en el bloque generado entre `// ---INSTITUCIONES-GENERADAS-INICIO/FIN---`; **no** se
hardcodea a mano en `instituciones.ts`.

### `scripts/importar-kml.js`

1. Parsea los `<Placemark>` con `<Point>` del KML (descarta rutas/`LineString`). Extrae nombre,
   lat, lng, `<description>` y `ExtendedData` (`gx_media_links`, etc.).
2. Colapsa marcadores del mismo servicio a menos de 80 m entre sí (el My Maps repite el pin en las
   rutas de «Cómo llegar»). Si alguno es una **sede declarada** (`… Sede …`), sólo colapsa cuando
   además coincide el nombre completo, para no fusionar dos sedes reales cercanas.
3. Empareja con las instituciones de la planilla por **código normalizado**
   (`claveCodigo()`: familia + número, p. ej. `EP N°01` / `E.E.S. N°7` / `EES Técnica N°01` →
   `EP 1` / `EES 7` / `EEST 1`; `Anexo 3061` se trata como servicio propio). El nombre sólo se usa
   como apoyo visual en el reporte.
   - **0 placemarks** → «sin punto».
   - **1 placemark** que no es sede → match simple.
   - **Varios placemarks `… Sede …` del mismo código** → **no es ambigüedad**: son sedes reales
     del mismo CUE. Se agrupan todos en `ubicaciones[]`, tomando el nombre de sede de lo que el
     placemark trae después de «Sede …» y la dirección puntual de la primera línea de la
     descripción. Nunca se inventan nombres de sede.
   - **Varios placemarks del mismo código que NO son sedes declaradas** → «ambiguo», no se publica.
4. Verifica cada punto (ver abajo). El chequeo «localidad urbana vs. casco» **no se aplica** a los
   servicios multi-sede: por definición operan en parajes distintos.
5. Escribe **sólo los puntos verificados** en el bloque
   `// ---GEO-GENERADA-INICIO/FIN---` de `instituciones-geo.ts` (una entrada por CUE, con su
   `ubicaciones[]`) y regenera `docs/mapa-instituciones-reporte.md` — que incluye una sección
   **«Servicios con varias sedes»** con la tabla de sedes de cada CUE y las inconsistencias
   detectadas (p. ej. un CUE distinto mencionado en la descripción de una sede).

### `scripts/validar-geo.js`

Modelo: cada CUE tiene `ubicaciones: [1..N]`. Falla (exit 1) si: algún `cue` de geo no existe en
`instituciones.ts`; un CUE aparece como registro separado más de una vez; un CUE se queda sin
ninguna ubicación; alguna ubicación tiene lat/lng no numéricos, fuera de la caja del partido,
con lat/lng invertidas, en `0,0`, o sin `verificado: true`; o **dos CUE distintos en la misma
coordenada exacta**. Que un CUE tenga varias sedes **no** es un error; dos sedes del **mismo** CUE
pueden estar cerca (no exactamente en el mismo punto).

## Verificación de coordenadas

Ninguna coordenada se da por buena sólo por venir del My Maps. El importador exige:

- dentro de la caja del partido `lat ∈ [-34.75, -34.20]`, `lng ∈ [-59.90, -59.10]`;
- `lat ∈ [-35, -34]` y `lng ∈ [-60, -59]` (detección de lat/lng invertidas);
- distinto de `0,0`;
- ninguna coordenada exacta compartida por dos CUE distintos (los edificios compartidos dan puntos
  *cercanos*, no idénticos; dos sedes del mismo CUE también son puntos distintos);
- si la localidad es sólo el casco urbano, el punto cae a menos de 5 km de la plaza central
  — **este último chequeo no se aplica a servicios multi-sede**, que operan en parajes distintos.

Cada punto se verifica por separado. Un punto que no pasa un chequeo queda como **dudoso**, no se
escribe en `instituciones-geo.ts` y no se publica; una institución multi-sede se publica con las
sedes que sí verifican. No se marca nada como `verificado` para llegar al 100 %.

## Estado actual

Ver `docs/mapa-instituciones-reporte.md` (generado). Resumen:

- 75 instituciones en el dataset, 75 con CUE.
- 107 placemarks con punto en el KML (tras dedup).
- **74 instituciones con ubicación verificada** (se publican con «Ver en el mapa»): 71 con una sola
  sede y **3 con varias sedes** (87 puntos en total).
- Servicios de Educación de Adultos multi-sede, ahora resueltos como varias `ubicaciones` del mismo
  CUE (nombre de sede tomado del KML, sin inventar):
  - **EEPA N°702** (CUE `0604332-00`): **8 sedes** — Bo. Familia Propietaria, Bo. San Bernardo,
    CEPT, CIC, Cucullu, EP N°12, EPN°02, Hogar Geriátrico Ntra. Señora de Luján.
  - **CEA N°703** (CUE `0604332-01`): **3 sedes** — Bo. Bicentenario, Centro de Jubilados San
    Andrés, EP N°01.
  - **CEA N°704** (CUE `0604332-02`): **5 sedes** — Azcuénaga, CEPT, La Florida, Solis, Villa Espil.
    El placemark «CEA Nº704 Sede Villa Espil» trae en su descripción el CUE `0604332-01`
    (contradice el nombre del placemark); se asignó a CEA N°704 por el nombre del placemark y la
    inconsistencia queda registrada en el reporte generado.
  - Todas las sedes pudieron identificarse con nombre real del KML; ninguna quedó sin denominación
    (no hizo falta recurrir a `Sede 1`). El único nombre que se conserva «feo» es `EPN°02`, tal cual
    figura en el KML.
- 1 sin mapa:
  - **JIRIMM N°13** (CUE `0624828-00`): sin placemark propio. El único punto cercano en el KML es
    «JI N°908 "Martha Salotti" Heavy», cuya descripción declara **CUE `0603015-00`** (JI N°908, otra
    institución que no está en el dataset). No se infiere JIRIMM N°13 por mera similitud: **queda sin
    «Ver en el mapa»** hasta confirmarlo.
- Placemarks del KML sin institución en el dataset (20): colegios de gestión privada (Los Robles,
  Sagrada Familia, Nuestra Señora de Luján), oficinas (Jefatura, Consejo Escolar, CIIE, SAD,
  Dirección de Políticas), las sedes de **FinEs** (no está en el dataset) y el citado JI N°908.

## Agregar o mover una institución (o una sede)

- **Nueva institución**: se agrega a la planilla origen y se corre `pnpm run migrar:instituciones`.
  Para que tenga mapa, se agrega su punto al Google My Maps (con el código en el nombre del
  placemark, p. ej. `EP N°27 "..."`), se re-exporta el KML y se corre `pnpm run importar:kml`.
- **Escuela que se muda**: se corrige el punto en el My Maps, se re-exporta el KML y se vuelve a
  correr `pnpm run importar:kml`. La ubicación anterior se reemplaza sola (la clave es el CUE).
- **Agregar / mover / quitar una sede de un servicio multi-sede**: en el Google My Maps se
  agrega/edita el placemark con el nombre `«<CÓDIGO> Sede <Nombre de la sede>»` (p. ej.
  `EEPA Nº702 Sede Nueva`) y la dirección en la primera línea de la descripción; se re-exporta el
  KML y se corre `pnpm run importar:kml`. El importador agrupa por CUE todos los `… Sede …` del
  mismo código; el nombre de sede sale de lo que va después de «Sede …» (no se inventa). Si un
  placemark de sede no pasa la verificación de coordenada, esa sede queda fuera y el resto se
  publica igual.
- **Match dudoso resuelto a mano**: si hay que fijar una ubicación que el matcheo automático no
  resuelve, agregar la entrada al bloque generado de `instituciones-geo.ts` (`ubicaciones` con al
  menos un elemento `verificado: true`) y documentar acá el criterio. `pnpm run validar:geo` igual
  controla su integridad.

## Modal con varias ubicaciones

`InstitutionsExplorer` arma un `PuntoMapa` por institución con **todas** sus sedes verificadas
(`ubicacionesVerificadasDeInstitucion()`); la card sigue teniendo **un solo** botón «Ver en el
mapa». `InstitucionesMapa` (Leaflet):

- **una sola ubicación** → un marcador, `setView()` con zoom de detalle y su popup abierto
  (comportamiento histórico);
- **varias ubicaciones** → un marcador por sede y `fitBounds()` sobre todos los puntos, de modo que
  la vista inicial muestre todas las sedes; no se centra en una sola.

Cada marcador tiene su propio popup con: nombre de la institución, nombre de la sede (si existe),
dirección/localidad que pueda asociarse a ese punto y «Cómo llegar» **con las coordenadas de esa
sede** (nunca una coordenada común). El título del modal es siempre el nombre de la institución;
si tiene varias sedes, debajo aparece el texto «Esta institución funciona en varias sedes.». Al
cambiar de card el mapa se remonta (`key={cue}`), así que los marcadores de la institución anterior
se limpian.

## Tiles (PENDIENTE de producción)

El mapa usa hoy los tiles estándar de OpenStreetMap (`tile.openstreetmap.org`), sin API key y con la
atribución obligatoria visible. **No es una decisión de producción**: la
[Tile Usage Policy de OSM](https://operations.osmfoundation.org/policies/tiles/) no contempla el uso
sostenido como capa base de un sitio público.

Antes de considerar la funcionalidad lista para producción hay que pasar a un proveedor con términos
claros para bajo volumen institucional, compatible con Leaflet, con atribución correcta y sin billing
complejo. Opciones evaluadas:

| Proveedor | Nota |
|---|---|
| **MapTiler** (plan gratuito con API key, ~100k cargas/mes) | Recomendado. Requiere alta de cuenta y gestionar la key como variable de entorno. |
| **CARTO basemaps** (Positron / Voyager) | Sin API key para volumen bajo; atribución CARTO + OSM. Términos menos explícitos que MapTiler. |
| **Tiles propios** (servidor de tiles o export estático del partido) | Máximo control, más infraestructura. |
| OSM estándar | Sólo transitorio, como ahora. |

El cambio es de una línea: `TILE_URL` / `TILE_ATTRIB` en `src/components/ui/InstitucionesMapa.tsx`.

## Privacidad

De la planilla se usan sólo datos institucionales públicos: CUE, código, nombre, dirección,
localidad, contacto institucional y la coordenada del establecimiento. No se leen ni se emiten
columnas de directivos, celulares personales, CUIL/DNI ni observaciones internas (ver la lista de
columnas en `scripts/generar-instituciones.js` y `scripts/importar-kml.js`). Las URLs de fotos que
trae el `ExtendedData` del KML (`gx_media_links`) no se publican.
