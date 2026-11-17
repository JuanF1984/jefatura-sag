import type { Metadata } from "next";
import { site, siteUrl } from "@/data/site";

/** Descripción de la portada y por defecto. Hasta ~155 caracteres: lo que Google muestra sin truncar. */
export const descripcionSitio =
  "Jefatura Distrital de San Andrés de Giles (DGCyE): escuelas del distrito, oferta educativa, inspectores, calendario escolar, formularios y normativa.";

/** Imagen general para redes, generada por src/app/opengraph-image.tsx. */
const IMAGEN_GENERAL = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.nombreJefatura} — ${site.organismo}`,
};

/**
 * Metadata de una página: título, descripción, URL canónica y tarjetas para redes
 * (Open Graph y X/Twitter). Centraliza esto porque en Next un `openGraph` definido
 * en la página reemplaza por completo al del layout: sin este helper, todas las
 * páginas compartían el título y la descripción de la portada al compartirse.
 * La imagen la aporta src/app/opengraph-image.tsx (convención de archivo).
 */
export function metadataPagina({
  titulo,
  descripcion,
  ruta,
  tipo = "website",
  publicado,
  imagen,
}: {
  titulo: string;
  descripcion: string;
  /** Ruta absoluta dentro del sitio, p. ej. "/instituciones". */
  ruta: string;
  tipo?: "website" | "article";
  /** Fecha ISO de publicación (sólo artículos). */
  publicado?: string;
  /** Imagen propia de la página; si falta, se usa la general (src/app/opengraph-image.tsx). */
  imagen?: { url: string; alt: string };
}): Metadata {
  // Un openGraph definido en la página reemplaza la imagen de src/app/opengraph-image.tsx,
  // así que la imagen general se declara explícitamente.
  const imagenes = [imagen ?? IMAGEN_GENERAL];
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: ruta,
      siteName: site.nombreJefatura,
      locale: "es_AR",
      ...(tipo === "article" ? { type: "article", publishedTime: publicado } : { type: "website" }),
      images: imagenes,
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: imagenes,
    },
  };
}

/** URL absoluta a partir de una ruta del sitio (para JSON-LD). */
export function urlAbsoluta(ruta: string): string {
  return `${siteUrl}${ruta === "/" ? "" : ruta}`;
}

/** Identificador estable de la Jefatura en el grafo de datos estructurados. */
export const ID_ORGANIZACION = `${siteUrl}/#organizacion`;

/** Datos estructurados de la Jefatura Distrital (schema.org), para la portada. */
export function jsonLdOrganizacion() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": ID_ORGANIZACION,
        name: site.nombreJefatura,
        url: urlAbsoluta("/"),
        logo: urlAbsoluta(site.logos.escudoJefatura),
        email: site.email,
        telephone: site.telefono,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rivadavia 148",
          addressLocality: "San Andrés de Giles",
          addressRegion: "Buenos Aires",
          addressCountry: "AR",
        },
        areaServed: { "@type": "AdministrativeArea", name: "Partido de San Andrés de Giles" },
        parentOrganization: {
          "@type": "GovernmentOrganization",
          name: `${site.organismo} — ${site.provincia}`,
          url: "https://abc.gob.ar",
        },
        sameAs: Object.values(site.redes),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#sitio`,
        name: site.nombreJefatura,
        url: urlAbsoluta("/"),
        inLanguage: "es-AR",
        publisher: { "@id": ID_ORGANIZACION },
      },
    ],
  };
}

/** Publicación de /novedades como NewsArticle (schema.org). */
export function jsonLdNovedad(novedad: {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  imagen?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: novedad.titulo,
    description: novedad.resumen,
    datePublished: novedad.fecha,
    inLanguage: "es-AR",
    mainEntityOfPage: urlAbsoluta(`/novedades/${novedad.slug}`),
    ...(novedad.imagen ? { image: [urlAbsoluta(novedad.imagen)] } : {}),
    author: { "@type": "GovernmentOrganization", "@id": ID_ORGANIZACION, name: site.nombreJefatura },
    publisher: {
      "@type": "GovernmentOrganization",
      "@id": ID_ORGANIZACION,
      name: site.nombreJefatura,
      logo: { "@type": "ImageObject", url: urlAbsoluta(site.logos.escudoJefatura) },
    },
  };
}

type InstitucionLd = {
  nombre: string;
  localidad?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
  cue?: string;
};

/** Establecimiento educativo como EducationalOrganization (schema.org). Sólo datos del dataset. */
function organizacionEducativa(i: InstitucionLd) {
  return {
    "@type": "EducationalOrganization",
    name: i.nombre,
    ...(i.cue ? { identifier: { "@type": "PropertyValue", propertyID: "CUE", value: i.cue } } : {}),
    ...(i.localidad || i.direccion
      ? {
          address: {
            "@type": "PostalAddress",
            ...(i.direccion ? { streetAddress: i.direccion } : {}),
            ...(i.localidad ? { addressLocality: i.localidad } : {}),
            addressRegion: "Buenos Aires",
            addressCountry: "AR",
          },
        }
      : {}),
    ...(i.telefono ? { telephone: i.telefono } : {}),
    ...(i.correo ? { email: i.correo } : {}),
  };
}

/** Listado de /instituciones como ItemList de EducationalOrganization. */
export function jsonLdInstituciones(lista: InstitucionLd[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Instituciones educativas del distrito de San Andrés de Giles",
    url: urlAbsoluta("/instituciones"),
    numberOfItems: lista.length,
    itemListElement: lista.map((institucion, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: organizacionEducativa(institucion),
    })),
  };
}

/**
 * /oferta-educativa como ItemList de EducationalOccupationalProgram. Igual que la
 * página, publica sólo el perfil del egresado (como descripción), nunca el del ingresante.
 */
export function jsonLdOferta(
  ciclo: number,
  instituciones: (InstitucionLd & { ofertas: { denominacion: string; perfilEgresado?: string }[] })[],
) {
  const programas = instituciones.flatMap((institucion) =>
    institucion.ofertas.map((oferta) => ({
      "@type": "EducationalOccupationalProgram",
      name: oferta.denominacion,
      ...(oferta.perfilEgresado ? { description: oferta.perfilEgresado.replace(/\s*\n\s*/g, " ") } : {}),
      provider: organizacionEducativa(institucion),
      inLanguage: "es",
      startDate: String(ciclo),
    })),
  );
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Oferta educativa ${ciclo} — San Andrés de Giles`,
    url: urlAbsoluta("/oferta-educativa"),
    numberOfItems: programas.length,
    itemListElement: programas.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
  };
}
