import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  description,
  crumb,
}: {
  title: string;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="border-b border-border bg-brand-teal-tint">
      <Container className="py-10">
        <Breadcrumbs items={[{ label: crumb }]} />
        <h1 className="mt-2 text-3xl font-bold text-brand-teal-darker sm:text-4xl">{title}</h1>
        {description ? <p className="mt-3 max-w-2xl text-ink-muted">{description}</p> : null}
      </Container>
    </section>
  );
}
