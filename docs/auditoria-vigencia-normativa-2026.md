# Auditoría de vigencia normativa — Régimen académico y normativa (`/regimen-academico`)

**Fecha de referencia de la auditoría:** 19 de agosto de 2026.
**Alcance:** todos los recursos que alimentan `/regimen-academico` — `src/data/normativa-secciones.ts` y, por
referencia, `src/data/anexos-resolucion-3871-24.ts` (fuente compartida con Formularios y con
`documentos-inspectores-secciones.ts`). No se modificó ningún dataset ni la página pública durante esta
auditoría.

**Método:** para cada recurso se buscó su fuente oficial (prioridad `abc.gob.ar` > subdominios DGCyE >
`servicios.abc.gob.ar` > normativa oficial de PBA (`normas.gba.gob.ar`) > Boletín Oficial PBA > `gba.gob.ar`
> identificadores GDEBA) usando búsqueda web y, cuando fue posible, lectura directa del PDF oficial. No se
usaron blogs, sindicatos, medios ni copias de terceros como fundamento de vigencia — solo como pista para
ubicar la fuente oficial. Cuando la evidencia encontrada no alcanzó para confirmar un estado, se clasificó
como `NO_VERIFICADA` en lugar de asumir vigencia o derogación.

---

## Hallazgo principal (leer primero)

**La sección "Actividades acuáticas — Resolución 44921855/24" probablemente no muestra lo que dice
mostrar.** Los 13 anexos publicados bajo ese título en `normativa-secciones.ts`
(`actividades-acuaticas-resolucion-44921855-24`) tienen identificadores GDEBA (`IF-2024-44407482`,
`IF-2024-44217366`, `IF-2024-44217292`, `IF-2024-44217254`, `IF-2024-44217187`, `IF-2024-44406983`,
`IF-2024-44215992`, y el resto de la serie descendente hasta `IF-2024-44215709`) que, verificados contra un
PDF oficial alojado en `abc.gob.ar`, corresponden a los **Anexos I a XIII de la Resolución 5356/24
(RESOC-2024-5356-GDEBA-DGCYE) — "Sistema de Prácticas Educativas en Ambientes de Trabajo" (PEAT)** — una
resolución sobre pasantías, prácticas profesionalizantes y aproximación al mundo del trabajo, **sin relación
temática con actividades acuáticas**. Ver el detalle en la fila correspondiente más abajo y en "Normativa que
requiere atención". No se modificó el dataset; se recomienda revisión manual abriendo el PDF real detrás de
cada `href` de Google Drive de esa sección antes de tomar cualquier decisión.

---

## 1. Salidas educativas — Resolución 3871/24 y sus 9 anexos

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `salidas-educativas-resolucion-3871-24` (normativa) + `anexos-resolucion-3871-24.ts` (fuente compartida) |
| Título mostrado | "Salidas educativas — Resolución 3871/24" |
| Número oficial | Resolución 3871/24 (RESOC-2024-3871-GDEBA-DGCYE / GDEBA n.° interno 35942004) |
| Año | 2024 (sesión de Consejo General de Cultura y Educación del 3/10/2024; vigente para instituciones desde el 15/10/2024) |
| Organismo | Dirección General de Cultura y Educación (DGCyE), Provincia de Buenos Aires |
| Tema | Requisitos generales para Salidas Educativas y de Representación Institucional, todos los niveles y modalidades |
| URL actualmente usada | Google Drive (`resolucion3871_24.href`, id `1aKytfhKaNnuXwAiP-w5RL-eTfapho9Ww`) |
| Fuente oficial verificada | `abc.gob.ar/secretarias/sites/default/files/2024-12/Resol 3871-24. Salidas Educativas.pdf` (PDF oficial leído directamente) |
| ¿Coinciden URL actual y fuente oficial? | No se pudo comparar byte a byte (Drive vs. `abc.gob.ar`), pero el contenido y los 9 IF de anexo coinciden exactamente con el PDF oficial |
| Estado | **VIGENTE** |
| Normativa posterior relacionada | Ninguna modificación encontrada durante 2025–2026. Existen instructivos regionales de aplicación (2025, 2026) publicados por Jefaturas Distritales, que son guías de implementación, no modificaciones a la resolución |
| Acción recomendada | `MANTENER` |
| Nivel de confianza | Alto (texto oficial leído directamente, con derogación expresa verificada) |
| Fecha de verificación | 2026-08-19 |

**Derogación confirmada:** el Artículo 1 del texto oficial dice literalmente *"Derogar la
RESFC-2017-378-E-DGCYE y toda otra norma que se oponga a la presente"*. Cadena histórica reconstruida:
Resolución 498/10 (modificada por 943/14) → Resolución 378/17 → **Resolución 3871/24 (vigente)**.

### Los 9 anexos (verificados contra el PDF oficial por número IF)

| Anexo | IF oficial | Título en el proyecto | Título/función según texto oficial | Coincide |
|---|---|---|---|---|
| I | IF-2024-35027702 | Anexo 1 — Requisitos | Requisitos generales | Sí |
| II | IF-2024-35028005 | Anexo 2 — Tiempos | Plazos de presentación | Sí (equivalente) |
| III | IF-2024-35029272 | Anexo 3 — Autorización de salidas en el radio de la escuela | Planilla de autorización | Sí |
| IV | IF-2024-35029395 | Anexo 4 — Salidas educativas | Formulario de itinerario | Parcial — el título del proyecto es más genérico que la función real del anexo |
| V | IF-2024-35029666 | Anexo 5 — Estudiantes y acompañantes (`revisar: true`) | Planilla de estudiantes | Sí — **esto resuelve la duda interna marcada con `revisar`: es una planilla operativa, no un anexo reglamentario** |
| VI | IF-2024-35030478 | Anexo 6 — Autorización de menores de 18 años | Planilla informativa / autorización | Sí |
| VII | IF-2024-35030927 | Anexo 7 — Autorización de mayores de 18 años | Declaración jurada del estudiante | Parcial — es una DDJJ, no estrictamente una "autorización" |
| VIII | IF-2024-35031394 | Anexo 8 — Transporte | Informe de transporte | Sí |
| IX | IF-2024-35031909 | Anexo 9 — Declaración jurada (DDJJ) | Declaración jurada de directivos | Sí (agregar "de directivos" sería más preciso) |

**Estado de los 9 anexos:** `VIGENTE` (mismo estado que la resolución madre). Los 9 IF coinciden en orden y
cantidad con el documento oficial, por lo que los `href` de Drive parecen corresponder al contenido correcto.

**Sobre el Anexo 5 (`revisar: true`):** con esta verificación, el anexo se identifica con confianza media-alta
como una planilla operativa ("Planilla de estudiantes"), no como texto reglamentario. Esto es información
nueva para decidir si corresponde levantar la marca `revisar`, pero **no se tocó el dataset** — queda
documentado para una futura tarea de aplicación.

**Acción recomendada (títulos):** `ACTUALIZAR_TITULO` para Anexo 4, Anexo 7 y Anexo 9 (afinar la descripción
funcional), confianza media (la lectura del PDF oficial fue automatizada, no una transcripción manual
verbatim).

---

## 2. Régimen Académico Nivel Secundario — Resolución 1650/24 y anexos

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `regimen-academico` (dentro de `seccionesNormativa`) + `anexo-8` |
| Título mostrado | "RÉGIMEN ACADÉMICO" (descripción interna cita "Resolución N°1650/24") |
| Número oficial | Resolución conjunta 1650/2024 (RSC-2024-20025654-GDEBA-DGCYE) |
| Año | 2024 (dictada 07/06/2024, publicada 25/06/2024) |
| Organismo | DGCyE, Provincia de Buenos Aires |
| Tema | Régimen Académico para la Educación Secundaria Obligatoria, gestión estatal y privada |
| URL actualmente usada | Google Drive (id `1rialZ86fNXsFr9xCfWVGb_tIWFYz7wLM`) |
| Fuente oficial verificada | `normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/1650/440121` (Sistema de Información Normativa y Documental, fuente oficial provincial) |
| Estado | **VIGENTE_CON_MODIFICACIONES** |
| Normativa posterior relacionada | Deroga expresamente Res. Provincial 587/11, Res. Provincial 1480/11, Res. Conjunta 1235/2023 y Res. Conjunta 1236/2023. Está complementada por **Resolución conjunta 4232/2024** (22/11/2024 — asignación de módulos presenciales para trayectorias educativas) y **Resolución conjunta 1884/2025** (28/05/2025 — crea el cargo de Coordinador/a Institucional de Trayectorias Educativas), **ninguna de las dos publicada hoy en el sitio** |
| Acción recomendada | `AGREGAR_NORMA_COMPLEMENTARIA` (sumar 4232/2024 y 1884/2025 como normativa complementaria de esta sección) |
| Nivel de confianza | Alto (fuente oficial provincial `normas.gba.gob.ar`) |
| Fecha de verificación | 2026-08-19 |

**Anexos 1 a 8** (Principios y Definiciones, Organización Pedagógica, Ingreso y Matriculación, Asistencia,
Evaluación y Acreditación, Convivencia Escolar, Marco Arte, Marco Técnica y Agraria): mismo estado que la
resolución madre (`VIGENTE_CON_MODIFICACIONES`). No se verificó cada uno individualmente contra el texto
oficial completo (serían 8 lecturas de PDF adicionales); los títulos usados en el proyecto coinciden con los
nombres de archivo oficiales, por lo que se los da por razonablemente correctos con confianza media.

**Documentos de apoyo relacionados** (`estados-administrativos-ra`, incluye Documento de Apoyo N°7, N°9 —
segunda parte, "1 RITE 2025.pdf", registros de asistencia, partes diarios): son materiales de implementación
de la Resolución 1650/24, no normas en sí. Se encontraron copias oficiales alojadas en `abc.gob.ar` con fechas
2025-02, consistentes con la vigencia actual del régimen. Estado práctico: vigentes como material de apoyo
mientras la Resolución 1650/24 siga vigente. Acción: `MANTENER`. Confianza media (no se verificó cada
documento de apoyo individualmente).

**Disposición N°3/2024** (`disposicion-n-3-2024`, DI-2024-20488158-GDEBA-DPESECDGCYE): no se encontró una
fuente oficial independiente que confirme su contenido exacto ni su relación puntual con la Resolución
1650/24 más allá de coincidencias de organismo emisor (DPESECDGCYE) y período. Estado: **NO_VERIFICADA**.
Acción: `REVISAR_MANUALMENTE`.

**Carta a Docentes / Carta a Familias** (`carta-a-docentes`, `carta-a-familias`): son comunicaciones, no
normas. No se verificaron por no ser objeto central de esta auditoría normativa. Estado: **NO_VERIFICADA**
(no aplica clasificación normativa estricta). Acción: `REVISAR_MANUALMENTE` si se quiere confirmar vigencia.

---

## 3. Régimen Académico Nivel Superior — Resolución 4196/24 (RAM)

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `resolucion-4196-24`, `anexo-1`, `anexo-3` |
| Título mostrado | "RESOLUCIÓN 4196/24" |
| Número oficial | Resolución conjunta 4196/2024 (RESOC-2024-4196-GDEBA-DGCYE) |
| Año | 2024, vigente desde el ciclo lectivo 2025 |
| Organismo | DGCyE, Provincia de Buenos Aires |
| Tema | Régimen Académico Marco Jurisdiccional para Institutos de Educación Superior |
| URL actualmente usada | Google Drive (id `1G0sJ-PVKpVKny3dqjmct3YHDZMWSePv0`) |
| Fuente oficial verificada | `normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/4196/471235` |
| Estado | **VIGENTE** |
| Normativa posterior relacionada | Deroga, a partir de 2025, las Resoluciones 4043/09 y 1639/17, y las Disposiciones 107/10 y 123/15. No se encontró evidencia de una norma posterior que la modifique o reemplace hasta la fecha de referencia |
| Acción recomendada | `MANTENER` |
| Nivel de confianza | Alto (fuente oficial provincial) |
| Fecha de verificación | 2026-08-19 |

**Anexo 1** (`anexo-1`, IF-2024-38567372-GDEBA-SDIFDIDGCYE — "Régimen Académico Marco Jurisdiccional") y
**Anexo 3** (`anexo-3`, IF-2024-37932766 e IF-2024-37932840-GDEBA-DPESUPDGCYE — condiciones para propuestas
pedagógicas combinadas): confirmados como parte de la Resolución 4196/24 mediante múltiples copias oficiales
e institucionales coincidentes (mismo IF, mismo contexto). Estado: `VIGENTE`. Confianza media-alta (no se leyó
el texto completo de cada anexo, pero el IF y el contexto coinciden en varias fuentes independientes).

---

## 4. Régimen Académico Secundaria — Jóvenes, Adultos y Adultos Mayores — Resolución 4984/24

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `resolucion-n-4984-2024`, `anexo` |
| Título mostrado | "Resolución N°4984/2024" (descripción interna: "RA- SECUNDARIA ADULTOS") |
| Número oficial | Resolución 4984/24 (RSC-2024-43189065-GDEBA-DGCYE) |
| Año | 2024 |
| Organismo | DGCyE — Dirección de Educación de Jóvenes, Adultos y Adultos Mayores (DEJAyAM) |
| Tema | Régimen Académico del Nivel Secundario para Jóvenes, Adultos y Adultos Mayores |
| URL actualmente usada | Google Drive (id `1ZDhRF-nrNvyxlnAoJpgIgHtM5JeV0z1S`) para la resolución; Drive (id `1DGuPcLZgHcUZHMnI1j5Ik65xV2GBf7Fc`) para el anexo |
| Fuente oficial verificada | `abc.gob.ar/secretarias/sites/default/files/2025-04/IF-2024-42815149-GDEBA-DEJAYAMDGCYE (2).pdf` — el mismo IF que usa el anexo del proyecto, alojado directamente en dominio oficial |
| Estado | **VIGENTE** |
| Normativa posterior relacionada | No se encontró una lista explícita de derogaciones ni una norma posterior que la modifique. No pudo confirmarse la cadena de derogación (qué resolución anterior reemplaza) |
| Acción recomendada | `MANTENER`, con nota: `REVISAR_MANUALMENTE` la cadena de derogación específica |
| Nivel de confianza | Medio-alto (el anexo coincide exactamente con una copia oficial en `abc.gob.ar`; la resolución en sí se confirmó solo por fuentes secundarias consistentes, sin lectura directa del texto) |
| Fecha de verificación | 2026-08-19 |

---

## 5. "Actividades acuáticas — Resolución 44921855/24" — hallazgo de discrepancia

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `actividades-acuaticas-resolucion-44921855-24` |
| Título mostrado | "Actividades acuáticas — Resolución 44921855/24" |
| Número oficial | **No confirmado.** "44921855" es un número de documento interno GDEBA (formato `RSC-2024-NNNNNNNN-GDEBA-DGCYE`), no necesariamente el número público de una resolución — igual que "35942004" no es "3871" sino el número interno de esa misma resolución. No se encontró ninguna fuente oficial que use "44921855" como número de resolución citable |
| Año | 2024 (por el prefijo del número interno) |
| Organismo | DGCyE (según el nombre de archivo del documento principal) |
| Tema declarado en el sitio | Actividades acuáticas en salidas educativas |
| **Tema real de los anexos, según fuente oficial** | **Sistema de Prácticas Educativas en Ambientes de Trabajo (PEAT) — pasantías, prácticas profesionalizantes, aproximación al mundo del trabajo** |
| URL actualmente usada | Google Drive (13 documentos, ids listados en `normativa-secciones.ts`) |
| Fuente oficial verificada | `abc.gob.ar/secretarias/sites/default/files/2025-04/RESOLUCIÓN 5356-2024 PEAT - Sistema de Prácticas Educativas en Ambientes de Trabajo.pdf` — leída directamente; contiene los Anexos I, II, III, IV, V, VI y IX con los mismos identificadores IF que los "Anexo 1" a "Anexo 9" (y probablemente 10–13) del sitio |
| ¿Coinciden URL actual y fuente oficial? | **No** — o al menos no en el tema. Los identificadores IF de los 13 "anexos de actividades acuáticas" del sitio coinciden exactamente con anexos de una resolución distinta (5356/24, PEAT), sobre un tema no relacionado |
| Estado | **NO_VERIFICADA** (no se pudo confirmar que exista una resolución de actividades acuáticas con número interno 44921855; lo que sí se confirmó es que los anexos adjuntos no son de actividades acuáticas) |
| Normativa posterior relacionada | Resolución conjunta 5356/2024 (RESOC-2024-5356-GDEBA-DGCYE), aprobada en diciembre de 2024, sobre PEAT — probablemente la norma real detrás de los 13 anexos publicados |
| Acción recomendada | `REVISAR_MANUALMENTE` con prioridad alta — abrir cada uno de los 13 PDF de Drive de esta sección y confirmar qué contienen realmente antes de decidir entre corregir el rótulo (si son PEAT), reemplazar los anexos (si la resolución 44921855 sí es sobre actividades acuáticas pero está mal anexada), o `ELIMINAR_DE_VISTA_PUBLICA` mientras se aclara |
| Nivel de confianza | Alto en la discrepancia (7 de 13 IF confirmados byte-a-byte contra un PDF oficial de `abc.gob.ar`; los 6 restantes tienen numeración IF correlativa y descendente en el mismo rango, consistente con ser parte del mismo lote de anexos); bajo en la naturaleza real de "44921855" |
| Fecha de verificación | 2026-08-19 |

**Nota adicional:** existe normativa histórica real sobre actividades acuáticas en salidas educativas (Res.
498/10 y 943/14, Res. 378/17 — hoy derogadas por la 3871/24) y una Circular Técnica 1/11 sobre Organización
Institucional para Actividades Acuáticas, además de una Disposición 22/2025 sobre organización de la
enseñanza de prácticas acuáticas. Ninguna de estas coincide con "44921855". No se encontró una resolución
2024 identificable específicamente como "actividades acuáticas en salidas educativas" con ese número.

---

## 6. Transporte — Memorándum 2018

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `transporte-en-salidas-educativas-aclaraciones` |
| Título mostrado | "Transporte — aclaraciones (2018)" |
| Número oficial | ME-2018-23210727-GDEBA-DPCEDGCYE |
| Año | 2018 |
| Organismo | DGCyE — Dirección Provincial de Coordinación Educativa (DPCEDGCYE) |
| Tema | Memorándum aclaratorio sobre transporte en salidas educativas |
| URL actualmente usada | Google Drive (id `13kUO2yRX_m-0Am0ZXHTIOwX7xWkqwrlD`) |
| Fuente oficial verificada | No se encontró una copia del memorándum en dominio oficial; solo referencias indirectas |
| Estado | **HISTORICA** |
| Normativa posterior relacionada | **Anexo VIII de la Resolución 3871/24** ("Informe de Transporte", ver sección 1) regula hoy el transporte en salidas educativas de forma integral y vigente. No hay una derogación expresa del memorándum de 2018, pero su tema quedó cubierto por una norma posterior específica y vigente sobre el mismo asunto |
| Acción recomendada | `MOVER_A_HISTORICO` |
| Nivel de confianza | Medio (la superposición temática con el Anexo VIII de la Res. 3871/24 es clara; la ausencia de derogación expresa impide clasificarlo como `DEROGADA` o `REEMPLAZADA` en sentido estricto) |
| Fecha de verificación | 2026-08-19 |

---

## 7. Comunicación Conjunta 1/23 — Inscripción 2024

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `comunicacion-1-23` |
| Título mostrado | "COMUNICACION 1/23" |
| Número oficial | Comunicación Conjunta 1/23 |
| Año | 2023 (emitida para el proceso de inscripción del ciclo lectivo 2024) |
| Organismo | DGCyE (varias direcciones firmantes conjuntas) |
| Tema | Pautas y criterios para la inscripción de estudiantes, ciclo 2024 |
| URL actualmente usada | Google Drive (id `1YYQVKJOfiwn8tl7S8z4F5bBJstFNFS77`) |
| Fuente oficial verificada | No se encontró copia en dominio oficial directo; el contenido se confirmó solo por fuentes secundarias |
| Estado | **NO_VERIFICADA** |
| Normativa posterior relacionada | Por tratarse de una comunicación anual y estar el título explícitamente atado a "Inscripción 2024", es muy probable que existan comunicaciones equivalentes para los ciclos 2025 y 2026 (se encontraron indicios de comunicaciones conjuntas de 2026 sobre otros temas de inscripción — listados docentes, no de alumnos — pero no se localizó la específica de inscripción de alumnos 2025/2026) |
| Acción recomendada | `REVISAR_MANUALMENTE` — buscar la Comunicación Conjunta de inscripción de alumnos vigente para el ciclo 2026/2027 y evaluar `ACTUALIZAR` o `AGREGAR_NORMA_COMPLEMENTARIA` |
| Nivel de confianza | Bajo (no se confirmó ni la vigencia ni la existencia de un reemplazo específico) |
| Fecha de verificación | 2026-08-19 |

**Documentos operativos relacionados** (`pautas-para-completar-la-inscripcion`, `planillas-modelos`): planillas
y guías atadas al mismo proceso. Mismo estado de incertidumbre que la Comunicación 1/23. Estado:
**NO_VERIFICADA**. Acción: `REVISAR_MANUALMENTE`.

---

## 8. Prácticas profesionalizantes — Lineamientos 2025

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `practicas-profesionalizantes` |
| Título mostrado | "Prácticas profesionalizantes" |
| Número oficial | No identificado como resolución propia — se presenta como "Lineamientos 2025", un documento de orientación, no una norma con número de resolución |
| Año | 2025 |
| Organismo | No confirmado con certeza (presumiblemente Dirección de Educación Técnico Profesional, por el tema) |
| Tema | Lineamientos para las prácticas profesionalizantes en escuelas técnicas y agrarias |
| URL actualmente usada | Google Drive (id `14aaLduGR401unJGqAyziVXE551wuuuQr`) |
| Fuente oficial verificada | No se pudo verificar el documento puntual; sí se verificó el marco normativo más amplio en el que se inscribe |
| Estado | **VIGENTE_CON_MODIFICACIONES** (probable) |
| Normativa posterior relacionada | La Resolución conjunta 5356/2024 (PEAT, ver hallazgo principal) creó en diciembre de 2024 un sistema integral de "Prácticas Educativas en Ambientes de Trabajo" que incluye expresamente "Prácticas Profesionalizantes" como una de sus cinco modalidades. Es razonable que el documento de "Lineamientos 2025" del sitio ya refleje ese marco (por la fecha), pero no se confirmó directamente |
| Acción recomendada | `AGREGAR_NORMA_COMPLEMENTARIA` (citar la Resolución 5356/24 como marco vigente) y `REVISAR_MANUALMENTE` el contenido puntual del PDF |
| Nivel de confianza | Bajo-medio |
| Fecha de verificación | 2026-08-19 |

---

## Tabla resumen (ordenada por importancia)

| Recurso actual | Tema | Estado | Norma posterior | Acción propuesta |
|---|---|---|---|---|
| Actividades acuáticas — "Resolución 44921855/24" | Actividades acuáticas (declarado) / PEAT (real) | NO_VERIFICADA (discrepancia confirmada) | Resolución 5356/24 (PEAT) | REVISAR_MANUALMENTE (prioridad alta) |
| Resolución 3871/24 + 9 anexos | Salidas educativas | VIGENTE | — (deroga a 378/17) | MANTENER; ACTUALIZAR_TITULO en Anexos 4, 7 y 9 |
| Resolución 1650/24 + 8 anexos | Régimen Académico Secundario | VIGENTE_CON_MODIFICACIONES | Res. Conj. 4232/2024, Res. Conj. 1884/2025 | AGREGAR_NORMA_COMPLEMENTARIA |
| Resolución 4196/24 + anexos | Régimen Académico Superior (RAM) | VIGENTE | — (deroga a 4043/09, 1639/17, Disp. 107/10, 123/15) | MANTENER |
| Resolución 4984/24 + anexo | Régimen Académico Secundaria Jóvenes/Adultos/Adultos Mayores | VIGENTE | No confirmada | MANTENER; REVISAR_MANUALMENTE cadena de derogación |
| Transporte — Memorándum 2018 | Transporte en salidas educativas | HISTORICA | Anexo VIII, Res. 3871/24 | MOVER_A_HISTORICO |
| Comunicación 1/23 (+ planillas/pautas de inscripción) | Inscripción de estudiantes 2024 | NO_VERIFICADA | Probable comunicación 2025/2026 no localizada | REVISAR_MANUALMENTE |
| Prácticas profesionalizantes — Lineamientos 2025 | Prácticas profesionalizantes | VIGENTE_CON_MODIFICACIONES (probable) | Resolución 5356/24 (PEAT) | AGREGAR_NORMA_COMPLEMENTARIA |
| Disposición N°3/2024 | Régimen académico secundario (evaluación) | NO_VERIFICADA | — | REVISAR_MANUALMENTE |
| Estados administrativos RA / RITE 2025 / Documentos de apoyo | Implementación Res. 1650/24 | Vigente como material de apoyo (no es norma) | — | MANTENER |
| Carta a Docentes / Carta a Familias | Comunicación institucional | NO_VERIFICADA | — | REVISAR_MANUALMENTE |
| Régimen Académico Nivel Inicial | (ausente del sitio) | — | — | Ver "Normativa faltante" |
| Régimen Académico Nivel Primario | (ausente del sitio) | — | — | Ver "Normativa faltante" |

---

## Normativa que requiere atención

1. **"Actividades acuáticas — Resolución 44921855/24"** (`actividades-acuaticas-resolucion-44921855-24`):
   los 13 anexos publicados coinciden por identificador IF con anexos de la Resolución 5356/24 (PEAT,
   prácticas en ambientes de trabajo), un tema no relacionado con actividades acuáticas. Es el hallazgo más
   grave de esta auditoría: la sección puede estar mostrando contenido equivocado al público desde su
   publicación original.
2. **Comunicación 1/23** (`comunicacion-1-23`) y sus planillas asociadas: título explícitamente atado a
   "Inscripción 2024"; a agosto de 2026 corresponde a un ciclo dos años anterior sin que se haya localizado
   su reemplazo.
3. **Resolución 1650/24**: vigente pero incompleta en el sitio — faltan dos normas complementarias
   confirmadas (Res. Conj. 4232/2024 y Res. Conj. 1884/2025).
4. **Memorándum de transporte 2018**: su tema quedó cubierto por el Anexo VIII de la Resolución 3871/24
   (2024), vigente; mostrarlo junto a la normativa vigente sin aclarar esa relación puede confundir sobre
   cuál es la regla aplicable hoy.
5. **Disposición N°3/2024** y **Prácticas profesionalizantes — Lineamientos 2025**: no se pudo confirmar con
   fuente oficial directa su contenido puntual ni, en el segundo caso, su relación exacta con la Resolución
   5356/24.
6. **Resolución 4984/24**: vigente con confianza medio-alta, pero no se pudo reconstruir su cadena de
   derogación (qué norma anterior reemplaza).

## Normativa confirmada vigente

- **Resolución 3871/24** (Salidas educativas) y sus 9 anexos — verificada directamente contra el texto
  oficial en `abc.gob.ar`, con derogación expresa de la RESFC-2017-378-E-DGCYE confirmada.
- **Resolución 1650/24** (Régimen Académico Secundario) — verificada contra `normas.gba.gob.ar`, con
  derogaciones expresas confirmadas (587/11, 1480/11, Res. Conj. 1235/2023 y 1236/2023).
- **Resolución 4196/24** (Régimen Académico Marco Jurisdiccional, Nivel Superior) — verificada contra
  `normas.gba.gob.ar`, con derogaciones expresas confirmadas (4043/09, 1639/17, Disp. 107/10 y 123/15).

## Normativa faltante

1. **Régimen Académico de Nivel Inicial**: no aparece ningún recurso dedicado en `/regimen-academico`. No se
   pudo determinar en esta auditoría si existe una resolución específica vigente para Nivel Inicial
   equivalente a las de Secundaria (1650/24) o Superior (4196/24); sería relevante agregarla si existe, ya
   que hoy el sitio cubre Secundaria, Superior y Jóvenes/Adultos/Adultos Mayores, pero no Inicial ni
   Primario. Fuente a seguir explorando: `abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/...`
   (áreas de Educación Inicial).
2. **Régimen Académico de Nivel Primario**: tampoco aparece en el sitio. Se encontró una posible base
   normativa antigua (Resolución 1057/14, modificada por 197/16) alojada en fuentes no oficiales
   (`cads.edu.ar`, blogs); no se pudo confirmar si sigue vigente sin modificación posterior o si fue
   actualizada. Requiere una búsqueda dedicada en fuentes oficiales antes de decidir si corresponde
   agregarla.
3. **Resolución conjunta 4232/2024** y **Resolución conjunta 1884/2025**: complementan la Resolución 1650/24
   (régimen académico secundario) y no están hoy en el sitio.
4. **Resolución conjunta 5356/2024 (PEAT)**: la norma real detrás de los 13 anexos hoy rotulados como
   "Actividades acuáticas". Si al revisar manualmente se confirma que esos anexos corresponden efectivamente
   a PEAT, correspondería agregar esta resolución como tal (probablemente vinculada a "Prácticas
   profesionalizantes") y resolver por separado si existe o no una norma de actividades acuáticas vigente
   que deba mostrarse en su lugar.

---

## Confirmación

Durante esta auditoría **no se modificó** `/regimen-academico`, ningún dataset de producción
(`normativa-secciones.ts`, `anexos-resolucion-3871-24.ts`, ni ningún otro), ni se agregó, eliminó o reemplazó
ninguna norma o enlace. La única modificación realizada es este documento.

---

## Aplicación de correcciones — 2026-08-19

Se aplicó la primera tanda de correcciones derivadas de esta auditoría, limitada a los hallazgos de mayor
confianza. No se hizo una reestructuración visual completa de `/regimen-academico`. Antes de tocar el
dataset se volvió a verificar, anexo por anexo (no solo por correlación numérica), que los 13 documentos de
la sección "Actividades acuáticas" correspondían efectivamente a la Resolución Conjunta 5356/2024: se leyó
directamente el texto oficial de esa resolución (PDF alojado en `abc.gob.ar`) y se confirmaron los 13
identificadores IF, uno por uno, contra los Anexos I a XIII listados en el propio texto. Los 6 anexos que la
primera lectura de la auditoría no había confirmado individualmente (Anexo VII a XIII) quedaron confirmados
en esta segunda verificación.

### 1. Bloque "Actividades acuáticas — Resolución 44921855/24"

Confirmado: los 13 documentos corresponden a los Anexos I a XIII de la **Resolución Conjunta 5356/2024 —
Sistema de Prácticas Educativas en Ambientes de Trabajo (PEAT)**. Se retiró la denominación incorrecta de la
interfaz pública (`/regimen-academico` y, por la misma referencia cruzada, `/formularios`) y se reorganizaron
los 13 documentos bajo un nuevo bloque "Prácticas Educativas en Ambientes de Trabajo (PEAT) — Resolución
Conjunta 5356/2024". Los títulos funcionales de cada anexo (Conceptualización, Criterios para Prácticas
Profesionalizantes, Criterios para Pasantías y Aproximación al Mundo del Trabajo, etc.) se tomaron de la
lectura directa del texto oficial, no se inventaron. **No se afirmó que no exista normativa vigente sobre
actividades acuáticas**: esa investigación queda pendiente (ver "Puntos pendientes" más abajo). El documento
de Drive que antes se presentaba como el texto de "Resolución 44921855/24" no se reutilizó en el nuevo bloque
porque no se pudo confirmar qué es realmente; la referencia al texto completo de la 5356/24 usa en cambio la
copia oficial de `abc.gob.ar`.

### 2. Integración con Prácticas profesionalizantes

La sección "Prácticas profesionalizantes" (Lineamientos 2025) ahora incluye una descripción que la ubica
explícitamente como una de las cinco modalidades del sistema PEAT (Resolución Conjunta 5356/2024, sección
inmediatamente anterior en la página) y un `enlaceRelacionado` hacia el texto de esa resolución. El contenido
puntual del PDF "Lineamientos 2025" no pudo verificarse contra un texto oficial en esta tanda, así que se
conservó sin hacer afirmaciones adicionales sobre su jerarquía normativa exacta.

### 3. Resolución 1650/24 — normativa complementaria

Se agregó una nueva sección "Régimen Académico Secundario — normativa complementaria" con dos recursos,
enlazados a `normas.gba.gob.ar` (fuente oficial provincial):

- Resolución Conjunta 4232/2024 — Módulos Presenciales de Fortalecimiento de las Trayectorias Educativas (FORTE).
- Resolución Conjunta 1884/2025 — Creación del cargo de Coordinador/a Institucional de Trayectorias Educativas (CITE).

Ambas llevan la etiqueta "Complementaria — no reemplaza a la Resolución 1650/24" y una descripción que aclara
esa relación. La Resolución 1650/24 sigue siendo el régimen académico principal y vigente de Nivel
Secundario.

### 4. Salidas educativas — títulos de anexos corregidos

En `src/data/anexos-resolucion-3871-24.ts` (fuente única, usada por `/regimen-academico` y
`/documentos-inspectores`):

- Anexo 4: "Salidas educativas" → **"Formulario de itinerario"**.
- Anexo 5: "Estudiantes y acompañantes" → **"Planilla de estudiantes"**; se retiró `revisar: true`. Se
  verificó que ningún componente compartido (`DocumentCard`, `DocumentSectionList`) leyera ese campo — ya
  no queda ninguna referencia a `revisar` en el código ni en el HTML generado — y se corrigió, por
  consistencia, la descripción de la sección "RESOLUCIÓN 3871/24" en `documentos-inspectores-secciones.ts`,
  que todavía decía "pendiente de revisión manual" y mencionaba una vista en Formularios que ya no existe.
- Anexo 7: "Autorización de mayores de 18 años" → **"Declaración jurada del estudiante mayor de 18 años"**.
- Anexo 9: "Declaración jurada (DDJJ) para salidas educativas" → **"Declaración jurada de directivos"**.

Los Anexos 4 y 5 se ven hoy en `/regimen-academico` y `/documentos-inspectores` respectivamente. Los Anexos 7
y 9 no se muestran actualmente en ninguna página pública (quedaron fuera de la vista desde que se retiró el
listado completo de 9 anexos de Formularios, en una tanda anterior); sus títulos quedaron corregidos en la
fuente para cuando vuelvan a mostrarse. Los demás anexos (1, 2, 3, 6, 8) no se modificaron.

También se corrigió, en `normativa-secciones.ts`, una mención residual a que el paquete de anexos "también
está en Formularios" (ya no es así desde la tanda anterior).

### 5. Transporte — Memorándum 2018

Se creó `seccionesHistoricas` en `normativa-secciones.ts` (además de `seccionesNormativa`) y se movió allí la
sección de transporte, renombrada "Transporte — antecedente histórico (2018)", con una descripción que indica
explícitamente que el Anexo VIII de la Resolución 3871/24 es hoy la referencia vigente sobre transporte en
salidas educativas, y un `enlaceRelacionado` hacia esa resolución. En `/regimen-academico/page.tsx` se
renderiza en un bloque aparte, después de un separador (`border-top`) y bajo el epígrafe "Antecedentes /
documentación histórica" en gris (no en el color de marca que usan los epígrafes de normativa vigente), para
que no se confunda visualmente con la normativa vigente. El documento no se eliminó del proyecto.

### 6. Fuente única de datos

Se creó `src/data/practicas-educativas-ambientes-trabajo.ts`, siguiendo el mismo patrón que
`anexos-resolucion-3871-24.ts`: exporta los 13 anexos como objetos individuales, un array
`anexosResolucion5356_24` y la referencia `resolucion5356_24`. `normativa-secciones.ts` los importa; no hay
copias manuales de esos objetos en ningún otro archivo.

### 7. Archivos modificados

- `src/data/practicas-educativas-ambientes-trabajo.ts` (nuevo).
- `src/data/normativa-secciones.ts` (nueva sección PEAT reemplaza a "Actividades acuáticas"; nueva sección de
  complementarias de la 1650/24; sección de transporte movida a `seccionesHistoricas`; correcciones de texto
  residual).
- `src/data/anexos-resolucion-3871-24.ts` (títulos de Anexos 4, 5, 7 y 9; se retiró `revisar: true` del
  Anexo 5; comentarios actualizados).
- `src/data/documentos-inspectores-secciones.ts` (descripción de la sección "RESOLUCIÓN 3871/24" actualizada).
- `src/data/formularios-inspectores.ts` (se retiró la referencia cruzada incorrecta a "Resolución
  44921855/24 y anexos — Actividades acuáticas").
- `src/app/regimen-academico/page.tsx` (renderiza `seccionesHistoricas` en un bloque separado; metadata y
  descripción actualizadas).
- `src/app/formularios/page.tsx` (eyebrow y descripción de la tarjeta de Actividades acuáticas, que citaban
  la denominación incorrecta).
- `docs/auditoria-vigencia-normativa-2026.md` (esta sección).

### 8. Puntos que siguen pendientes de revisión manual

Sin cambios en esta tanda, tal como se pidió:

- Comunicación Conjunta 1/23 y las planillas de Inscripción 2024.
- Disposición N°3/2024.
- Carta a Docentes y Carta a Familias.
- Régimen Académico de Nivel Inicial y de Nivel Primario (ausentes del sitio).
- Cadena de derogación de la Resolución 4984/24.
- Qué es realmente el documento de Drive antes rotulado "RSC-2024-44921855-GDEBA-DGCYE (1).pdf", y si existe
  una norma de actividades acuáticas vigente que debería mostrarse en su lugar.
- Verificación del contenido puntual del PDF "Prácticas Profesionalizantes Lineamientos 2025".

---

## Revisión y reorganización — 2026-09-09

**Fecha de referencia:** 9 de septiembre de 2026. **Alcance:** revisión completa de contenido y de
presentación de `/regimen-academico`, con reordenamiento por jerarquía (Regímenes Académicos vigentes
primero; después normativa complementaria; al final, documentación histórica). Se investigó normativa
posterior en fuentes oficiales (`normas.gba.gob.ar`, `abc.gob.ar`) hasta la fecha de referencia. No se
usaron blogs, sindicatos ni copias de terceros para determinar vigencia.

### 1. Regímenes Académicos vigentes identificados

| Nivel / modalidad | Norma principal | Año | Identificador | Estado | Fuente oficial |
|---|---|---|---|---|---|
| Educación Secundaria | Resolución Conjunta 1650/2024 | 2024 | RSC-2024-20025654-GDEBA-DGCYE | Vigente | `normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/1650/440121` |
| Educación Secundaria de Jóvenes, Adultos y Adultos Mayores | Resolución 4984/2024 | 2024 | RSC-2024-43189065-GDEBA-DGCYE | Vigente | Anexo IF-2024-42815149-GDEBA-DEJAYAMDGCYE alojado en `abc.gob.ar` |
| Educación Superior | Resolución Conjunta 4196/2024 (RAM) | 2024 | RESOC-2024-4196-GDEBA-DGCYE | Vigente | `normas.gba.gob.ar/ar-b/resolucion-conjunta/2024/4196/471235` |
| Educación Primaria | Resolución 1057/2014 (RAP) | 2014 | — | Vigente con modificaciones | Página "Normativas Primaria" de `abc.gob.ar` |

Orden en la página: Secundaria → Jóvenes y Adultos → Superior → Primaria (por utilidad, no por año).

### 2. Actualizaciones y complementarias nuevas encontradas

- **Secundaria (1650/24):** `normas.gba.gob.ar` la muestra vigente, última actualización 28/05/2025, sin
  norma modificatoria posterior. Complementarias confirmadas (ya estaban en el sitio): Res. Conjunta
  4232/2024 (Módulos Presenciales FORTE) y Res. Conjunta 1884/2025 (Coordinador/a Institucional de
  Trayectorias Educativas — CITE). Lo aparecido después de agosto de 2026 son **documentos de apoyo**, no
  normas: Disposición N° 40/2026, Documento de Apoyo N° 14 (febrero 2026), N° 13 (diciembre 2025), etc.
- **Superior (4196/24):** se confirmó una complementaria nueva no presente en el sitio: **Resolución
  1215/2025 — Sistema de Evaluación y Mejora Continua de la Formación Superior (SEMC)**, listada por
  `abc.gob.ar` bajo el RAM. Anexos del RAM precisados: Anexo 1 — Principios y Disposiciones Generales
  (IF-2024-38567372), Anexo 2 — Estudiante Itinerante (IF-2024-37932840), Anexo 3 — Propuestas Pedagógicas
  Combinadas / PPC (IF-2024-37932766). Se agregó el "Documento de trabajo para la implementación del nuevo
  RAM (diciembre de 2024)".
- **Jóvenes y Adultos (4984/24):** aprobada por el Consejo General de Cultura y Educación el 28/11/2024. No
  se encontró norma modificatoria 2025/2026. Denominación precisada a "Régimen Académico del Nivel
  Secundario de la Educación de Jóvenes, Adultos y Adultos Mayores".
- **Salidas educativas (3871/24):** vigente, sin modificaciones ni complementarias 2025/2026.
- **PEAT (Res. Conjunta 5356/2024):** vigente, sin modificatorias. Se agregó la **Guía de implementación
  del sistema PEAT** (cuadernillo oficial, mayo 2025).

### 3. Normativa vigente de Nivel Inicial

**No se confirmó.** En `normas.gba.gob.ar` y `abc.gob.ar` no se identificó una resolución de Régimen
Académico propia del Nivel Inicial equivalente a las de Primaria/Secundaria/Superior. El nivel se organiza
por su Diseño Curricular (2023) y los documentos de la Dirección Provincial de Educación Inicial. No se
creó una sección de Inicial y el punto sigue pendiente.

**La página pública no dice nada sobre Nivel Inicial** (2026-09-14). La nota que informaba el faltante se
retiró: mientras no haya normativa vigente confirmada para mostrar, no se publica nada — ni "no se
encontró", ni "pendiente de confirmar", ni una tarjeta vacía. La investigación se sigue acá y en el
comentario interno de `src/data/normativa-secciones.ts`; retirar la nota pública no la borra.

### 4. Normativa vigente de Nivel Primario

**Confirmada.** Resolución 1057/2014 (RAP), modificada por la Resolución 197/2016 (Capítulo VI — escala de
calificación) y rectificada por la Resolución 372/2018. La Dirección Provincial de Educación Primaria
mantiene 1057/14 y 197/16 publicadas como normativa vigente del nivel (PDF en `abc.gob.ar`, 2024-12). Se
agregó el bloque "Educación Primaria" con la resolución, la modificatoria y el documento de implementación
del RAP.

### 5. Elementos desactualizados retirados de la vista pública / movidos a histórico

- **Comunicación Conjunta 1/23 — Inscripción 2024:** movida a "Antecedentes / documentación histórica"
  con nota de ciclo cerrado.
- **Disposición N°3/2024 (DI-2024-20488158):** identificada como "Disposición de Firma Conjunta N° 3/2024 —
  Pautas de Evaluación y Calificación (Ciclo Lectivo 2024)" (verificado contra el Comunicado N° 244 de
  `abc.gob.ar`). Movida a histórico con el título corregido.
- **Sección vacía "INSCRIPCIÓN DE ALUMNOS NORMATIVA / INICIAL PRIMARIA SECUNDARIA ESPECIAL":** eliminada
  (era una etiqueta sin documentos).
- **"Educacion Fisica - Planilla de inscripción - Centro de Educación Física.pdf":** estaba mal ubicada
  dentro del Régimen Académico Secundario; movida a la sección "Inscripción de estudiantes".

### 6. Textos sin vínculo o sin sentido eliminados

- Descripción de la sección "RÉGIMEN ACADÉMICO" que concatenaba nombres de archivo y rótulos
  ("SECUNDARIA - RESOLUCIÓN - ANEXOS - DISPOSICIÓN … RSC-2024-20025654-GDEBA-DGCYE (3).pdf … Anexo 7").
- Descripción de "ESTADOS ADMINISTRATIVOS RA" que concatenaba nombres de archivo y de partes diarios.
- Descripción de "ANEXO 3" (Superior) que decía "IF-2024-37932840-GDEBA-DPESUPDGCYE.pdf ANEXO 2".
- Descripciones sueltas "RA SUPERIOR", "RA- SECUNDARIA ADULTOS", "INICIAL PRIMARIA SECUNDARIA ESPECIAL".
- Todos los títulos que eran nombres crudos de archivo (`RSC-2024-…`, `IF-2024-…`, `DI-2024-…`,
  `RESOC-4196-24 … (1).pdf`, `Cartas Familia (1).pdf`, etc.) se reemplazaron por títulos funcionales. El
  identificador técnico GDEBA se conserva como dato de trazabilidad en la descripción, nunca como título.
  Corrección hecha también en la fuente única `anexos-resolucion-3871-24.ts` y en
  `practicas-educativas-ambientes-trabajo.ts` (títulos de anexos), y en la descripción de la sección
  "RESOLUCIÓN 3871/24" de `documentos-inspectores-secciones.ts`.

### 7. Enlaces reemplazados por fuentes oficiales

- Los 8 anexos de la Resolución 1650/24 pasaron de Google Drive a los PDF oficiales alojados en
  `abc.gob.ar` (2024-06).
- Anexos 2 y 3 del RAM Superior: a los PDF oficiales de `abc.gob.ar` (2026-07). Anexo 1 se mantuvo en Drive
  (no se localizó copia oficial equivalente).
- Resolución 1215/2025, "Documento de trabajo RAM" y Guía de implementación PEAT: PDF oficiales de
  `abc.gob.ar`.
- Régimen Académico de Jóvenes y Adultos: el anexo apunta a la copia oficial de `abc.gob.ar`; el texto
  completo de la resolución se mantiene en Drive (única copia disponible).
- Resoluciones 1057/2014 y 197/2016 (Primaria) y documento de implementación del RAP: PDF de `abc.gob.ar`.
- Los `href` de Drive de los anexos de PEAT (5356/24) y de Salidas educativas (3871/24) se conservan: son
  la única copia disponible de cada anexo individual.

### 8. Organización final de la página

1. **Regímenes Académicos** (bloque principal, `regimenesAcademicos` + componente
   `RegimenAcademicoBlock`): cada nivel con su norma principal (resolución, año, estado, descripción
   funcional, enlace a fuente oficial), sus anexos (lista compacta), su normativa complementaria y sus
   materiales de implementación, visualmente separados por jerarquía. Sin Nivel Inicial (ver 3).
2. **Normativa complementaria y temáticas específicas** (`seccionesComplementarias`): Salidas educativas
   (Res. 3871/24 + 9 anexos + comunicación), PEAT (Res. Conjunta 5356/2024 + guía + 13 anexos), Prácticas
   profesionalizantes (Lineamientos 2025), Inscripción de estudiantes (planillas y pautas).
3. **Antecedentes / documentación histórica** (`seccionesHistoricas`): Comunicación Conjunta 1/23,
   Disposición de Firma Conjunta N° 3/2024, Memorándum de transporte 2018.

Jerarquía de encabezados: `h1` (título de página) → `h2` (los tres bloques) → `h3` (cada nivel / cada
sección temática) → `h4` (Anexos / Normativa complementaria / Materiales de implementación dentro de cada
régimen). Sin saltos de nivel. Enlaces externos con `target="_blank"`, `rel="noopener noreferrer"` e
indicador de "se abre en una pestaña nueva".

### 9. Archivos modificados

- `src/data/types.ts` (nuevo tipo `RegimenAcademico`).
- `src/data/normativa-secciones.ts` (reescrito: `regimenesAcademicos`, `notaNivelInicial` —después
  retirada, ver sección 11—, `seccionesComplementarias`, `seccionesHistoricas`; se eliminó
  `seccionesNormativa`).
- `src/data/anexos-resolucion-3871-24.ts` (títulos funcionales de los 9 anexos; identificador a la
  descripción).
- `src/data/practicas-educativas-ambientes-trabajo.ts` (títulos funcionales de los 13 anexos; nuevo
  `guiaImplementacionPeat`).
- `src/data/documentos-inspectores-secciones.ts` (descripción de la sección "RESOLUCIÓN 3871/24").
- `src/components/ui/RegimenAcademicoBlock.tsx` (nuevo componente).
- `src/components/ui/DocumentSectionList.tsx` (nueva prop `headingLevel` para respetar la jerarquía).
- `src/app/regimen-academico/page.tsx` (nueva estructura de tres bloques).
- `docs/auditoria-vigencia-normativa-2026.md` (esta sección).

### 10. Casos que siguen pendientes de verificación

- **Nivel Inicial:** confirmar si existe (o no) un Régimen Académico propio vigente.
- **Resolución 4984/24 (Jóvenes y Adultos):** reconstruir la cadena de derogación (qué norma anterior
  reemplaza).
- **Prácticas Profesionalizantes — Lineamientos 2025:** verificar el contenido puntual del PDF contra un
  texto oficial y su jerarquía normativa exacta dentro del sistema PEAT.
- **Planillas y pautas de inscripción:** confirmar contra la comunicación de inscripción vigente del ciclo
  en curso (las publicadas son modelos operativos sin fecha de ciclo explícita).
- **Documento antes rotulado "RSC-2024-44921855-GDEBA-DGCYE (1).pdf":** sin cambios respecto de la
  auditoría anterior; sigue sin identificarse.
- **Anexo 1 del RAM Superior:** localizar una copia oficial en `abc.gob.ar` para reemplazar el enlace de
  Drive.

### 11. Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta; `/regimen-academico` se prerenderiza como contenido estático (ruta
  `○ (Static)`). TypeScript sin errores.

---

## Pasada de UX y limpieza editorial de las tarjetas principales (2026-09-14)

Sobre la reorganización anterior, sin tocar la normativa ya verificada. Alcance: **sólo** las tarjetas de
`regimenesAcademicos`. No se modificaron Salidas educativas, PEAT, Prácticas profesionalizantes,
Inscripción de estudiantes ni el bloque histórico.

### A. Qué se ve sin desplegar

Cada tarjeta muestra nivel/modalidad, resolución principal, año, estado (tag), descripción breve y el
enlace a la norma principal. Nada más. El enlace principal nunca queda oculto.

### B. Qué pasó al desplegable

`<details>` + `<summary>` nativo (sin JavaScript, accesible por teclado, el navegador expone el estado).
Se abre cuando la tarjeta tiene **dos o más** documentos; con uno solo el desplegable agregaría un clic
sin acortar nada, así que el contenido va directo (caso Jóvenes y Adultos).

| Tarjeta | Desplegable | Contenido plegado |
| --- | --- | --- |
| Secundaria (1650/2024) | "Ver anexos y normativa complementaria" | Anexos 1–8, Res. Conj. 4232/2024 y 1884/2025, 13 materiales de implementación, derogaciones |
| Jóvenes, Adultos y Adultos Mayores (4984/2024) | No (1 anexo) | — |
| Superior (4196/2024) | "Ver anexos y normativa complementaria" | Anexos 1–3, Res. 1215/2025, documento de trabajo del RAM, carta a familias, derogaciones |
| Primaria (1057/2014) | "Ver modificaciones y documentación relacionada" | Texto de la norma, Res. 197/2016, documento de implementación del RAP, nota sobre 197/2016 y 372/2018 |

La Resolución 372/2018 se menciona en el detalle normativo pero **no** se enlaza: no se localizó una copia
oficial. No se inventó el enlace.

### C. Limpieza editorial

- Las descripciones largas se partieron: descripción breve y funcional en la cara de la tarjeta, y las
  precisiones normativas (derogaciones, alcance, órgano que aprueba) en el campo nuevo `detalle`, dentro
  del desplegable. No se perdió contenido normativo verificado.
- Los identificadores GDEBA dejaron de ocupar el campo `descripcion` de cada anexo: pasaron al campo nuevo
  `Documento.identificador`, que se renderiza en una línea propia, `text-xs` y atenuada. El identificador
  sigue disponible para trazabilidad pero ya no domina la lista.
- Se quitaron las coletillas administrativas redundantes con el enlace ("Copia oficial en abc.gob.ar",
  "Copia alojada en abc.gob.ar", "Texto oficial en normas.gba.gob.ar").
- Los títulos de los enlaces principales pasaron a la forma accionable "Ver resolución (…)".

### D. Estado de vigencia

`RegimenAcademico.estado` se estrechó al tipo `EstadoVigencia = "Vigente" | "Vigente con modificaciones"`.
Los estados internos de auditoría (`NO_VERIFICADA`, `REVISAR`, `PENDIENTE`) ya no pueden llegar a la
página: es un error de compilación, no una convención.

### E. Nivel Inicial

La nota pública se retiró (ver sección 3). La página no dice nada del nivel y no hay tarjeta vacía. El
pendiente se conserva en la sección 10 y en el comentario interno de `src/data/normativa-secciones.ts`.

### F. Accesibilidad y responsive

- `<summary>` descriptivo, con `min-h-11` (44 px) de área táctil.
- El marcador propio del navegador se oculta (`list-none` + `::-webkit-details-marker`) porque lo reemplaza
  un chevron que rota 180° con `group-open`; el indicador de expansión no desaparece sin reemplazo.
- Foco visible por la regla global `:focus-visible` de `globals.css`; sin `overflow-hidden` en la tarjeta,
  para que el anillo de foco del `<summary>` no quede recortado.
- Los identificadores GDEBA (tokens largos sin espacios) llevan `break-words`: no producen scroll
  horizontal en pantallas angostas.
- El desplegable vive dentro de la misma tarjeta, separado sólo por un `border-t`: sin cajas anidadas ni
  sombras adicionales.

### G. Archivos modificados

- `src/data/types.ts` (`Documento.identificador`; `EstadoVigencia`; `RegimenAcademico` con `detalle`,
  `resumenDetalle`, `tituloAnexos` y `estado` estrechado).
- `src/data/normativa-secciones.ts` (descripciones breves + `detalle`; identificadores al campo propio;
  coletillas retiradas; `notaNivelInicial` reemplazada por un comentario interno).
- `src/components/ui/RegimenAcademicoBlock.tsx` (desplegable nativo y jerarquía de la tarjeta).
- `src/components/ui/icons.tsx` (`ChevronDownIcon`).
- `src/app/regimen-academico/page.tsx` (se quitó la nota pública de Nivel Inicial y el import de `Notice`).

### H. Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta; `/regimen-academico` sigue prerenderizada como estática.
- Verificación del HTML renderizado: 3 `<details>`, los 3 cerrados por defecto; ningún texto
  administrativo ("se agregó", "pendiente", "no se encontró", "copia oficial", etc.) en las tarjetas; la
  única aparición de "Nivel Inicial" en la página es la planilla de inscripción del nivel, que pertenece a
  otra sección y estaba fuera del alcance.

---

## Ajustes de UX y redacción en las tarjetas principales (2026-09-14, segunda pasada)

Sobre la pasada anterior de esta misma sección. Dos cambios puntuales, sin tocar normativa, anexos,
enlaces, estados ni el orden de las tarjetas.

### A. Texto del desplegable según estado

Antes, el `<summary>` decía siempre "Ver anexos y normativa complementaria" aunque el bloque ya estuviera
abierto. Ahora alterna:

- **Cerrado:** el texto de `resumenDetalle` tal cual está en los datos (p. ej. "Ver anexos y normativa
  complementaria", o "Ver modificaciones y documentación relacionada" en Primaria).
- **Abierto:** el mismo texto con "Ver " reemplazado por "Ocultar " (`RegimenAcademicoBlock.tsx`, cómputo
  `textoAbierto = textoCerrado.replace(/^Ver /, "Ocultar ")`).

Se eligió "Ocultar X" (no "Ver menos") porque reutiliza el verbo que el sitio ya usa para este mismo patrón
en `calendario-y-novedades` y en el menú móvil del `Header` ("Mostrar" / "Ocultar"), y porque nombra la
acción exacta en vez de una etiqueta genérica.

Implementación: dos `<span>` superpuestos dentro del `<summary>`, alternados por CSS con
`group-open:hidden` / `hidden group-open:inline` — la misma técnica que ya usa `calendario-y-novedades`.
Sigue siendo `<details>` + `<summary>` nativo, sin JavaScript: el `<summary>` nunca se desmonta al
abrir/cerrar, así que el foco no se pierde, el chevron sigue rotando con `group-open:rotate-180`, el área
táctil (`min-h-11`) y el `focus-visible` global no cambiaron.

### B. Redacción pública de los textos introductorios

Se revisaron los tres textos introductorios visibles de esta página (Regímenes Académicos, Normativa
complementaria y temáticas específicas, Antecedentes / documentación histórica). Dos tenían redacción de
diseño interno y se reemplazaron; el tercero ya era redacción pública y se dejó igual:

| Texto | Antes | Ahora |
| --- | --- | --- |
| Encabezado general (`PageHeader`) | "Primero, los Regímenes Académicos vigentes por nivel y modalidad. Después, la normativa complementaria y las temáticas específicas." | "Consulta de regímenes académicos vigentes, normativa complementaria y documentación de referencia para los distintos niveles y modalidades del sistema educativo." |
| Bloque "Regímenes Académicos" | "Normas principales vigentes de cada nivel o modalidad, con sus anexos, su normativa complementaria y sus materiales de implementación. El orden sigue la utilidad para quien consulta, no el año ni el nombre de archivo." | "Normativa vigente que regula la organización académica de cada nivel y modalidad, junto con sus anexos y disposiciones complementarias." |
| Bloque "Normativa complementaria y temáticas específicas" | (sin cambios) | "Normativa vigente sobre temas puntuales que acompañan a los Regímenes Académicos." |
| Bloque "Antecedentes / documentación histórica" | (sin cambios) | "Documentación de referencia histórica, ya no vigente como norma principal sobre su tema. No reemplaza a la normativa actual indicada en cada caso." |

Las descripciones de las secciones internas de `seccionesComplementarias` y `seccionesHistoricas` (una por
cada resolución/tema) no se tocaron: el alcance de esta tarea eran los tres textos introductorios de
página, no el contenido normativo de cada entrada.

### C. Archivos modificados

- `src/components/ui/RegimenAcademicoBlock.tsx` (toggle de texto cerrado/abierto en el `<summary>`).
- `src/data/types.ts` (comentario de `resumenDetalle` actualizado con la convención "Ver "/"Ocultar ").
- `src/app/regimen-academico/page.tsx` (dos descripciones reemplazadas).
- `docs/auditoria-vigencia-normativa-2026.md` (esta sección).

### D. Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta; `/regimen-academico` sigue prerenderizada como estática.
- Verificación del HTML renderizado: los textos nuevos de encabezado y de "Regímenes Académicos" están
  presentes y los anteriores ya no aparecen; los cuatro desplegables (Secundaria, Superior: texto por
  defecto; Primaria: texto propio) alternan "Ver X" / "Ocultar X" mediante `group-open:hidden` /
  `hidden group-open:inline`; ninguna de las frases prohibidas ("primero,", "el orden sigue", "para quien
  consulta", "se agregó", "pendiente", etc.) aparece en el bloque de Regímenes Académicos.
