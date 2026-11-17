# SEO — estado, criterios y pendientes

Última revisión: 17/11/2026.

## Problema crítico encontrado

`siteUrl` estaba fijo en `https://jefatura-distrital-sag.vercel.app`, que **responde 404**. Ese valor
alimentaba `sitemap.xml`, `robots.txt` y `metadataBase` (Open Graph). Un buscador que siguiera el
sitemap llegaba a un dominio inexistente.

Ahora `siteUrl` se resuelve en `src/data/site.ts`:

1. `SITE_URL` (variable de entorno), para cuando haya dominio propio.
2. Si no, el dominio de producción de Vercel (`VERCEL_PROJECT_PRODUCTION_URL`, lo expone Vercel en el build).
3. En local, `http://localhost:3000`.

## Implementado

| Tema | Dónde | Detalle |
|---|---|---|
| URL canónica | `metadataPagina` (`src/lib/seo.ts`) y portada | Cada página indexable declara su `canonical`. No se define en el layout para que no se herede a la 404 ni a /guia-visual. |
| Open Graph y X/Twitter por página | `metadataPagina` | Antes todas las páginas compartían el título y la descripción de la portada al compartirse (en Next, el `openGraph` no se combina entre layout y página). |
| Imagen para redes | `src/app/opengraph-image.tsx` | 1200×630, generada en el build con el escudo y los colores del sitio. Las novedades con imagen usan la propia. |
| Descripciones | metadata de cada página | Todas ≤ ~160 caracteres (antes había de 230+ que Google truncaba) y con "San Andrés de Giles" cuando aplica. |
| Datos estructurados (JSON-LD) | `src/lib/seo.ts`, `src/components/seo/JsonLd.tsx` | Portada: `GovernmentOrganization` + `WebSite`. /instituciones: `ItemList` de `EducationalOrganization` (con CUE, dirección, teléfono, correo). /oferta-educativa: `ItemList` de `EducationalOccupationalProgram` (sólo perfil del egresado). /novedades/[slug]: `NewsArticle`. Sólo datos del dataset, nada inventado. |
| sitemap.xml | `src/app/sitemap.ts` | Se quitó `lastModified` = fecha del build en todas las URL (Google lo descarta). Ahora sólo las novedades llevan fecha real. |
| robots.txt | `src/app/robots.ts` | Se quitó el `Disallow: /guia-visual`: impedía que el buscador leyera su `noindex`. |

## Pendientes (requieren acción fuera del código)

1. **Confirmar el dominio de producción.** Hacer un deploy y verificar que `/sitemap.xml` y el
   `canonical` muestren el dominio correcto. Si hay dominio propio, definir `SITE_URL` en Vercel.
2. **Google Search Console:** dar de alta la propiedad, enviar `/sitemap.xml` y revisar la cobertura.
3. **Validar los datos estructurados** de la portada, /instituciones, /oferta-educativa y una novedad en
   https://search.google.com/test/rich-results y https://validator.schema.org/.
4. **Perfil de Empresa de Google** (Google Maps) para la sede de Rivadavia 148, si no existe: es lo que
   más pesa en búsquedas locales ("jefatura distrital san andrés de giles").
5. **Enlaces entrantes:** pedir que abc.gob.ar, las escuelas y las redes de la Jefatura enlacen al dominio
   definitivo.

## Ideas para más adelante

- Imagen Open Graph propia para /oferta-educativa (útil en la difusión de la Expo Educativa).
- Las imágenes de las novedades son .webp: algunas apps de mensajería no muestran vista previa con
  .webp. Si pasa, agregar una versión .jpg para `openGraph.images`.
- `BreadcrumbList` en JSON-LD: aporta poco en un sitio de dos niveles; no se implementó.
