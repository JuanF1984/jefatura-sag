import type { Documento } from "@/data/types";

export function tipoDeArchivo(titulo: string): NonNullable<Documento["tipo"]> {
  const ext = titulo.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "pdf";
  if (["doc", "docx"].includes(ext)) return "doc";
  if (["xls", "xlsx"].includes(ext)) return "xls";
  return "otro";
}

export const etiquetaTipo: Record<NonNullable<Documento["tipo"]>, string> = {
  pdf: "PDF",
  doc: "Word",
  xls: "Excel",
  otro: "Documento",
};
