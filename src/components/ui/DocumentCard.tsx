import type { Documento } from "@/data/types";
import { tipoDeArchivo, etiquetaTipo } from "@/lib/documentos";
import { DocumentIcon } from "@/components/ui/icons";
import { Tag } from "@/components/ui/Tag";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function DocumentCard({ documento }: { documento: Documento }) {
  const tipo = documento.tipo ?? tipoDeArchivo(documento.titulo);

  return (
    <li className="flex list-none items-start gap-3 rounded-card border border-border bg-surface p-4 shadow-soft">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-teal-tint text-brand-teal-dark">
        <DocumentIcon className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <a
          href={documento.href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words font-medium text-ink hover:text-brand-teal-dark hover:underline"
        >
          {documento.titulo}
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
        {documento.descripcion ? (
          <p className="mt-1 text-sm text-ink-muted">{documento.descripcion}</p>
        ) : null}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Tag>{etiquetaTipo[tipo]}</Tag>
          {documento.categoria ? <Tag>{documento.categoria}</Tag> : null}
          {documento.fecha ? <span className="text-xs text-ink-muted">{documento.fecha}</span> : null}
        </div>
        {documento.identificador ? (
          <p className="mt-1 break-words text-xs text-ink-muted">{documento.identificador}</p>
        ) : null}
        {documento.enlaceRelacionado ? (
          <p className="mt-2 text-xs">
            <ExternalLink href={documento.enlaceRelacionado.href} className="text-xs">
              Ver normativa relacionada: {documento.enlaceRelacionado.titulo}
            </ExternalLink>
          </p>
        ) : null}
      </div>
    </li>
  );
}
