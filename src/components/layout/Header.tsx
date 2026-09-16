import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { MainNavLinks } from "@/components/layout/MainNavLinks";

export function Header() {
  return (
    <header role="banner" className="border-b border-border">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-teal-darker focus:px-4 focus:py-2 focus:text-white"
      >
        Pasar al contenido principal
      </a>

      <div className="bg-brand-teal-darker text-white">
        <div className="mx-auto flex w-full max-w-(--container-content) items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <p>
            Provincia de Buenos Aires · {site.organismo}
          </p>
          <p className="hidden sm:block">{site.region} — Distrito {site.codigoDistrito}</p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-(--container-content) items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-md">
          <Image
            src={site.logos.escudoJefatura}
            alt={`Escudo de la ${site.nombreJefatura}`}
            width={48}
            height={48}
            className="size-11 shrink-0 rounded-full sm:size-12"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-brand-teal-darker sm:text-base sm:whitespace-normal">
              {site.nombreJefatura}
            </span>
            <span className="block truncate text-xs text-ink-muted sm:whitespace-normal">
              {site.organismo}
            </span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <MainNavLinks variant="desktop" />
        </nav>

        {/* Menú móvil accesible sin JavaScript: <details>/<summary> es un widget de
            revelado nativo, operable por teclado (Enter/Espacio) y por lectores de pantalla. */}
        <details className="group relative lg:hidden">
          <summary
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-border text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Abrir menú de navegación"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-6" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </summary>
          <nav
            aria-label="Navegación principal (móvil)"
            className="absolute right-0 z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-card border border-border bg-surface p-3 shadow-soft-hover"
          >
            <MainNavLinks variant="mobile" />
          </nav>
        </details>
      </div>
    </header>
  );
}
