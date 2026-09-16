import type { Documento } from "@/data/types";

/**
 * Contenido del ciclo lectivo 2025, recuperado del sitio anterior (Google
 * Sites) — ver docs/inventario-sitio-original.md. Se conserva como archivo
 * histórico en la página "Calendario y novedades" (sección colapsable, no
 * mostrada como vigente). No borrar sin verificar antes si se usa en otra
 * parte del sitio.
 */

export const calendario2025: Documento[] = [
  {
    titulo: "Calendario Escolar 2025",
    href: "https://drive.google.com/file/d/1sYHemdT0auiuNHQB1pZC8dCIdS5TqYH2/view",
    tipo: "pdf",
  },
  {
    titulo: "Resolución 5510/24",
    href: "https://drive.google.com/file/d/1U7RJDM5H3kwuwXliCpkoLT3NLrxi_k6k/view?usp=drive_link",
    tipo: "pdf",
  },
  {
    titulo: "Anexo Calendario de Actividades Docentes 2025",
    href: "https://drive.google.com/file/d/1zK8OlkwhYADvv1x483qZaD1UatvMlMzL/view?usp=drive_link",
    tipo: "pdf",
  },
];

export const comunicados2025: Documento[] = [
  {
    titulo: "Educación Digital desde una mirada de cuidado.pdf",
    href: "https://drive.google.com/open?authuser=0&id=1CyLvAfH8xQ5yXDeH_YQAwG-61J47ZOyL",
  },
  {
    titulo: "Dar teatro.pdf",
    href: "https://drive.google.com/open?authuser=0&id=1X1LzhwOo6NXcgfnQNOUbv-aFlzetD0t3",
  },
  {
    titulo: "Intructivo certificaciones acadeìmicas 2025 - Progresar Superior IES (2).pdf",
    href: "https://drive.google.com/open?authuser=0&id=17TQucXC4nmIc3yArYDV2tbo6VRJorpCi",
  },
  {
    titulo: "Leer en comunidad_2025.pdf",
    href: "https://drive.google.com/open?authuser=0&id=1_CXlKLQMFeVcW1IW-y6u1RnbbbFBUeB_",
  },
  {
    titulo: "1.Inscripción Juegos Bonaerenses 2025.pdf",
    href: "https://drive.google.com/open?authuser=0&id=1h3gSbWB8-5ME22pLaVDq2eUNupWn9e_S",
  },
  {
    titulo: "2. Instructivo SAE - Mis Estudiantes.pdf",
    href: "https://drive.google.com/open?authuser=0&id=1Rken2yL6Sy7rGVNdPsyWYG2zsoGxosvX",
  },
];

export type Flyer2025 = {
  titulo: string;
  fecha: string;
  imagen: string;
  descripcion?: string;
};

export const flyers2025: Flyer2025[] = [
  {
    titulo: "Mensaje de inicio de ciclo lectivo — Región 10",
    fecha: "Marzo de 2025",
    imagen: "/assets/recuperados/novedad-2025-03-mensaje-inicio-ciclo-lectivo.png",
    descripcion: "Lic. Gabriela Valverde, Inspectora Jefe Regional, Región 10-GE.",
  },
  {
    titulo: "Feria Distrital de Educación, Artes, Ciencias y Tecnología 2025 — información",
    fecha: "Recepción de inscripciones hasta el 9 de junio de 2025",
    imagen: "/assets/recuperados/novedad-2025-06-feria-distrital-info.png",
    descripcion: "Referente Distrital: Prof. Valeria Amondaray.",
  },
  {
    titulo: "Feria Distrital de Educación, Artes, Ciencias y Tecnología 2025 — flyer",
    fecha: "19 de junio de 2025, EES N°8 «Félix Paladino»",
    imagen: "/assets/recuperados/novedad-2025-06-feria-distrital-flyer.png",
  },
];
