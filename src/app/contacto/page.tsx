import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { MailIcon, PhoneIcon, PinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto y ubicación",
  description: `Dirección, teléfono, correo y redes sociales de la ${site.nombreJefatura}.`,
};

const redes = [
  { href: site.redes.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.redes.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.redes.youtube, label: "YouTube", Icon: YoutubeIcon },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader title="Contacto y ubicación" crumb="Contacto y ubicación" />
      <Container className="grid gap-10 py-12 lg:grid-cols-2">
        <section>
          <h2 className="text-lg font-bold text-ink">Sede de la Jefatura Distrital</h2>
          <dl className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-brand-teal-dark" />
              <div>
                <dt className="text-sm text-ink-muted">Dirección</dt>
                <dd className="font-medium text-ink">{site.direccion}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 size-5 shrink-0 text-brand-teal-dark" />
              <div>
                <dt className="text-sm text-ink-muted">Teléfono</dt>
                <dd className="font-medium text-ink">
                  <a href="tel:+542325440910" className="hover:underline">
                    {site.telefono}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="mt-0.5 size-5 shrink-0 text-brand-teal-dark" />
              <div>
                <dt className="text-sm text-ink-muted">Correo institucional</dt>
                <dd className="font-medium text-ink">
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <h2 className="mt-10 text-lg font-bold text-ink">Autoridades</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-ink-muted">Inspector Jefe Distrital:</dt>
              <dd className="font-medium text-ink">{site.inspectorJefeDistrital}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-ink-muted">Secretaria de Jefatura:</dt>
              <dd className="font-medium text-ink">{site.secretariaDeJefatura}</dd>
            </div>
          </dl>

          <h2 className="mt-10 text-lg font-bold text-ink">Redes sociales</h2>
          <ul className="mt-4 flex gap-3">
            {redes.map(({ href, label, Icon }) => (
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
        </section>

        <section>
          <h2 className="text-lg font-bold text-ink">Cómo llegar</h2>
          <p className="mt-3 max-w-md text-ink-muted">
            El botón &ldquo;Ver en Google Maps&rdquo; abre la ubicación exacta de la sede en una
            pestaña nueva.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={site.mapas.sede.href} external>
              Ver en Google Maps
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
