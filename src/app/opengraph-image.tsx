import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/*
 * Imagen para compartir en redes (Open Graph / X), generada en el build. Por
 * convención de archivo se aplica a todas las páginas que no definen una propia
 * (las novedades con imagen usan la suya). Usa el .jpg del escudo porque el
 * generador de imágenes no admite .webp.
 */
export const alt = `${site.nombreJefatura} — ${site.organismo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const escudo = await readFile(
    join(process.cwd(), "public/assets/recuperados/escudo-jefatura-distrital-sag.jpg"),
  );
  const escudoSrc = `data:image/jpeg;base64,${escudo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#eef7f8",
          borderBottom: "24px solid #009aae",
          padding: "0 72px",
          gap: "48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 340,
            height: 340,
            borderRadius: 32,
            backgroundColor: "#ffffff",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse sólo admite <img> */}
          <img src={escudoSrc} width={300} height={269} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 660 }}>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#0a5773", textTransform: "uppercase" }}>
            {`${site.region} · Distrito ${site.codigoDistrito.toUpperCase()}`}
          </div>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, color: "#073e51" }}>
            {site.nombreJefatura}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 28, color: "#5b5b5d" }}>
            <span>{site.organismo}</span>
            <span>{site.provincia}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
