/**
 * Datos institucionales generales, recuperados de material-original/Acerca de.mht.
 * Ver docs/inventario-sitio-original.md para el detalle de cada dato y su fuente.
 * No inventar datos nuevos acá: si falta un dato, dejarlo sin completar y anotarlo
 * en el inventario, no rellenarlo con contenido supuesto.
 */

export const site = {
  nombreJefatura: "Jefatura Distrital de San Andrés de Giles",
  codigoDistrito: "jd093",
  region: "Región 10",
  organismo: "Dirección General de Cultura y Educación",
  provincia: "Provincia de Buenos Aires",
  inspectorJefeDistrital: "Marcelo Larroque",
  secretariaDeJefatura: "Roxana Grasso",
  direccion: "Rivadavia 148, San Andrés de Giles, Buenos Aires",
  telefono: "02325 440910",
  email: "jd093@abc.gob.ar",
  fraseInstitucional: "El mejor modo de defender la educación pública es mejorándola",
  fraseInstitucionalAutor: "Alberto Sileoni",
  redes: {
    facebook: "https://www.facebook.com/profile.php?id=100078788358229",
    instagram: "https://www.instagram.com/jefaturadistritalsag/",
    youtube: "https://www.youtube.com/@JefaturaDistritalSanAndresDeGi",
  },
  mapas: {
    sede: {
      etiqueta: "Rivadavia 148, San Andrés de Giles",
      // Enlace externo simple en vez de reincrustar el iframe pesado del original.
      href: "https://www.google.com/maps/search/?api=1&query=Rivadavia+148+San+Andres+de+Giles+Buenos+Aires",
    },
    institucionesEducativas: {
      etiqueta: "Mapa interactivo de instituciones educativas del distrito",
      href: "https://www.google.com/maps/d/viewer?mid=10t3xvvypnMSa6Yo5bSQGL41YYHzxJho",
    },
  },
  logos: {
    escudoJefatura: "/assets/recuperados/escudo-jefatura-distrital-sag.jpg",
    dgcye: "/assets/recuperados/logo-dgcye-gobierno-pba.jpg",
  },
} as const;

export const siteUrl = "https://jefatura-distrital-sag.vercel.app";
