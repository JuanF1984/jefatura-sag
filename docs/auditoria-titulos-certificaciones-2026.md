# Auditoría de vigencia normativa — Títulos y certificaciones (`/titulos`)

**Fecha de referencia de la auditoría:** 15 de septiembre de 2026.
**Alcance:** todo el contenido de `src/data/titulos-secciones.ts` y `src/app/titulos/page.tsx`. No se
modificó ningún otro dataset del sitio.

**Método:** para cada recurso se buscó su fuente oficial (prioridad `abc.gob.ar` > `normas.gba.gob.ar` >
sitios oficiales de DGCyE > GDEBA > Boletín Oficial PBA > otros dominios `gba.gob.ar`) usando búsqueda web
y lectura de PDF cuando fue posible. Se usaron también, sólo como pista para ubicar la fuente oficial (nunca
como fundamento final de vigencia), las páginas de "Títulos" de otras Jefaturas Distritales de la Provincia
(Berisso, `sites.google.com/abc.gob.ar/jd113`) que replican el mismo tipo de contenido que este sitio. Cuando
la evidencia no alcanzó para confirmar un estado, se clasificó `NO_VERIFICADA` en lugar de asumir vigencia o
derogación. Varios PDF de Google Drive y de `normas.gba.gob.ar` no pudieron leerse (contenido binario no
extraíble o enlaces caídos); en esos casos se dejó constancia explícita en vez de forzar una conclusión.

---

## Hallazgo principal (leer primero)

**El circuito de anulación de títulos que publicaba el sitio (formulario en papel por triplicado) seguía
siendo real, pero estaba incompleto: falta el marco nacional que lo reencuadra.** Desde el 1° de noviembre
de 2023, la **Resolución CFE N° 440/23** (Consejo Federal de Educación) hizo obligatoria la emisión
**exclusivamente digital** de títulos y certificados de estudios completos de Nivel Secundario y Superior en
todo el país, dentro del **Sistema Federal de Títulos Digital (SisFeT)**, y creó el Registro Federal de
Egresados (ReFE) y el Repositorio de Títulos Digitales (ReTiDi). La **Resolución CFE N° 479/24** ajustó
condiciones de implementación desde la Serie 2025 (1° de enero de 2025). La Provincia de Buenos Aires
implementa ese marco como "Sistema Provincial de Títulos", con un módulo de anulación digital comunicado por
el Área de Títulos en septiembre de 2024 (documento que el sitio ya tenía cargado, pero en una sección
separada y sin esta explicación). El procedimiento en papel que describía el sitio sigue aplicando, pero sólo
a títulos emitidos **antes** de esa fecha (stock histórico), no al circuito general de un egresado actual.
Ver el detalle en la sección 1 más abajo.

---

## 1. Anulación de títulos (prioridad alta según el pedido)

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `anulacion-de-titulos` (texto del procedimiento en papel) + `anulacion-de-titulos-2` (comunicado del módulo digital) — **dos secciones separadas con el mismo título**, fusionadas en esta tanda |
| Qué había | Un bloque de solo texto describiendo el trámite en papel (formulario por triplicado, DNI, partida, denuncia por extravío) y, como sección aparte con el mismo nombre, un PDF de Drive sin fecha visible ("Comunicado Título Digital - MÓDULO ANULACIÓN.pdf") |
| Qué está desactualizado | No el contenido en sí (el trámite en papel sigue siendo real para títulos ya emitidos en papel), sino la **falta de marco**: no se aclaraba que desde noviembre de 2023 los títulos nuevos son exclusivamente digitales, ni que existen dos circuitos distintos según el formato del título |
| Normativa/procedimiento vigente actual | **Resolución CFE 440/23** (título digital obligatorio desde 1/11/2023) y **Resolución CFE 479/24** (ajustes desde la Serie 2025), implementadas en la Provincia como Sistema Provincial de Títulos. Para título digital con error, el circuito verificado por múltiples fuentes independientes es: nota a la Subsecretaría de Educación — Área de Títulos, aclarando si corresponde reimprimir como ORIGINAL o como DUPLICADO |
| Qué cambió en el circuito | Antes de 2023: todo el trámite era en papel, ante la Jefatura Distrital. Desde 2023: los títulos se emiten digitalmente (SisFeT/Sistema Provincial de Títulos); el error o la anulación de un título digital se resuelve por nota a un área central (Subsecretaría de Educación), no en la Jefatura Distrital como primer paso. El trámite en papel (triplicado, denuncia con serie y número de formulario) sigue vigente sólo para el stock de títulos ya emitidos en papel |
| Fuente oficial verificada | Marco nacional: `argentina.gob.ar/educacion/direccion-de-validez-nacional-de-titulos-y-estudios/sistema-federal-de-titulos-digital` (cita ambas resoluciones CFE con fecha y objeto). El número de disposición/resolución **provincial** puntual que reglamenta el módulo de anulación digital **no se encontró** en fuente oficial pública durante esta auditoría |
| Estado | El marco nacional (CFE 440/23 y 479/24): **VIGENTE**. El módulo provincial de anulación digital: **NO_VERIFICADA** en cuanto a su número de norma exacto, aunque su existencia está corroborada por múltiples fuentes independientes (comunicado ya cargado en el sitio, réplica del mismo comunicado en la Jefatura de Berisso, y descripciones coincidentes del circuito ORIGINAL/DUPLICADO en distintas búsquedas) |
| Acción aplicada | Se fusionaron las dos secciones duplicadas en una sola ("Anulación de títulos"), con una descripción que distingue explícitamente el circuito papel (histórico) del circuito digital (vigente), cita el marco CFE 440/23 y 479/24, y aclara la falta de un número de norma provincial confirmado para el módulo digital |
| Nivel de confianza | Alto en el marco nacional (fuente oficial `argentina.gob.ar`, dos resoluciones CFE identificadas con número y objeto); medio en la vigencia del módulo provincial (comunicado operativo, sin número de disposición confirmado) |
| Fecha de verificación | 2026-09-15 |

**No se eliminó el procedimiento en papel**: sigue siendo información real y necesaria para quien tiene un
título emitido antes de 2023. Se lo conservó, pero encuadrado como un circuito distinto (no el único, ni el
que corresponde a un egresado actual).

---

## 2. Rectificación, corrección y duplicados

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | No existía una sección dedicada — sólo un documento "DDJJ Anulación Título.pdf" bajo el rótulo genérico "DDJJ", mezclado con un documento de analíticos incompletos que no tenía relación con anulación |
| Qué se encontró | Para un título digital con error detectado después de la emisión, el circuito verificado (coincidente en más de una fuente) es una nota a la Subsecretaría de Educación — Área de Títulos, indicando si corresponde un ORIGINAL corregido o un DUPLICADO (si el título ya fue entregado) |
| Fuente oficial verificada | No se encontró un instructivo o formulario específico publicado en fuente oficial dedicado únicamente a "duplicado" (sin anulación de por medio) o a "rectificación" como trámites autónomos. La información disponible proviene de búsquedas que combinan varias páginas oficiales y de Jefaturas Distritales con redacción coincidente, no de un único PDF oficial leído directamente |
| Estado | **NO_VERIFICADA** (el circuito descrito es plausible y consistente entre fuentes, pero no se confirmó contra un instructivo oficial único) |
| Acción aplicada | Se creó la sección "Rectificación, corrección y duplicados" con una descripción textual del circuito conocido y el contacto oficial del Departamento de Registro de Títulos (regtit@abc.gob.ar), **sin inventar ni enlazar ningún documento**. No se fabricó un PDF ni un formulario que no se pudo confirmar |
| Fecha de verificación | 2026-09-15 |

---

## 3. Certificados analíticos

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `ddjj`, `instructivo`, `modelo`, `modelo-tecnica`, `instructivo-certificaciones-secundaria` — dispersos en cinco secciones distintas, una de ellas ("DDJJ") mezclando un documento de anulación con uno de analíticos incompletos |
| Hallazgo | El certificado analítico **completo** se emite con firma digitalizada de la máxima autoridad de la DGCyE desde el **24 de octubre de 2019** (confirmado en `abc2.abc.gob.ar/buscador-de-titulos-`, nota oficial). El analítico **incompleto/parcial** es un trámite distinto, para trayectorias no finalizadas |
| Normativa nueva encontrada | Una Jefatura Distrital par (Berisso) publica en 2026 una versión de su "Instructivo para analíticos incompletos" fechada **12 de marzo de 2026**, más reciente que la copia sin fecha que tiene este sitio. No se pudo confirmar si el contenido cambió sustancialmente, ni acceder a una copia oficial verificable de esa versión 2026 (es un Google Drive de otra Jefatura, no una fuente oficial de primer nivel) |
| Estado | Certificación con firma digitalizada (2019): **VIGENTE**. Instructivo de analíticos incompletos propio del sitio: **NO_VERIFICADA** en cuanto a si es la versión más reciente |
| Acción aplicada | Se agruparon los cinco documentos bajo una única sección "Certificados analíticos", con una descripción que distingue completo de incompleto/parcial, se separó el documento de analíticos incompletos que estaba mal ubicado bajo "DDJJ", y se dejó una nota visible de que existe (sin confirmar) una versión 2026 más nueva del instructivo, para quien mantenga el sitio en el futuro |
| Fecha de verificación | 2026-09-15 |

---

## 4. Titulación de estudiantes con PPI — Resoluciones 3898/19 y 4891/18

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `titulos-con-ppi` (Anexo I, Res. 3898/19) y `res-4891-18-estudiantes-con-ppi`, fusionadas en una sola sección en esta tanda |
| Resolución 4891/18 | **Confirmada.** Se encontró una copia oficial alojada en `abc.gob.ar` ("2018- Resolución 4891- Titulación en el Nivel Secundario.pdf"), con formato de expediente GDEBA, confirmando organismo (DGCyE Provincia de Buenos Aires) y tema. El PDF no pudo leerse íntegramente (binario no extraíble), así que no se confirmó si tiene modificaciones posteriores |
| Resolución 3898/19 | **No confirmada contra fuente oficial.** La búsqueda web sólo encontró una "Resolución 3898/19" de **otra jurisdicción** (Ciudad de Buenos Aires, Ministerio de Educación e Innovación — MEIGC), que **no es la misma norma**. No se encontró una copia de esta resolución alojada en `abc.gob.ar`. Al mismo tiempo, la Jefatura Distrital de Berisso cita exactamente los mismos dos números ("3898/19, 4891/18") en el mismo contexto de titulación PPI, lo que es un indicio (no una confirmación) de que sí corresponde a la Provincia de Buenos Aires |
| Estado | Res. 4891/18: **VIGENTE** (confianza alta en autenticidad/origen, media en ausencia de modificaciones posteriores). Res. 3898/19: **NO_VERIFICADA** |
| Acción aplicada | Se reemplazó el enlace de Drive de la Resolución 4891/18 por la copia oficial de `abc.gob.ar`. La Resolución 3898/19 **se mantuvo** (no se eliminó: el indicio de origen provincial es razonable y no hay evidencia de que esté mal), pero la descripción de la sección deja constancia explícita de que no se pudo confirmar contra el texto oficial, para que no se presente como más verificada de lo que está |
| Fecha de verificación | 2026-09-15 |

---

## 5. Correspondencias y equivalencias entre planes de estudio

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `anexo-1`, `anexo-2`, `anexo-3` (todos `IF-2021-...-GDEBA-DEJAYAMDGCYE`, 2021) y `correspondencia-secundaria-cens` (`DI-2022-05763106-GDEBA-DEJAYAMDGCYE`, 2022), fusionados en una sola sección |
| Normativa nueva encontrada (alta confianza) | **Disposición N° 7/2025 (DI-2025-37270294-GDEBA-DPESECDGCYE)**, "Disposición sobre dictámenes de Equivalencias", con Anexos I y II, publicada en `abc.gob.ar` en **noviembre de 2025**. Confirmada directamente en la página oficial "Normativa Secundaria" de la Subsecretaría de Educación (`abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/educacion-secundaria/educacion-secundaria/normativa-secundaria`), que la lista con nombre, número y PDF oficial. Corresponde a la Dirección Provincial de Educación Secundaria (DPESEC) — Educación Secundaria común |
| Relación con los recursos existentes | Los anexos y la tabla de 2015/2021 que ya tenía el sitio son de la **Dirección de Educación de Jóvenes, Adultos y Adultos Mayores (DEJAyAM)**, un organismo distinto dentro de la DGCyE, para la modalidad de Adultos — **no** son la misma norma que la Disposición 7/2025 de DPESEC (Secundaria común). No corresponde presentar una como reemplazo directo de la otra |
| Normativa adicional detectada, no confirmada | Una Jefatura Distrital par cita una "DISPO-2025-150-GDEBA-DEJAYAMDGCYE" (2025) con anexos sobre correspondencia e ingreso, que **podría** actualizar los anexos DEJAyAM de 2021 del sitio. No se encontró una copia oficial de este número en `abc.gob.ar` durante esta auditoría |
| Estado | Disposición 7/2025 (DPESEC): **VIGENTE**, confirmada en fuente oficial. Anexos DEJAyAM 2015/2021: **NO_VERIFICADA** en cuanto a si siguen siendo la versión vigente de su modalidad |
| Acción aplicada | Se **agregó** la Disposición 7/2025 como nuevo recurso (no reemplaza a los anexos DEJAyAM, que son de otra modalidad y se conservaron). La descripción de la sección explica la diferencia de organismos y deja constancia de la posible DISPO-2025-150 sin confirmar, para que quede documentada sin publicarla como si estuviera verificada |
| Fecha de verificación | 2026-09-15 |

---

## 6. Validez nacional de los títulos — "hasta 2029" y "hasta 2019"

| Campo | Detalle |
|---|---|
| ID actual en el proyecto | `validez-nacional-hasta-2029` y `validez-nacional-hasta-2019`, mostradas una junto a la otra sin distinción de vigencia |
| Qué se encontró | Ambas son el mismo tipo de documento (tabla de validez nacional de títulos), una sucediendo a la otra por período de cobertura. La de "hasta 2029" es la vigente hoy; la de "hasta 2019" quedó cubierta por la posterior |
| Estado | "Hasta 2029": **VIGENTE**. "Hasta 2019": **HISTORICA** |
| Acción aplicada | Se movió "Validez nacional... hasta 2019" a una nueva sección de documentación histórica (`seccionesHistoricasTitulos`), renderizada en un bloque separado al final de la página, con una nota explícita de que fue reemplazada por la vigente hasta 2029. No se eliminó del proyecto: sigue teniendo valor para egresados de ese período |
| Fecha de verificación | 2026-09-15 |

---

## 7. Legalización de títulos — investigado, sin cambios aplicados

No hay hoy en `/titulos` ninguna sección sobre legalización, así que no había nada que corregir en el
dataset. Para dejar constancia de lo investigado: se confirmó (`gba.gob.ar/educacion/noticias/legalizacion-de-titulos`,
espejada en `abc2.abc.gob.ar/se-simplifico-la-legalizacion-de-titulos`) que para títulos secundarios y
terciarios emitidos desde 2010 ya no es necesaria la legalización ante el Ministerio del Interior, sólo la
firma de la autoridad educativa provincial donde se presenta el documento. No se pudo determinar la fecha
exacta de esa simplificación ni si la verificación por código QR de los títulos digitales (desde 2023) volvió
aún más innecesaria la legalización como trámite separado. **Estado: NO_VERIFICADA.** No se agregó una
sección nueva sin evidencia más sólida.

---

## Tabla resumen

| Recurso actual | Tema | Estado | Norma/procedimiento posterior | Acción aplicada |
|---|---|---|---|---|
| Anulación de títulos (dos secciones duplicadas) | Anulación, papel y digital | Marco nacional VIGENTE; módulo provincial NO_VERIFICADA (número de norma) | Res. CFE 440/23 y 479/24 | Fusionadas; se agregó marco normativo y distinción papel/digital |
| DDJJ / Rectificación / Duplicados | Corrección de errores en título digital | NO_VERIFICADA | — | Nueva sección con descripción textual, sin documentos inventados |
| Certificados analíticos (5 secciones dispersas) | Analítico completo e incompleto | Firma digitalizada VIGENTE; instructivo incompleto NO_VERIFICADA | Posible versión 2026 (no confirmada) | Agrupadas en una sección; documento mal ubicado reubicado |
| Resolución 4891/18 | Titulación PPI | VIGENTE | — | Enlace reemplazado por copia oficial `abc.gob.ar` |
| Resolución 3898/19 | Titulación PPI | NO_VERIFICADA | — | Conservada, con aclaración explícita de falta de verificación |
| Anexos DEJAyAM 2015/2021 | Correspondencias y equivalencias (Adultos) | NO_VERIFICADA | Posible DISPO-2025-150 (no confirmada) | Conservados; nota agregada |
| Disposición N° 7/2025 (DPESEC) | Equivalencias (Secundaria común) | VIGENTE | — | **Agregada** (normativa nueva) |
| Validez nacional hasta 2019 | Validez nacional | HISTORICA | Validez nacional hasta 2029 | Movida a documentación histórica |
| Validez nacional hasta 2029 | Validez nacional | VIGENTE | — | Mantenida |
| Legalización de títulos | Legalización | NO_VERIFICADA | — | Investigada; no se agregó sección sin evidencia sólida |

---

## Elementos retirados de la vista pública / movidos a histórico

- **"Validez nacional de los títulos secundarios (hasta 2019)"**: movida a "Documentación histórica" (no
  eliminada del proyecto).
- Ningún otro recurso se retiró de la vista pública: los casos `NO_VERIFICADA` (Resolución 3898/19, anexos
  DEJAyAM, instructivo de analíticos incompletos) se conservaron con la aclaración correspondiente, porque no
  hay evidencia de que estén mal — sólo de que no se pudieron confirmar del todo.

## Textos sin vínculo, nombres crudos y duplicados corregidos

- Se fusionaron las dos secciones "ANULACIÓN DE TÍTULOS" en una sola.
- Se separó el documento de analíticos incompletos que estaba mezclado bajo la sección "DDJJ" (que además
  tenía como descripción de sección un fragmento de nombre de archivo concatenado).
- Todos los títulos que eran nombres crudos de archivo (`INSTRUCTIVO SISTEMA PROVINCIAL DE TÍTULOS.pdf`,
  `VALIDEZ NACIONAL HASTA 2029.pdf`, `anexo_1_resol._3898_2019_titulacion_ppi_0.pdf`, `Resolución
  4891_2018.pdf`, `DI-2022-05763106-GDEBA-DEJAYAMDGCYE.pdf`, `IF-2021-...-GDEBA-DEJAYAMDGCYE (Anexo
  I/II/III).pdf`, `ANALITICO INCOMPLETO MODELO.xlsx`, `INCOMPLETO TECNICA.xls`, `3.
  DPESEC_confección de Analíticos Incompletos parciales_incompletos.pdf`) se reemplazaron por títulos
  funcionales. Los identificadores técnicos GDEBA se conservan como dato de trazabilidad en el campo
  `Documento.identificador` (se agregó su renderizado a `DocumentCard.tsx`, que no lo mostraba), nunca como
  título.
- Los encabezados de sección en MAYÚSCULA SOSTENIDA ("INSTRUCTIVO SISTEMA DE TÍTULOS", "DDJJ", "MODELO
  TÉCNICA", etc.) se reemplazaron por títulos en formato oración, siguiendo la convención ya usada en
  `/regimen-academico`.

## Jerarquía normativa

Se distinguió, dentro de cada sección: la normativa madre (resoluciones CFE, Disposición 7/2025, Res.
4891/18) de los documentos de apoyo (comunicados operativos, instructivos, modelos de planilla) y de la
documentación histórica — siguiendo la misma convención de `/regimen-academico`.

## Organización final de la página

1. Emisión y registro de títulos.
2. Anulación de títulos.
3. Rectificación, corrección y duplicados.
4. Certificados analíticos.
5. Titulación de estudiantes con PPI.
6. Correspondencias y equivalencias entre planes de estudio.
7. Documentación histórica (bloque separado al final, mismo patrón que `/regimen-academico`).

## Casos que quedan sin verificar (documentados, fuera de foco por falta de evidencia sólida)

- Número exacto de disposición/resolución provincial del módulo de anulación digital.
- Si la Resolución 3898/19 corresponde efectivamente a la Provincia de Buenos Aires (indicio razonable, sin
  confirmación oficial directa).
- Si existe una "DISPO-2025-150-GDEBA-DEJAYAMDGCYE" que actualice los anexos de correspondencias DEJAyAM.
- Si el "Instructivo para analíticos incompletos" tiene una versión 2026 que deba reemplazar a la actual.
- Si la legalización de títulos ante el Ministerio del Interior sigue existiendo como trámite separado para
  títulos digitales, o quedó absorbida por la verificación con código QR.

## Archivos modificados

- `src/data/titulos-secciones.ts` (reescrito: reorganizado en 6 secciones vigentes + 1 histórica; títulos
  funcionales; identificadores GDEBA movidos al campo `identificador`; se agregó la Disposición N° 7/2025;
  se reemplazó el enlace de la Resolución 4891/18 por la copia oficial de `abc.gob.ar`).
- `src/app/titulos/page.tsx` (nueva estructura de dos bloques — vigente e histórico —, metadata y
  descripción actualizadas).
- `src/components/ui/DocumentCard.tsx` (nuevo renderizado de `Documento.identificador`, hasta ahora sin
  usar fuera de `RegimenAcademicoBlock`).
- `docs/auditoria-titulos-certificaciones-2026.md` (nuevo).

## Validación

- `pnpm lint`: sin errores ni advertencias.
- `pnpm build`: compilación correcta; `/titulos` se prerenderiza como contenido estático (`○ (Static)`).
  TypeScript sin errores.

---

## Adenda 2026-09-16 — Incorporación de documentos propios (Comunicación 36/2022 y DEJAyAM)

**Motivo:** se cargaron dos documentos propios en `public/documentos/titulos/` para dejar de depender,
en la sección de anulación de títulos en papel y en el instructivo de carga DEJAyAM, de un enlace de
Drive o de páginas de otras Jefaturas Distritales como fuente pública.

| Campo | Detalle |
|---|---|
| Archivos incorporados | `public/documentos/titulos/comunicacion-36-2022-anulacion-titulos.pdf` (Comunicación N° 36/2022, Área de Títulos, 25/08/2022) y `public/documentos/titulos/titulos-dejayam-2022.pdf` (Instructivo de carga de títulos — DEJAyAM, 2022) |
| Comunicación N° 36/2022 | Se leyó el PDF completo: regula el circuito **en papel** de anulación del Certificado Analítico Completo (formulario por duplicado ante la Jefatura Distrital, con Declaración Jurada como Anexo Único). Se incorporó como documento propio en la sección "Anulación de títulos", con la categoría "Título en papel / sistemas anteriores", explícitamente distinguida del "Comunicado del módulo de anulación (título digital)" (Comunicado 2024) que ya tenía el sitio. Se actualizó la descripción de la sección para separar ambos circuitos por párrafo, en vez de la redacción anterior que los mezclaba en un solo bloque |
| Duplicado detectado y resuelto | El documento "Declaración jurada de anulación de título (por extravío)" (Drive, `id=1yY93YWgUt799nwsWNjzU_t53YKGZK4VT`) que ya estaba en la sección de anulación es, por contenido, la misma Declaración Jurada (Anexo Único) que trae la Comunicación N° 36/2022 en su página 4 — el mismo formulario sirve para las tres causas (carga incorrecta, autopercepción, extravío), no un formulario distinto sólo para extravío. Se retiró esa entrada de Drive de la lista pública para no duplicar el mismo formulario dos veces; el enlace de Drive no se eliminó de ningún lado, sólo se dejó de listar como recurso separado, porque el documento propio ya lo incluye |
| Documento DEJAyAM | Se leyó el PDF completo: es el "Instructivo para la carga de Títulos en el Sistema Provincial de Títulos" de la Dirección de Educación de Jóvenes, Adultas/os y Adultas/os Mayores, fechado en 2022 (pautas de confección de analíticos completos de CENS/Fines). Se incorporó en la sección "Emisión y registro de títulos", a continuación del instructivo general y del comunicado 2024, con la categoría "DEJAyAM — Jóvenes y Adultos" (mismo rótulo que ya usaban los anexos de correspondencias de esa modalidad) y la aclaración explícita de que es un documento de 2022, propio de esa modalidad, y no una norma nueva ni un reemplazo del instructivo general |
| Criterio de fuentes aplicado | Ningún enlace de otra Jefatura Distrital se usó como fuente pública principal en esta tanda; se mantiene el orden de prioridad: fuente oficial central (ABC/DGCyE/GBA) primero, documento propio alojado en este proyecto en segundo lugar, y nunca una página de otra Jefatura como fuente pública |
| Archivos modificados | `src/data/titulos-secciones.ts` (nuevos documentos propios, descripción de "Anulación de títulos" reescrita en dos circuitos, entrada duplicada retirada); `docs/auditoria-titulos-certificaciones-2026.md` (esta adenda) |
| Validación | `pnpm lint` y `pnpm build` ejecutados de nuevo tras el cambio — ver resultado al pie de esta adenda |
| Fecha | 2026-09-16 |

---

## Adenda 2026-09-16 (2) — Corrección de "Rectificación, corrección y duplicados"

**Motivo:** la descripción pública de este bloque afirmaba un "circuito único" ("el circuito es el mismo
que el de anulación por error") para situaciones que la Comunicación N° 36/2022 y el instructivo DEJAyAM
2022 distinguen expresamente entre sí: error de carga (reimpresión como ORIGINAL, sin leyenda DUPLICADO),
adecuación documental/cambio de identidad, y duplicado por extravío, robo, pérdida o destrucción (que sí
requiere Declaración Jurada y exposición civil). Presentarlo como un único trámite generalizaba más de lo
que la documentación disponible respalda.

| Campo | Detalle |
|---|---|
| Texto retirado | La explicación que igualaba el circuito de corrección al de anulación por error, la mención de "ORIGINAL corregido" vs. "DUPLICADO" como si fuera una sola decisión binaria, y la recomendación de escribir directamente a `regtit@abc.gob.ar` (dato sin instructivo público que lo respalde para este trámite específico) |
| Redacción nueva | Texto breve que no afirma un circuito único: remite a que el procedimiento varía según el motivo de la nueva emisión y el sistema del título, y dirige a los instructivos correspondientes ya disponibles en la página (Comunicación N° 36/2022 en "Anulación de títulos", instructivo DEJAyAM en "Emisión y registro de títulos") sin repetir esos enlaces en este bloque |
| Documentos de la sección | Esta sección no tiene documentos propios (`documentos: []`); no había enlaces que revisar por duplicación |
| Archivos modificados | `src/data/titulos-secciones.ts` (descripción de "Rectificación, corrección y duplicados" reescrita); `docs/auditoria-titulos-certificaciones-2026.md` (esta adenda) |
| Fecha | 2026-09-16 |
