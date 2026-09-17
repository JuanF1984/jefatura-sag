import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AccessCard } from "@/components/ui/AccessCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BookIcon,
  CalendarIcon,
  CertificateIcon,
  FormIcon,
  MailIcon,
  MapIcon,
  PeopleIcon,
  PhoneIcon,
  PinIcon,
  SchoolIcon,
} from "@/components/ui/icons";
import { site } from "@/data/site";
import { accesosPrincipales, type IconKey } from "@/data/accesos";
import { historiaDelLogotipo } from "@/data/institucional";

const icons: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  school: SchoolIcon,
  people: PeopleIcon,
  calendar: CalendarIcon,
  form: FormIcon,
  book: BookIcon,
  certificate: CertificateIcon,
  map: MapIcon,
};

export default function Home() {
  return (
    <>
      {/* Portada */}
      <section className="border-b border-border bg-brand-teal-tint">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal-dark">
              {site.provincia} · {site.organismo}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-brand-teal-darker sm:text-4xl lg:text-5xl">
              {site.nombreJefatura}
            </h1>
            <div className="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2 sm:gap-y-1">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted sm:inline sm:text-lg sm:font-normal sm:normal-case sm:tracking-normal">
                  Inspector Jefe Distrital
                </span>
                <strong className="block text-base font-semibold text-ink sm:inline sm:ml-1 sm:text-lg sm:font-bold">
                  {site.inspectorJefeDistrital}
                </strong>
              </div>
              <span className="hidden text-ink-muted sm:inline" aria-hidden="true">
                ·
              </span>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted sm:inline sm:text-lg sm:font-normal sm:normal-case sm:tracking-normal">
                  Secretaria de Jefatura
                </span>
                <strong className="block text-base font-semibold text-ink sm:inline sm:ml-1 sm:text-lg sm:font-bold">
                  {site.secretariaDeJefatura}
                </strong>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/instituciones">Instituciones educativas</Button>
              <Button href="/formularios" variant="secondary">
                Formularios
              </Button>
            </div>
          </div>
          <Image
            src={site.logos.escudoJefatura}
            alt={`Escudo de la ${site.nombreJefatura}`}
            width={220}
            height={220}
            className="mx-auto size-40 shrink-0 sm:size-48 lg:size-56"
            priority
          />
        </Container>
      </section>

      {/* Accesos principales */}
      <section className="py-14">
        <Container>
          <SectionHeading eyebrow="Accesos" title="¿Qué estás buscando?" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accesosPrincipales.map((acceso) => {
              const Icon = icons[acceso.icon];
              return (
                <li key={acceso.href}>
                  <AccessCard
                    href={acceso.href}
                    title={acceso.title}
                    description={acceso.description}
                    icon={<Icon className="size-5" />}
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Institucional: historia del logotipo */}
      <section className="border-t border-border bg-surface-muted py-14">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Institucional"
            title="La historia de nuestro escudo"
            description="Cada elemento del logotipo de la Jefatura Distrital fue elegido por su valor simbólico para San Andrés de Giles."
          />
          <div className="mt-6 space-y-4 text-ink-muted">
            <p>{historiaDelLogotipo[0]}</p>
            <p>{historiaDelLogotipo[1]}</p>
          </div>
          <details className="group mt-4">
            <summary className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-brand-teal-dark hover:underline">
              Leer la historia completa
            </summary>
            <div className="mt-4 space-y-4 text-ink-muted">
              {historiaDelLogotipo.slice(2).map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
            </div>
          </details>
        </Container>
      </section>

      {/* Contacto rápido */}
      <section className="py-14">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeading eyebrow="Contacto" title="Sede de la Jefatura Distrital" />
            <ul className="mt-4 space-y-2 text-ink-muted">
              <li className="flex items-center gap-2">
                <PinIcon className="size-4 shrink-0 text-brand-teal-dark" />
                {site.direccion}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="size-4 shrink-0 text-brand-teal-dark" />
                {site.telefono}
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="size-4 shrink-0 text-brand-teal-dark" />
                {site.email}
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.mapas.sede.href} external variant="secondary">
              Ver en Google Maps
            </Button>
            <Button href="/contacto">Más datos de contacto</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
