export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * `id` HTML estable de una institución a partir de su CUE ("cue-0609034-00").
 * Lo comparten /instituciones y /oferta-educativa para enlazarse entre sí por
 * hash, siempre por CUE y nunca por nombre.
 */
export function anclaCue(cue: string): string {
  return `cue-${cue}`;
}
