import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import { site, siteUrl } from "@/data/site";
import { descripcionSitio } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
});

const description = descripcionSitio;

/*
 * Valores por defecto. Cada página define los suyos (título, descripción, canonical,
 * Open Graph) con `metadataPagina` de src/lib/seo.ts. El canonical NO va acá: se
 * heredaría a páginas sin canonical propio (404, guía visual) apuntando a la portada.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.nombreJefatura} — ${site.organismo}`,
    template: `%s · ${site.nombreJefatura}`,
  },
  description,
  applicationName: site.nombreJefatura,
  openGraph: {
    title: site.nombreJefatura,
    description,
    siteName: site.nombreJefatura,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.nombreJefatura,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${encodeSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
