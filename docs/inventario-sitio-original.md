# Inventario del sitio original (Google Sites)

Fuente: `material-original/Acerca de.mht` (guardado completo del navegador, 34&nbsp;MB, 341 partes MIME).
El archivo no fue modificado ni se modificará; se conserva como respaldo.

Este documento registra **todo lo recuperado** del MHT: qué existe, dónde estaba, y a qué página del
sitio nuevo se propone llevarlo. El detalle exhaustivo (todas las secciones, sus 110 documentos y sus
textos completos) está en el anexo: [`inventario-sitio-original-anexo.md`](./inventario-sitio-original-anexo.md).
Este documento es el resumen legible; el anexo es la fuente trazable generada por script a partir del
HTML, para evitar errores de transcripción manual.

## Metodología de extracción

El `.mht` es un mensaje MIME (`multipart/related`) con 341 partes: 1 documento HTML principal
(`text/html`, 632&nbsp;KB), 33 hojas de estilo, 191 imágenes y ~110 iframes de vista previa de Google
Drive (la mayoría vacíos porque Drive no permite capturar su contenido dinámico en un guardado
estático). Se usaron scripts en Python (biblioteca estándar, sin dependencias externas) para:

1. Separar las 341 partes MIME y mapear cada `Content-Location` a su archivo.
2. Parsear el HTML principal con `html.parser` conservando el orden real del DOM (encabezados, texto,
   imágenes, enlaces `<a>` y "chips" de archivo de Drive con sus atributos `data-embed-*`).
3. Detectar y corregir un patrón propio de Google Sites: cuando una sección tiene un archivo adjunto,
   el HTML ubica la miniatura del archivo **antes** del título de esa sección (por cómo Sites arma la
   grilla de "tarjetas"). Se verificó este patrón comparando manualmente varios casos (el nombre del
   archivo coincide con el título que lo sigue, no con el que lo precede) y se aplicó de forma
   sistemática. El detalle línea por línea está en el anexo.
4. Excluir del análisis la barra de navegación repetida al inicio de la página (una tabla de
   contenidos con ~50 enlaces internos `#h.xxxxx` que Google Sites genera automáticamente y que no
   aporta contenido nuevo).

## Resumen general

| Métrica | Cantidad | Observación |
|---|---|---|
| Secciones principales (encabezados H1/H2 con contenido propio) | 60 | Ver anexo, tabla completa |
| Documentos con enlace a Google Drive | 110 | PDF, DOCX, XLS/XLSX — se conservan como enlaces externos, no se descargan |
| Formularios (Google Forms) | 1 | "Toma de posesión" (paso 3 del circuito de establecimientos unitarios) |
| Mapas | 2 | 1 Google Maps simple (dirección de la sede) + 1 Google My Maps (mapa interactivo de instituciones educativas) |
| Enlaces externos distintos (fuera de Drive) | 16 | Ver tabla "Enlaces externos" abajo |
| Imágenes incrustadas en el MHT | 191 | Ver clasificación abajo |
| Imágenes recuperadas como contenido útil | 8 | Copiadas a `public/assets/recuperados/` |
| Personas identificadas por nombre y cargo | 19 | 1 Inspector Jefe, 1 Secretaria, 16 inspectores/as de nivel/modalidad, 1 Inspectora Jefe Regional (mención puntual) |
| Recursos no recuperables | ~183 imágenes técnicas | Iconos de Google Sites/Drive, miniaturas de PDF autogeneradas, píxeles de UI de Google Forms |
| Enlaces que requieren revisión manual | 4 | Ver "Enlaces dudosos o rotos" |

## Identidad institucional recuperada

| Campo | Valor recuperado | Fuente |
|---|---|---|
| Sitio original | Google Sites — "Acerca de" (`sites.google.com/abc.gob.ar/jefaturadistritalgiles/acerca-de`) | URL y meta tags del HTML |
| Organismo | Dirección General de Cultura y Educación — Gobierno de la Provincia de Buenos Aires | Logo oficial recuperado (`logo-dgcye-gobierno-pba.jpg`) y flyer institucional |
| Jefatura Distrital | San Andrés de Giles (código de distrito `jd093`, Región 10) | Encabezado principal, casilla de correo `jd093@abc.gob.ar`, footer "Jefatura de Inspección Distrital" |
| Inspector Jefe Distrital | Marcelo Larroque | Encabezado principal |
| Secretaria de Jefatura | Griselda Truzzi | Encabezado principal |
| Dirección | Rivadavia 148, San Andrés de Giles, Buenos Aires | Encabezado principal + mapa embebido (`aria-label="Map, Rivadavia 148"`) |
| Teléfono | 02325&nbsp;440910 | Encabezado principal (repetido en sección "¿Qué debo hacer?") |
| Correo institucional | jd093@abc.gob.ar | Encabezado principal (usado también como `mailto:` en 3 lugares) |
| Facebook | facebook.com/profile.php?id=100078788358229 | Ícono de pie de página |
| Instagram | instagram.com/jefaturadistritalsag | Ícono de pie de página |
| YouTube | youtube.com/@JefaturaDistritalSanAndresDeGi | Ícono de pie de página |
| Frase institucional | "El mejor modo de defender la educación pública es mejorándola" — Alberto Sileoni | Pie de página |
| Logotipo oficial | Recuperado en alta resolución (ver abajo) | `img_0155.jpeg` → `escudo-jefatura-distrital-sag.jpg` |

**Nota sobre redes sociales duplicadas**: en el encabezado del sitio aparecen enlaces de Facebook e
Instagram con parámetros de "compartir" (`facebook.com/share/16F6aF1G9Z/`, `instagram.com/...?igsh=...`)
que son variantes efímeras/personalizadas de los mismos perfiles que aparecen limpios en el pie de
página. El sitio nuevo usa únicamente las versiones canónicas del pie de página.

## Historia del logotipo (contenido institucional recuperado)

El MHT incluye un texto extenso y completo (10 párrafos) que explica el simbolismo de cada elemento del
logotipo institucional (escuela rural/urbana, ecología, útiles escolares, campo y molino, iglesia y
ombú, mate, pelota, Estatua de la Libertad, Sol de Mayo). Es contenido genuino, bien escrito y sin
ambigüedades — se traslada íntegro a la página de Inicio / Institucional del sitio nuevo. Texto completo
en el anexo, sección 4 previa a los bloques con encabezado (aparece como introducción, antes del primer
`H2`).

## Clasificación de imágenes (191 recursos incrustados)

| Categoría | Cantidad | Decisión |
|---|---|---|
| Miniaturas de vista previa de PDF/DOCX autogeneradas por Google Drive (una por cada documento embebido, resolución `s2048`) | ~150 | **No recuperadas** — son capturas técnicas de la primera página de cada archivo, no imágenes de contenido institucional |
| Ícono genérico de Google Drive reutilizado en cada "chip" de archivo | 1 (referenciado ~90 veces) | **No recuperado** — el sitio nuevo usa su propio ícono de documento |
| Íconos de redes sociales / vincular (Facebook, Instagram, correo, YouTube, "Víncular") | 9 | **No recuperados** — se reconstruyen como íconos SVG propios del sistema de diseño, más nítidos y consistentes |
| Recursos internos de Google Forms (SVG/PNG de la UI del formulario embebido) | ~20 | **No recuperados** — son parte del iframe de Google Forms, no contenido propio |
| **Escudo/logotipo institucional oficial** (círculo con el mapa del distrito) | 1 | ✅ Recuperado — `escudo-jefatura-distrital-sag.jpg` |
| **Logo oficial DGCyE + Gobierno de la Provincia de Buenos Aires** (usado en el pie de página original) | 1 | ✅ Recuperado — `logo-dgcye-gobierno-pba.jpg` |
| Capturas del mapa de instituciones educativas (zona rural, zona urbana, vista general) | 3 | ✅ Recuperadas — de valor referencial, aunque el sitio nuevo prioriza el enlace en vivo al mapa interactivo por sobre la imagen estática |
| Flyers de "Novedades" fechados (marzo y junio de 2025) | 3 | ✅ Recuperados pero **marcados como contenido vencido** — ver sección "Contenido desactualizado" |

Total recuperado como contenido útil: **8 imágenes**, en `public/assets/recuperados/`:

| Archivo nuevo | Origen | Uso propuesto |
|---|---|---|
| `escudo-jefatura-distrital-sag.jpg` | `img_0155.jpeg` (230&nbsp;KB) | Logo institucional del sitio (header, footer, favicon derivado) |
| `logo-dgcye-gobierno-pba.jpg` | `img_0002.jpeg` (16&nbsp;KB) | Pie de página — logo oficial de la Provincia |
| `mapa-instituciones-zona-rural.png` | `img_0150.png` (154&nbsp;KB) | Página "Instituciones educativas" |
| `mapa-instituciones-zona-urbana.png` | `img_0149.png` (357&nbsp;KB) | Página "Instituciones educativas" |
| `mapa-instituciones-vista-general.jpg` | `img_0151.jpeg` (120&nbsp;KB) | Referencia opcional, menor prioridad (redundante con el mapa interactivo en vivo) |
| `novedad-2025-03-mensaje-inicio-ciclo-lectivo.png` | `img_0144.png` (279&nbsp;KB) | Novedad histórica — no destacada en portada |
| `novedad-2025-06-feria-distrital-info.png` | `img_0138.png` (284&nbsp;KB) | Novedad histórica — no destacada en portada |
| `novedad-2025-06-feria-distrital-flyer.png` | `img_0137.png` (907&nbsp;KB) | Novedad histórica — no destacada en portada |

## Mapas

| Mapa | Tipo | Enlace recuperado |
|---|---|---|
| Ubicación de la sede (Rivadavia 148) | Google Maps (embed simple) | Se reconstruye como enlace externo "Ver en Google Maps" con la dirección de texto (no se reincrusta el iframe, por rendimiento) |
| Instituciones educativas del distrito | Google My Maps (mapa personalizado con ~40 marcadores) | `https://www.google.com/maps/d/viewer?mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho` — se conserva como enlace externo destacado |

## Formulario

| Formulario | Contexto original | Enlace |
|---|---|---|
| Formulario de toma de posesión (paso 3 del circuito para establecimientos unitarios) | Sección "¿Qué debo hacer?" → "Documentos para inspectores/as" | `https://docs.google.com/forms/d/e/1FAIpQLScnlYGBuc7fe-BYLTpwQ9nBLpql6uCVs4cf7DBnnaEv-Sr4uw/viewform` |

El MHT no incluye un rótulo textual propio para este formulario (aparece como un enlace vacío después
de "Rellenar el formulario"); se conserva el texto de contexto original ("Rellenar el formulario. Tener
en cuenta que se debe ingresar con dirección de correo @abc") en vez de inventar un título.

## Personas recuperadas

### Autoridades

| Nombre | Cargo |
|---|---|
| Marcelo Larroque | Inspector Jefe Distrital |
| Griselda Truzzi | Secretaria de Jefatura |

### Inspectores/as por nivel y modalidad (tabla completa del MHT)

| Inspector/a | Nivel / Modalidad |
|---|---|
| Borsetti, Mariela | Educación Inicial |
| Pizzi, Verónica | Educación Inicial |
| Aguilera, Graciela | Educación Primaria |
| Pereyra Díaz, Sandra | Educación Primaria (suplente de Malaisi, M. Belén) |
| Luna, Diana | Educación Secundaria |
| Torres, Soledad | Educación Técnica |
| Guiot, Angélica | Educación Agraria |
| Lossino, Paula | Educación Agraria |
| Simondi, Verónica | Educación de Adultos |
| Baldachi, Silvia | ETP |
| D'albo, M. de la Paz | EFP - CFP |
| Scardamaglia Ferrer, Cecilia | Educación Física |
| Costurié, Mónica | Educación Especial |
| Sisinni, Silvia | Psicología |
| Chertudi, Natalia | Educación Artística |

**Nota**: la tabla original tiene 16 filas de datos pero 15 personas distintas (una fila es la
aclaración "(Suplente de Malaisi, M. Belén)" asociada a Pereyra Díaz, Sandra, no una persona
adicional). Ningún dato de contacto directo (teléfono/correo individual) está disponible para
inspectores — solo el teléfono y correo generales de la Jefatura. **No se inventan datos de contacto
individuales.**

### Menciones puntuales (contenido fechado, no autoridades permanentes)

| Nombre | Cargo mencionado | Contexto | Estado |
|---|---|---|---|
| Lic. Gabriela Valverde | Inspectora Jefe Regional, Región 10-GE | Flyer "Novedades" de marzo 2025 | Contenido vencido, no se traslada como dato vigente |
| Prof. Valeria Amondaray | Referente Distrital (Feria de Educación, Artes, Ciencias y Tecnología) | Flyer "Novedades" de junio 2025 (evento ya realizado) | Contenido vencido, no se traslada como dato vigente |

## Contenido desactualizado (marcado, no descartado)

Las tres imágenes de "Novedades" recuperadas corresponden a comunicados puntuales de 2025 (inicio de
ciclo lectivo en marzo, y una Feria Distrital con fecha límite de inscripción — 9 de junio — y evento
— 19 de junio — ya vencidos). Se conservan en `public/assets/recuperados/` por trazabilidad, pero
**no se muestran como novedades vigentes** en el sitio nuevo. La página "Calendario y novedades" incluye
en su lugar un aviso de contenido pendiente de actualización, para que el responsable del sitio cargue
las novedades reales al momento del lanzamiento (ver `src/data/novedades.ts`).

## Enlaces externos (fuera de documentos de Drive)

| Enlace | Texto original / contexto | Página propuesta | Estado |
|---|---|---|---|
| `docs.google.com/forms/d/e/.../viewform` | Formulario de toma de posesión | Documentos para inspectores/as | OK |
| `drive.google.com/file/d/.../view` × 3 | Calendario Escolar 2025, Resolución 5510/24, Anexo Calendario de Actividades Docentes 2025 | Calendario y novedades | OK |
| `padlet.com/vsimondi/instituciones-ejayam-...` | "NUEVO PADLET DEJAYAM (ADULTOS)" | Calendario y novedades | OK |
| `sites.google.com/abc.gob.ar/escsunitariastdeposesion/acerca-de` | Sitio vinculado (footer de Sites) — temática coincide con "Toma de posesión — Establecimientos unitarios" | Documentos para inspectores/as | OK, asociación por temática (ver ambigüedad abajo) |
| `sites.google.com/abc.gob.ar/sadegiles-sitdeconflictos/inicio` | Sitio vinculado (footer de Sites) — temática coincide con "Situaciones de conflicto" | Documentos para inspectores/as | OK, asociación por temática (ver ambigüedad abajo) |
| `facebook.com/profile.php?id=100078788358229` | Ícono Facebook (pie de página) | Header / Footer / Contacto | OK |
| `instagram.com/jefaturadistritalsag/` | Ícono Instagram (pie de página) | Header / Footer / Contacto | OK |
| `youtube.com/@JefaturaDistritalSanAndresDeGi` | Ícono YouTube (pie de página) | Header / Footer / Contacto | OK |
| `mailto:jd093@abc.gob.ar` | Correo institucional (× 3 apariciones) | Header / Footer / Contacto | OK |
| `www.mpba.gov.ar/mapa` | Mencionado en el instructivo de "Oficios Judiciales" como fuente de correos de organismos judiciales | Documentos para inspectores/as (dentro del texto) | OK, enlace informativo dentro del cuerpo de texto |

## Enlaces dudosos o rotos (requieren revisión manual)

| Enlace | Problema | Recomendación |
|---|---|---|
| `sites.google.com/d/1QSwlcTIQffwEg4ZDN4mje0Xr2iU3DoZS/p/.../edit` | Termina en `/edit`: es un enlace al **modo edición** de un Google Site, no a una vista pública. Aparece como ícono "Vincular" sin texto en el pie de página original. | **No se traslada al sitio nuevo.** Requiere que la Jefatura Distrital identifique cuál era el sitio público correspondiente y comparta el enlace de vista, no de edición. |
| `sites.google.com/d/1S-J0Ebq0kDoIFpJklpSy102j66NdDD_J/p/.../edit` | Mismo problema que el anterior. | Igual que arriba. |
| Asociación temática de `escsunitariastdeposesion` y `sadegiles-sitdeconflictos` con sus secciones | Estos dos enlaces aparecen físicamente en el **pie de página** del HTML original (widget automático de "sitios vinculados" de Google Sites), no dentro del cuerpo de las secciones "Toma de posesión" / "Situaciones de conflicto". La asociación que se hace en este inventario es por coincidencia de nombre/temática, no por posición explícita en el documento fuente. | Verificar con la Jefatura Distrital que la asociación es correcta antes de publicarla como enlace oficial de esas secciones. |
| Formulario de Google (`docs.google.com/forms/...`) | El MHT no conserva ningún título visible para este formulario, solo el texto de instrucción que lo precede. | Se usa el texto de contexto tal cual aparece en el original; no se inventa un nombre de formulario. |

## Contenido duplicado detectado

- Dos encabezados idénticos "ANULACIÓN DE TÍTULOS" (secciones 37 y 38 del anexo) para dos pasos
  distintos del mismo trámite (texto del procedimiento vs. comunicado + DDJJ). Se conservan ambos,
  fusionados en una sola subsección de la página "Títulos y certificaciones" para evitar un título
  repetido confuso en la navegación.
- Dos encabezados "ANEXO 3" en secciones distintas (Régimen Académico #23 y Certificaciones
  Secundarias #47) — no son el mismo documento, se conservan por separado dentro de sus respectivas
  páginas.
- Enlaces de redes sociales duplicados (ver nota en "Identidad institucional").

## Estructura propuesta del sitio nuevo

| Página nueva | Contenido original que la nutre (ver # de sección en el anexo) |
|---|---|
| **Inicio** | Encabezado institucional, historia del logotipo (resumida), accesos principales a las demás páginas, aviso de novedades pendiente |
| **Instituciones educativas** | 1, 2, 3 — mapa interactivo, mapas rurales/urbanos, planilla de extensión de jornada |
| **Inspectores** | 4 — tabla de inspectores/as por nivel y modalidad |
| **Calendario y novedades** | 5, 6 — calendario escolar 2025, novedades (marcadas como pendientes de actualización) |
| **Formularios** | 7–11 — declaración jurada de horarios, licencias 114/115 y 114H, constancia de ingreso a la docencia |
| **Régimen académico y normativa** | 12–29 — inscripción de alumnos, régimen académico (todos los niveles), estados administrativos |
| **Títulos y certificaciones** | 30–47 — sistema de títulos, validez nacional, anulaciones, certificaciones de secundaria |
| **Documentos para inspectores/as** | 48–59 — aula de fortalecimiento, oficios judiciales, toma de posesión de establecimientos unitarios, salidas educativas y seguros |
| **Contacto y ubicación** | 0 y pie de página — dirección, teléfono, correo, redes sociales, mapa de la sede |
| **/guia-visual** (interna, no listada en la navegación pública) | No proviene del MHT — es nueva, para documentar el sistema de diseño |

No se identificó contenido suficiente en el MHT para una página separada de "Establecimientos
unitarios" o "Situaciones de conflicto" más allá de los enlaces externos ya registrados; ambos quedan
como accesos dentro de "Documentos para inspectores/as" en vez de crear páginas casi vacías.

## Elementos no recuperables

- El diseño visual, la tipografía, el CSS y el comportamiento interactivo del Google Sites original:
  por decisión explícita del proyecto, no se reutilizan (se reconstruye un sistema de diseño propio
  inspirado en el ecosistema visual de abc.gob.ar).
- El contenido de los ~110 documentos enlazados (PDF/DOCX/XLS) no se descarga ni se reproduce: se
  conservan únicamente como enlaces externos a Google Drive, tal como indica el alcance del proyecto.
- El contenido dinámico de los iframes de Google Drive (vista previa de cada archivo) no es capturable
  desde un `.mht` estático — Chrome guarda un marcador vacío (106 bytes) en su lugar. Se reconstruyó la
  información equivalente (nombre de archivo y enlace) a partir de los atributos `data-embed-*` que sí
  quedan en el HTML.
- El formulario de Google Forms embebido no conserva sus preguntas en el HTML estático (contenido
  cargado dinámicamente); se conserva únicamente el enlace externo.

## Ver también

- [Anexo con el detalle completo de las 60 secciones, sus 110 documentos y sus textos íntegros](./inventario-sitio-original-anexo.md)
- [`docs/referencia-visual-abc.md`](./referencia-visual-abc.md) — investigación visual del ecosistema ABC (paso siguiente)
