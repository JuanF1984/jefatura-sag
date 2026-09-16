# Referencia visual — ecosistema ABC (Dirección General de Cultura y Educación, PBA)

Investigación visual realizada antes de implementar el sistema de diseño del sitio nuevo, tal como pide
el proyecto. El objetivo es que el sitio nuevo se **perciba coherente** con la identidad institucional
de ABC, sin copiar su código.

## Fuentes consultadas (sitios oficiales)

| Sitio | Uso en esta investigación |
|---|---|
| `https://abc.gob.ar` (portal oficial de la Dirección General de Cultura y Educación) | Paleta de color, tipografía, estructura de navegación, tarjetas, botones — vía inspección del HTML servido públicamente y su hoja de estilos publicada (`/core/themes/abc/css/style.css`, un recurso CSS público servido por su propio Drupal, igual que cualquier navegador lo descarga) |
| `https://www.gba.gob.ar` (portal general del Gobierno de la Provincia de Buenos Aires) | Verificación cruzada de la paleta institucional (confirma que el color primario no es exclusivo de ABC sino del sistema de identidad provincial) |
| Logo oficial recuperado del propio MHT (`public/assets/recuperados/logo-dgcye-gobierno-pba.jpg`) | Verificación adicional del color institucional muestreando los píxeles del logotipo real |

**Aclaración metodológica**: se inspeccionaron valores de color, nombres de fuente y medidas (border-radius,
sombras) que un navegador descarga públicamente al visitar el sitio — el mismo proceso que usaría un
diseñador con las herramientas de desarrollador del navegador. **No se copió ningún archivo HTML, CSS ni
JS al proyecto nuevo**; los valores se registran aquí como referencia numérica (colores, tipografía,
medidas) y se reimplementan desde cero como tokens propios de Tailwind/CSS.

## Paleta de colores

### Color institucional primario

El valor **`#009AAE`** (un turquesa/teal medio) aparece de forma dominante en ambos sitios oficiales
consultados (35+ apariciones en `abc.gob.ar`, 69 en `gba.gob.ar`) y **coincide con el color muestreado
directamente del logotipo oficial de la Dirección General de Cultura y Educación** recuperado del MHT
original (`#18A0B0`–`#28A0B0` en distintas zonas del logo por compresión JPEG, mismo tono). Esto confirma
que es el color de marca institucional, no una elección arbitraria de una página puntual.

| Token | Hex | Uso observado en los sitios oficiales |
|---|---|---|
| `brand-teal` (primario) | `#009AAE` | Enlaces, iconografía, acentos de tarjetas, botones primarios, líneas de énfasis |
| `brand-teal-dark` | `#0A5773` | Variante oscura — franjas de encabezado/footer, texto sobre fondo claro con más contraste |
| `brand-teal-light` | `#CDE7EB` / `#CAE7EA` | Fondos suaves, franjas decorativas de baja intensidad |
| `text-primary` (casi negro) | `#414042` | Color de texto de cuerpo — **no usan negro puro** |
| `surface-muted` (gris claro) | `#F2F2F2` | Fondos de sección alternados |
| `border-muted` | `#BDBDBD` / `#E5E5E5` | Bordes de tarjetas, separadores |
| `text-muted` | `#777777` | Texto secundario, metadatos, fechas |

### Acentos secundarios (uso puntual, no dominante)

Los sitios oficiales usan un pequeño set de colores de acento para diferenciar categorías de contenido
(no para la identidad general): magenta `#D81B60`/`#E81F76`, azul `#4258A4`, violeta `#714091`/`#441762`.
**Decisión para el sitio nuevo**: no reproducir un sistema de "colores por categoría" (agregaría
complejidad innecesaria para un sitio de una sola Jefatura Distrital); se reserva como único acento
secundario un color de aviso semántico estándar (ámbar para "pendiente de actualización", rojo para
"error/enlace roto") en vez de imitar la paleta multicolor completa.

## Tipografía

El CSS oficial carga una única familia tipográfica propia para todo el sitio:

```
font-family: 'Encode Sans', sans-serif;
```

(confirmado por la regla `font-family: 'Encode Sans', sans-serif !important;` en `style.css` y por la
hoja `encodesans.css` cargada específicamente para declarar los `@font-face`). Es una fuente sans-serif
institucional, geométrica pero de trazo humano, disponible públicamente en Google Fonts.

**Decisión para el sitio nuevo**: usar **Encode Sans** (vía `next/font/google`) como única familia,
igual que el original — para titulares con pesos más altos (600–700) y para texto de cuerpo con pesos
regulares (400–500). No se introduce una segunda familia decorativa: el original tampoco lo hace.

Jerarquía observada (inferida de los tamaños de encabezado renderizados y convenciones de Bootstrap 4/5
que usa el tema):
- H1 de portada: grande y en negrita, casi siempre acompañado de una franja de color o icono
- H2 de sección: peso semibold, menor tamaño, suele ir precedido por un "eyebrow" corto en mayúsculas
- Cuerpo: interlineado generoso (~1.5–1.6), tamaño base cómodo (~16–18px)

## Layout y componentes

| Elemento | Observación en sitios oficiales | Decisión para el sitio nuevo |
|---|---|---|
| Framework base | Bootstrap 4/5 (`.btn`, `.card`, `.navbar`, `.container`) sobre Drupal | No se usa Bootstrap; se reconstruyen los mismos patrones visuales con Tailwind, sin la dependencia |
| Botones | Muy redondeados: `border-radius: 3rem` / `50px` (forma de píldora) en CTAs; variantes `btn-light`, `btn-secondary` | Botón primario tipo píldora (`rounded-full`) en teal; botón secundario con borde, mismo radio |
| Tarjetas | `border-radius` pequeño (4–5px), sombra suave (`box-shadow: 0px 3px 3px rgba(65,64,66,.3)` o similar, nunca dura) | Tarjetas con esquinas suaves (`rounded-lg`, ~8px) y sombra sutil en vez de borde marcado |
| Header | `<header role="banner">` con navegación superior + mega-menú (`navbar-expand-xl`), buscador integrado, enlace "Pasar al contenido principal" antes de todo | Header con franja institucional (Provincia + DGCyE + nombre de la Jefatura), navegación simple (sin mega-menú, el sitio es chico), enlace de salto al contenido |
| Navegación móvil | Colapsa a menú hamburguesa (`navbar-toggler`) por debajo de `xl` | Menú hamburguesa accesible con `aria-expanded`, mismo criterio |
| Footer | Multi-columna con enlaces institucionales, contacto, logos oficiales | Footer con datos de contacto reales, logo DGCyE recuperado, redes sociales, enlace a `/guia-visual` opcional para mantenimiento |
| Iconografía | Font Awesome 5 | Se usan iconos SVG propios, livianos, sin cargar una librería de iconos completa |
| Accesibilidad | Enlace "Pasar al contenido principal", jerarquía de encabezados clara, estados `:focus` visibles en botones | Se replican estos tres criterios explícitamente |

## Fondos, separadores y espaciado

- Fondo general: blanco, con secciones alternas en gris muy claro (`#F2F2F2`) para separar bloques sin
  usar líneas duras.
- Separación entre secciones generosa (varios `rem` de padding vertical), consistente con un sitio
  gubernamental que prioriza la lectura sobre la densidad visual.
- Los anchos de contenido están contenidos en un `container` centrado (patrón estándar de Bootstrap,
  ancho máximo ~1140–1320px según breakpoint) — se adopta un `max-width` equivalente (~1200px) en el
  sitio nuevo.

## Comportamiento móvil

El sitio oficial es responsive vía los breakpoints estándar de Bootstrap (`sm`/`md`/`lg`/`xl`), con el
buscador y el mega-menú colapsando a un menú de hamburguesa por debajo de `xl` (1200px). El sitio nuevo
usa los breakpoints estándar de Tailwind, con la navegación colapsando a menú móvil por debajo de `lg`
(1024px): con 8 secciones de nombre largo ("Documentos para inspectores/as", "Régimen académico y
normativa"), un umbral más chico como `md` (768px) generaba wrap incómodo en tablets antes de tener
espacio real para mostrarlas en una sola línea.

## Criterios de accesibilidad observados

- Enlace "Pasar al contenido principal" como primer elemento interactivo del `<header>`.
- `role="banner"` explícito en el header y `aria-label="Cabecera de sitio"`.
- Reglas `:focus` / `.focus` definidas explícitamente para botones y campos de búsqueda (no se depende
  del estilo de foco por defecto del navegador).
- Buen contraste de texto: `#414042` sobre blanco supera holgadamente el mínimo AA (4.5:1) para texto de
  cuerpo.

**Nota sobre el color primario y contraste**: `#009AAE` sobre fondo blanco da un contraste de
aproximadamente 3.1:1 — suficiente para elementos gráficos/iconografía y para texto grande (≥24px) o
negrita (AA large text, mínimo 3:1), pero **insuficiente para texto pequeño de cuerpo** (mínimo AA 4.5:1).
Por eso el sitio nuevo reserva `#009AAE` para acentos, iconos, fondos de botón (con texto blanco encima,
que sí cumple) y títulos grandes, y usa una variante más oscura (`#0A5773`, ~6.4:1 sobre blanco) para
enlaces de texto corrido y estados de foco, evitando el error de accesibilidad más común al adoptar un
color de marca vibrante.

## Dirección de logotipos

- El escudo/logo propio de la Jefatura Distrital de San Andrés de Giles (recuperado del MHT) es de uso
  exclusivo de esa Jefatura y **no** es un logotipo genérico de ABC — se usa como logo principal del
  header del sitio nuevo.
- El logo oficial "Dirección General de Cultura y Educación — Gobierno de la Provincia de Buenos Aires"
  (también recuperado del MHT, en `public/assets/recuperados/logo-dgcye-gobierno-pba.jpg`) es el logotipo
  institucional de la Provincia — se usa en el pie de página, igual que en el sitio original, sin
  redibujarlo.
- No se descargó ni redibujó ningún logotipo adicional de `abc.gob.ar`; los únicos logotipos que usa el
  sitio nuevo son los dos que ya estaban legítimamente incrustados en el MHT de la propia Jefatura.

## Resumen de decisiones para el sistema de diseño

1. **Color primario**: `#009AAE` (teal institucional, verificado en dos sitios oficiales + el logo
   propio). Variante oscura `#0A5773` para texto/enlaces con contraste AA.
2. **Tipografía**: Encode Sans (única familia, como el original), pesos 400/500/600/700.
3. **Radios**: pequeños (6–10px) en tarjetas, completos (píldora) en botones principales — igual que el
   original.
4. **Sombras**: suaves y de baja opacidad, nunca duras.
5. **Un solo acento secundario semántico** (ámbar para avisos), en vez de imitar el sistema multicolor
   de categorías del sitio grande — decisión deliberada por ser un sitio de una sola Jefatura, no un
   portal con decenas de secciones.
6. Sin Bootstrap ni Font Awesome como dependencias: mismos patrones visuales, implementados con Tailwind
   y SVG propio para mantener el sitio liviano.
