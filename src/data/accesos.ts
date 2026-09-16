export type IconKey =
  | "school"
  | "people"
  | "calendar"
  | "form"
  | "book"
  | "certificate"
  | "map";

export type AccesoPrincipal = {
  href: string;
  title: string;
  description: string;
  icon: IconKey;
};

export const accesosPrincipales: AccesoPrincipal[] = [
  {
    href: "/instituciones",
    title: "Instituciones educativas",
    description: "Mapa interactivo y listado de escuelas del distrito, rurales y urbanas.",
    icon: "school",
  },
  {
    href: "/inspectores",
    title: "Inspectores",
    description: "Inspectores/as por nivel y modalidad.",
    icon: "people",
  },
  {
    href: "/calendario-y-novedades",
    title: "Calendario y novedades",
    description: "Calendario escolar y comunicados de la Jefatura Distrital.",
    icon: "calendar",
  },
  {
    href: "/formularios",
    title: "Formularios",
    description: "Declaración jurada de horarios, licencias y constancias.",
    icon: "form",
  },
  {
    href: "/regimen-academico",
    title: "Régimen académico y normativa",
    description: "Inscripción de alumnos, régimen académico y estados administrativos.",
    icon: "book",
  },
  {
    href: "/titulos",
    title: "Títulos y certificaciones",
    description: "Sistema de títulos, validez nacional y certificaciones de estudio.",
    icon: "certificate",
  },
  {
    href: "/contacto",
    title: "Contacto y ubicación",
    description: "Dirección, teléfono, correo y mapa de la sede.",
    icon: "map",
  },
];
