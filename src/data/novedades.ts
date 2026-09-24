import type { AccesoExterno, Novedad } from "@/data/types";

/**
 * Novedades propias de la Jefatura Distrital de San Andrés de Giles — no
 * confundir con las novedades provinciales de la DGCyE, que se enlazan desde
 * src/data/recursos-educativos.ts. Instrucciones para cargar una publicación
 * nueva: ver README.md, sección "Cómo cargar una novedad distrital" (no
 * duplicar esas instrucciones en las páginas públicas).
 *
 * El orden en este archivo no importa: el sitio ordena por fecha, de la más
 * reciente a la más antigua. Mientras la lista esté vacía, la portada no
 * muestra la sección y no se enlaza /novedades.
 */

/** Publicaciones de la Jefatura Distrital. Vacío = sin publicar todavía. */
export const novedades: Novedad[] = [
  {
    slug: "hay-escuelas-en-todos-lados-2026",
    fecha: "2026-09-10",
    titulo: "“Hay escuelas en todos lados”: muestra de Nivel Inicial y homenaje a docentes",
    resumen:
      "Jefatura Distrital de San Andrés de Giles llevó adelante en la Plaza San Martín la muestra “Hay escuelas en todos lados”, una propuesta del Nivel Inicial y la Modalidad Artística que reunió a instituciones educativas del distrito y rindió homenaje a maestros y maestras de nuestra comunidad.",
    contenido: `El jueves 10 de septiembre, la Plaza San Martín de San Andrés de Giles fue escenario de la muestra “Hay escuelas en todos lados”, una jornada organizada por Jefatura Distrital a través del Nivel Inicial y la Modalidad Artística, que este año integró el homenaje a maestros y maestras de nuestra comunidad.

La propuesta invitó a conocer las diversas realidades de los jardines de infantes de nuestro país. A partir de investigaciones, intercambios e imágenes, se compartieron experiencias de instituciones ubicadas en islas, barrios populares, zonas de montaña y distintas regiones de Argentina, poniendo en valor la diversidad de contextos en los que se desarrolla la enseñanza.

Los jardines de infantes, JIRIMM y otras instituciones educativas del distrito participaron activamente de la muestra, que permitió visibilizar el trabajo pedagógico de la educación inicial y fortalecer los vínculos entre las escuelas y la comunidad.

La jornada incluyó un emotivo homenaje a docentes, reconociendo su compromiso cotidiano con la enseñanza y su aporte a la construcción de una educación pública que acompañe las trayectorias de niñas, niños y jóvenes.

La inspectora de Nivel Inicial, Verónica Pizzi, presentó el sentido pedagógico de la muestra e invitó a recorrer las distintas experiencias educativas. También compartió sus palabras Lidia Pagano de Guillet, docente de 97 años, en representación de la Asociación de Jubilados y Retirados de la Provincia de Buenos Aires.

El Inspector Jefe Distrital, Marcelo Larroque, destacó el valor de la tarea docente y el legado de quienes dedicaron su vida a la enseñanza, invitando a reflexionar sobre el lugar fundamental que ocupan maestros y maestras en nuestra sociedad.

El encuentro contó con el acompañamiento de autoridades educativas, municipales y del Consejo Escolar, junto a docentes, estudiantes, familias y vecinos.

Las instituciones educativas participaron de un desfile con banderas argentinas y la jornada tuvo un cierre artístico a cargo de estudiantes de la Escuela de Educación Artística N.º 1 “Lola Mora”, bajo la dirección de la profesora Mariel Fernández.

Desde Jefatura Distrital agradecemos a las instituciones, equipos docentes, estudiantes y familias que hicieron posible este encuentro, reafirmando la importancia de construir espacios colectivos que permitan compartir experiencias, reconocer la tarea educativa y celebrar la escuela pública.`,
    categoria: "Actividades distritales",
    imagen: "/novedades/dia-maestro-2026.webp",
    imagenAlt:
      "Una mujer mayor sentada habla por un micrófono que sostiene un hombre de saco azul, rodeada de personas de pie en una plaza, junto a una bandera argentina.",
  },
  {
    slug: "ep9-125-aniversario",
    fecha: "2026-07-03",
    titulo: "La Escuela Primaria N.º 9 celebró sus 125 años de historia",
    resumen:
      "La Escuela Primaria N.º 9 “General San Martín”, de Campo de Santía, celebró su 125.º aniversario junto a su comunidad educativa, autoridades, exdocentes y exalumnos. El Inspector Jefe Distrital, Marcelo Larroque, acompañó esta significativa celebración de la educación rural de San Andrés de Giles.",
    contenido: `El viernes 3 de julio, la Escuela Primaria N.º 9 “General San Martín”, ubicada en Campo de Santía, celebró sus 125 años de historia al servicio de la educación pública en el distrito de San Andrés de Giles.

La jornada reunió a estudiantes, docentes, auxiliares, familias, exdocentes y exalumnos, junto a autoridades educativas, municipales y provinciales, en un encuentro que permitió reconocer la trayectoria de una institución profundamente vinculada con su comunidad rural.

La directora Natalia Caro recibió a los presentes y compartió palabras que recuperaron la historia de la escuela, el compromiso de quienes hicieron posible su creación y el trabajo de las distintas generaciones que sostuvieron su crecimiento.

El Inspector Jefe Distrital, Marcelo Larroque, participó del aniversario, acompañando a la comunidad educativa en esta celebración.

Durante el acto se descubrieron placas conmemorativas y se compartieron momentos de reconocimiento y emoción. La participación de estudiantes de la escuela primaria y del Jardín de Infantes N.º 4, que comparte el predio, dio un cierre especial a los festejos.

Desde Jefatura Distrital saludamos a toda la comunidad de la EP N.º 9 por estos 125 años de compromiso con la educación pública, destacando el valor de las escuelas rurales como espacios de enseñanza, encuentro y construcción de identidad comunitaria.`,
    categoria: "Aniversarios institucionales",
    imagen: "/novedades/ep-9-125-anios.webp",
    imagenAlt:
      "Un grupo de personas sonríe y brinda con copas frente a la pared de la escuela, donde se ven placas conmemorativas.",
  },
  {
    slug: "feria-libro-2026",
    fecha: "2026-09-18",
    titulo: "Feria del Libro y la Cultura 2026",
    resumen:
      "Del 14 al 18 de septiembre, la Escuela Normal Superior “Fray Mamerto Esquiú” de San Andrés de Giles llevó adelante una nueva edición de la Feria del Libro y la Cultura “Profesor Miguel Ángel Iriberri”, con la participación de autoridades de Jefatura Distrital.",
    contenido: `Del 14 al 18 de septiembre de 2026 se desarrolló una nueva edición de la Feria del Libro y la Cultura “Profesor Miguel Ángel Iriberri”, organizada en la Escuela Normal Superior “Fray Mamerto Esquiú” de San Andrés de Giles.

La propuesta constituyó un espacio de encuentro para la comunidad educativa, promoviendo el acercamiento a los libros, la literatura y las distintas expresiones culturales.

El Inspector Jefe Distrital, Marcelo Larroque, participó de la actividad, acompañando esta iniciativa que fortalece los vínculos entre las instituciones educativas y la comunidad.

Desde Jefatura Distrital destacamos el trabajo de quienes hicieron posible esta nueva edición y la importancia de sostener espacios que promuevan la lectura, la participación y el acceso a la cultura.`,
    categoria: "Actividades institucionales",
    imagen: "/novedades/feria-libro-2026.webp",
    imagenAlt:
      "El Inspector Jefe Distrital participa de la Feria del Libro y la Cultura en la Escuela Normal Superior Fray Mamerto Esquiú.",
  },

  /*
  {
    slug: "ejemplo-de-publicacion",
    fecha: "2026-09-24",
    titulo: "Título de la publicación",
    resumen: "Resumen breve para tarjetas y listado.",
    contenido: `Primer párrafo de la publicación.

Segundo párrafo. Se separa del anterior con una línea en blanco.`,
    categoria: "Comunicado", // opcional
    imagen: "/novedades/ejemplo.webp", // opcional; si se agrega, imagenAlt es obligatorio
    imagenAlt: "Descripción accesible de la fotografía",
    enlace: { texto: "Ver más información", url: "https://..." }, // opcional
  },
  */
];

/** Recursos distritales mantenidos por inspectores/as de la Jefatura (no son portales de la DGCyE). */
export const recursosDistritales: AccesoExterno[] = [
  {
    titulo: "Padlet DEJAYAM (Educación de Adultos) — Instituciones EJAyAM Suipacha / San Andrés de Giles",
    href: "https://padlet.com/vsimondi/instituciones-ejayam-suipacha-san-andr-s-de-giles-ac3xggmy23flsdvh",
    descripcion:
      "Repositorio de materiales para equipos directivos, mantenido por la Inspección de Educación de Adultos.",
  },
];
