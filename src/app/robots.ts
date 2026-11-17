import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

/*
 * /guia-visual no se bloquea acá a propósito: tiene `robots: noindex` en su metadata,
 * y si robots.txt impide rastrearla, el buscador nunca lee ese noindex (y puede
 * indexar la URL igual si la encuentra enlazada).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
