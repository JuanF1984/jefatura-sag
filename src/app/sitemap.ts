import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { novedadesOrdenadas } from "@/lib/novedades";

/*
 * `lastModified` sólo se informa cuando hay una fecha real (las novedades). Antes se
 * ponía la fecha del build en todas las URL: Google descarta un lastmod que cambia
 * siempre, y deja de confiar en él también para las páginas que sí cambian.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: MetadataRoute.Sitemap = ["/", ...mainNav.map((item) => item.href)].map((ruta) => ({
    url: `${siteUrl}${ruta === "/" ? "" : ruta}`,
  }));
  // /novedades y sus publicaciones sólo se listan cuando existe al menos una.
  if (novedadesOrdenadas.length > 0) {
    paginas.push(
      { url: `${siteUrl}/novedades`, lastModified: novedadesOrdenadas[0].fecha },
      ...novedadesOrdenadas.map((n) => ({ url: `${siteUrl}/novedades/${n.slug}`, lastModified: n.fecha })),
    );
  }
  return paginas;
}
