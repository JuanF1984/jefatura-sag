# Fuentes oficiales — Formularios

Este documento registra las fuentes usadas para reconstruir la página **Formularios**
(`src/app/formularios/page.tsx`), en reemplazo de la versión heredada del Google Sites original (ver
`docs/inventario-sitio-original.md`, secciones 7 a 11).

## Criterio de búsqueda

Se usaron exclusivamente `abc.gob.ar` y sus subdominios oficiales: `servado.abc.gob.ar`,
`abc2.abc.gob.ar` (Portal ABC / RRHH), `suna.abc.gob.ar` (Sistema Único de Novedades de Agentes) y las
rutas `abc.gob.ar/sad/...` (Secretarías de Asuntos Docentes distritales). No se usaron blogs, sitios
sindicales, servicios de terceros (p. ej. `sad117.com.ar`, `sadlobos.com`, `portaldocente.com.ar`) ni
copias no oficiales, aunque aparecieron en los resultados de búsqueda.

**Dominio descartado por indicación explícita del alcance**: `servicios.abc.gov.ar` (`.gov.ar`, no
`.gob.ar`) aparece como acceso histórico a la consulta de Puntaje Anual Docente. Se usó en su lugar
`servado.abc.gob.ar/pad`, que resuelve en el dominio oficial del proyecto.

**Hallazgo relevante**: existe un sitio SAD (Secretaría de Asuntos Docentes) propio para el distrito de
San Andrés de Giles en `abc.gob.ar/sad/san-andres-de-giles/`, con contacto propio (`sad093@abc.gob.ar`,
Belgrano 415, tel. 02325-440417). No debe confundirse con la Jefatura Distrital de Inspección
(`jd093@abc.gob.ar`, Rivadavia 148): son dos oficinas distintas de la DGCyE que atienden al mismo
distrito. En esta página se lo trata como fuente oficial DGCyE, nunca como contenido de Jefatura.

## Declaraciones juradas y documentación de Jefatura Distrital

No es investigación de fuentes nuevas: son los dos documentos recuperados del sitio original que se
mantienen vigentes como modelos locales. Se verificó que ambos enlaces de Google Drive siguen resolviendo
(HTTP 200).

| Campo | Detalle |
|---|---|
| Título | Declaración Jurada de Horarios (modelo) |
| Organismo | Jefatura Distrital San Andrés de Giles (documento propio, no DGCyE) |
| URL | https://drive.google.com/open?authuser=0&id=1qg2ciQHdmKIu_Ewf1DpRvZ9pl7KwTRjA |
| Tipo | Planilla Excel — modelo descargable |
| Fecha de verificación | 2026-08-12 |

| Campo | Detalle |
|---|---|
| Título | Constancia de inscripción — título en trámite |
| Organismo | Jefatura Distrital San Andrés de Giles (documento propio, no DGCyE) |
| URL | https://drive.google.com/open?authuser=0&id=1x_cdxnDV8vsUXDetpMCgjeq8CTpIL3iT |
| Tipo | PDF — modelo descargable |
| Qué aporta | Complementa (no reemplaza) la inscripción online de Ingreso a la Docencia para quienes todavía no tienen el título definitivo. |
| Fecha de verificación | 2026-08-12 |

## Ingreso a la Docencia y Listados

| Campo | Detalle |
|---|---|
| Título | Ingreso a la Docencia — Listado Oficial |
| Organismo | Dirección de Tribunales de Clasificación — Subsecretaría de Educación (DGCyE) |
| URL | https://abc.gob.ar/secretarias/noticias/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/ingreso |
| Tipo | Portal oficial / trámite online |
| Qué aporta | Inscripción vía "Inscripciones y Acciones Estatutarias" (menu.abc.gob.ar), declaración jurada digital de antecedentes, reclamos en dos instancias y rectificación/inclusión de listados — todo en la misma página, sin formularios en papel. |
| Vigencia verificada | Ciclo "Ingreso a la Docencia 2026 – Listado Oficial 2027": inscripción 16/3–23/5/2026, evaluación 26/5–22/7/2026, exhibición de listados 27/7–7/8/2026, reclamos desde 27/7/2026. |
| Fecha de verificación | 2026-08-12 |

| Campo | Detalle |
|---|---|
| Título | Listado Oficial (Servado) |
| Organismo | DGCyE |
| URL | https://servado.abc.gob.ar/lof |
| Tipo | Trámite online (consulta) |
| Fecha de verificación | 2026-08-12 (ya usado en `docs/fuentes-calendario-novedades.md`) |

| Campo | Detalle |
|---|---|
| Título | Servado — Autogestión docente |
| Organismo | DGCyE |
| URL | https://servado.abc.gob.ar/ |
| Tipo | Trámite online (requiere usuario ABC) |
| Fecha de verificación | 2026-08-12 (ya usado en `docs/fuentes-calendario-novedades.md`) |

## Puntaje y carrera docente

| Campo | Detalle |
|---|---|
| Título | Movimiento Anual Docente y Acrecentamiento (MAD) |
| Organismo | Dirección de Tribunales de Clasificación (DGCyE) |
| URL | https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tribunales-de-clasificacion/tribunales-de-clasificacion/mad |
| Tipo | Portal oficial |
| Fecha de verificación | 2026-08-12 (ya usado en `docs/fuentes-calendario-novedades.md`) |

| Campo | Detalle |
|---|---|
| Título | Puntaje Anual Docente (PAD) |
| Organismo | DGCyE |
| URL | https://servado.abc.gob.ar/pad |
| Tipo | Trámite online (consulta y reclamo, requiere usuario ABC) |
| Qué aporta | PAD = resultado de la valoración numérica del desempeño de docentes titulares (antecedentes, títulos y cursos), usado para MAD, desplazamiento y acrecentamiento. Reemplaza al acceso histórico por `servicios.abc.gov.ar` (dominio `.gov.ar`, descartado — ver arriba). |
| Fecha de verificación | 2026-08-12 |

## Licencias docentes

| Campo | Detalle |
|---|---|
| Título | Mis Licencias |
| Organismo | DGCyE |
| URL | https://menu.abc.gob.ar/api/services/link/Mis%20Licencias |
| Tipo | Trámite online (requiere usuario ABC) |
| Qué aporta | Sistema para solicitar y consultar licencias médicas y administrativas. Es el reemplazo digital que se prioriza por sobre el formulario en papel cuando ambos existen. Se presenta en `/formularios` como acceso secundario (no como tarjeta principal), aclarando que requiere iniciar sesión con cuenta ABC. |
| Fecha de verificación | 2026-08-18 |
| Nota | URL actualizada desde `https://abc2.abc.gob.ar/mis-licencias` (enlace anterior, descartado). |

| Campo | Detalle |
|---|---|
| Título | Solicitud de licencias — Art. 114 y 115 (SAD San Andrés de Giles) |
| Organismo | Secretaría de Asuntos Docentes (SAD) San Andrés de Giles — DGCyE |
| URL | https://abc.gob.ar/sad/sites/default/files/2023-06/Formulario%20solicitud%20de%20licencias%20114%20y%20115%20%281%29.pdf |
| Tipo | PDF — formulario oficial |
| Qué aporta | Formulario en papel del SAD de este mismo distrito. Reemplaza a la copia de Google Drive de la versión anterior de la página (`Formulario Licencia 114 y 115.pdf`), de procedencia no verificable, por una fuente oficial trazable. |
| Fecha de verificación | 2026-08-12 |

| Campo | Detalle |
|---|---|
| Título | Ley 10579 — Estatuto del Docente (texto actualizado) |
| Organismo | DGCyE |
| URL | https://abc.gob.ar/secretarias/sites/default/files/2021-06/LEY_10579_0%20ESTATUTO%20DEL%20DOCENTE.pdf |
| Tipo | PDF — normativa completa |
| Qué aporta | Texto vigente de la ley, con el régimen completo de licencias (artículos 114 a 119). Se enlaza en vez de resumir o reinterpretar los incisos. |
| Fecha de verificación | 2026-08-12 |

| Campo | Detalle |
|---|---|
| Título | Dirección de Calidad Laboral y Medio Ambiente del Trabajo (CLyMAT) |
| Organismo | DGCyE |
| URL | https://abc2.abc.gob.ar/rrhh/direcci%C3%B3n-de-calidad-laboral-y-medio-ambiente-del-trabajo |
| Tipo | Portal oficial |
| Qué aporta | Página oficial de la dirección competente para la licencia por profilaxis (Art. 114 inciso h). El correo `clymat_gestion@abc.gob.ar` y el plazo de 72 hs mencionados en la página nueva provienen del texto original recuperado del sitio anterior (ver abajo), no de esta página, que no repite ese detalle operativo. |
| Fecha de verificación | 2026-08-12 |

### Sobre el bloque "LICENCIA 114 H" de la versión anterior

El texto completo (12 párrafos, protocolo de profilaxis) **no se muestra en la interfaz pública**. Se
reemplazó por una tarjeta breve ("Licencia por profilaxis — Artículo 114 inciso h") con el hecho
operativo esencial (quién lo solicita, ante quién, en qué plazo) y el enlace a la Dirección de Calidad
Laboral y Medio Ambiente del Trabajo. El texto original íntegro, tal como se recuperó del sitio anterior,
se conserva sin alterar en `docs/inventario-sitio-original-anexo.md` (sección 11, "LICENCIA 114 H"), para
no perder ese contenido ni tener que reinterpretar la normativa al resumirlo.

## Otros formularios

| Campo | Detalle |
|---|---|
| Título | Formularios — SAD San Andrés de Giles |
| Organismo | Secretaría de Asuntos Docentes (SAD) San Andrés de Giles — DGCyE |
| URL | https://abc.gob.ar/sad/san-andres-de-giles/formularios |
| Tipo | Portal oficial (índice de formularios en PDF) |
| Qué aporta | Formularios oficiales del distrito: Representante en Acto Público, Renuncia por Causas Particulares, DDJJ Inscripción Formación Profesional, Formulario 354 (reclamo de antigüedad), DDJJ Listado de Emergencia, Solicitud de Lic. 114-115 (enlazada aparte en "Licencias docentes") y DDJJ 108 A y B InFine. Se enlaza el índice completo, no cada PDF individual, para que la lista se mantenga al día sin depender de que este proyecto la actualice. |
| Fecha de verificación | 2026-08-12 |

| Campo | Detalle |
|---|---|
| Título | SUNA — Sistema Único de Novedades de Agentes |
| Organismo | DGCyE |
| URL | https://suna.abc.gob.ar/ |
| Tipo | Trámite online (requiere usuario ABC; redirige a `menu.abc.gob.ar` para autenticar) |
| Qué aporta | Herramienta para equipos de conducción escolar: alta de licencias del personal, pedido de cobertura (IGE digital) y novedades de agentes. Es el recurso que responde específicamente a "formularios utilizados por equipos directivos". |
| Fecha de verificación | 2026-08-12 |

## Fuentes descartadas (no oficiales o fuera de alcance)

| Recurso | Motivo del descarte |
|---|---|
| `servicios.abc.gov.ar/servaddo/puntaje.anual.docente/` | Dominio `.gov.ar`, fuera del alcance (`abc.gob.ar` y subdominios). Reemplazado por `servado.abc.gob.ar/pad`. |
| `abc.gob.ar/sad/pehuajo/...`, `abc.gob.ar/sad/campana/...`, `abc.gob.ar/sad/junin/...`, `abc.gob.ar/sad/la-plata-i/...`, etc. | Sitios SAD de **otros** distritos, aparecieron en la búsqueda pero no corresponden a San Andrés de Giles (`jd093`). Se usó `abc.gob.ar/sad/san-andres-de-giles/...` en su lugar. |
| `sad117.com.ar`, `sadlobos.com`, `sadazul.com.ar`, `portaldocente.com.ar`, blogs de Consejos Escolares y grupos sindicales | No son dominios oficiales de la DGCyE. |
| `abc.gob.ar/sad/taxonomy/term/458` ("PAD") | Página agregadora de noticias por distrito, no un trámite ni un formulario en sí. |

## Metodología

Búsqueda con motor de búsqueda web + verificación directa de cada URL (contenido, organismo, vigencia).
Se comprobó el código de respuesta HTTP de las 12 URLs oficiales citadas arriba y de los 2 documentos de
Jefatura Distrital: las 14 devuelven `200 OK` (verificado 2026-08-12). No se descargó ni copió el
contenido de los PDF/Excel al proyecto: se enlazan directamente a la fuente.
