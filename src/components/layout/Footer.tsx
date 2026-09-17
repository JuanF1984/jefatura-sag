import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, YoutubeIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { href: site.redes.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.redes.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.redes.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.logos.escudoJefatura}
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full"
            />
            <p className="text-sm font-bold text-brand-teal-darker">{site.nombreJefatura}</p>
          </div>
          <p className="mt-3 text-sm text-ink-muted">{site.organismo}</p>
          <p className="text-sm text-ink-muted">{site.provincia}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Contacto</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 size-4 shrink-0 text-brand-teal-dark" />
              <span>{site.direccion}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="size-4 shrink-0 text-brand-teal-dark" />
              <a href="tel:+542325440910" className="hover:text-brand-teal-dark hover:underline">
                {site.telefono}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0 text-brand-teal-dark" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-teal-dark hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold text-ink">Secciones</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-teal-dark hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Seguinos</h2>
          <ul className="mt-3 flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (se abre en una pestaña nueva)`}
                  className="flex size-11 items-center justify-center rounded-full border border-border text-brand-teal-dark hover:bg-brand-teal-tint"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.abc.gob.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block"
            aria-label="Dirección General de Cultura y Educación (se abre en una pestaña nueva)"
          >
            <Image
              src={site.logos.dgcye}
              alt="Dirección General de Cultura y Educación — Gobierno de la Provincia de Buenos Aires"
              width={520}
              height={154}
              className="h-auto w-44"
            />
          </a>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center gap-2 py-6 text-center text-xs text-ink-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            &ldquo;{site.fraseInstitucional}&rdquo; — {site.fraseInstitucionalAutor}
          </p>
          <p>{site.nombreJefatura} — {site.codigoDistrito}</p>
        </Container>
      </div>
    </footer>
  );
}
