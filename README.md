# Sitio institucional — Jefatura Distrital de San Andrés de Giles

Reconstrucción como sitio web nuevo del contenido institucional que antes vivía en un Google Sites
(`sites.google.com/abc.gob.ar/jefaturadistritalgiles`). El objetivo es un sitio **rápido, responsive,
ordenado y fácil de mantener sin conocimientos avanzados de programación**, que recupera el contenido
útil del sitio anterior sin reutilizar su código.

El archivo original (`material-original/Acerca de.mht`) se conserva intacto como respaldo — no
modificar ni borrar.

## Tecnología

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (tokens en `src/app/globals.css`)
- Sin base de datos, sin autenticación, sin panel de administración (alcance de esta primera etapa)
- **Gestor de paquetes: exclusivamente [`pnpm`](https://pnpm.io).** No usar `npm` ni `yarn` en este
  proyecto.

## Requisitos

- Node.js 20 o superior
- `pnpm` instalado (`npm install -g pnpm` si no lo tenés, sólo para instalar pnpm en sí — el proyecto
  no vuelve a necesitar `npm` después de eso)

## Instalación y desarrollo local

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Compilación y otros comandos

```bash
pnpm build   # build de producción
pnpm start   # sirve el build de producción localmente
pnpm lint    # ESLint
```

No usar `npm install`, `npm run`, `yarn` ni generar `package-lock.json`/`yarn.lock`. El único lockfile
del proyecto es `pnpm-lock.yaml`.

## Estructura de carpetas

```
src/
  app/                    Rutas (App Router). Una carpeta por página pública.
    guia-visual/          Página interna del sistema de diseño (no está en el menú público).
  components/
    layout/                Header, Footer.
    ui/                     Componentes reutilizables (Button, Card, Notice, íconos, etc.).
  data/                     Todo el contenido del sitio, separado de los componentes.
  lib/                      Utilidades pequeñas (clases CSS, tipo de archivo por extensión).
public/
  assets/recuperados/       Imágenes recuperadas del sitio original (ver docs/inventario-sitio-original.md).
docs/
  inventario-sitio-original.md         Qué se recuperó del Google Sites y de dónde.
  inventario-sitio-original-anexo.md   Detalle completo (110 documentos) generado desde el HTML fuente.
  referencia-visual-abc.md             Investigación visual de abc.gob.ar / gba.gob.ar previa al diseño.
  fuentes-calendario-novedades.md      Fuentes oficiales DGCyE usadas en "Calendario y novedades".
material-original/
  Acerca de.mht             Archivo original — no modificar ni borrar.
```

## Cómo actualizar contenido

Todo el contenido vive en `src/data/*.ts`, separado de los componentes visuales. Para editarlo no hace
falta tocar ningún componente `.tsx`.

### Datos institucionales generales (dirección, teléfono, autoridades, redes)

Editar `src/data/site.ts`.

### Textos y enlaces

- **Inicio / historia del logotipo**: `src/data/institucional.ts`.
- **Accesos principales de Inicio**: `src/data/accesos.ts`.
- **Navegación del sitio**: `src/data/navigation.ts`.

### Cómo agregar una institución educativa

El listado de `/instituciones` (`src/data/instituciones.ts`) se genera desde la planilla interna con
`pnpm run migrar:instituciones` (`scripts/generar-instituciones.js`) y contiene sólo campos públicos,
incluido el CUE. Las coordenadas del botón «Ver en el mapa» viven aparte en
`src/data/instituciones-geo.ts`, se generan con `pnpm run importar:kml` desde el Google My Maps del
distrito y se unen por CUE. El flujo completo, cómo obtener el KML y cómo cargar una institución
nueva o mover una que se mudó están en `docs/mapa-instituciones.md`.

### Cómo agregar un inspector/a

Editar el array en `src/data/inspectores.ts`:

```ts
{ nombre: "Apellido, Nombre", nivelModalidad: "Educación Primaria" }
```

### Cómo agregar un documento

Los documentos están agrupados por página en:

- `src/data/formularios-secciones.ts`
- `src/data/normativa-secciones.ts`
- `src/data/titulos-secciones.ts`

Cada archivo exporta un array de secciones (`SeccionDocumentos[]`, tipo definido en `src/data/types.ts`).
Para agregar un documento nuevo, sumar un objeto a la lista `documentos` de la sección correspondiente:

```ts
{
  titulo: "Nombre del archivo.pdf",
  href: "https://drive.google.com/...",   // enlace externo a Drive (u otro origen)
  categoria: "Opcional",
  fecha: "Opcional",
}
```

El tipo de archivo (PDF/Word/Excel) se infiere automáticamente del nombre; no hace falta especificarlo
salvo que el nombre no tenga extensión.

### Cómo agregar un formulario (Google Forms u otro)

Ver `src/data/formularios-inspectores.ts` como ejemplo (`formularioTomaDePosesion`). Se define un objeto
con `contexto` (para qué sirve, quién debe completarlo) y `href` (enlace externo).

### Calendario y novedades

La página **Calendario y novedades** (`src/app/calendario-y-novedades/page.tsx`) prioriza enlaces a
fuentes oficiales vigentes de la DGCyE en vez de copiar su contenido. Las fuentes usadas están
documentadas en [`docs/fuentes-calendario-novedades.md`](./docs/fuentes-calendario-novedades.md)
(título, organismo, URL, qué aporta y fecha de verificación).

- **Calendario escolar** (`src/data/calendario.ts`): enlace al portal oficial
  (`abc.gob.ar/calendario_escolar`) + los 1–2 PDF de consulta más frecuente (resolución y anexo de
  feriados). No agregar más anexos como PDF suelto: si hace falta un anexo nuevo, preferir actualizar el
  enlace al portal antes que sumar otro PDF a la grilla.
- **Trámites e inscripciones docentes** (`src/data/tramites-docentes.ts`): accesos a servicios de
  ABC/Servado (Ingreso a la Docencia, MAD, Acrecentamiento, Listado Oficial). No copiar cronogramas ni
  fechas acá — cada portal mantiene las suyas.
- **Novedades y recursos educativos** (`src/data/recursos-educativos.ts`): accesos destacados a
  noticias y recursos pedagógicos de la DGCyE (Portal ABC, Continuemos Estudiando). Deliberadamente
  corto: esta página es una puerta de acceso, no un espejo de ABC.
- **Novedades distritales** (`/novedades`, datos en `src/data/novedades.ts`): publicaciones propias de
  la Jefatura, versionadas en Git (sin base de datos ni servicios externos). Es lo único que se espera
  mantener manualmente con el tiempo; ver "Cómo cargar una novedad distrital" más abajo.
- **Archivo 2025** (`src/data/archivo-2025.ts`): contenido del ciclo lectivo 2025 recuperado del sitio
  anterior. Se muestra en una sección colapsable al pie de la página, marcado como histórico. No
  eliminar sin confirmar que no se usa en otra parte del sitio.

### Cómo cargar una novedad distrital

Las novedades viven en `src/data/novedades.ts` (array `novedades`) y se publican en `/novedades`,
`/novedades/<slug>` y, las 3 más recientes, en la portada. Mientras el array esté vacío, la portada no
muestra la sección ni enlaza a `/novedades`; aparece sola con la primera publicación.

1. (Opcional) Preparar la imagen y copiarla a `public/novedades/` (ver recomendaciones abajo).
2. Agregar un objeto al array `novedades` (hay una plantilla comentada en el archivo). El orden en el
   archivo no importa: el sitio ordena por `fecha`, de la más reciente a la más antigua (ver "Criterio
   de fechas").

   ```ts
   {
     slug: "acto-dia-de-la-tradicion",       // único; minúsculas, números y guiones
     fecha: "2026-11-10",                    // AAAA-MM-DD: día del acontecimiento (sin hora)
     titulo: "Título de la publicación",
     resumen: "Resumen breve para tarjetas y listado.",
     contenido: `Primer párrafo.

Segundo párrafo, separado por una línea en blanco.`,
     categoria: "Comunicado",                // opcional
     imagen: "/novedades/acto-tradicion.webp", // opcional
     imagenAlt: "Descripción de la foto",    // obligatorio si hay imagen
     enlace: { texto: "Ver más información", url: "https://..." }, // opcional
   },
   ```

3. Verificar con `pnpm dev` y publicar con commit + push.

Reglas: sin HTML ni Markdown en `contenido` (sólo texto y párrafos); `slug` único (si se repite, la
compilación falla con un mensaje claro, igual que con una fecha inexistente o una imagen sin
`imagenAlt`). El `slug` forma parte de la URL: no cambiarlo una vez publicado.

**Criterio de fechas:**

- `fecha` es la fecha **del acontecimiento**, no el día en que se carga la noticia en el sitio.
- Para una actividad de varios días se puede usar la fecha de finalización (p. ej. una feria del 14 al
  18 de septiembre lleva `2026-09-18`); el período completo se aclara en el `contenido`.
- El orden de las novedades (portada y `/novedades`) se determina por esa fecha, de la más reciente a la
  más antigua. Si dos novedades tienen la misma fecha, se respeta el orden del archivo.
- No reemplazar la fecha por el día de carga ni de despliegue. Estas aclaraciones son internas: no van
  en las páginas públicas.

**Imágenes** (una por publicación, como máximo):

- Formato WebP preferido (JPG también sirve).
- Proporción 3:2 (horizontal). Se muestran recortadas a 3:2 sin deformarse, así que conviene encuadrar el
  motivo principal hacia el centro.
- Ancho entre 1200 y 1600 px; peso ideal por debajo de ~300 KB. No subir originales de celular (varios
  MB): Next.js las reduce al servirlas, pero el repositorio crece igual.
- Nombre descriptivo en minúsculas y con guiones (`acto-dia-de-la-tradicion.webp`).
- Si se necesita optimizar seguido, se puede sumar más adelante un script con `sharp` (ya viene con
  Next.js) que redimensione y convierta a WebP; por ahora se puede usar cualquier editor o Squoosh.

### Cómo actualizar imágenes

1. Colocar el archivo en `public/assets/recuperados/` (o una subcarpeta nueva) con un nombre
   descriptivo (evitar `image1.png`, `IMG_001.jpg`, etc.).
2. Referenciarlo desde `src/data/*.ts` con la ruta `/assets/recuperados/nombre-del-archivo.ext`.
3. Usarlo con el componente `next/image` (`<Image src=... alt="..." />`) para que Next.js lo optimice
   automáticamente. El texto `alt` es obligatorio y debe describir la imagen, no repetir el nombre del
   archivo.

### Cómo actualizar enlaces externos

Todos los enlaces externos (Drive, Forms, Maps, redes sociales, otros sitios) deben:

- abrir en pestaña nueva (`target="_blank"`);
- llevar `rel="noopener noreferrer"`;
- tener un texto descriptivo (no "hacer clic aquí").

Usar el componente `src/components/ui/ExternalLink.tsx` para enlaces dentro de un párrafo, o
`<Button href="..." external>` para accesos destacados — ambos ya aplican estas reglas.

## Sistema de diseño

Los tokens (colores, radios, sombras, tipografía) están centralizados en `src/app/globals.css`. Ver
`docs/referencia-visual-abc.md` para la investigación visual que los originó y `/guia-visual` (ruta
interna, no listada en el menú público) para ver todos los componentes juntos.

## Recursos institucionales

- `public/assets/recuperados/escudo-jefatura-distrital-sag.jpg`: escudo oficial de la Jefatura
  Distrital, recuperado del sitio original. Es el logo principal del sitio (header, footer, ícono de
  pestaña del navegador).
- `public/assets/recuperados/logo-dgcye-gobierno-pba.jpg`: logo oficial de la Dirección General de
  Cultura y Educación / Gobierno de la Provincia de Buenos Aires, recuperado del sitio original. Se usa
  en el pie de página.

Ambos son recursos oficiales legítimos (no son placeholders): no hace falta reemplazarlos. Si en el
futuro la Jefatura provee versiones en mayor resolución o un manual de marca actualizado, reemplazar
estos mismos archivos manteniendo el nombre.

## Contenido pendiente / a revisar

Ver el detalle completo en [`docs/inventario-sitio-original.md`](./docs/inventario-sitio-original.md).
En resumen:

- **Comunicados de Jefatura Distrital**: todavía no hay comunicados propios cargados (ver "Calendario y
  novedades" arriba) — el resto de la página (calendario escolar, trámites docentes, novedades DGCyE) ya
  enlaza a fuentes oficiales vigentes en vez de depender de contenido cargado a mano.
- **Instituciones educativas**: no hay listado propio por institución en el sitio original, sólo el
  mapa interactivo (enlace externo).
- **Dos enlaces rotos**: dos accesos "Vincular" del pie de página original apuntaban al modo edición de
  otro Google Site (`/edit`), no a una vista pública — no se trasladaron.
- **Dos enlaces de sitios vinculados** (Situaciones de conflicto — SADEG, Establecimientos unitarios —
  Toma de posesión): su asociación por temática a una sección nunca llegó a confirmarse (ver
  `docs/inventario-sitio-original.md`). Al retirarse la página pública "Documentos para inspectores/as"
  que los alojaba (ver `docs/auditoria-documentos-inspectores.md`), dejaron de mostrarse en el sitio; no
  se movieron a otra sección por la misma falta de confirmación. Si la Jefatura Distrital confirma que
  siguen vigentes y corresponden a una sección pública, incorporarlos ahí.

## Despliegue en Vercel

1. Subir el repositorio a GitHub/GitLab/Bitbucket (o conectar la carpeta local con la CLI de Vercel).
2. En Vercel, "Add New Project" → importar el repositorio. Vercel detecta Next.js automáticamente.
3. Antes del primer deploy, actualizar `siteUrl` en `src/data/site.ts` con el dominio real asignado por
   Vercel (o el dominio propio de la Jefatura), para que los metadatos Open Graph y el `sitemap.xml`
   apunten a la URL correcta.
4. Verificar que el proyecto en Vercel use `pnpm` (Vercel lo detecta automáticamente al ver
   `pnpm-lock.yaml`).

No se requiere ninguna variable de entorno para esta primera etapa (sin base de datos, sin
autenticación).

## Próximos pasos recomendados (no implementados en esta etapa)

- Cargar las primeras novedades propias de la Jefatura Distrital (ver "Cómo cargar una novedad
  distrital") y, si la Jefatura lo provee, un listado propio de instituciones
  educativas.
- Revisar cada tanto que las URL oficiales enlazadas en `src/data/calendario.ts`,
  `src/data/tramites-docentes.ts` y `src/data/recursos-educativos.ts` sigan vigentes (ver
  `docs/fuentes-calendario-novedades.md`); son rutas de `abc.gob.ar` que no deberían cambiar seguido,
  pero no está de más confirmarlas una vez por ciclo lectivo.
- Confirmar los dos enlaces de "sitios vinculados" con la Jefatura Distrital.
- Reemplazar los dos enlaces rotos (`/edit`) una vez identificado su destino público correcto.
- Configurar un dominio propio en Vercel y actualizar `siteUrl`.
