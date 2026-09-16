export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/instituciones", label: "Instituciones educativas" },
  { href: "/inspectores", label: "Inspectores" },
  { href: "/calendario-y-novedades", label: "Calendario y novedades" },
  { href: "/formularios", label: "Formularios" },
  { href: "/regimen-academico", label: "Régimen académico y normativa" },
  { href: "/titulos", label: "Títulos y certificaciones" },
  { href: "/contacto", label: "Contacto y ubicación" },
];

/**
 * Determina si un ítem del menú principal corresponde a la ruta actual,
 * incluyendo rutas hijas (p. ej. "/regimen-academico/algo"). "/" solo
 * coincide de forma exacta para no marcar todo el sitio como activo.
 */
export function isNavItemActive(href: string, pathname: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
