# Auditoría de documentos — página "Documentos para inspectores/as"

**Fecha de auditoría:** 2026-08-14
**Alcance:** todos los recursos listados en `src/data/documentos-inspectores-secciones.ts` (renderizados por
`src/app/documentos-inspectores/page.tsx` vía `DocumentSectionList`) más los recursos no-Drive de
`src/data/documentos-inspectores.ts` (formulario de Google y sitios vinculados).
**Naturaleza de esta etapa:** solo análisis y propuesta. **No se movió, borró ni recategorizó ningún
documento; no se modificó ningún dataset ni componente.** Ver confirmación al final.

**Limitación de método:** los enlaces de Google Drive de este sitio requieren autenticación con cuenta
Google para ver el contenido (se verificó con dos accesos de prueba: el visor solo entrega el título del
archivo, no el cuerpo). Por lo tanto, la clasificación se basa en título, descripción de sección y
metadata ya presente en el dataset (incluyendo el texto íntegro recuperado del sitio original en
`docs/inventario-sitio-original-anexo.md`), no en el contenido interno de cada PDF/DOCX. Donde esto deja
duda real sobre el destinatario o la función, el documento se clasificó como `REVISAR` en lugar de forzar
una categoría.

---

## Resumen ejecutivo

| Total revisado | INSPECTORES | FORMULARIOS | NORMATIVA | USO_MIXTO | REVISAR |
|---|---|---|---|---|---|
| **47** | 4 | 8 | 22 | 8 | 5 |

De los 47 recursos actualmente colgados de "Documentos para inspectores/as", solo **4** (menos del 10%)
son instrumentos de uso exclusivo de inspección con confianza razonable. La mayoría (22) es normativa
transversal (fundamentalmente los anexos de las Resoluciones 3871/24 y 44921855/24 sobre salidas
educativas y actividades acuáticas), 8 son formularios/actas que completan y firman docentes, y 8 son de
uso mixto (relevamientos y guías que administra Inspección pero completan escuelas/EOE).

---

## Candidatos a mover a Formularios

Documentos que un docente, aspirante o equipo de conducción necesita completar, firmar o presentar:

| ID | Título | Por qué |
|---|---|---|
| QDH-1 | ACTA TOMA DE POSESION INICIAL.docx | Acta que completa y firma el/la docente designado/a en Nivel Inicial al tomar posesión del cargo (paso 2 del circuito "¿Qué debo hacer?"). |
| QDH-2 | ACTA DE TOMA DE POSESION PRIMARIA.docx | Idéntico caso para Nivel Primario. |
| R3871-4 | Anexo 3 — Autorización salidas en el radio de la escuela (IF-2024-35029272) | Por su rótulo original ("AUTORIZACIÓN SALIDAS EN EL RADIO DE LA ESCUELA") es una planilla de autorización que la familia/el estudiante firma para cada salida, no un texto reglamentario. |
| R3871-7 | Anexo 6 — Autorización de menores de 18 (IF-2024-35030478) | Rotulado "AUTORIZACIÓN DE MENORES DE 18": formulario de consentimiento que firman madre/padre/tutor para una salida educativa. |
| R3871-8 | Anexo 7 — Autorización de mayores de 18 (IF-2024-35030927) | Rotulado "AUTORIZACIÓN DE MAYORES DE 18": mismo tipo de formulario, para estudiantes mayores de edad. |
| AN9-1 | Anexo 9 — DDJJ (IF-2024-35031909) | El propio título de sección lo identifica como declaración jurada (DDJJ), documento que se completa y firma, no un texto normativo. |
| AAA-1 | Autorización actividades acuáticas en Salidas Educativas.docx | Formulario de autorización/consentimiento específico para actividades acuáticas, análogo a los Anexos 6/7 de la Resolución 3871/24. |
| NODRIVE-1 | Formulario de toma de posesión (Google Form) | Paso 3 del circuito de toma de posesión: el/la docente designado/a debe completarlo con correo @abc para formalizar la toma de posesión. |

**Nota:** varios de estos formularios ya están físicamente agrupados junto con anexos que sí son
normativa (p. ej. Anexo 3, 6, 7 y 9 conviven con los Anexos 1, 2, 4, 5, 8 de la misma Resolución 3871/24,
que sí son texto reglamentario). Antes de mover conviene decidir si se separan a nivel de anexo individual
o si toda la resolución permanece unida por razones de navegación (ver "No duplicar innecesariamente" en
Observaciones generales).

---

## Candidatos a sacar de Inspectores sin ir a Formularios (→ Normativa u otra sección)

Los 22 recursos NORMATIVA — resoluciones, disposiciones y anexos reglamentarios transversales a
docentes, equipos de conducción e inspección — deberían migrar a la sección Normativa existente
(`src/data/normativa-secciones.ts`), que ya aloja material equivalente (régimen académico, estados
administrativos, etc.):

- **CSE-1** — Comunicación Salidas Educativas 2024.pdf
- **R3871-1 a R3871-3, R3871-5, R3871-6, R3871-9** — RSC-2024-35942004 (resolución) y Anexos 1, 2, 4, 8 de la Resolución 3871/24 (Requisitos, Tiempos, Salidas educativas, Transporte)
- **ACT-1** — ME-2018-23210727-GDEBA-DPCEDGCYE.pdf (aclaraciones sobre transporte)
- **AAA-2 a AAA-12** — RSC-2024-44921855 (resolución) y sus Anexos 1 a 11 sobre actividades acuáticas
- **AN12-1** — Anexo 12 IF-2024-44215836 (continuación de la resolución de actividades acuáticas)
- **AN13-1, AN13-2** — Anexo 13 IF-2024-44215709 (misma resolución) y "Prácticas Profesionalizantes Lineamientos 2025.pdf" (tema no relacionado; ver Observaciones generales)

Adicionalmente, dos de los recursos USO_MIXTO tienen una ubicación principal más natural fuera de
Inspectores aunque los use más de un perfil (ver detalle en la sección USO_MIXTO más abajo):

- **QDH-4** — Guía de Orientación Intervención en situaciones conflictivas y vulneración de derechos.pdf → mejor como material transversal (Normativa/orientación institucional), útil para EOE, equipos directivos, docentes e inspección por igual.
- **OJ-1** — Instructivo de Oficios Judiciales → el circuito descrito está dirigido principalmente al Equipo Directivo de cada institución; Inspección solo recibe copia. Encajaría mejor como procedimiento normativo/trámite institucional, con un enlace de referencia desde Inspectores.

---

## Documentos que deberían permanecer en Inspectores

Instrumentos de trabajo ligados a un proceso que Inspección conduce directamente (actos públicos de
cobertura de cargos jerárquicos: designación, reconocimiento y limitación de funciones):

| ID | Título |
|---|---|
| DPI-3 | Reconocimiento de funciones jerárquicas.docx |
| DPI-4 | Acta de ofrecimiento.docx |
| DPI-5 | Asignación de funciones (1).docx |
| DPI-6 | Limitación de funciones.docx |

Estos cuatro son actas/instrumentos que Inspección genera y controla durante el acto público en sí (no
algo que un/a docente descarga y presenta por su cuenta), por lo que encajan en la definición de
"instrumentos de trabajo de inspectores".

---

## Uso mixto — detalle de perfiles y ubicación propuesta

| ID | Título | Perfiles que lo usan | Ubicación principal propuesta |
|---|---|---|---|
| OJ-1 | Instructivo Oficios Judiciales (texto embebido, sin archivo) | Equipos directivos (redactan el informe y lo elevan), Inspección (recibe copia y consolida), organismos judiciales (destinatario final) | Normativa/procedimientos, con enlace contextual desde Inspectores dado que el circuito exige copia obligatoria a la Inspectora y a la Jefatura |
| DPI-8 | Documento de apoyo cobertura puntuales.pdf | Docentes que aceptan una cobertura puntual, Inspección que administra el acto | Inspectores (es material de apoyo del mismo circuito que DPI-3 a DPI-6), pero podría enlazarse desde Formularios si en la práctica el/la docente lo descarga por su cuenta |
| QDH-3 | PLANILLA Situación Conflicto en blanco.docx | Equipos directivos/EOE (la completan), Inspección (releva y consolida los datos distrito) | Inspectores — es la planilla de un relevamiento gestionado por Inspección, análogo al caso "documento dirigido a inspectores que impacta en escuelas" |
| QDH-4 | Guía de Orientación Intervención en situaciones conflictivas y vulneración de derechos.pdf | EOE, equipos directivos, docentes, inspección | Normativa/orientación institucional (guía transversal, no exclusiva de inspección) |
| QDH-5 | Encuentro Cambios en el relevamiento 2025 (1).pdf | Equipos directivos/EOE que deben aplicar el relevamiento actualizado, Inspección que lo coordina | Inspectores (comunicación sobre el mismo relevamiento que administra Inspección) |
| QDH-6 | Glosario del Relevamiento de situaciones conflictivas...pdf | Mismo circuito que QDH-3 y QDH-5 | Inspectores (material de apoyo del relevamiento) |
| NODRIVE-2 | Sitio vinculado "Establecimientos unitarios — Toma de posesión" | Docentes designados en establecimientos unitarios, posiblemente Inspección | Mismo lugar que el trámite de toma de posesión (Formularios/Documentos inspectores, como referencia cruzada) — **con la salvedad de que la propia asociación de este enlace a esta sección ya está marcada como no verificada en `docs/inventario-sitio-original.md`** (apareció en el pie de página del sitio original, no en el cuerpo de la sección) |
| NODRIVE-3 | Sitio vinculado "Situaciones de conflicto — SADEG" | Mismo circuito que QDH-3/5/6 | Inspectores — **misma salvedad**: asociación por temática, no por posición explícita en el HTML original |

---

## Revisar manualmente

No fue posible determinar destinatario o función con confianza suficiente solo a partir del título y la
metadata disponible (y el contenido del archivo no es accesible sin autenticación de Google):

| ID | Título | Qué falta verificar |
|---|---|---|
| AULA-1 | Estados Administrativos Aulas de Fortalecimiento.pdf | El sitio ya tiene un precedente ("Estados Administrativos RA" en Normativa/Régimen académico) para documentos homónimos que las escuelas completan pero que se catalogaron como Normativa, no como material exclusivo de inspección. No se pudo determinar si este PDF es una planilla en blanco (→ Formularios/Uso mixto) o un documento de referencia consolidado (→ Normativa), similar al de "Régimen académico". |
| DPI-1 | Anexo 1 Solicitud de cobertura en acto público.docx | El título usa "Solicitud", que el propio criterio de la auditoría asocia a Formularios (algo que se completa y presenta). Pero el tema (actos públicos de cobertura de cargos jerárquicos) es un proceso que conduce Inspección. No puede determinarse si es una solicitud que presenta el/la docente o una planilla que administra Inspección durante el acto. |
| DPI-2 | Anexo 2 Solicitud de Adecuación de Disposición.docx | Mismo dilema que DPI-1: "solicitud" sugiere trámite iniciado por una persona, pero el contexto (adecuación de una disposición de cobertura) sugiere un trámite interno de Inspección/Jefatura hacia la Dirección de Gestión de Recursos Humanos. |
| DPI-7 | ARTICULO 75 C 15.docx | El título remite a un artículo del Estatuto del Docente (probablemente Art. 75, sobre limitación de servicio/funciones). No se pudo determinar si el archivo es el texto normativo del artículo (→ Normativa) o un acta/formulario de aplicación de ese artículo usado en los actos de cobertura, como sus vecinos DPI-3 a DPI-6 (→ Inspectores). |
| R3871-5 | Anexo 5 — Estudiantes y acompañantes (IF-2024-35029666) | El rótulo ("ESTUDIANTES Y ACOMPAÑANTES") es compatible tanto con un anexo reglamentario (reglas sobre proporción estudiantes/acompañantes) como con una planilla de nómina que se completa para cada salida (→ Formularios), a diferencia de los Anexos 3, 6 y 7 de la misma resolución, que sí se identifican claramente como formularios de autorización. |

---

## Tabla completa por sección del dataset

Convenciones: **Tipo** se toma de `tipoDeArchivo()` sobre el nombre de archivo. **Vigencia** es una
estimación (vigente / posiblemente vigente / histórico / no verificable) — no se eliminó ni marcó nada
como derogado sin evidencia directa.

### 1. AULA DE FORTALECIMIENTO (`aula-de-fortalecimiento`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| AULA-1 | [Estados Administrativos Aulas de Fortalecimiento.pdf](https://drive.google.com/open?authuser=0&id=1f99hQyrCw0rCpr-acnHI7GQk-a5ne41p) | pdf | No verificable | No verificable | **REVISAR** | — | No verificable | Ver tabla "Revisar manualmente" |

### 2. OFICIOS JUDICIALES (`oficios-judiciales`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| OJ-1 | Instructivo Oficios Judiciales (texto de la sección, sin archivo Drive) | texto de página | Equipo Directivo de cada institución (redacta y eleva el informe); Inspección y Jefatura reciben copia obligatoria | Recibir el oficio, elaborar informe con formato específico, elevarlo por correo al organismo judicial con copia a Inspección/Jefatura, y luego por GDEBA a Inspección General | **USO_MIXTO** | Normativa/procedimientos, con enlace contextual desde Inspectores | Vigente (menciona plataforma GDEBA, en uso actual) | El circuito completo está dirigido primero al Equipo Directivo; Inspección aparece como destinataria de copia y de la elevación a Inspección General, no como ejecutora principal |

Esta sección no tiene documentos descargables asociados en el dataset: todo el contenido es el texto
del instructivo, embebido en el campo `descripcion`.

### 3. DOCUMENTOS PARA INSPECTORES/AS (`documentos-para-inspectores-as`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| DPI-1 | [Anexo 1 Solicitud de cobertura en acto público.docx](https://drive.google.com/open?authuser=0&id=16o6fnY92-7uDvgqxeBbqNKzGvl55L8su) | doc | No verificable con certeza | No verificable con certeza | **REVISAR** | — | No verificable | Ver tabla "Revisar manualmente" |
| DPI-2 | [Anexo 2 Solicitud de Adecuación de Dispo.docx](https://drive.google.com/open?authuser=0&id=1Kaz1shTQKfHXE_yVKoEXCWg3OSY_YUS8) | doc | No verificable con certeza | No verificable con certeza | **REVISAR** | — | No verificable | Ver tabla "Revisar manualmente" |
| DPI-3 | [Reconocimiento de funciones jerárquicas.docx](https://drive.google.com/open?authuser=0&id=1J1DGw2d34MN7Dl26Ktk-tPNUxNrrxcAs) | doc | Inspección/Jefatura (autoridad que reconoce el desempeño de funciones jerárquicas) | Instrumento administrativo que la Jefatura emite/registra | **INSPECTORES** | Inspectores | Posiblemente vigente | Acto administrativo emitido por la autoridad de inspección, no un formulario que complete un tercero por iniciativa propia |
| DPI-4 | [Acta de ofrecimiento.docx](https://drive.google.com/open?authuser=0&id=1_gZ5R6rIoXJz_OzhP9r31Qi7zsb3cxlk) | doc | Inspección (labra el acta durante el acto público de cobertura) | Instrumento de trabajo durante el acto | **INSPECTORES** | Inspectores | Posiblemente vigente | Acta que se genera y controla en el momento del acto público, conducido por Inspección |
| DPI-5 | [Asignación de funciones (1).docx](https://drive.google.com/open?authuser=0&id=1jtEqn-QS74x38_NxKyjqJT3Ugh9eXsJC) | doc | Inspección/Jefatura | Instrumento administrativo de asignación | **INSPECTORES** | Inspectores | Posiblemente vigente | Mismo circuito de actos públicos de cobertura de cargos jerárquicos |
| DPI-6 | [Limitación de funciones.docx](https://drive.google.com/open?authuser=0&id=126eSZEjyiN_NsFl4iodv_6nVhQlDkyPV) | doc | Inspección/Jefatura | Instrumento administrativo (Anexo XII) | **INSPECTORES** | Inspectores | Posiblemente vigente | Mismo circuito; se referencia como "ANEXO XII" en la descripción de sección |
| DPI-7 | [ARTICULO 75 C 15.docx](https://drive.google.com/open?authuser=0&id=1RU0cVP6IIAEAodxIvzO2KbQFcUunU90Z) | doc | No verificable con certeza | No verificable con certeza | **REVISAR** | — | No verificable | Ver tabla "Revisar manualmente" |
| DPI-8 | [Documento de apoyo cobertura puntuales.pdf](https://drive.google.com/open?authuser=0&id=1EMm7eEZksdcKz-YIWjJYC7BaZxZi_od0) | pdf | Docentes que aceptan cobertura puntual + Inspección | Consulta de apoyo durante el proceso de cobertura | **USO_MIXTO** | Inspectores (ver detalle en tabla Uso mixto) | Rotulado "1/21" en la descripción original — posiblemente vigente | Documento de apoyo, no instrumento normativo ni formulario en sí |

**Observación:** según `docs/inventario-sitio-original-anexo.md` (fila 51), DPI-8 pertenecía originalmente
a una sección H2 separada del sitio de origen ("TOMA DE POSESIÓN ESTABLECIMIENTOS UNITARIOS"), distinta
de "DOCUMENTOS PARA INSPECTORES/AS" (fila 50) donde están DPI-1 a DPI-7. El dataset actual las fusionó en
una sola sección (`documentos-para-inspectores-as`). No se propone deshacer esa fusión en esta etapa, solo
se deja registrado para la revisión manual.

### 4. ¿QUÉ DEBO HACER? (`que-debo-hacer`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| QDH-1 | [ACTA TOMA DE POSESION INICIAL.docx](https://drive.google.com/open?authuser=0&id=1DRjvX8boCHCV61fb0z0XUtSPCGzrdQYa) | doc | Docente designado/a en Nivel Inicial | Completar y firmar el acta de toma de posesión | **FORMULARIOS** | Formularios | Vigente | Paso 2 explícito del circuito "¿Qué debo hacer?", a completar por quien fue designado/a |
| QDH-2 | [ACTA DE TOMA DE POSESION PRIMARIA.docx](https://drive.google.com/open?authuser=0&id=1BLL6cgdxTF-hQt0kD8333OqNfMPLo-vD) | doc | Docente designado/a en Nivel Primario | Completar y firmar el acta de toma de posesión | **FORMULARIOS** | Formularios | Vigente | Igual que QDH-1, para Nivel Primario |
| QDH-3 | [PLANILLA Situacion Conflicto en blanco.docx](https://drive.google.com/open?authuser=0&id=11VEIMZs6kazDAP_txXg7XonBMpY7ycet) | doc | Equipos directivos/EOE (completan) + Inspección (releva) | Completar la planilla ante una situación de conflicto/vulneración de derechos | **USO_MIXTO** | Inspectores (ver tabla Uso mixto) | Vigente | Relevamiento gestionado por Inspección, aunque lo completan las escuelas |
| QDH-4 | [Guía de Orientación Intervención en situaciones conflictivas y vulneración de derechos.pdf](https://drive.google.com/open?authuser=0&id=1pOorBQ4Q5g2lTrDsX3Ve3CrpIetMgSwf) | pdf | EOE, equipos directivos, docentes, inspección | Consulta como material de orientación | **USO_MIXTO** | Normativa/orientación institucional (ver tabla Uso mixto) | Vigente | Guía transversal, no exclusiva de inspección |
| QDH-5 | [Encuentro Cambios en el relevamiento 2025 (1).pdf](https://drive.google.com/open?authuser=0&id=1x-ukTT7MQQgBu_ihNNlW5C95BhgryWt5) | pdf | Equipos directivos/EOE + Inspección | Informarse sobre cambios metodológicos del relevamiento 2025 | **USO_MIXTO** | Inspectores | Vigente (2025) | Comunicación del mismo relevamiento que gestiona Inspección |
| QDH-6 | [Glosario del Relevamiento de situaciones conflictivas y de vulneración de derechos en el escenario escolar.docx.pdf](https://drive.google.com/open?authuser=0&id=1yo5XFiDG9ZPcDYKkVEQ5boJw8vU0AIvr) | pdf | Igual que QDH-3/5 | Consulta de definiciones para completar el relevamiento | **USO_MIXTO** | Inspectores | Vigente | Material de apoyo del mismo relevamiento |

Esta sección también incluye, fuera del dataset de `SeccionDocumentos` pero renderizado en la misma
página (`src/data/documentos-inspectores.ts`):

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| NODRIVE-1 | Formulario de toma de posesión (Google Form) | Google Form | Docente designado/a (circuito de establecimientos unitarios) | Completar el formulario con correo @abc | **FORMULARIOS** | Formularios | Vigente | Paso 3 explícito del circuito, a completar por quien fue designado/a |
| NODRIVE-2 | Sitio vinculado "Establecimientos unitarios — Toma de posesión" | Sitio externo | Docente designado/a + posiblemente Inspección | Consulta de información ampliada | **USO_MIXTO** | Ver tabla Uso mixto (asociación a esta sección no verificada) | No verificable | Asociación por temática, no por posición explícita en el sitio original (ver `docs/inventario-sitio-original.md`) |
| NODRIVE-3 | Sitio vinculado "Situaciones de conflicto — SADEG" | Sitio externo | Igual que QDH-3/5/6 | Consulta/gestión del relevamiento | **USO_MIXTO** | Ver tabla Uso mixto (asociación a esta sección no verificada) | No verificable | Misma salvedad que NODRIVE-2 |

### 5. COMUNICACIÓN SALIDAS EDUCATIVAS Y SEGURO (`comunicacion-salidas-educativas-y-seguro`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| CSE-1 | [Comunicación Salidas Educativas 2024.pdf](https://drive.google.com/open?authuser=0&id=1JvYln1YA8YL_WdTH22nimFPUZGYO7sF5) | pdf | Equipos directivos/docentes que organizan salidas educativas | Tomar conocimiento de la comunicación oficial | **NORMATIVA** | Normativa | Posiblemente vigente (oct. 2024, mismo período que la Res. 3871/24) | Comunicación/circular oficial, transversal, no exclusiva de inspección |

### 6. RESOLUCIÓN 3871/24 (`resolucion-3871-24`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| R3871-1 | [RSC-2024-35942004-GDEBA-DGCYE.pdf](https://drive.google.com/open?authuser=0&id=1aKytfhKaNnuXwAiP-w5RL-eTfapho9Ww) (resolución) | pdf | Equipos directivos/docentes/inspección (transversal) | Tomar conocimiento y cumplir | **NORMATIVA** | Normativa | Vigente (2024) | Texto de la resolución en sí |
| R3871-2 | [Anexo 1 — Requisitos](https://drive.google.com/open?authuser=0&id=1vTaecDcXmp3XoVfoEYM5F5AzyWKTMmM2) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | Vigente | Rotulado "REQUISITOS" en la descripción original: contenido reglamentario |
| R3871-3 | [Anexo 2 — Tiempos](https://drive.google.com/open?authuser=0&id=1f0bzx9x6atq32NWD_jWvddPQpDyI4B2n) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | Vigente | Rotulado "TIEMPOS": plazos reglamentarios |
| R3871-4 | [Anexo 3 — Autorización salidas en el radio de la escuela](https://drive.google.com/open?authuser=0&id=1Zj43wQNLbTLXGAT8dXqwu0_GlcqZ043F) | pdf | Familia/estudiante | Completar y firmar la autorización | **FORMULARIOS** | Formularios | Vigente | Rotulado "AUTORIZACIÓN..." — formulario de consentimiento, no texto reglamentario |
| R3871-5 | [Anexo 4 — Salidas educativas](https://drive.google.com/open?authuser=0&id=1Y3Q9ct_RXq7gZ_j274jcytGPeFeR9vbG) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | Vigente | Definiciones generales, según rótulo original |
| R3871-6 | [Anexo 5 — Estudiantes y acompañantes](https://drive.google.com/open?authuser=0&id=1hP6sFSkCUE8uffdBxAMhwIzbz3xFLZmi) | pdf | No verificable con certeza | No verificable con certeza | **REVISAR** | — | No verificable | Ver tabla "Revisar manualmente" |
| R3871-7 | [Anexo 6 — Autorización de menores de 18](https://drive.google.com/open?authuser=0&id=1KZwMt-jHV9kwo6EYKpTOOVcUBYTT8uag) | pdf | Madre/padre/tutor de estudiante menor de edad | Completar y firmar la autorización | **FORMULARIOS** | Formularios | Vigente | Rótulo explícito de autorización/consentimiento |
| R3871-8 | [Anexo 7 — Autorización de mayores de 18](https://drive.google.com/open?authuser=0&id=1vlROf0FX6VjiTgc1ens5XSsAdkvENEIu) | pdf | Estudiante mayor de edad | Completar y firmar la autorización | **FORMULARIOS** | Formularios | Vigente | Rótulo explícito de autorización/consentimiento |
| R3871-9 | [Anexo 8 — Transporte](https://drive.google.com/open?authuser=0&id=1RuBmyyIV7smtF7kxZyhcm5k9wWwK6ObW) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | Vigente | Reglas de transporte para salidas educativas |

### 7. ANEXO 9 DDJJ (`anexo-9-ddjj`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| AN9-1 | [ANEXO 9 - IF-2024-35031909-GDEBA-CGCYEDGCYE.pdf](https://drive.google.com/open?authuser=0&id=18xIEheTZFK629RCly8yFbtKKTJQY22NV) | pdf | Equipo directivo/docente responsable de la salida | Completar y firmar la declaración jurada | **FORMULARIOS** | Formularios | Vigente | Título de sección lo identifica como DDJJ (declaración jurada), continuación de la Res. 3871/24 |

### 8. ACLARACIONES SOBRE TRANSPORTE (`aclaraciones-sobre-transporte`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| ACT-1 | [ME-2018-23210727-GDEBA-DPCEDGCYE (1).pdf](https://drive.google.com/open?authuser=0&id=13kUO2yRX_m-0Am0ZXHTIOwX7xWkqwrlD) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | No verificable — de 2018, anterior a la Res. 3871/24 (2024) que regula transporte en salidas educativas; podría tratar un tema distinto (transporte escolar general) por lo que no se asume derogado | Memorándum aclaratorio (prefijo "ME"), contenido reglamentario, no exclusivo de inspección |

### 9. AUTORIZACION ACTIVIDADES ACUÁTICAS (`autorizacion-actividades-acuaticas`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| AAA-1 | [Autorización actividaes acuáticas en Salidas Educativas.docx](https://drive.google.com/open?authuser=0&id=1QZcMDY7ZwwS0LL4klooswQP6n2gIItNg) | doc | Familia/estudiante | Completar y firmar la autorización | **FORMULARIOS** | Formularios | Vigente | Título explícito de autorización/consentimiento |
| AAA-2 | [RSC-2024-44921855-GDEBA-DGCYE (1).pdf](https://drive.google.com/open?authuser=0&id=1bMu7S9fxFHQD94lhbVetv2QaSlDgviC6) (resolución) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** | Normativa | Vigente (2024) | Texto de la resolución en sí |
| AAA-3 | [Anexo 1](https://drive.google.com/open?authuser=0&id=1sJ4XeZJdqpf5eMFppmUpD2FnYQiGzdsm) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media — ver nota) | Normativa | Vigente | Ver nota grupal abajo |
| AAA-4 | [Anexo 2](https://drive.google.com/open?authuser=0&id=1KaajB1DjtYTa9_Q9mVi_XY6GO6M3aS0H) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-5 | [Anexo 3](https://drive.google.com/open?authuser=0&id=1Nqh2y-pcM3_ZwLFpO13iZDwyol4QsTPE) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-6 | [Anexo 4](https://drive.google.com/open?authuser=0&id=1KK0spkHuz9eudgyWJv7VMFiA5twZ1IXY) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-7 | [Anexo 5](https://drive.google.com/open?authuser=0&id=1MS98J5YBd6K42getM-XKIk8AtCyWhHSr) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-8 | [Anexo 6](https://drive.google.com/open?authuser=0&id=1WbPbZrArI7CcLVfC51I-ws5b31OeqLNE) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-9 | [Anexo 7](https://drive.google.com/open?authuser=0&id=1b5VE-88fUHGcdCY959ZQaXO5U-0ePIrC) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-10 | [Anexo 8](https://drive.google.com/open?authuser=0&id=1COrp6PZHq3ljkM7L7LNHKPOuIZOgFp9m) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-11 | [Anexo 9](https://drive.google.com/open?authuser=0&id=1haz8hytpDIRH7AJiSVDm4swIYPA85eI4) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-12 | [Anexo 10](https://drive.google.com/open?authuser=0&id=1cIhfuQSGVJRax28H3pJW5atN2n9EDijd) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |
| AAA-13 | [Anexo 11](https://drive.google.com/open?authuser=0&id=1oVi6Uu_NCYHkZv-pkDh0eyyV2NVS_pY_) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Ver nota grupal |

**Nota grupal (AAA-3 a AAA-13):** a diferencia de la Resolución 3871/24, esta resolución no trae en la
descripción original un rótulo temático por anexo (todos aparecen como "Anexo N — IF-2024-...", sin texto
descriptivo). Se clasificaron como NORMATIVA por default razonable (son anexos de una resolución, y el
formulario de consentimiento ya existe aparte como AAA-1), pero con **confianza media**: no puede
descartarse que alguno de estos 11 anexos sea en realidad una planilla o autorización específica (p. ej.
por tipo de actividad acuática — pileta, río, mar). Se recomienda una revisión puntual antes de dar esta
clasificación por definitiva, aunque no alcanza el nivel de incertidumbre de la tabla "Revisar
manualmente" porque el patrón (resolución + anexos técnicos, con el formulario de consentimiento
separado) es consistente con el resto del sitio.

### 10. ANEXO 12 (`anexo-12`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| AN12-1 | [Anexo 12 IF-2024-44215836-GDEBA-SSEDGCYE.pdf](https://drive.google.com/open?authuser=0&id=1UFYhZ7AtJ3cEvKOWPkkQSqssirYGMAWl) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Continuación de la resolución de actividades acuáticas (ver nota grupal AAA) |

### 11. ANEXO 13 (`anexo-13`)

| ID | Título | Tipo | Destinatario identificado | Acción esperada | Clasificación | Ubicación propuesta | Vigencia | Motivo |
|---|---|---|---|---|---|---|---|---|
| AN13-1 | [Anexo 13 IF-2024-44215709-GDEBA-SSEDGCYE.pdf](https://drive.google.com/open?authuser=0&id=1j7NcFDfRyuooMCHs6wZs4w2J5NVdr9mD) | pdf | Transversal | Tomar conocimiento | **NORMATIVA** (confianza media) | Normativa | Vigente | Continuación de la resolución de actividades acuáticas (ver nota grupal AAA) |
| AN13-2 | [Prácticas Profesionalizantes Lineamientos 2025 (1).pdf](https://drive.google.com/open?authuser=0&id=14aaLduGR401unJGqAyziVXE551wuuuQr) | pdf | Docentes/equipos de conducción de escuelas técnicas/agrarias con prácticas profesionalizantes, inspección | Tomar conocimiento y aplicar los lineamientos | **NORMATIVA** | Normativa (posiblemente Régimen académico — Técnica/Agraria) | Vigente (2025) | Lineamientos generales oficiales, transversales; ver observación de anomalía abajo |

**Observación (AN13-2):** este documento no tiene relación temática con "Actividades Acuáticas" ni con el
resto de la sección "Anexo 13". Según `docs/inventario-sitio-original-anexo.md` (fila 59), en el sitio
original ya aparecía agrupado junto al Anexo 13 de esa resolución, probablemente por posición en la
página (era el último bloque antes del pie de página), no por relación de contenido. Se lista aparte para
que, al migrar, no quede erróneamente asociado a la normativa de actividades acuáticas.

---

## Observaciones generales / anomalías detectadas

1. **Fusión de secciones originales:** el dataset actual fusiona en `documentos-para-inspectores-as` dos
   secciones H2 distintas del sitio original ("DOCUMENTOS PARA INSPECTORES/AS" y "TOMA DE POSESIÓN
   ESTABLECIMIENTOS UNITARIOS"). No se propone deshacer esta fusión ahora, solo queda documentado para la
   revisión manual de DPI-8.
2. **Recursos sin archivo Drive:** OJ-1 (instructivo de Oficios Judiciales) no tiene documento asociado;
   todo su contenido es texto de la propia página. Si se reubica como NORMATIVA/procedimiento, habría que
   decidir si se traslada el texto completo o se deja un resumen con enlace desde Inspectores — no se
   duplicó el contenido para esta auditoría.
3. **Posible complementariedad CSE-1 / R3871-\*:** "Comunicación Salidas Educativas 2024.pdf" (CSE-1) y la
   Resolución 3871/24 son del mismo período (octubre de 2024) y tratan el mismo tema. Si al migrar a
   Normativa se consolida todo bajo una única sub-sección de "Salidas educativas", evitaría fragmentar el
   tema en dos entradas separadas.
4. **Asociación de sitios vinculados no verificada:** NODRIVE-2 y NODRIVE-3 ya estaban señalados en
   `docs/inventario-sitio-original.md` ("Enlaces dudosos o rotos") como asociados a sus secciones por
   coincidencia temática, no por posición explícita en el HTML original. Esta auditoría no resuelve esa
   duda; solo hereda la clasificación de uso mixto condicionada a que la asociación sea correcta.
5. **No se abrió ningún documento con contenido:** los dos accesos de prueba a Google Drive (AULA-1 y
   DPI-1) confirmaron que el visor requiere autenticación de cuenta Google y no expone el cuerpo del
   archivo. Toda clasificación de este informe se apoya en título, descripción de sección y texto ya
   transcripto en `docs/inventario-sitio-original-anexo.md`. Si alguien con acceso a los Drive puede
   abrir puntualmente los 5 casos de "Revisar manualmente" y el grupo de 11 anexos de actividades
   acuáticas con "confianza media", se resolvería la incertidumbre restante.

---

## No se modificó la estructura pública del sitio (estado al momento de la auditoría)

Se confirma explícitamente que, en la etapa de auditoría original (2026-08-14):

- No se movió, borró ni recategorizó ningún documento.
- No se modificó `src/data/documentos-inspectores-secciones.ts`, `src/data/documentos-inspectores.ts`,
  `src/data/normativa-secciones.ts`, `src/data/formularios-jefatura.ts` ni ningún otro dataset.
- No se modificaron componentes, páginas, navegación ni enlaces.
- No se ejecutó `pnpm build` (no era necesario: no se tocó código de producción).
- El único archivo nuevo creado fue este mismo documento: `docs/auditoria-documentos-inspectores.md`.

La sección siguiente documenta la aplicación posterior de los movimientos de alta confianza.

---

## Estado de aplicación

**Fecha de aplicación:** 2026-08-18. Se aplicaron únicamente los movimientos de alta confianza descritos
arriba (INSPECTORES, FORMULARIOS y NORMATIVA). Los recursos `REVISAR` y `USO_MIXTO` **no** se tocaron,
tal como pedía el encargo. Se usó exclusivamente `pnpm` para validar (`pnpm lint`, `pnpm build`).

### Movidos a Formularios (8)

Todos en `src/data/formularios-inspectores.ts` (archivo nuevo), integrados en
`src/app/formularios/page.tsx` en tres secciones nuevas:

- **Toma de posesión de cargo**: QDH-1 (Acta Inicial), QDH-2 (Acta Primaria), NODRIVE-1 (Google Form).
- **Salidas educativas** (Resolución 3871/24): R3871-4 (Anexo 3), R3871-7 (Anexo 6), R3871-8 (Anexo 7),
  AN9-1 (Anexo 9 — DDJJ). Cada tarjeta incluye un enlace secundario "Ver normativa relacionada" hacia la
  resolución en Régimen académico y normativa (campo nuevo `enlaceRelacionado` en `Documento`, ver
  `src/data/types.ts` y `src/components/ui/DocumentCard.tsx`).
- **Actividades acuáticas**: AAA-1 (autorización), con el mismo enlace secundario hacia la Resolución
  44921855/24.

### Movidos a Normativa (22)

Todos agregados a `src/data/normativa-secciones.ts`, en cuatro secciones temáticas nuevas (en vez de una
lista plana), integradas en `/regimen-academico`:

- **Salidas educativas — Resolución 3871/24** (6): R3871-1 (resolución), R3871-2 (Anexo 1), R3871-3
  (Anexo 2), R3871-5 (Anexo 4), R3871-9 (Anexo 8), CSE-1 (Comunicación Salidas Educativas 2024 — se
  consolidó en esta misma sección en vez de fragmentarla, según lo sugerido en "Observaciones generales").
- **Transporte — aclaraciones (2018)** (1): ACT-1.
- **Actividades acuáticas — Resolución 44921855/24** (14): AAA-2 (resolución), AAA-3 a AAA-13 (Anexos 1 a
  11), AN12-1 (Anexo 12), AN13-1 (Anexo 13).
- **Prácticas profesionalizantes** (1): AN13-2 (Lineamientos 2025) — se separó de la sección "Anexo 13" de
  actividades acuáticas para no asociarlo erróneamente con esa temática, tal como advertía la auditoría.

### Permanecen en Inspectores (17)

- **4 INSPECTORES** (sin cambios): DPI-3, DPI-4, DPI-5, DPI-6.
- **5 REVISAR** (sin tocar, tal como se pidió): AULA-1, DPI-1, DPI-2, DPI-7, R3871-6 (Anexo 5 — Estudiantes
  y acompañantes; quedó marcado con `revisar: true` en el dataset y con una nota explícita en la
  `descripcion` de la sección `resolucion-3871-24`, que ahora solo contiene este documento).
- **8 USO_MIXTO** (sin tocar, pendientes de una revisión específica posterior): OJ-1, DPI-8, QDH-3, QDH-4,
  QDH-5, QDH-6, NODRIVE-2, NODRIVE-3.

### Secciones del dataset de Inspectores eliminadas por quedar vacías

Tras retirar los documentos trasladados, estas seis secciones de
`src/data/documentos-inspectores-secciones.ts` quedaron sin contenido y se eliminaron del array (no se
dejaron placeholders vacíos): `comunicacion-salidas-educativas-y-seguro`, `anexo-9-ddjj`,
`aclaraciones-sobre-transporte`, `autorizacion-actividades-acuaticas`, `anexo-12`, `anexo-13`. La sección
`resolucion-3871-24` se conservó porque Anexo 5 (REVISAR) sigue viviendo ahí.

### Duplicados detectados y resolución

No se encontró ningún documento ya existente en Formularios o Normativa que coincidiera con alguno de los
30 recursos trasladados (se verificó por URL de Drive contra `formularios-jefatura.ts`,
`formularios-oficiales.ts` y el contenido previo de `normativa-secciones.ts`): no hubo que reutilizar ni
descartar ningún registro.

Sí existen, por diseño, dos URLs de Drive que aparecen dos veces en el código: la Resolución 3871/24 y la
Resolución 44921855/24. Cada una vive una sola vez como documento principal en
`src/data/normativa-secciones.ts`, y se repite únicamente como el `href` del enlace secundario
"Ver normativa relacionada" en las tarjetas de Formularios que son anexos de esas resoluciones
(`src/data/formularios-inspectores.ts`). No es contenido duplicado: es la referencia cruzada explícita que
pedía el punto 4 del encargo ("Normativa y Formularios").

### Archivos modificados o creados

- Nuevo: `src/data/formularios-inspectores.ts`.
- `src/data/types.ts` (nuevo campo opcional `enlaceRelacionado` en `Documento`).
- `src/components/ui/DocumentCard.tsx` (renderiza `enlaceRelacionado` si está presente).
- `src/data/documentos-inspectores-secciones.ts` (se retiraron los 8+22 documentos trasladados; se
  eliminaron 6 secciones vacías; se actualizó la `descripcion` de `resolucion-3871-24` y `que-debo-hacer`
  para no mencionar contenido que ya no está en la página).
- `src/data/documentos-inspectores.ts` (se retiró `formularioTomaDePosesion`, trasladado a
  `formularios-inspectores.ts`; se mantiene `sitiosVinculados` sin cambios).
- `src/data/normativa-secciones.ts` (se agregaron las 4 secciones temáticas nuevas con los 22 documentos).
- `src/app/documentos-inspectores/page.tsx` (se quitó el bloque de toma de posesión; se simplificó el
  bloque de sitios vinculados con una nota que remite a Formularios; se actualizaron título/descripción).
- `src/app/formularios/page.tsx` (se agregaron las secciones "Toma de posesión de cargo", "Salidas
  educativas" y "Actividades acuáticas"; se actualizó la descripción de metadata).
- `src/app/regimen-academico/page.tsx` (se actualizó descripción/metadata para mencionar salidas
  educativas y actividades acuáticas).
- `src/data/accesos.ts` (se actualizó la descripción del acceso rápido a "Documentos para inspectores/as"
  para reflejar el contenido que queda tras la reorganización).

### Validación ejecutada

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compiló correctamente (`next build`), generó las 13 rutas estáticas esperadas, incluidas
  `/documentos-inspectores`, `/formularios` y `/regimen-academico`, sin errores de TypeScript.
- Se verificó por HTTP (servidor de desarrollo) que las tres páginas devuelven 200, que las nuevas
  secciones de Formularios y Normativa aparecen, y que los títulos de los documentos trasladados ya no
  aparecen en `/documentos-inspectores` (solo permanece el Anexo 5 marcado para revisar y el bloque de
  sitios vinculados).
- Se verificó por script que no hay IDs de sección duplicados en `documentos-inspectores-secciones.ts` ni
  en `normativa-secciones.ts`, y que no hay URLs duplicadas entre datasets salvo los dos enlaces
  secundarios intencionales descritos arriba.
- No se reemplazó ningún enlace por otro encontrado en internet; todas las URLs de Drive/Forms son las
  mismas que ya estaban en el dataset original.

---

## Actualización 2026-08-18 — retiro de "Toma de posesión de cargo" de Formularios

Tras la aplicación descrita arriba, se recibió el encargo de retirar de la vista pública de `/formularios`
toda la sección "Toma de posesión de cargo" (QDH-1, QDH-2 y NODRIVE-1), por no existir en el sitio una
explicación completa y verificable del circuito completo de toma de posesión. Mostrar esos tres recursos
aislados, sin ese contexto, podía confundir al usuario. Esta sección documenta esa segunda intervención sin
sobrescribir el análisis ni el "Estado de aplicación" anteriores.

**Qué se hizo:**

- Se eliminó la sección "Toma de posesión de cargo" de `src/app/formularios/page.tsx` (encabezado,
  descripción, las dos tarjetas de acta y el acceso al Google Form), y se quitó del `import` la referencia
  a `actasTomaDePosesion` y `formularioTomaDePosesion`. No se reemplazó por ningún otro acceso.
- **No se borraron los datos.** `actasTomaDePosesion` y `formularioTomaDePosesion` siguen existiendo en
  `src/data/formularios-inspectores.ts`, ahora con un comentario que documenta el retiro, la fecha y el
  motivo, y que advierte no reintroducirlos en otra página sin resolver antes la falta de contexto sobre el
  circuito. No se usan en ningún otro archivo del proyecto.
- Se actualizó la metadata (`description`) de `/formularios` para no mencionar "toma de posesión de cargo".
- Se actualizó la nota ("Notice") de `/documentos-inspectores` que antes decía que estas actas y el
  formulario "se trasladaron a Formularios": ahora dice que se retiraron de la vista pública por falta de
  contexto verificable sobre el circuito, con referencia a este documento. Estos recursos ya no se
  mencionan como visibles en ninguna página pública del sitio.
- No se inventó ni reconstruyó el procedimiento de toma de posesión en ningún texto.
- No se muestran estos recursos automáticamente en ninguna otra página.

**Validación ejecutada:**

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compiló correctamente, generó las mismas 13 rutas estáticas de antes (ninguna ruta se
  agregó ni se quitó), sin errores de TypeScript.
- Se verificó por HTTP que la sección "Toma de posesión de cargo" y los tres recursos (ambas actas y el
  Google Form) ya no aparecen en `/formularios`; que no quedó ningún encabezado ni descripción huérfana en
  su lugar; y que el resto de las secciones de Formularios ("Jefatura Distrital", "Ingreso a la Docencia y
  Listados", "Puntaje y carrera docente", "Licencias docentes", "Otros formularios", "Salidas educativas",
  "Actividades acuáticas") siguen renderizando sin cambios de contenido.

---

## Actualización 2026-08-18 (2) — "Salidas educativas" muestra el paquete completo de 9 anexos

Se recibió el encargo de que la sección "Salidas educativas" de `/formularios` deje de mostrar solo los 4
anexos operativos (Anexo 3, 6, 7, 9) y pase a mostrar los 9 anexos disponibles de la Resolución 3871/24,
en orden numérico, reutilizando los mismos registros ya existentes en Normativa en vez de duplicarlos.

**Qué se hizo:**

- Se creó `src/data/anexos-resolucion-3871-24.ts` como fuente única de los 9 anexos (Anexo 1 a Anexo 9),
  cada uno con su título real, un `descripcion` con la función legible ya verificada (p. ej. "Anexo 1 —
  Requisitos"), tipo de archivo y enlace — sin URLs nuevas, todas reutilizadas de los datasets existentes.
  También exporta `resolucion3871_24` (referencia {título, URL} a la resolución, para el enlace "Ver
  normativa relacionada").
- `src/data/normativa-secciones.ts` ahora importa desde ese archivo los Anexos 1, 2, 4 y 8 (en vez de
  tenerlos duplicados inline) para la sección "Salidas educativas — Resolución 3871/24"; el resto de esa
  sección (texto de la resolución y Comunicación Salidas Educativas 2024) no cambió.
- `src/app/formularios/page.tsx` reemplazó la grilla de tarjetas de 4 anexos por un listado numerado
  compacto (filas con badge de número 1 a 9, función legible como texto principal del enlace, nombre de
  archivo técnico como referencia secundaria debajo, y tag de tipo de archivo), más un único enlace "Ver
  normativa relacionada (Resolución 3871/24)" a nivel de sección en vez de repetirlo en cada tarjeta —
  decisión de diseño para evitar 9 enlaces idénticos repetidos, evaluada con la guía de diseño frontend.
- **Anexo 5** (Estudiantes y acompañantes): se incluye en el listado de Formularios con su título de
  sección ya verificado, pero sin descripción funcional inventada, y se conserva la marca `revisar: true`
  (se muestra una nota "pendiente confirmar..." en lugar de una etiqueta de tipo de trámite). El mismo
  objeto (`anexo5EstudiantesYAcompanantes`) se reutiliza ahora también en
  `documentos-inspectores-secciones.ts` (antes era un literal duplicado con la misma URL): sigue apareciendo
  ahí, sin cambios de comportamiento, dentro del bucle REVISAR de Inspectores.
- `src/data/formularios-inspectores.ts` perdió el array `anexosSalidasEducativas` (4 anexos) y su constante
  local de referencia a la resolución, ambos redundantes tras la consolidación; se mantienen intactos
  `actasTomaDePosesion`, `formularioTomaDePosesion` (retirados de la vista pública, sin cambios) y
  `autorizacionActividadesAcuaticas` (Actividades acuáticas, no tocado por este encargo).
- La Resolución 3871/24 sigue íntegra en Régimen académico y normativa; no se retiró nada de ahí.

**Validación ejecutada:**

- `pnpm lint`: sin errores ni advertencias. `pnpm build`: compiló correctamente, mismas 13 rutas estáticas.
- Se verificó por HTTP que los 9 anexos aparecen en `/formularios` en orden 1 a 9, cada uno con un `id` de
  Drive único (sin enlaces duplicados accidentales); que `/regimen-academico` sigue mostrando la resolución
  y los Anexos 1, 2, 4 y 8 sin cambios de contenido; y que un script de verificación de `href` duplicados
  entre todos los datasets solo encontró la referencia cruzada intencional ya documentada (Resolución
  44921855/24, usada como `enlaceRelacionado` en la tarjeta de Actividades acuáticas).
- El layout se probó responsive (filas apiladas con `flex-wrap`, badge de número con ancho fijo, texto con
  `break-words`), y no se detectó ninguna advertencia de React en el servidor de desarrollo.

**Resultado: 9 anexos visibles en "Salidas educativas" de `/formularios`**, en este orden:

1. Anexo 1 — Requisitos
2. Anexo 2 — Tiempos
3. Anexo 3 — Autorización de salidas en el radio de la escuela
4. Anexo 4 — Salidas educativas
5. Anexo 5 — Estudiantes y acompañantes (pendiente de revisión — no se afirma su clasificación funcional)
6. Anexo 6 — Autorización de menores de 18 años
7. Anexo 7 — Autorización de mayores de 18 años
8. Anexo 8 — Transporte
9. Anexo 9 — Declaración jurada (DDJJ)

---

## Actualización 2026-08-19 — retiro de "Salidas educativas" de Formularios

Se recibió el encargo de eliminar de `/formularios` la sección "Salidas educativas" completa (encabezado,
texto introductorio, listado de los 9 anexos y enlace "Ver normativa relacionada"), porque la Resolución
3871/24 y sus 9 anexos ya están correctamente organizados en `/regimen-academico` (sección "Salidas
educativas — Resolución 3871/24") y mostrar el mismo bloque temático completo en ambas páginas era
duplicación, no una referencia cruzada puntual.

**Qué se hizo:**

- Se eliminó la sección "Salidas educativas" de `src/app/formularios/page.tsx` (el bloque completo:
  `SectionHeading`, el enlace "Ver normativa relacionada (Resolución 3871/24)" y el listado numerado de 9
  filas). La sección "Actividades acuáticas" pasó a ser la 6, ocupando el lugar de la anterior sección 7
  sin dejar hueco ni encabezado huérfano.
- Se quitaron de `src/app/formularios/page.tsx` los imports que solo se usaban en esa sección:
  `Tag` (`@/components/ui/Tag`), `etiquetaTipo` (`@/lib/documentos`) y
  `resolucion3871_24`/`anexosResolucion3871_24` (`@/data/anexos-resolucion-3871-24`).
- Se actualizó la metadata (`description`) de `/formularios` para no mencionar el "paquete completo de
  anexos de salidas educativas", que ya no se muestra ahí.
- **No se tocó** `src/data/anexos-resolucion-3871-24.ts`: sigue siendo la fuente única de los 9 anexos,
  con los mismos registros, títulos, `href` y la marca `revisar: true` del Anexo 5. Tampoco se modificó
  `src/data/normativa-secciones.ts`, que sigue importando desde ahí los Anexos 1, 2, 4 y 8 para
  `/regimen-academico`, ni `documentos-inspectores-secciones.ts`, que sigue mostrando el Anexo 5 dentro del
  bloque REVISAR de `/documentos-inspectores`. No se creó ningún dataset nuevo ni se duplicaron los anexos
  en otro lugar.
- El contenido de "Salidas educativas — Resolución 3871/24" en `/regimen-academico` no se modificó: este
  encargo fue solo sobre Formularios; la revisión visual y de contenido de esa sección queda para después.

**Validación ejecutada:**

- `pnpm lint`: sin errores ni advertencias. `pnpm build`: compiló correctamente, mismas 13 rutas estáticas
  (no se agregó ni se quitó ninguna).
- Se verificó por HTTP que "Salidas educativas" y los 9 anexos ya no aparecen en `/formularios`; que no
  quedó espacio vacío ni encabezado huérfano en su lugar (la sección "Actividades acuáticas" queda
  inmediatamente después de "Otros formularios"); y que los 9 anexos y la Resolución 3871/24 siguen
  disponibles sin cambios en `/regimen-academico`.
- Se confirmó que ningún `href` se perdió: los 9 anexos, la resolución y todas las demás secciones de
  Formularios ("Jefatura Distrital", "Ingreso a la Docencia y Listados", "Puntaje y carrera docente",
  "Licencias docentes", "Otros formularios", "Actividades acuáticas") siguen presentes, y que no quedaron
  imports ni componentes sin usar en `src/app/formularios/page.tsx`.

**Resultado:** los anexos de la Resolución 3871/24 permanecen disponibles en Régimen académico y normativa
(`/regimen-academico`); dejaron de mostrarse en Formularios (`/formularios`) para evitar la duplicación de
un bloque temático completo entre ambas páginas.

---

## Actualización 2026-09-14 — situaciones de conflicto y vulneración de derechos, a `/regimen-academico`

Sobre los candidatos QDH-3 a QDH-6 identificados en "Uso mixto" (ver arriba). **`/documentos-inspectores`
no se eliminó todavía** — sigue publicada, sin cambios de estructura ni de contenido salvo lo descrito
abajo.

### Qué se movió/reutilizó

Se agregó en `/regimen-academico`, dentro de "Normativa complementaria y temáticas específicas" (después
de los Regímenes Académicos y sin mezclarse con Salidas educativas, PEAT, Prácticas profesionalizantes ni
Convivencia), un bloque nuevo **"Situaciones de conflicto y vulneración de derechos"** con tres recursos:

| ID de esta auditoría | Título público en `/regimen-academico` | Naturaleza |
| --- | --- | --- |
| QDH-4 | Guía de Orientación para la Intervención en situaciones conflictivas y vulneración de derechos | Guía principal |
| QDH-6 | Glosario del Relevamiento de situaciones conflictivas y de vulneración de derechos en el escenario escolar | Material de apoyo (definiciones) |
| QDH-5 | Cambios en el relevamiento de situaciones conflictivas — 2025 | Material de apoyo / actualización — no es normativa |

Los tres ya estaban clasificados como `USO_MIXTO` en esta auditoría; QDH-4 ya se había recomendado como
"mejor como material transversal (Normativa/orientación institucional)" en la sección "Candidatos a sacar
de Inspectores". Ningún `href` cambió: son los mismos enlaces de Drive de siempre.

### Qué quedó fuera

**QDH-3 — "PLANILLA Situacion Conflicto en blanco.docx" no se incorporó a `/regimen-academico`.** Es un
instrumento de relevamiento que completan las escuelas pero que Inspección gestiona y consolida (ver fila
QDH-3 en "Uso mixto" arriba) — no documentación de referencia para el público general. Sigue disponible,
sin cambios, únicamente en `/documentos-inspectores`. No se borró el archivo ni el enlace.

### Fuente de datos compartida

Se creó `src/data/situaciones-conflicto.ts` (mismo patrón que `anexos-resolucion-3871-24.ts` y
`practicas-educativas-ambientes-trabajo.ts`): exporta los tres `Documento` — con título público limpio, sin
`.pdf`/`.docx`/`(1)` — como fuente única. `src/data/normativa-secciones.ts` y
`src/data/documentos-inspectores-secciones.ts` importan desde ahí; ningún dataset duplica el objeto ni el
`href`. Efecto secundario esperado: `/documentos-inspectores` ahora muestra estos tres recursos con el
mismo título limpio (antes mostraba el nombre de archivo crudo, con extensión). El objeto de la Planilla
excluida permanece definido solo en `documentos-inspectores-secciones.ts`, sin tocar.

Cuando se elimine `/documentos-inspectores` (tarea futura, no ejecutada acá), alcanza con borrar esa página
y `documentos-inspectores-secciones.ts`/`documentos-inspectores.ts`: `situaciones-conflicto.ts` es un
archivo neutral, ajeno al nombre "inspectores", así que `/regimen-academico` sigue funcionando sin cambios.

### Acceso público

Estos tres materiales pasan a considerarse **de acceso público general** para instituciones educativas
(equipos directivos, EOE, docentes), no exclusivos de inspección — consistente con el perfil de uso ya
documentado para QDH-4/5/6 en la sección "Uso mixto".

### Archivos modificados

- `src/data/situaciones-conflicto.ts` (nuevo).
- `src/data/normativa-secciones.ts` (import + nueva sección en `seccionesComplementarias`).
- `src/data/documentos-inspectores-secciones.ts` (los tres documentos ahora importan de la fuente
  compartida; la Planilla se mantuvo inline, sin cambios).
- `docs/auditoria-documentos-inspectores.md` (esta sección).

### Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta, mismas rutas estáticas (no se agregó ni quitó ninguna).
- Verificación por HTTP: en `/regimen-academico` aparecen la Guía, el Glosario y el material de Cambios en
  el relevamiento 2025, con las etiquetas "Guía principal" / "Material de apoyo"; el bloque queda ubicado
  después de los Regímenes Académicos y antes de Antecedentes/histórico, sin mezclarse con Convivencia; la
  Planilla no aparece en ningún punto de `/regimen-academico`. En `/documentos-inspectores` los cuatro
  documentos de "¿Qué debo hacer? — situaciones de conflicto" (incluida la Planilla) siguen disponibles.

---

## Actualización 2026-09-14 (2) — retiro de la página pública `/documentos-inspectores`

Con los tres recursos de situaciones de conflicto ya confirmados en `/regimen-academico` (actualización
anterior), se ejecutó el encargo de retirar por completo la sección pública "Documentos para
inspectores/as" y su ruta `/documentos-inspectores`.

### Auditoría final del contenido restante

Al momento de retirar la página, `documentos-inspectores-secciones.ts` conservaba, además de los tres ya
migrados, estos recursos (IDs de la tabla completa de esta auditoría, sección "Tabla completa por sección
del dataset"):

| Sección del dataset | Recursos | Clasificación previa | Decisión |
| --- | --- | --- | --- |
| `aula-de-fortalecimiento` | AULA-1 (Estados Administrativos Aulas de Fortalecimiento) | REVISAR — destinatario no verificable | Se retira de la vista pública. No hay evidencia de utilidad pública general confirmada; forzar una ubicación sin esa confirmación sería inventar un vínculo que la propia auditoría dejó pendiente. |
| `oficios-judiciales` | OJ-1 (Instructivo Oficios Judiciales, texto embebido) | USO_MIXTO, ya recomendado como "Normativa/procedimientos" en la sección "Candidatos a sacar de Inspectores" de esta misma auditoría | **Se migra** a `/regimen-academico` (nueva sección "Oficios judiciales — instructivo de tramitación" en `normativa-secciones.ts`). El circuito está dirigido en primer lugar al Equipo Directivo de cada institución, con copia a Inspección — exactamente el perfil "útil para las instituciones educativas, no exclusivo de inspección" de este encargo. Texto reproducido íntegro (verificado carácter por carácter contra el original), solo se quitó el título duplicado al inicio del párrafo. |
| `documentos-para-inspectores-as` | DPI-1, DPI-2, DPI-7 (REVISAR) y DPI-3 a DPI-6, DPI-8 (INSPECTORES / USO_MIXTO) | Esta misma auditoría ya los describía como "instrumentos de trabajo ligados a un proceso que Inspección conduce directamente", que "deberían permanecer en Inspectores" | Se retiran de la vista pública. No existe otra página pública para instrumentos exclusivos de Inspección: `/inspectores` es solo un directorio de nombres y contacto, no un repositorio de documentos, y ampliar su propósito para alojarlos sería una reorganización no pedida por este encargo. |
| `que-debo-hacer` | QDH-3 (Planilla — ver actualización anterior) | USO_MIXTO | Ya excluida; sin cambios. |
| `resolucion-3871-24` | R3871-6 / Anexo 5 | Ya presente en `/regimen-academico` | Ninguna acción: el Anexo 5 ya se publica en la sección "Salidas educativas — Resolución 3871/24" a través de `anexosResolucion3871_24` (ver `src/data/anexos-resolucion-3871-24.ts`); esta sección del dataset de Inspectores era una referencia cruzada redundante. |
| `sitiosVinculados` (`documentos-inspectores.ts`) | NODRIVE-2, NODRIVE-3 (sitios externos) | USO_MIXTO, con la salvedad ya registrada de que su asociación a esta sección "no está verificada" (ver tabla "Uso mixto" y `docs/inventario-sitio-original.md`) | Se retiran de la vista pública. El propio `README.md` los listaba en "Próximos pasos" como pendientes de confirmación por la Jefatura Distrital — esa confirmación nunca llegó, así que no correspondía darlos por buenos e incorporarlos a una sección nueva. |

Ningún archivo de Drive ni sitio externo se borró: la tabla de arriba describe únicamente qué deja de estar
enlazado desde el sitio.

### Navegación retirada

- `src/data/navigation.ts`: se quitó la entrada `{ href: "/documentos-inspectores", label: "Documentos
  para inspectores/as" }` de `mainNav`. Esto corrige automáticamente el menú de escritorio, el menú móvil
  y el listado "Secciones" del pie de página (los tres se generan desde `mainNav`), y también
  `src/app/sitemap.ts`, que arma sus rutas a partir del mismo array.
- `src/data/accesos.ts`: se quitó la tarjeta de acceso rápido a "Documentos para inspectores/as" de
  `accesosPrincipales` (la grilla "¿Qué estás buscando?" de la portada). Como ninguna tarjeta restante usa
  el ícono `folder`, se quitó también esa clave de `IconKey`.
- `src/app/page.tsx`: se quitó `FolderIcon` del import y del mapa `icons` (quedó sin uso tras el punto
  anterior). El componente `FolderIcon` en sí no se tocó: sigue en uso en `/formularios`.

No se encontró ningún otro enlace interno (`<Link>`/`<a href>`) hacia `/documentos-inspectores` en el
proyecto.

### Ruta eliminada, sin redirección

Se eliminó `src/app/documentos-inspectores/` (la carpeta de la ruta completa, no un archivo vacío).

**No se agregó una redirección** desde `/documentos-inspectores` hacia `/regimen-academico`. Motivo: el
sitio todavía no tuvo su primer despliegue público. `src/data/site.ts` define `siteUrl` como
`https://jefatura-distrital-sag.vercel.app` (dominio genérico, no uno propio asignado), y el propio
`README.md` (sección "Despliegue en Vercel") instruye actualizar ese valor **"antes del primer deploy"** y
lista "Configurar un dominio propio en Vercel" entre los "Próximos pasos recomendados (no implementados en
esta etapa)". No hay evidencia de que la URL haya sido indexada o visitada públicamente, así que no hay
tráfico ni enlaces externos que una redirección deba preservar. Si esto cambia (el sitio ya está publicado
o indexado) y se detectan visitas a `/documentos-inspectores`, agregar ahí un `redirects()` en
`next.config.ts` hacia `/regimen-academico` es la vía más simple.

### Dataset: eliminado, no refactorizado

Se eliminaron completos `src/data/documentos-inspectores-secciones.ts` y `src/data/documentos-inspectores.ts`.
No se refactorizaron a una fuente compartida porque no quedaba nada reutilizable dentro: los tres
documentos de situaciones de conflicto ya se habían extraído a `src/data/situaciones-conflicto.ts` en la
actualización anterior, el Anexo 5 ya vive en `anexos-resolucion-3871-24.ts`, y el resto del contenido se
migró (Oficios judiciales) o se retiró deliberadamente de la vista pública (ver tabla arriba) — no
"redistribuido" porque nunca fue apropiado para una sección pública, según la propia clasificación de esta
auditoría.

Se actualizaron los comentarios de cabecera de `anexos-resolucion-3871-24.ts` y `situaciones-conflicto.ts`
que todavía mencionaban `documentos-inspectores-secciones.ts` como consumidor, para que no describan un
archivo que ya no existe.

### `material-original/` intacto

No se tocó ningún archivo de `material-original/`: la eliminación fue de la sección pública y de los
datasets que la alimentaban, no del respaldo documental original del sitio.

### `README.md`

- Se quitó `src/data/documentos-inspectores-secciones.ts` de la lista de archivos "Cómo agregar un
  documento" (línea ya inexacta apenas se borró el archivo).
- Se corrigió la referencia de "Cómo agregar un formulario" de `src/data/documentos-inspectores.ts` a
  `src/data/formularios-inspectores.ts` — el ejemplo citado (`formularioTomaDePosesion`) ya vivía ahí desde
  el 2026-08-18 y la referencia había quedado desactualizada.
- Se reescribió la nota sobre los "dos enlaces de sitios vinculados" en "Contenido pendiente / a revisar"
  para reflejar que dejaron de mostrarse en el sitio (ver tabla arriba), en vez de describir una
  asociación a una página que ya no existe.
- No se tocaron `docs/inventario-sitio-original.md`, `docs/inventario-sitio-original-anexo.md` ni
  `docs/referencia-visual-abc.md`: son registros históricos de investigación sobre el sitio original y
  sobre decisiones de diseño ya tomadas, no documentación de la navegación vigente.

### Archivos eliminados

- `src/app/documentos-inspectores/page.tsx` (y la carpeta de ruta).
- `src/data/documentos-inspectores-secciones.ts`.
- `src/data/documentos-inspectores.ts`.

### Archivos modificados

- `src/data/normativa-secciones.ts` (nueva sección "Oficios judiciales — instructivo de tramitación").
- `src/data/navigation.ts` (se quitó la entrada del menú principal).
- `src/data/accesos.ts` (se quitó la tarjeta de acceso rápido y la clave `folder` de `IconKey`).
- `src/app/page.tsx` (se quitó el import y el mapeo de `FolderIcon`).
- `src/data/anexos-resolucion-3871-24.ts` (comentario de cabecera actualizado).
- `src/data/situaciones-conflicto.ts` (comentario de cabecera actualizado).
- `README.md` (tres referencias corregidas, ver arriba).
- `docs/auditoria-documentos-inspectores.md` (esta sección).

### Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta, TypeScript sin errores. **14 rutas estáticas** (antes 15): desapareció
  `/documentos-inspectores` y ninguna otra ruta cambió.
- Se verificó por búsqueda de texto en todo `src/` y en `README.md` que no queda ningún `/documentos-inspectores`,
  `Documentos para inspectores` ni import de los dos archivos eliminados fuera de comentarios que describen
  la historia del cambio (no imports reales).
- Se verificó que el texto de "Oficios judiciales" migrado a `/regimen-academico` es idéntico, carácter por
  carácter, al original (se comparó programáticamente antes de borrar el dataset de origen): solo se quitó
  el título "Instructivo Oficios Judiciales" duplicado al inicio del párrafo.
- No se verificó visualmente en navegador (la extensión de Chrome no está conectada en esta sesión); la
  verificación se hizo contra el HTML devuelto por el servidor de desarrollo y contra la lista de rutas de
  `pnpm build`.

---

## Actualización 2026-09-14 (3) — retiro de "Oficios judiciales" de `/regimen-academico`

Tras la actualización anterior, se decidió que "Oficios judiciales — instructivo de tramitación" tampoco
correspondía a `/regimen-academico`: es un circuito operativo/administrativo específico (tramitación de
oficios judiciales), no un Régimen Académico ni normativa educativa, y su texto completo (más de 7500
caracteres) hacía excesivamente largo el bloque "Normativa complementaria y temáticas específicas" y
dificultaba la lectura de la página.

**Historial completo de este contenido**, para que quede trazado en un solo lugar:

1. Publicado originalmente en "Documentos para inspectores/as" (`/documentos-inspectores`), sección
   "OFICIOS JUDICIALES".
2. 2026-09-14 (2): trasladado a `/regimen-academico` al retirarse esa página pública (ver arriba).
3. 2026-09-14 (3), esta actualización: retirado también de `/regimen-academico`, por no corresponder a esa
   temática. **No se movió todavía a ninguna otra página** — se dejó pendiente de decidir su ubicación
   definitiva, tal como pidió el encargo.

### Qué se hizo

- Se sacó de `seccionesComplementarias` (el array que `/regimen-academico` renderiza) el objeto de la
  sección `oficios-judiciales-instructivo`: título, texto completo del instructivo y el array `documentos`
  (vacío) que lo acompañaba.
- **No se borró el contenido.** El mismo objeto (mismo `id`, mismo `titulo`, mismo texto —verificado
  carácter por carácter contra la versión que se había migrado en la actualización anterior— se conservó en
  `src/data/normativa-secciones.ts` como una constante exportada aparte,
  `export const oficiosJudicialesInstructivo`, que ningún componente ni página importa. Queda disponible
  como respaldo interno y punto de partida si más adelante se decide darle una ubicación pública propia.
- Se actualizó el comentario que acompaña a esa constante para documentar las tres etapas del historial
  (arriba) en vez de solo la primera migración.
- No se tocó ningún otro bloque de `/regimen-academico`: Regímenes Académicos, Salidas educativas, PEAT,
  Prácticas profesionalizantes, Inscripción de estudiantes, Situaciones de conflicto y vulneración de
  derechos, y Antecedentes/histórico siguen exactamente igual.

### Archivos modificados

- `src/data/normativa-secciones.ts` (se sacó la sección del array público; se conservó como constante sin
  usar, con comentario actualizado).
- `docs/auditoria-documentos-inspectores.md` (esta sección).

### Validación

- `pnpm lint`: sin errores ni advertencias (la constante exportada y sin importar no genera warning, al no
  haber una regla de "unused exports" configurada en este proyecto).
- `pnpm build`: compilación correcta, TypeScript sin errores, **mismas 14 rutas estáticas** de la
  actualización anterior (ninguna ruta se agregó ni se quitó).
- Verificación por HTTP contra el HTML renderizado: ni el título "Oficios judiciales" ni el texto del
  instructivo aparecen ya en `/regimen-academico`; no queda ningún encabezado huérfano en su lugar (el
  cierre del array pasa directamente de "Situaciones de conflicto y vulneración de derechos" a la sección
  "Antecedentes / documentación histórica"); y se confirmó que ningún otro bloque de la página (Regímenes
  Académicos, Salidas educativas, PEAT, Prácticas profesionalizantes, Inscripción de estudiantes,
  Situaciones de conflicto, Antecedentes) perdió contenido.
- Se re-verificó, con el mismo método de comparación carácter por carácter usado en la actualización
  anterior, que el texto conservado en `oficiosJudicialesInstructivo` es idéntico al que se había migrado
  desde "Documentos para inspectores/as".
