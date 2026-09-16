import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { mainNav } from "@/data/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...mainNav.map((item) => item.href)];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
