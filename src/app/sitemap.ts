import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { novedadesOrdenadas } from "@/lib/novedades";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...mainNav.map((item) => item.href)];
  // /novedades y sus publicaciones sólo se listan cuando existe al menos una.
  if (novedadesOrdenadas.length > 0) {
    routes.push("/novedades", ...novedadesOrdenadas.map((n) => `/novedades/${n.slug}`));
  }
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
